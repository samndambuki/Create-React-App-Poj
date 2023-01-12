import './App.css';
import { useState, useEffect, useReducer,useRef } from 'react';

//const cities = ["Tokyo","Tahoe City","Bend"];
//console.log(cities[0]);

// const [firstcity,second] = ["Tokyo","Tahoe City","Bend"];
// console.log(firstcity);
// console.log(second);

// function useInput(initialValue)
// {
//   const [value,setValue] = useState(initialValue);
//   return [
//     {value,onChange:e=>setValue(e.target.value)},
//     () => setValue(initialValue)
//   ];

// }

function GithubUser({name,location,avatar})
{
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  )
}

function App() {

  // const [titleProps,resetTitle] = useInput("");
  // const [colorProps,resetColor] = useInput("#000000");


  // const txtTitle = useRef();
  // const hexColor = useRef();

  //console.log(txtTitle);

  // const submit = e => {
  //   // const title = txtTitle.current.value;
  //   // const color = hexColor.current.value;

  //     alert(`${titleProps.value},${colorProps.value}`);
  //   // txtTitle.current.value = "";
  //   // hexColor.current.value = "";
  //   resetTitle();
  //   resetColor();

  // }

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

  const [data,setData] = useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/samndambuki`)
  .then((response)=>response.json())
  .then(setData)
  },[]);

  if(data) return (
    <GithubUser 
    name={data.name} 
    location={data.location}
    avatar={data.avatar_url}/>
  );

  return (

    // // <form onSubmit={submit}>
    // //   <input 
    // //   ref={txtTitle}
    // //   type="text" placeholder='color title...'/>

    //   <form onSubmit={submit}>

    //   <input 
    //   {...titleProps}
    //   type="text" 
    //   placeholder='color title...'/>

    //   {/* <input 
    //   ref={hexColor}
    //   type="color"/>
    //   <button>ADD</button> */}

    //   <input 
    //   {...colorProps}
    //   type="color"/>

    //   <button>ADD</button>

    // </form>

    <h1>Data</h1>

  );
}

export default App;
