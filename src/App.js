import './App.css';
import { useState } from 'react';


//const cities = ["Tokyo","Tahoe City","Bend"];
//console.log(cities[0]);

// const [firstcity,second] = ["Tokyo","Tahoe City","Bend"];
// console.log(firstcity);
// console.log(second);

function App() {

  const [emotion,setEmotion] = useState("happy");

  //console.log(what);

  return (
    <div className="App">
     <h1>Current emotion is {emotion}</h1>
     <button onClick={()=> setEmotion("sad")}>Sad</button>
     <button onClick={()=> setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default App;
