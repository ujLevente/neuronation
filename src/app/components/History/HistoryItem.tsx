import { MatchType } from '../../store/slices/game.slice';

type HistoryItemProps = {
    item: MatchType;
};

export function HistoryItem({ item }: HistoryItemProps) {
    return (
        <>
            <p className="font-bold">{item.id}.</p>
            <p className="player-color">{item.pick.player}</p>
            <p className="opponent-color">{item.pick.opponent}</p>
            <p
                className={`ml-3 font-bold uppercase ${
                    item.result === 'won' ? 'text-green-500' : 'text-red-500'
                }`}
            >
                {item.result}
            </p>
        </>
    );
}
