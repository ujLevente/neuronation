import { useSelector } from 'react-redux';
import { selectHistory } from '../../store/slices/game.slice';
import { HistoryItem } from './HistoryItem';

export function History() {
    const history = useSelector(selectHistory);

    if (history.length === 0) {
        return null;
    }

    return (
        <div
            className={`overflow-y-auto absolute -right-10 top-0
         translate-x-full border-l-1 border-l-gray-500 pr-5 pl-1 h-full`}
        >
            <div className="grid grid-cols-4 gap-3">
                {history
                    .slice(0)
                    .reverse()
                    .map((item) => (
                        <HistoryItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}
