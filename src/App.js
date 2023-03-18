import "./App.css";
import {useState} from "react";

function App() {

  const[count,setCount] = useState(0);
  function DecrementHandler(){
    setCount(prev => prev-2);
  }

  function IncrementHandler(){
    setCount(prev => prev+2);
  }

  function reset(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center gap-10 flex-col">
      <div className="text-[1.5rem] text-white font-medium">Increment & decrement</div>
      <div className="text-white bg-orange-500 gap-12 py-3 flex justify-between items-center text-[25px] rounded-sm">
        <button onClick={DecrementHandler} className="border-r-2 border-white text-center w-20 text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button onClick={IncrementHandler} className="border-l-2 border-white text-center w-20 text-5xl">+</button>
      </div>
      <button onClick={reset} className="bg-white px-5 py-2 rounded-md font-bold hover:bg-red-500 transition-all duration-300 hover:text-white">Reset</button>
    </div>
  );
}

export default App;
