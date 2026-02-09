import { useState } from "react"

const [count , setCount] = useState(); 
const Card = ({ title, author, publish, avail }) => {
  return (
    <div className="flex flex-col gap-4 border rounded bg-gray-300 p-3 ">
      <h1 className="text-black">
        Title: <span>{title}</span>
      </h1>
      <p>Author: {author}</p>
      <p>Publish: {publish}</p>

      <span
        className={`px-4 py-3 rounded-2xl text-gray ${avail ? "bg-green-300" : "bg-red-400"}`}
        g
      >
        {avail ? <p>available</p> : <p>Not Available</p>}
      </span>

      <button className="rounded-3xl bg-blue-500 text-white px-2 py-2" onClick={()=>{

        console.log(setCount(count + 1));
      }}>Click</button>
    </div>
  );
};

export default Card;
