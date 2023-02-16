import './App.css';
import { CurrentBattle } from './app/components/CurrentBattle';
import { History } from './app/components/History';
import { Score } from './app/components/Score';
import { UnitController } from './app/components/UnitController';

function App() {
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
