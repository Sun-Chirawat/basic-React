import './App.css';

function App() {
  const fruits = [
    "Apple",
    "Banana",
    "Orange"
  ];

  return (
    // [
    //   <h1>Apple</h1>,
    //   <h1>Banana</h1>,
    //   <h1>Orange</h1>
    // ]
    // fruits.map((fruit,index) => <h1 key={index}>{fruit}</h1>)
    
    // fruits.map((fruit,index) => {
    //   fruit += " amount = 5";
    //   return <h1 key={index}>{fruit}</h1>
    // })

    fruits.filter((fruit,index) => {
      return fruit !== "Apple";
    })
  );
}

export default App;
