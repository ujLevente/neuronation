import { UnitType } from '../../../constants';
import { UnitSelect } from './UnitSelect';

export function UnitController() {
    return (
        <div className="flex w-full gap-16">
            {Object.values(UnitType).map((type) => (
                <UnitSelect key={type} type={type} />
            ))}
        </div>
    );
}
