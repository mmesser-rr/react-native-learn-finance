import { GraphQLResult } from "@aws-amplify/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  updateRSVPedEventsCount as UPDATE_RSVPED_EVENTS_COUNT
} from 'src/graphql/mutations';
import {
  customCreateEventStatus as CUSTOM_CREATE_EVENT_STATUS_MUTATION,
  customDeleteEventStatus as CUSTOM_DELETE_EVENT_STATUS_MUTATION,
  customUpdateEventStatus as CUSTOM_UPDATE_EVENT_STATUS_MUTATION,
} from 'src/graphql/customMutations';
import {
  searchEvents as SEARCH_EVENTS,
  searchEventStatuses as SEARCH_EVENT_STATUSES
} from "src/graphql/queries";
import { ICreateEventStatus, IUpdateEventStatusById } from "src/models/actions/event";
import { CreateEventStatusMutation, CreateEventStatusMutationVariables, DeleteEventStatusMutation, DeleteEventStatusMutationVariables, Event, EventStatus, SearchableEventSortableFields, SearchEventsQuery, SearchEventsQueryVariables, SearchEventStatusesQuery, SearchEventStatusesQueryVariables, UpdateEventStatusMutation, UpdateEventStatusMutationVariables } from "src/types/API";
import { graphqlApi } from "src/utils/functions";
import { AsyncThunkConfig, createSortConfig } from "../..";

interface IEventSlice {
  events: Array<Event>;
  activeEventItemId: string;
  eventStatusByEventItemId: {
    [id: string]: EventStatus;
  };
}

const initialState = {
  events: [],
  activeEventItemId: "",
  eventStatusByEventItemId: {}
} as IEventSlice;

export const loadEvents = createAsyncThunk<Array<Event> | undefined, void, AsyncThunkConfig>(
  "opportunities/event/loadEvents",
  async () => {
    try {
      const response = await graphqlApi(
        SEARCH_EVENTS,
        createSortConfig(SearchableEventSortableFields.updatedAt) as SearchEventsQueryVariables
      ) as GraphQLResult<SearchEventsQuery>;
      return response.data?.searchEvents?.items as Event[];
    } catch (error) {
      console.log('Error attempting to load events:', error);
    }
  }
);

export const loadEventStatuses = createAsyncThunk<Array<EventStatus> | undefined, void, AsyncThunkConfig>(
  "opportunities/event/loadEventStatuses",
  async (_, { getState }) => {
    try {
      const athleteId = getState().user.user?.id;
      if (!athleteId) {
        throw new Error("User doesn't exist.");
      }

      const response = await graphqlApi(
        SEARCH_EVENT_STATUSES, {
          filter: { athleteId: { eq: athleteId } }
        } as SearchEventStatusesQueryVariables
      ) as GraphQLResult<SearchEventStatusesQuery>;
      return response.data?.searchEventStatuses?.items as EventStatus[];
    } catch (error) {
      console.log('Error attempting to load events:', error);
    }
  }
);

export const deleteAllEventStatuses = createAsyncThunk<void, void, AsyncThunkConfig>(
  'opportunities/event/deleteAllEventStatuses',
  async (_, { getState }) => {
    const eventStatusByEventItemId = getState().event.eventStatusByEventItemId;
    const eventStatusIds = Object.keys(eventStatusByEventItemId).map(eventItemId => eventStatusByEventItemId[eventItemId].id);

    for await (const eventStatusId of eventStatusIds) {
      try {
        await graphqlApi(
          CUSTOM_DELETE_EVENT_STATUS_MUTATION, {
            input: {
              id: eventStatusId
            }
          } as DeleteEventStatusMutationVariables
        ) as GraphQLResult<DeleteEventStatusMutation>;
      }
      catch (e) {
        console.log("🚀 -> file: event.slice.ts -> line 82 -> e", e);
      }
    }
  }
);

export const createEventStatus = createAsyncThunk(
  'opportunities/event/createEventStatus',
  async (props: ICreateEventStatus) => {
    const { athleteId, eventItemId } = props;

    try {
      const response = await graphqlApi(
        CUSTOM_CREATE_EVENT_STATUS_MUTATION, {
          input: {
            athleteId,
            eventItemId,
            registered: false
          }
        } as CreateEventStatusMutationVariables
      ) as GraphQLResult<CreateEventStatusMutation>;

      return response.data?.createEventStatus;
    } catch(err) {
      console.log('craete event status error: ', err)
    }
  }
);

export const updateEventStatusById = createAsyncThunk(
  "opportunities/event/updateEventStatusById",
  async (props: IUpdateEventStatusById) => {
    const { id, registered } = props;

    try {
      const response = await graphqlApi(
        CUSTOM_UPDATE_EVENT_STATUS_MUTATION, {
          input: {
            id,
            registered
          }
        } as UpdateEventStatusMutationVariables
      ) as GraphQLResult<UpdateEventStatusMutation>;

      // appUsageLog
      await graphqlApi(UPDATE_RSVPED_EVENTS_COUNT, { increase: registered });

      return response.data?.updateEventStatus as EventStatus;
    } catch (error) {
      console.log('Error attempting to update event:', error);
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setActiveEventItemId(state, action: PayloadAction<string>) {
      state.activeEventItemId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEvents.fulfilled, (state, action) => {
        state.events = action.payload || [];
      })
      .addCase(loadEvents.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(loadEventStatuses.fulfilled, (state, action) => {
        const eventStatuses = action.payload || [];

        eventStatuses.map(o => {
          state.eventStatusByEventItemId[o.eventItemId] = o;
        });
      })
      .addCase(loadEventStatuses.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(deleteAllEventStatuses.fulfilled, (state) => {
        state.eventStatusByEventItemId = {};
      })
      .addCase(deleteAllEventStatuses.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(createEventStatus.fulfilled, (state, action) => {
        const newEventStatus = action.payload;

        if (newEventStatus) {
          state.activeEventItemId = newEventStatus.eventItemId;
          state.eventStatusByEventItemId[newEventStatus.eventItemId] = newEventStatus as EventStatus;
        }
      })
      .addCase(createEventStatus.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(updateEventStatusById.fulfilled, (state, action) => {
        const newEventStatus = action.payload;

        if (newEventStatus) {
          state.activeEventItemId = newEventStatus.eventItemId;
          state.eventStatusByEventItemId[newEventStatus.eventItemId] = newEventStatus as EventStatus;
        }
      })
      .addCase(updateEventStatusById.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      });
  }
});

export const { setActiveEventItemId } = eventSlice.actions;

export default eventSlice.reducer;