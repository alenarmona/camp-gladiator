import logo from './Assets/Images/cg_logomark.png';
import './Scss/App.scss';
import Workout from './Components/Workout';
import Workouts from './workouts.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Workouts</h1>
      </header>
      <section className="workouts">
        {
          Workouts && Workouts.map( workout => {
            return <Workout data={workout} />
          })
        }
      </section>
    </div>
  );
}

export default App;
