/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnitType } from '../../../constants';
import { getOpponentUnitSelectArray } from '../../../util';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store-ts-util';

export type ResultType = 'won' | 'lost';

export type MatchType = {
    id: number;
    pick: {
        opponent: UnitType;
        player: UnitType;
    };
    result: ResultType;
};

type GameSliceState = {
    gameResult: ResultType | null;
    score: {
        opponent: number;
        player: number;
    };
    history: MatchType[];
    opponentUnitSelectArray: UnitType[];
};

const initialState: GameSliceState = {
    gameResult: null,
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
        setGameResult: (state, action: PayloadAction<ResultType>) => {
            state.gameResult = action.payload;
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
        restartGame: () => initialState,
    },
});

export const {
    addMatchToHistory,
    incrementOpponent,
    incrementPlayer,
    restartGame,
    decrementBoth,
    setGameResult,
} = gameSlice.actions;

export const selectScore = (state: RootState) => state.game.score;
export const selectHistory = (state: RootState) => state.game.history;
export const selectCurrentMatch = (state: RootState) =>
    state.game.history[state.game.history.length - 1];
export const selectGameResult = (state: RootState) => state.game.gameResult;
export const selectopponentUnitSelectArray = (state: RootState) =>
    state.game.opponentUnitSelectArray;

export default gameSlice.reducer;
