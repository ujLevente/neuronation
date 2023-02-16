import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MatchEvaulationLookup, UnitType } from '../../constants';
import { randomIntFromInterval } from '../../util';
import {
    addMatchToHistory,
    decrementBoth,
    incrementOpponent,
    incrementPlayer,
    MatchType,
    ResultType,
    selectHistory,
    selectopponentUnitSelectArray,
    selectScore,
    setGameResult,
} from '../store/slices/game.slice';
import { useAppDispatch } from '../store/store-ts-util';

export function usePlayMatch() {
    const dispatch = useAppDispatch();
    const opponentUnitSelectArray = useSelector(selectopponentUnitSelectArray);
    const matchHistory = useSelector(selectHistory);
    const score = useSelector(selectScore);

    useEffect(() => {
        if (matchHistory.length === 20) {
            const gameResult: ResultType =
                score.player > score.opponent ? 'won' : 'lost';
            dispatch(setGameResult(gameResult));
        }
    }, [dispatch, matchHistory, score]);

    const selectUnit = (unit: UnitType) => {
        const opponentUnit =
            opponentUnitSelectArray[randomIntFromInterval(0, 3)];

        const match: MatchType = {
            id: matchHistory.length + 1,
            pick: {
                opponent: opponentUnit,
                player: unit,
            },
            result: 'lost',
        };

        if (unit.valueOf() === opponentUnit.valueOf()) {
            dispatch(decrementBoth());
        }

        if (
            MatchEvaulationLookup[unit].stronger.valueOf() ===
            opponentUnit.valueOf()
        ) {
            match.result = 'won';
            dispatch(incrementPlayer());
        }

        if (
            MatchEvaulationLookup[unit].weaker.valueOf() ===
            opponentUnit.valueOf()
        ) {
            dispatch(incrementOpponent());
        }

        dispatch(addMatchToHistory(match));
    };

    return { selectUnit };
}
