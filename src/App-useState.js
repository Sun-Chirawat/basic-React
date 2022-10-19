import { useEffect, useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [random, setRandom] = useState(0);
  const [name, setName] = useState(null);

  // case 1: run at every render
  // useEffect(() => {
  //   alert('updated');
  // })

  // case 2: run only once (at first render)
  // useEffect(() => {
  //   alert('updated');
  // }, [])

  // case 3: run at first render + run when the watch variable changes
  // useEffect(() => {
  //   alert('updated');
  // }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // response.json()
        // response not ok
        throw Error('server access denies!');
      }
      )
      // .then(json => console.log(json.name))
      .then(json => setName(json.name))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {/* <h3>Random = {random}</h3> */}
      {/* <h3>Count = {count}</h3>
      <h3>Count2 = {count2}</h3>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount2(count2 + 1)}>increase2</button> */}

      {name != null ? <h1>Name = {name}</h1> : <h1>Loading ...</h1>}
    </div>

  );
}

export default App;
