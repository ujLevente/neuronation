import { UnitType } from '../../../constants';
import { usePlayMatch } from '../../hooks/usePlayMatch';
import { UnitSelect } from './UnitSelect';

export function UnitController() {
    const { selectUnit } = usePlayMatch();

    return (
        <div className="flex w-full gap-16 mt-20">
            {Object.values(UnitType).map((type) => (
                <UnitSelect key={type} type={type} onSelect={selectUnit} />
            ))}
        </div>
    );
}
