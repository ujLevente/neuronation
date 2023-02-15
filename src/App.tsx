import './App.css';
import { CurrentBattle } from './components/CurrentBattle';
import { Score } from './components/Score';
import { UnitController } from './components/UnitController';

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
