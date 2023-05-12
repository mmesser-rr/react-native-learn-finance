import { GraphQLResult } from "@aws-amplify/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  searchRewards as SEARCH_REWARDS,
  searchRewardStatuses as SEARCH_REWARD_STATUSES
} from "src/graphql/queries";
import {
  customCreateRewardStatus as CUSTOM_CREATE_REWARD_STATUS_MUTATION,
  customDeleteRewardStatus as CUSTOM_DELETE_REWARD_STATUS_MUTATION,
  customUpdateRewardStatus as CUSTOM_UPDATE_REWARD_STATUS_MUTATION,
} from 'src/graphql/customMutations';
import { ICreateRewardStatus, IUpdateRewardStatusById } from "src/models/actions/reward";
import { CreateRewardStatusMutation, CreateRewardStatusMutationVariables, DeleteRewardStatusMutation, DeleteRewardStatusMutationVariables, Reward, RewardStatus, SearchableRewardSortableFields, SearchRewardsQuery, SearchRewardsQueryVariables, SearchRewardStatusesQuery, SearchRewardStatusesQueryVariables, UpdateRewardStatusMutation, UpdateRewardStatusMutationVariables } from "src/types/API";
import { graphqlApi } from "src/utils/functions";
import { AsyncThunkConfig, createSortConfig } from "../..";

interface IRewardSlice {
  rewards: Array<Reward>;
  activeRewardItemId: string;
  rewardStatusByRewardItemId: {
    [id: string]: RewardStatus;
  };
}

const initialState = {
  rewards: [],
  activeRewardItemId: "",
  rewardStatusByRewardItemId: {}
} as IRewardSlice;

export const loadRewards = createAsyncThunk(
  "opportunities/reward/loadRewards",
  async () => {
    try {
      const response = await graphqlApi(
        SEARCH_REWARDS,
        createSortConfig(SearchableRewardSortableFields.updatedAt) as SearchRewardsQueryVariables
      ) as GraphQLResult<SearchRewardsQuery>;
      return response.data?.searchRewards?.items as Reward[];
    } catch (error) {
      console.log('Error attempting to load rewards:', error);
    }
  }
);

export const loadRewardStatuses = createAsyncThunk<RewardStatus[] | undefined, void, AsyncThunkConfig>(
  "opportunities/reward/loadRewardStatuses",
  async (_, { getState }) => {
    try {
      const athleteId = getState().user.user?.id;
      if (!athleteId) {
        throw new Error("User doesn't exist.");
      }

      const response = await graphqlApi(
        SEARCH_REWARD_STATUSES, {
          filter: { athleteId: { eq: athleteId } }
        } as SearchRewardStatusesQueryVariables
      ) as GraphQLResult<SearchRewardStatusesQuery>;
      return response.data?.searchRewardStatuses?.items as RewardStatus[];
    } catch (error) {
      console.log('Error attempting to load rewards:', error);
    }
  }
);

export const deleteAllRewardStatuses = createAsyncThunk<void, void, AsyncThunkConfig>(
  'opportunities/reward/deleteAllRewardStatuses',
  async (_, { getState }) => {
    const rewardStatusByRewardItemId = getState().reward.rewardStatusByRewardItemId;
    const rewardStatusIds = Object.keys(rewardStatusByRewardItemId).map(rewardItemId => rewardStatusByRewardItemId[rewardItemId].id);

    for await (const rewardStatusId of rewardStatusIds) {
      try {
        await graphqlApi(
          CUSTOM_DELETE_REWARD_STATUS_MUTATION, {
            input: {
              id: rewardStatusId
            }
          } as DeleteRewardStatusMutationVariables
        ) as GraphQLResult<DeleteRewardStatusMutation>;
      }
      catch (e) {
        console.log("🚀 -> file: reward.slice.ts -> line 82 -> e", e);
      }
    }
  }
);

export const createRewardStatus = createAsyncThunk(
  'opportunities/reward/createRewardStatus',
  async (props: ICreateRewardStatus) => {
    const { athleteId, rewardItemId } = props;

    try {
      const response = await graphqlApi(
        CUSTOM_CREATE_REWARD_STATUS_MUTATION, {
          input: {
            athleteId,
            rewardItemId,
            redeemed: false
          }
        } as CreateRewardStatusMutationVariables
      ) as GraphQLResult<CreateRewardStatusMutation>;
  
      return response.data?.createRewardStatus;
    } catch(err) {
      console.log('create reward status error: ', err)
    }
  }
);


export const updateRewardStatusById = createAsyncThunk(
  "opportunities/reward/updateRewardStatusById",
  async (props: IUpdateRewardStatusById) => {
    const { id, redeemed } = props;

    try {
      const response = await graphqlApi(
        CUSTOM_UPDATE_REWARD_STATUS_MUTATION, {
          input: {
            id,
            redeemed
          }
        } as UpdateRewardStatusMutationVariables
      ) as GraphQLResult<UpdateRewardStatusMutation>;

      return response.data?.updateRewardStatus as RewardStatus;
    } catch (error) {
      console.log('Error attempting to update reward:', error);
    }
  }
);

const rewardSlice = createSlice({
  name: "reward",
  initialState,
  reducers: {
    setActiveRewardItemId(state, action) {
      state.activeRewardItemId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRewards.fulfilled, (state, action) => {
        state.rewards = action.payload || [];
      })
      .addCase(loadRewards.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(loadRewardStatuses.fulfilled, (state, action) => {
        const rewardStatuses = action.payload || [];

        rewardStatuses.map(o => {
          state.rewardStatusByRewardItemId[o.rewardItemId] = o;
        });
      })
      .addCase(loadRewardStatuses.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(deleteAllRewardStatuses.fulfilled, (state) => {
        state.rewardStatusByRewardItemId = {};
      })
      .addCase(deleteAllRewardStatuses.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(createRewardStatus.fulfilled, (state, action) => {
        const newRewardStatus = action.payload;

        if (newRewardStatus) {
          state.activeRewardItemId = newRewardStatus.rewardItemId;
          state.rewardStatusByRewardItemId[newRewardStatus.rewardItemId] = newRewardStatus as RewardStatus;
        }
      })
      .addCase(createRewardStatus.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(updateRewardStatusById.fulfilled, (state, action) => {
        const updatedLearnStatus = action.payload;

        if (updatedLearnStatus) {
          state.activeRewardItemId = updatedLearnStatus.rewardItemId;
          state.rewardStatusByRewardItemId[updatedLearnStatus.rewardItemId] = updatedLearnStatus as RewardStatus;
        }
      })
      .addCase(updateRewardStatusById.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      });
  }
});

export const { setActiveRewardItemId } = rewardSlice.actions;

export default rewardSlice.reducer;