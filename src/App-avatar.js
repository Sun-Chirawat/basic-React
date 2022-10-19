import './App.css';

function App() {
  // const currentYear = new Date().getFullYear();
  // const birthYear = 2001;
  // const person = {name: "mario", country: "japan"};
  // const students = ['aaa', 'bbb'];
  // const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  // const user = { text: "JerryMouse1", picture: "img/JerryMouse1.jpg" };
  const users = [{ text: "JerryMouse1", picture: "img/JerryMouse1.jpg" },
  { text: "JerryMouse2", picture: "img/JerryMouse2.png" },
  { text: "JerryMouse3", picture: "img/JerryMouse3.png" }
  ]


  return (
    <>
      {/* <h1>This year is {currentYear}</h1> */}
      {/* <h3>You are {currentYear - birthYear} years old</h3> */}
      {/* <h3>{person}</h3> */}
      {/* <h3>{students}</h3> */}
      {/* <h3>{students.join(' ')}</h3> */}
      {/* <a href={url}>Rick Roll</a> */}
      <div className="avatar">
        <img src={users[0].picture} alt={users[0].text} />
        <div className="name">{users[0].text}</div>
      </div>

      <div className="avatar">
        <img src={users[1].picture} alt={users[1].text} />
        <div className="name">{users[1].text}</div>
      </div>

      <div className="avatar">
        <img src={users[2].picture} alt={users[2].text} />
        <div className="name">{users[2].text}</div>
      </div>
    </>

  );
}

export default App;
