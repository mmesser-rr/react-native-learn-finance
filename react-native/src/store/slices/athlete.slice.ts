import { GraphQLResult } from "@aws-amplify/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AthleteState } from "src/models/slices/athlete";
import { STORAGE_TOKEN, STORAGE_EMAIL_KEY } from "src/config/data";
import { AsyncThunkConfig } from "..";
import { boundObject, graphqlApi } from "src/utils/functions";
import { listAthletes } from "src/graphql/queries";
import { ListAthletesQueryVariables, ListAthletesQuery} from "src/types/API";
import { AthletesWealth } from "src/types/common";

const initialState: AthleteState = {
    athleteList: [],
    email: ''
};

// put own information to first element and sort
const sortAthletes = (athletes: AthletesWealth[], email: string): AthletesWealth[] => {
    athletes = athletes.sort((a, b) => {
        if (a.wealthBalance <= b.wealthBalance) return 1;
        return -1;
    })
    athletes = athletes.map((e, i) => {
        e.index = i + 1;
        return e;
    })
    const found: AthletesWealth = athletes.find(e => e.email.toLowerCase() === email.toLowerCase()) as AthletesWealth;
    const index: number = athletes.findIndex(e => e.email.toLowerCase() === email.toLocaleLowerCase());
    athletes.splice(index, 1);

    return [found, ...athletes]
}

export const loadAthletesList = createAsyncThunk<void, void, AsyncThunkConfig>(
    "athlete/loadAthletesList",
    async (_, {dispatch, getState}) => {
        let email = getState().athlete.email || ""
        if (!email) {
            const email = await AsyncStorage.getItem(STORAGE_EMAIL_KEY);
            dispatch(setEmail(email));
        }

        try {
            const response = await graphqlApi(listAthletes) as GraphQLResult<ListAthletesQuery>;
    
            console.log('athelete list response = ', response)

            let athleteList : AthletesWealth[] = []
            if (response.data?.listAthletes?.items && response.data?.listAthletes?.items.length > 0) {
                athleteList = response.data?.listAthletes?.items.map(e => {
                    return {id: e?.id, email: e?.email, wealthBalance: e?.activity?.wealthBalance, up: 0} as AthletesWealth
                })
            }

            console.log('before sort athlet list = ', athleteList)
            dispatch(getAthlete(sortAthletes(athleteList, email ? email : '' )));
        } catch (error) {
            console.log('Can not get athelte list:', error);
        }
    }
);

const athleteSlice = createSlice({
    name: "athlete",
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        getAthlete(state, action) {
            console.log('after sort athlet list = ', action.payload)
            state.athleteList = action.payload;
        },
        updateAthleteList(state, action) {
            // let found = state.athleteList.find((e: AthletesWealth) => e.id === action.payload.id)
            let athlets =  state.athleteList.reduce((prev: AthletesWealth[], current: AthletesWealth) => {
                let temp: AthletesWealth = current
                if (temp.id === action.payload.id) {
                    if (Number(temp.wealthBalance) < Number(action.payload.wealthBalance)) {
                        temp.up = 1
                    } else if (Number(temp.wealthBalance) == Number(action.payload.wealthBalance)) {
                        
                    } else {
                        temp.up = -1
                    }
                    temp.wealthBalance = action.payload.wealthBalance
                }
                return [...prev, temp]
            }, [] as AthletesWealth[])
            state.athleteList = sortAthletes(athlets, state.email)
        }
    }
});

export const { setEmail, getAthlete, updateAthleteList } = athleteSlice.actions;

export default athleteSlice.reducer;