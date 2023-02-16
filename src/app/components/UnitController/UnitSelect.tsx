import { UnitType } from '../../../constants';

type UnitSelectProps = {
    type: UnitType;
    onSelect: (unit: UnitType) => void;
};

export function UnitSelect({ type, onSelect }: UnitSelectProps) {
    return (
        <button
            onClick={() => onSelect(type)}
            type="button"
            className="shadow-sm shadow-secondary p-8 bg-primary
             rounded-2xl border-3 border-secondary hover:opacity-9 
             transition-opacity"
        >
            {type.valueOf()}
        </button>
    );
}
