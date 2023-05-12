import {GraphQLResult} from '@aws-amplify/api';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Exercise} from 'src/types/common';
import {AsyncThunkConfig} from '..';
import {boundObject, graphqlApi} from 'src/utils/functions';
import {listExerciseLists} from 'src/graphql/queries';
import {
  CreateExerciseListMutation,
  CreateExerciseListMutationVariables,
  ListExerciseListsQuery,
  UpdateExerciseListMutation,
  UpdateExerciseListMutationVariables,
} from 'src/types/API';
import {updateExerciseList, createExerciseList} from 'src/graphql/mutations';

interface IExerciseList {
  exerciseList: Exercise[];
}

const initialState: IExerciseList = {
  exerciseList: [],
};

export const getExerciseList = createAsyncThunk<void, void, AsyncThunkConfig>(
  'exerciseList/getExerciseList',
  async (_, {dispatch}) => {
    try {
      const response = (await graphqlApi(
        listExerciseLists,
      )) as GraphQLResult<ListExerciseListsQuery>;
      let exerciseList: Exercise[] = [];
      if (
        response.data?.listExerciseLists?.items &&
        response.data?.listExerciseLists?.items.length > 0
      ) {
        exerciseList = response.data?.listExerciseLists?.items.map(e => {
          return {
            id: e?.id,
            studentEmail: e?.studentEmail,
            exerciseId: e?.exerciseId,
            reward: e?.exercise?.reward,
            approveDecline: e?.approveDecline,
            isChecked: e?.isChecked,
            isShowed: e?.isShowed,
          } as Exercise;
        });
      }

      dispatch(getList(exerciseList));
    } catch (error) {
      console.log('Can not get exercise list:', error);
    }
  },
);

interface IUpdateShowState {
  id: string;
  isShowed: boolean;
}
export const updateShowState = createAsyncThunk(
  'exerciseList/updateShowState',
  async (props: IUpdateShowState) => {
    const {id, isShowed} = props;

    try {
      const response = (await graphqlApi(updateExerciseList, {
        input: {
          id,
          isShowed,
        },
      } as UpdateExerciseListMutationVariables)) as GraphQLResult<UpdateExerciseListMutation>;

      return response.data?.updateExerciseList;
    } catch (err) {
      console.log('update show status error: ', err);
    }
  },
);

interface IUpdateSubmitState {
  id: string;
  isSubmitted: boolean;
}
export const updateSubmitState = createAsyncThunk(
  'exerciseList/updateShowState',
  async (props: IUpdateSubmitState) => {
    const {id, isSubmitted} = props;

    try {
      const response = (await graphqlApi(updateExerciseList, {
        input: {
          id,
          isSubmitted,
        },
      } as UpdateExerciseListMutationVariables)) as GraphQLResult<UpdateExerciseListMutation>;

      return response.data?.updateExerciseList;
    } catch (err) {
      console.log('update submit state error: ', err);
    }
  },
);

interface ISubmitExercise {
  studentEmail: string,
  answer: string,
  exerciseId: string
}
export const submitExercise = createAsyncThunk(
  'exerciseList/submitExercise',
  async (props: ISubmitExercise) => {
    const {studentEmail, answer, exerciseId} = props;

    try {
      const response = (await graphqlApi(createExerciseList, {
        input: {
          studentEmail,
          answer,
          exerciseId
        },
      } as CreateExerciseListMutationVariables)) as GraphQLResult<CreateExerciseListMutation>;

      return response.data?.createExerciseList;
    } catch (err) {
      console.log('submit exercise error: ', err);
    }
  },
);

const exerciseListSlice = createSlice({
  name: 'exerciseList',
  initialState,
  reducers: {
    getList(state, action) {
      state.exerciseList = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(updateShowState.fulfilled, (state, action) => {
        const exercise = action.payload;
        if (exercise?.id) {
          state.exerciseList = state.exerciseList.map(e => {
            let temp = e;
            if (temp.id === exercise.id) {
              temp.isShowed = exercise.isShowed || true;
            }
            return temp as Exercise;
          });
        }
      })
      .addCase(updateShowState.rejected, (_state, {error}) => {
        console.log(error.name, error.message);
      })
      .addCase(submitExercise.fulfilled, (state, action) => {
        state.exerciseList.push({
          id: action.payload?.id,
          studentEmail: action.payload?.studentEmail,
          exerciseId: action.payload?.exerciseId,
          approveDecline: action.payload?.approveDecline,
          reward: action.payload?.exercise?.reward,
          isChecked: action.payload?.isChecked,
          isShowed: action.payload?.isShowed,
        } as Exercise)
      })
      .addCase(submitExercise.rejected, (_state, {error}) => {
        console.log(error.name, error.message)
      })
  },
});

export const {getList} = exerciseListSlice.actions;

export default exerciseListSlice.reducer;
