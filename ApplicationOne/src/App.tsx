import "./App.css";
import CounterDisplay from "./CounterDisplay";

function App(props: {
  state?: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };
}) {
  return (
    <div>
      <CounterDisplay counter={props.state!.count} />
    </div>
  );
}

export default App;
