import CounterDisplay from "./CounterDisplay";

function AppWrapper(props: {
  state: {
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

export default AppWrapper;
