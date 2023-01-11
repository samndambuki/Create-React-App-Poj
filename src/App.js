import './App.css';
import { useState, useEffect, useReducer,useRef } from 'react';

//const cities = ["Tokyo","Tahoe City","Bend"];
//console.log(cities[0]);

// const [firstcity,second] = ["Tokyo","Tahoe City","Bend"];
// console.log(firstcity);
// console.log(second);

function App() {

  const txtTitle = useRef();
  const hexColor = useRef();

  //console.log(txtTitle);

  const submit = e => {
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title},${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";

  }

  // const [emotion,setEmotion] = useState("happy");
  // const [secondary,setSecondary] = 
  // useState("tired");

  //console.log(what);

  // useEffect(()=>{
  //   console.log(`Its ${emotion} right now`);
  // }, [emotion]);

  // useEffect(()=>{
  //   console.log(`Its ${secondary} around here`);
  // },[secondary]);

  // const [checked,setChecked] = useReducer((checked) => !checked,false);

  return (

    <form onSubmit={submit}>
      <input 
      ref={txtTitle}
      type="text" placeholder='color title...'/>

      <input 
      ref={hexColor}
      type="color"/>
      <button>ADD</button>

    </form>
  );
}

export default App;
