import { useState } from "react";

function App() {
  // JS variable
  // let counter = 0;

  // React state variable
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);

  const plus = () => {
    setCounter (counter + 1);
    if(counter === 4){
      // alert('test');
      setDisable(true);
    }
    
  }
  const minus = () => {
    setCounter (counter - 1);
    if(counter === 0){
      // alert('test');
      setDisable(true);
    }
    
  }

  const reset = () => {
    setCounter (0);
    setDisable();
  }

  return (
    <>
    <h1>Counter = {counter}</h1>
    <button onClick={plus} disabled={disable}>Plus</button>
    <button onClick={minus} disabled={disable}>Minus</button>
    <button onClick={reset} >Reset</button>
    </>
    
  );
}


export default App;
