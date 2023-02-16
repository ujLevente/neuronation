import { useSelector } from 'react-redux';
import { selectCurrentMatch } from '../store/slices/game.slice';

export function CurrentBattle() {
    const currentMatch = useSelector(selectCurrentMatch);

    if (!currentMatch) {
        return null;
    }

    return (
        <div className="mt-20 border-1 border-lightBorder py-4 rounded-md">
            <div className="flex justify-around mb-6">
                <div className="flex-1">
                    <p>Player&apos;s pick</p>
                    <p className="text-2xl player-color">
                        {currentMatch.pick.player}
                    </p>
                </div>
                <div className="flex-1">
                    <p>Opponent&apos;s pick</p>
                    <p className="text-2xl opponent-color">
                        {currentMatch.pick.opponent}
                    </p>
                </div>
            </div>
            <h3 className="h3 uppercase">{currentMatch.result}</h3>
        </div>
    );
}
