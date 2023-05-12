import { GraphQLResult } from "@aws-amplify/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
import { AsyncThunkConfig } from "..";
import { graphqlApi } from "src/utils/functions";
import { createProposal, createVotedUser, updateProposal } from "src/graphql/mutations";
import { listProposals, searchProposalSessions, searchProposals, searchVotingSessions, searchVotedUsers } from "src/graphql/queries";
import { CreateProposalMutation, CreateProposalMutationVariables, ProposalTrackType, ProposalActionVerbType, Proposal, 
    ListProposalsQuery, UpdateProposalMutationVariables, UpdateProposalMutation, ProposalSession, SearchProposalSessionsQuery, 
    SearchProposalsQuery, SearchVotingSessionsQuery, VotingSession, CreateVotedUserMutation,  SearchVotedUsersQuery} from "src/types/API";

interface IProposalSlice {
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    proposalList: Array<Proposal>,
    proposalTimeExpired: boolean,
    alreadyProposalMade: boolean,
    proposalSession: ProposalSession,
    votingSession: VotingSession,
    votingTimeExpired: boolean,
    alreadyVotingMade: boolean
}

const initialState: IProposalSlice = {
    track: ProposalTrackType.COMMUNITY,
    actionVerb: ProposalActionVerbType.CREATE,
    statement: "",
    desiredGoal: "",
    proposalList: [],
    proposalTimeExpired: false,
    alreadyProposalMade: false,
    proposalSession: {
        id: "",
        startTime: "",
        endTime: ""
    } as ProposalSession,
    votingSession: {
        id: "",
        startTime: "",
        endTime: ""
    } as VotingSession,
    votingTimeExpired: false,
    alreadyVotingMade: false
};

export const submitProposal = createAsyncThunk<void, void, AsyncThunkConfig>(
    "proposal/submitProposal", async (_, { dispatch, getState }) => {
        const { track, actionVerb, statement, desiredGoal, proposalSession } = getState().proposal
        const { email } = getState().athlete

        try {
            const response = await graphqlApi(createProposal, {
                input: {
                    email,
                    track,
                    actionVerb,
                    statement,
                    desiredGoal,
                    sessionId: proposalSession.id
                }
            } as CreateProposalMutationVariables) as GraphQLResult<CreateProposalMutation>;

            console.log('submit proposal response = ', response)
        } catch (err) {
            console.log('error = ', err)
        }
    }
)

export const getProposals = createAsyncThunk(
    "proposal/getProposals", async (_, {}) => {
        try {
            const response = await graphqlApi(listProposals) as GraphQLResult<ListProposalsQuery>;
            return response.data?.listProposals?.items
        } catch (err) {
            console.log('error = ', err)
        }
    }
)

export const getLatestProposalSession = createAsyncThunk(
    "proposal/getLatestProposalSession", async (_, {}) => {
        try {
            const response = await graphqlApi(searchProposalSessions, {
                sort: {
                    field: "updatedAt",
                    direction: "desc"
                },
                limit: 1
            }) as GraphQLResult<SearchProposalSessionsQuery>;

            return response.data?.searchProposalSessions?.items
        } catch (err) {
            console.log('error = ', err)
        }
    }
)

export const findOwnVoting = createAsyncThunk<any, void, AsyncThunkConfig>(
    "proposal/findOwnVoting", async (_, {getState}) => {
        const { votingSession } = getState().proposal
        const { email } = getState().athlete

        try {
            const response = await graphqlApi(searchVotedUsers, {
                filter: {
                    sessionId: {match: votingSession.id},
                    email: {match: email}
                }
            }) as GraphQLResult<SearchVotedUsersQuery>;

            return response.data?.searchVotedUsers?.items
        } catch (err) {
            console.log('find own proposal error = ', err)
        }
    }
)

export const findOwnProposal = createAsyncThunk<any, void, AsyncThunkConfig>(
    "proposal/findOwnProposal", async (_, {getState}) => {
        const { proposalSession } = getState().proposal
        const { email } = getState().athlete

        try {
            const response = await graphqlApi(searchProposals, {
                filter: {
                    sessionId: {match: proposalSession.id},
                    email: {match: email}
                }
            }) as GraphQLResult<SearchProposalsQuery>;

            return response.data?.searchProposals?.items
        } catch (err) {
            console.log('find own proposal error = ', err)
        }
    }
)

type VotingCount = {
    counts: Array<number>,
    proposalList: Array<Proposal>
}
export const submitVotingCount = createAsyncThunk("proposal/submitVotingCount", async (param: VotingCount) => {
        const {counts, proposalList} = param

        try {
            for (let i = 0; i < proposalList.length; i++) {
                const proposal = proposalList[i]
                const response = await graphqlApi(updateProposal, {
                    input: {
                        id: proposal.id,
                        votingCount: counts[i] + (proposal?.votingCount || 0)
                    }
                }) as GraphQLResult<UpdateProposalMutation>;
            }

            return 'success proposal update'
        } catch(err) {
            console.log('submit voting count = ', err)
        }
    }
)

export const getLatestVotingSession = createAsyncThunk(
    "proposal/getLatestVotingSession", async (_, {}) => {
        try {
            const response = await graphqlApi(searchVotingSessions, {
                sort: {
                    field: "updatedAt",
                    direction: "desc"
                },
                limit: 1
            }) as GraphQLResult<SearchVotingSessionsQuery>;

            return response.data?.searchVotingSessions?.items
        } catch (err) {
            console.log('error = ', err)
        }
    }
)

export const submitVoteduser = createAsyncThunk<any, void, AsyncThunkConfig>(
    "proposal/submitVoteduser", async (_, {getState}) => {
        const { votingSession } = getState().proposal
        const { email } = getState().athlete

        try {
            const response = await graphqlApi(createVotedUser, {
                input: {
                    sessionId: votingSession.id,
                    email
                }
            }) as GraphQLResult<CreateVotedUserMutation>;

            console.log('success submit voted user = ', response)
            // return response.data?.searchVotingSessions?.items
        } catch (err) {
            console.log('error = ', err)
        }
    }
)

const proposalSlice = createSlice({
    name: "proposal",
    initialState,
    reducers: {
        setTrack(state, action) {
            state.track = action.payload
        },
        setActionVerb(state, action) {
            state.actionVerb = action.payload
        },
        setStatement(state, action) {
            state.statement = action.payload
        },
        setDesiredGoal(state, action) {
            state.desiredGoal = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getProposals.fulfilled, (state, action) => {
            if (action.payload) {
                state.proposalList = action?.payload.map(e => e as Proposal)
            }
        })
        .addCase(submitVotingCount.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        .addCase(getLatestProposalSession.fulfilled, (state, action) => {
            if (action.payload && action.payload.length > 0) {
                const now = new Date();
                const estOffset = -5 * 60; // EST offset is UTC-5 hours
                const estTime = new Date(now.getTime() + estOffset * 60 * 1000);

                const startTime = new Date(action.payload[0]?.startTime || "")
                const endTime = new Date(action.payload[0]?.endTime || "")

                console.log(startTime, endTime, estTime)
                if (startTime < estTime && estTime < endTime) {
                    state.proposalTimeExpired = false

                    state.proposalSession.id = action.payload[0]?.id || ""
                    state.proposalSession.startTime = action.payload[0]?.startTime || ""
                    state.proposalSession.endTime = action.payload[0]?.endTime || ""
                } else {
                    state.proposalTimeExpired = true
                }
            } else {
                state.proposalTimeExpired = true
            }
        })
        .addCase(findOwnProposal.fulfilled, (state, action) => {
            if (action.payload && action.payload.length > 0 && action.payload[0]?.id) {
                state.alreadyProposalMade = true
            }
        })
        .addCase(getLatestVotingSession.fulfilled, (state, action) => {
            if (action.payload && action.payload.length > 0) {
                const now = new Date();
                const estOffset = -5 * 60; // EST offset is UTC-5 hours
                const estTime = new Date(now.getTime() + estOffset * 60 * 1000);

                const startTime = new Date(action.payload[0]?.startTime || "")
                const endTime = new Date(action.payload[0]?.endTime || "")

                if (startTime < estTime && estTime < endTime) {
                    state.votingTimeExpired = false
                    
                    state.votingSession.id = action.payload[0]?.id || ""
                    state.votingSession.startTime = action.payload[0]?.startTime || ""
                    state.votingSession.endTime = action.payload[0]?.endTime || ""
                } else {
                    state.votingTimeExpired = true
                }
            } else {
                state.votingTimeExpired = true
            }

        })
        .addCase(findOwnVoting.fulfilled, (state, action) => {
            if (action.payload && action.payload.length > 0 && action.payload[0]?.id) {
                state.alreadyVotingMade = true
            }
        })
    }
})

export const { setTrack, setActionVerb, setStatement, setDesiredGoal } = proposalSlice.actions;
export default proposalSlice.reducer;

