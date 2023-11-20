import Header from "./Web/Header";
import Home from "./Web/Component/Home";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme] = useState("dark");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <div>
        <Header></Header>
      </div>
      <div>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
