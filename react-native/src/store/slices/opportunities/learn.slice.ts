import { GraphQLResult } from '@aws-amplify/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  updateLearn as UPDATE_LEARN,
  increaseTotalAskedQuestionsCount as INCREASE_TOTAL_ASKED_QUESTIONS_COUNT,
  updateLearnStatus,
} from 'src/graphql/mutations';
import {
  customCreateLearnStatus as CUSTOM_CREATE_LEARN_STATUS_MUTATION,
  customDeleteLearnStatus as CUSTOM_DELETE_LEARN_STATUS_MUTATION,
  customUpdateLearnStatus as CUSTOM_UPDATE_LEARN_STATUS_MUTATION,
} from 'src/graphql/customMutations';
import {
  searchCustomLearnItemIds as SEARCH_CUSTOM_LEARN_ITEM_IDS_QUERY,
  searchCustomLearnStatuses as SEARCH_CUSTOM_LEARN_STATUSES_QUERY,
} from 'src/graphql/customQueries';
import { listLearnExercises } from 'src/graphql/queries';
import {
  AnswerItem,
  AnswerItemInput,
  CreateLearnStatusMutation,
  CreateLearnStatusMutationVariables,
  DeleteLearnStatusMutation,
  DeleteLearnStatusMutationVariables,
  Learn,
  LearnExercise,
  LearnStatus,
  QuestionItem,
  SearchableLearnSortableFields,
  searchCustomLearnItemIdsQuery,
  searchCustomLearnItemIdsQueryVariables,
  SearchLearnStatusesQuery,
  SearchLearnStatusesQueryVariables,
  UpdateLearnMutation,
  UpdateLearnMutationVariables,
  UpdateLearnStatusMutation,
  UpdateLearnStatusMutationVariables,
  ListLearnExercisesQuery
} from 'src/types/API';
import { graphqlApi } from 'src/utils/functions';
import { LearnKind } from 'src/types/common';
import { AsyncThunkConfig, createSortConfig, createAscSortConfig } from '../..';
import axios from 'axios';

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
  },
});

interface learnItemId {
  id: string;
  kind: LearnKind
}

interface ILearnSlice {
  learnItemIdsOrderedByUpdatedAt: Array<learnItemId>;
  learnExerciseItems: Array<LearnExercise>;
  activeLearnItemId: string;
  activeDepositIndex: number;
  activeQaItemIndex: number;
  showCongratulationsMessage: boolean;
  learnByLearnItemId: {
    [id: string]: Learn;
  };
  learnStatusByLearnItemId: {
    [id: string]: LearnStatus;
  };
  justSubmitQuestion?: boolean;
  justCreateQuestion?: boolean;
}

const initialState = {
  learnItemIdsOrderedByUpdatedAt: [],
  learnExerciseItems: [],
  learnByLearnItemId: {},
  showCongratulationsMessage: false,
  activeLearnItemId: '',
  activeDepositIndex: -1,
  activeQaItemIndex: 0,
  learnStatusByLearnItemId: {},
  justSubmitQuestion: false,
  justCreateQuestion: false,
} as ILearnSlice;

// modified to sort by title
export const loadLearnItemIdsOrderedByUpdatedAt = createAsyncThunk(
  'opportunities/learn/loadLearnItemIdsOrderedByUpdatedAt',
  async () => {
    try {
      const response = (await graphqlApi(
        SEARCH_CUSTOM_LEARN_ITEM_IDS_QUERY,
        createAscSortConfig(
          SearchableLearnSortableFields.title,
        ) as searchCustomLearnItemIdsQueryVariables,
      )) as GraphQLResult<searchCustomLearnItemIdsQuery>;

      return response.data?.searchLearns?.items as Learn[];
    } catch (error) {
      console.log('Error attempting to load learns:', error);
    }
  },
);

export const loadLearnExerciseItems = createAsyncThunk(
  'opportunities/learn/loadLearnExerciseItems',
  async () => {
    try {
      const response = (await graphqlApi(
        listLearnExercises
      )) as GraphQLResult<ListLearnExercisesQuery>;

      return response.data?.listLearnExercises?.items as LearnExercise[];
    } catch (error) {
      console.log('Error attempting to load learn exercised:', error);
    }
  },
);

export const loadLearnStatuses = createAsyncThunk<
  LearnStatus[] | undefined,
  void,
  AsyncThunkConfig
>('opportunities/learn/loadLearnStatuses', async (_, { getState }) => {
  try {
    const athleteId = getState().user.user?.id;
    if (!athleteId) {
      throw new Error("User doesn't exist.");
    }

    const response = (await graphqlApi(SEARCH_CUSTOM_LEARN_STATUSES_QUERY, {
      filter: { athleteId: { eq: athleteId } },
    } as SearchLearnStatusesQueryVariables)) as GraphQLResult<SearchLearnStatusesQuery>;

    return response.data?.searchLearnStatuses?.items as LearnStatus[];
  } catch (error) {
    console.log('Error attempting to load learnStatuses:', error);
  }
});

interface ICreateLearnStatus {
  athleteId: string;
  learnItemId: string;
}
export const createLearnStatus = createAsyncThunk<
  LearnStatus | undefined,
  ICreateLearnStatus,
  AsyncThunkConfig
>(
  'opportunities/learn/createLearnStatus',
  async ({ athleteId, learnItemId }, { getState }) => {
    try {
      const response = (await graphqlApi(CUSTOM_CREATE_LEARN_STATUS_MUTATION, {
        input: {
          athleteId,
          learnItemId,
          passedDepositsCount: 0,
        },
      } as CreateLearnStatusMutationVariables)) as GraphQLResult<CreateLearnStatusMutation>;

      return response.data?.createLearnStatus as LearnStatus;
    } catch (err) {
      console.log('create learn status error: ', err);
    }
  },
);

interface IUpdateLearnStatusById {
  id: string;
  passedDepositsCount: number;
}
export const updateLearnStatusById = createAsyncThunk(
  'opportunities/learn/updateLearnStatusById',
  async (props: IUpdateLearnStatusById) => {
    const { id, passedDepositsCount } = props;

    try {
      const response = (await graphqlApi(CUSTOM_UPDATE_LEARN_STATUS_MUTATION, {
        input: {
          id,
          passedDepositsCount,
        },
      } as UpdateLearnStatusMutationVariables)) as GraphQLResult<UpdateLearnStatusMutation>;

      return response.data?.updateLearnStatus;
    } catch (err) {
      console.log('update learn status by id error: ', err);
    }
  },
);

interface IUpdateWagerInLearnStatusById {
  id: string;
  wagered: number;
}
export const updateWagerInLearnStatusById = createAsyncThunk(
  'opportunities/learn/updateWagerInLearnStatusById',
  async (props: IUpdateWagerInLearnStatusById) => {
    const { id, wagered } = props;

    try {
      const response = (await graphqlApi(updateLearnStatus, {
        input: {
          id,
          wagered,
        },
      } as UpdateLearnStatusMutationVariables)) as GraphQLResult<UpdateLearnStatusMutation>;

      return response.data?.updateLearnStatus;
    } catch (err) {
      console.log('update wager in learn status by id error: ', err);
    }
  },
);

interface IUpdateIsWageredInLearnStatusById {
  id: string;
  isWagered: boolean;
}
export const updateIsWageredInLearnStatusById = createAsyncThunk(
  'opportunities/learn/updateIsWageredInLearnStatusById',
  async (props: IUpdateIsWageredInLearnStatusById) => {
    const { id, isWagered } = props;

    try {
      const response = (await graphqlApi(updateLearnStatus, {
        input: {
          id,
          isWagered,
        },
      } as UpdateLearnStatusMutationVariables)) as GraphQLResult<UpdateLearnStatusMutation>;

      return response.data?.updateLearnStatus;
    } catch (err) {
      console.log('update is wagered in learn status by id error: ', err);
    }
  },
);

export const deleteAllLearnStatuses = createAsyncThunk<
  void,
  void,
  AsyncThunkConfig
>('opportunities/learn/deleteAllLearnStatuses', async (_, { getState }) => {
  const learnStatusByLearnItemId = getState().learn.learnStatusByLearnItemId;
  const learnStatusIds = Object.keys(learnStatusByLearnItemId).map(
    learnItemId => learnStatusByLearnItemId[learnItemId].id,
  );

  for await (const learnStatusId of learnStatusIds) {
    try {
      (await graphqlApi(CUSTOM_DELETE_LEARN_STATUS_MUTATION, {
        input: {
          id: learnStatusId,
        },
      } as DeleteLearnStatusMutationVariables)) as GraphQLResult<DeleteLearnStatusMutation>;
    } catch (e) {
      console.log('Error: deleteAllLearnStatuses', e);
    }
  }
});

const createChatCompletion = async (messages, options) => {
  try {
    const response = await openai.post("/chat/completions", {
      model: options?.model || "gpt-3.5-turbo",
      messages,
      ...options,
    });

    return response.data.choices;
  } catch (error) {
    console.error("Error creating chat completion:", error);
  }
}

export const submitQuestion = createAsyncThunk<
  Learn | undefined,
  { question: string },
  AsyncThunkConfig
>('opportunities/learn/submitQuestion', async ({ question }, { getState }) => {
  let aiAnswer: string = ''
  const messages = [
    { role: "user", content: question + ' give me long anser.' },
  ];

  const options = {
    temperature: 0.8,
    max_tokens: 500,
  };

  const choices = await createChatCompletion(messages, options);
  aiAnswer =  choices[0].message.content

  const user = getState().user.user;
  const userId = user?.id || '';
  const userName = ((user?.firstName as string) + user?.lastName) as string;
  const learn = getState().learn;
  const learnItemId = learn.activeLearnItemId;
  const qaItems = learn.learnByLearnItemId[learnItemId].qaItems || [];

  const sampleAnswer: AnswerItemInput = {
    answer: aiAnswer,
    authorName: 'LEARN Bot',
    authorTitle: 'Life LEARNER',
  } as AnswerItemInput;

  const updatedQaItems = [
    {
      questionItem: {
        question: question,
        authorId: userId,
        authorName: userName,
        createdAt: new Date().toISOString(),
      } as QuestionItem,
      answerItems: [sampleAnswer] as Array<AnswerItemInput>,
    },
  ].concat(qaItems);

  try {
    const result = (await graphqlApi(UPDATE_LEARN, {
      input: {
        id: learnItemId,
        qaItems: updatedQaItems,
      },
    } as UpdateLearnMutationVariables)) as GraphQLResult<UpdateLearnMutation>;

    // appUsageLog
    await graphqlApi(INCREASE_TOTAL_ASKED_QUESTIONS_COUNT);

    return result.data?.updateLearn as Learn;
  } catch (e) {
    console.log('🚀 -> file: learn.slice.ts -> line 167 -> e', e);
  }
});

const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    setActiveLearnItemId(state, action) {
      state.activeLearnItemId = action.payload;
    },
    setActiveDepositIndex(state, action) {
      state.activeDepositIndex = action.payload;
    },
    setActiveQaItemIndex(state, action) {
      state.activeQaItemIndex = action.payload;
    },
    updateShowCongratulationsMessage(state, action: PayloadAction<boolean>) {
      state.showCongratulationsMessage = action.payload;
    },
    setJustSubmitQuestion(state, action) {
      state.justSubmitQuestion = action.payload;
    },
    setJustCreateQuestion(state, action) {
      state.justCreateQuestion = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        loadLearnItemIdsOrderedByUpdatedAt.fulfilled,
        (state, action) => {
          const temp = action.payload?.map(o => {
            state.learnByLearnItemId[o.id] = o;
            return { id: o.id, kind: LearnKind.LEARN };
          }) || [];
          state.learnItemIdsOrderedByUpdatedAt = [...temp, ...state.learnItemIdsOrderedByUpdatedAt]
        },
      )
      .addCase(
        loadLearnItemIdsOrderedByUpdatedAt.rejected,
        (_state, { error }) => {
          console.error(error.name, error.message, error.stack);
        },
      )
      .addCase(
        loadLearnExerciseItems.fulfilled, (state, action) => {
          console.log('set learnExerciseItems = ', action.payload)
          state.learnExerciseItems = action.payload || []
          const temp = action.payload?.map(o => { return { id: o.id, kind: LearnKind.EXERCISE } }) || []
          state.learnItemIdsOrderedByUpdatedAt = [...temp, ...state.learnItemIdsOrderedByUpdatedAt]
        }
      )
      .addCase(loadLearnExerciseItems.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(loadLearnStatuses.fulfilled, (state, action) => {
        const learnStatuses = action.payload || [];
        console.log(
          '🚀 -> file: learn.slice.ts -> line 217 -> .addCase -> learnStatuses',
          JSON.stringify(learnStatuses),
        );

        learnStatuses.map(o => {
          state.learnStatusByLearnItemId[o.learnItemId] = o;
        });
      })
      .addCase(loadLearnStatuses.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(updateWagerInLearnStatusById.fulfilled, (state, action) => {
        const learnStatus = action.payload;
        if (learnStatus?.learnItemId)
          state.learnStatusByLearnItemId[learnStatus?.learnItemId].wagered =
            learnStatus?.wagered;
      })
      .addCase(deleteAllLearnStatuses.fulfilled, state => {
        state.learnStatusByLearnItemId = {};
      })
      .addCase(deleteAllLearnStatuses.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(createLearnStatus.fulfilled, (state, action) => {
        const newLearnStatus = action.payload;

        if (newLearnStatus) {
          state.activeLearnItemId = newLearnStatus.learnItemId;
          state.learnStatusByLearnItemId[newLearnStatus.learnItemId] =
            newLearnStatus as LearnStatus;
        }
      })
      .addCase(createLearnStatus.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(updateLearnStatusById.fulfilled, (state, action) => {
        const updatedLearnStatus = action.payload;

        if (updatedLearnStatus) {
          state.activeLearnItemId = updatedLearnStatus.learnItemId;
          state.learnStatusByLearnItemId[
            updatedLearnStatus.learnItemId
          ].passedDepositsCount = updatedLearnStatus.passedDepositsCount;
        }
      })
      .addCase(updateLearnStatusById.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(updateIsWageredInLearnStatusById.fulfilled, (state, action) => {
        const learnStatus = action.payload;

        if (learnStatus?.learnItemId)
          state.learnStatusByLearnItemId[learnStatus?.learnItemId].isWagered =
            learnStatus.isWagered;
      })
      .addCase(
        submitQuestion.fulfilled,
        (state, action: PayloadAction<Learn | undefined>) => {
          const updatedLearn = action.payload;
          if (updatedLearn) {
            state.learnByLearnItemId[updatedLearn.id] = updatedLearn;
            state.justSubmitQuestion = false;
            state.justCreateQuestion = true;
          }
        },
      )
      .addCase(submitQuestion.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      });
  },
});

export const {
  setActiveLearnItemId,
  setActiveDepositIndex,
  setActiveQaItemIndex,
  updateShowCongratulationsMessage,
  setJustSubmitQuestion,
  setJustCreateQuestion,
} = learnSlice.actions;

export default learnSlice.reducer;
