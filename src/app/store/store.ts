import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import gameReducer from './slices/game.slice';

const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

export default store;
