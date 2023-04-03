import { useState } from "react";
import "./App.css";
import AppWrapper from "./AppWrapper";

function App() {
  const [count, setCount] = useState(0);

  return <AppWrapper state={{ count, setCount }} />;
}

export default App;
