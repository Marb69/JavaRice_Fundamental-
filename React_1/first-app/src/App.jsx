import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



function App() {
  const num = [1, 2, 3, 4, 5];

  return (
    <>
      <ul className="flex flex-col mx-auto max-w-50 mt-3">
        {num.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
