function IncrementButton({
  incrementCounter,
}: {
  incrementCounter: () => void;
}) {
  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default IncrementButton;
