import { useSelector } from 'react-redux';
import { selectScore } from '../store/slices/game.slice';

export function Score() {
    const score = useSelector(selectScore);

    return (
        <div>
            <h1 className="h1">Score</h1>
            <div className="flex justify-around mt-12">
                <div className="flex-1">
                    <h3 className="h3 player-color">Player</h3>
                    <h2 className="h2 player-color">{score.player}</h2>
                </div>
                <div className="flex-1">
                    <h3 className="h3 opponent-color">Opponent</h3>
                    <h2 className="h2 opponent-color">{score.opponent}</h2>
                </div>
            </div>
        </div>
    );
}
