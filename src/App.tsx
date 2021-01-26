import React, { useState } from "react";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";
import "./App.css";

const App = () => {
  const [id, setid] = useState(42);
  return (
    <div className="App">
      <LaunchList handleIdChange={(newId: any) => setid(newId)} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;
