import { useState } from "react";
 
import PageEditor from "./Pages/PageEditor";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="global_container">
      <PageEditor />
    </div>
  );
}

export default App;
