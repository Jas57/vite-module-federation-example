import { useState } from "react";
import IncrementButton from "./IncrementButton";

function AppWrapper(props: {
  state: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };
}) {
  const [internalCounter, setInternalCounter] = useState(0);

  const incrementCounter = () => props.state.setCount((counter) => counter + 1);

  const incrementInternalCounter = () =>
    setInternalCounter((counter) => counter + 1);

  return (
    <div>
      <div>
        Why don't you increment the counter:
        <IncrementButton incrementCounter={incrementCounter} />
      </div>

      <div>
        What about this remote local one? It's {internalCounter}
        <IncrementButton incrementCounter={incrementInternalCounter} />
      </div>
    </div>
  );
}

export default AppWrapper;
