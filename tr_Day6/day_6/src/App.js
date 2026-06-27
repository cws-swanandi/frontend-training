import Counter from "./counter";
import Timer from "./timer";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1><br/>
      <h2>Counter using useState</h2>
      <Counter/><br/>
      <h2>Timer using useEffect</h2>
      <Timer/>
    </div>
  );
}

export default App;
