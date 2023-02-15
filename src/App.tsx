import './App.css';
import { CurrentBattle } from './app/components/CurrentBattle';
import { Score } from './app/components/Score';
import { UnitController } from './app/components/UnitController';

function App() {
    return (
        <div>
            <Score />
            <CurrentBattle />
            <UnitController />
        </div>
    );
}

export default App;
