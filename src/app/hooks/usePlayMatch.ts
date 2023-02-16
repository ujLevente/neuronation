import { useSelector } from 'react-redux';
import { MatchEvaulationLookup, UnitType } from '../../constants';
import { randomIntFromInterval } from '../../util';
import {
    addMatchToHistory,
    decrementBoth,
    incrementOpponent,
    incrementPlayer,
    MatchType,
    selectCurrentMatch,
    selectopponentUnitSelectArray,
} from '../store/slices/game.slice';
import { useAppDispatch } from '../store/store-ts-util';

export function usePlayMatch() {
    const dispatch = useAppDispatch();
    const opponentUnitSelectArray = useSelector(selectopponentUnitSelectArray);
    const lastMatch = useSelector(selectCurrentMatch);

    const selectUnit = (unit: UnitType) => {
        const opponentUnit =
            opponentUnitSelectArray[randomIntFromInterval(0, 3)];

        const match: MatchType = {
            id: lastMatch ? lastMatch.id + 1 : 1,
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
