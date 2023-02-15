import { UnitType } from './constants';

export function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getOpponentUnitSelectArray() {
    const randomPreferedUnit =
        Object.values(UnitType)[randomIntFromInterval(0, 2)];

    return [
        UnitType.ARCHERS,
        UnitType.CAVALRY,
        UnitType.PIKEMEN,
        randomPreferedUnit,
    ];
}
