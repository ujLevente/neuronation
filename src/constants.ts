export enum UnitType {
    CAVALRY = 'Cavalry',
    ARCHERS = 'Archers',
    PIKEMEN = 'Pikemen',
}

export const MatchEvaulationLookup = {
    [UnitType.CAVALRY]: {
        stronger: UnitType.ARCHERS,
        weaker: UnitType.PIKEMEN,
    },
    [UnitType.ARCHERS]: {
        stronger: UnitType.PIKEMEN,
        weaker: UnitType.CAVALRY,
    },
    [UnitType.PIKEMEN]: {
        stronger: UnitType.CAVALRY,
        weaker: UnitType.ARCHERS,
    },
};
