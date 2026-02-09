import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

const Books = [
  {
    title: "The monkeys",
    author: "Jhon Harold",
    Publish: 2006,
    available: false,
  },
  {
    title: "The Programmer",
    author: "Jhon Alvert",
    Publish: 2003,
    available: true,
  },
  {
    title: "The Fourth",
    author: "James Newton",
    Publish: 2002,
    available: false,
  },
  {
    title: "Once",
    author: "Lyca Smith",
    Publish: 2001,
    available: true,
  },
  {
    title: "Impossible",
    author: "Cursh",
    Publish: 2003,
    available: false,
  },
];

function App() {
  return (
    <div className="p-2 mx-auto max-w-120 md:max-w-150 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-4 ">
        {Books.map((item,index) => (
          <Card
        
            title={item.title}
            author={item.author}
            publish={item.Publish}
            avail={item.available}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
