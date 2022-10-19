import './App.css';
import Jerry from './Jerry';

function App() {
  const users = [{ text: "JerryMouse1", img: "img/JerryMouse1.jpg" },
  { text: "JerryMouse2", img: "img/JerryMouse2.png" },
  { text: "JerryMouse3", img: "img/JerryMouse3.png" }
  ]


  return (
    <>
      {/* <div className='avatar'>
        <img src={users[0].picture} alt={users[0].text} />
        <div className='name'></div>
      </div> */}
      {
        users.map((value, index) => {
          // return <h1 key={index}>{value.text}</h1>
          return (
            <Jerry jerry={value} key={index}/>
          );

        })
      }
    </>
  );
}

export default App;
