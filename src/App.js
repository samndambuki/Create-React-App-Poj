import './App.css';
import { useState, useEffect } from 'react';

//const cities = ["Tokyo","Tahoe City","Bend"];
//console.log(cities[0]);

// const [firstcity,second] = ["Tokyo","Tahoe City","Bend"];
// console.log(firstcity);
// console.log(second);

function App() {

  const [emotion,setEmotion] = useState("happy");
  const [secondary,setSecondary] = 
  useState("tired");

  //console.log(what);

  useEffect(()=>{
    console.log(`Its ${emotion} right now`);
  }, [emotion]);

  useEffect(()=>{
    console.log(`Its ${secondary} around here`);
  },[secondary]);

  return (
    <div className="App">
     <h1>Current emotion is {emotion}</h1>
     <button onClick={()=> setEmotion("sad")}>Sad</button>
     <button onClick={()=> setEmotion("excited")}>Excited</button>
     <h2>Current Secondary emotion is {secondary}</h2>
     <button onClick={()=> setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
