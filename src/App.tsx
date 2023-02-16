import { useSelector } from 'react-redux';
import './App.css';
import { CurrentBattle } from './app/components/CurrentBattle';
import { History } from './app/components/History';
import { Score } from './app/components/Score';
import { UnitController } from './app/components/UnitController';
import { restartGame, selectGameResult } from './app/store/slices/game.slice';
import { useAppDispatch } from './app/store/store-ts-util';

function App() {
    const gameResult = useSelector(selectGameResult);
    const dispatch = useAppDispatch();

    if (gameResult) {
        return (
            <>
                <h1
                    className={`h1  ${
                        gameResult === 'won' ? 'text-green-500' : 'text-red-500'
                    }`}
                >
                    Game {gameResult}
                </h1>
                <button
                    onClick={() => dispatch(restartGame())}
                    type="button"
                    className="uppercase border-2 border-secondary mt-10"
                >
                    restart
                </button>
            </>
        );
    }

    return (
        <div className="flex relative ">
            <div>
                <Score />
                <CurrentBattle />
                <UnitController />
            </div>
            <History />
        </div>
    );
}

export default App;
