import ApplicationOne from "applicationOne/App";
import ApplicationTwo from "applicationTwo/App";

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ApplicationOne state={{ count, setCount }} />
      <ApplicationTwo state={{ count, setCount }} />
    </div>
  );
}

export default App;
