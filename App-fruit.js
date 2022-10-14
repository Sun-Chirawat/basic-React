import { useState } from "react";
import './App-fruit.css';

function App() {
  // state variable
  // const fruits = [
  //   { name: 'Apple', id: 100 },
  //   { name: 'Banana', id: 101 },
  //   { name: 'Orange', id: 102 },
  // ];

  const [fruits, setFruits] = useState([
    { name: 'Apple', id: 100 },
    { name: 'Banana', id: 101 },
    { name: 'Orange', id: 102 },
  ]);
  
  // -------- delete ---------
  const deleteFruit = (id) => {
    // console.log(id);
    // const delFruit = fruits.filter((fruit) => {
    //   return fruit.id !== id;
    // });
    // Another code
    // let delFruit = [];
    // fruits.forEach((fruit) => {
    //   if(fruit.id !== id) {
    //     delFruit.push(fruit);
    //   }
    // });
    
    // Wrong
    let delFruit = [...fruits];

    fruits =[
      { name: 'Apple', id: 100 },
      { name: 'Banana', id: 101 },
      { name: 'Orange', id: 102 },
    ];

    // console.log(fruitfilter);
    setFruits(delFruit);
  }


  return (
    <>
      <h1>Fruits</h1>
      <button>Add</button>
      {
        fruits.map((fruit) => {
          return (
            <div className="fruit-item" key={fruit.id}>
              <h2>{fruit.name}</h2>
              <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
              <button>Edit</button>
            </div>


          );
        })
      }
    </>

  );
}


export default App;
