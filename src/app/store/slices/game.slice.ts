/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnitType } from '../../../constants';
import { getOpponentUnitSelectArray } from '../../../util';
import { RootState } from '../store-ts-util';

type MatchResultType = 'won' | 'lost';

export type MatchType = {
    pick: {
        opponent: UnitType;
        player: UnitType;
    };
    result: MatchResultType;
};

type GameSliceState = {
    score: {
        opponent: number;
        player: number;
    };
    history: MatchType[];
    opponentUnitSelectArray: UnitType[];
};

const initialState: GameSliceState = {
    score: {
        opponent: 0,
        player: 0,
    },
    history: [],
    opponentUnitSelectArray: getOpponentUnitSelectArray(),
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addMatchToHistory: (state, action: PayloadAction<MatchType>) => {
            state.history.push(action.payload);
        },
        incrementOpponent: (state) => {
            state.score.opponent += 1;
            state.score.player = Math.max(0, state.score.player - 1);
        },
        incrementPlayer: (state) => {
            state.score.player += 1;
            state.score.opponent = Math.max(0, state.score.opponent - 1);
        },
        decrementBoth: (state) => {
            state.score.opponent = Math.max(0, state.score.opponent - 1);
            state.score.player = Math.max(0, state.score.player - 1);
        },
    },
});

export const {
    addMatchToHistory,
    incrementOpponent,
    incrementPlayer,
    decrementBoth,
} = gameSlice.actions;

export const selectScore = (state: RootState) => state.game.score;
export const selectHistory = (state: RootState) => state.game.history;
export const selectCurrentMatch = (state: RootState) =>
    state.game.history[state.game.history.length - 1];

export const selectopponentUnitSelectArray = (state: RootState) =>
    state.game.opponentUnitSelectArray;

export default gameSlice.reducer;
