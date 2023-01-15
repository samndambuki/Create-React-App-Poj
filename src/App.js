// import './App.css';
// import { useState, useEffect, useReducer,useRef } from 'react';

// //const cities = ["Tokyo","Tahoe City","Bend"];
// //console.log(cities[0]);

// // const [firstcity,second] = ["Tokyo","Tahoe City","Bend"];
// // console.log(firstcity);
// // console.log(second);

// // function useInput(initialValue)
// // {
// //   const [value,setValue] = useState(initialValue);
// //   return [
// //     {value,onChange:e=>setValue(e.target.value)},
// //     () => setValue(initialValue)
// //   ];

// // }

// // const query =`
// // query{
// //   allLifts{
// //     name
// //     elevationGain
// //     status
// //   }
// // }
// // `;

// // const opts =
// // {
// //   method:"POST",
// //   headers:{"Content-type":"application/json"},
// //   body:JSON.stringify({query})
// // };

// // function Lift({name,elevationGain,status})
// // {
// //   return(
// //     <div>
// //       <h1>{name}</h1>
// //       <p>{elevationGain} {status}</p>
// //     </div>
// //   )
// // }

// const tahoe_peaks = [
//   {name:"Freel",elevation:10891},
//   {name:"Monument",elevation:10067},
//   {name:"Pyramid",elevation:9983},
//   {name:"Tallac",elevation:9735}
// ];

// function List({data,renderItem,renderEmpty}){
//   return !data.length ? renderEmpty : <ul>{data.map((item)=>(
//   <li key={item.name}>{renderItem(item)}</li>
//   ))}</ul>
// }

// function App() {

//   // const [titleProps,resetTitle] = useInput("");
//   // const [colorProps,resetColor] = useInput("#000000");


//   // const txtTitle = useRef();
//   // const hexColor = useRef();

//   //console.log(txtTitle);

//   // const submit = e => {
//   //   // const title = txtTitle.current.value;
//   //   // const color = hexColor.current.value;

//   //     alert(`${titleProps.value},${colorProps.value}`);
//   //   // txtTitle.current.value = "";
//   //   // hexColor.current.value = "";
//   //   resetTitle();
//   //   resetColor();

//   // }

//   // const [emotion,setEmotion] = useState("happy");
//   // const [secondary,setSecondary] = 
//   // useState("tired");

//   //console.log(what);

//   // useEffect(()=>{
//   //   console.log(`Its ${emotion} right now`);
//   // }, [emotion]);

//   // useEffect(()=>{
//   //   console.log(`Its ${secondary} around here`);
//   // },[secondary]);

//   // const [checked,setChecked] = useReducer((checked) => !checked,false);

//   // const [data,setData] = useState(null);
//   // const [error,setError] = useState(null);
//   // const[loading,setLoading] = useState(false);

//   // useEffect(()=>{
//   //   setLoading(true);
//   //   fetch(`https://snowtooth.moonhighway.com/`,opts)
//   // .then((response)=>response.json())
//   // .then(setData)
//   // .then(()=>setLoading(false))
//   // .catch(setError);
//   // },[]);

//   // if(loading) return <h1>Loading...</h1>;
//   // if(error) return <pre>{JSON.stringify(error)}</pre>;
//   // if(!data) return null;

//   // //console.log(data,"DATA!!!")
   
//   return (
//     // <div>
//     //   {/* {data.data.allLifts.map(lift=>(
//     //     <Lift name={lift.name} elevationGain={lift.elevationGain}
//     //     status={lift.status}/>
//     //   ))} */}

//     //   <h1>Hello</h1>

//     // </div>

//     <List data={tahoe_peaks} renderEmpty={<p>This list is empty</p>}
//     renderItem={item=> <>{item.name} - {item.elevation} ft.</>}
//     />
//   );

//   // return (

//     // // <form onSubmit={submit}>
//     // //   <input 
//     // //   ref={txtTitle}
//     // //   type="text" placeholder='color title...'/>

//     //   <form onSubmit={submit}>

//     //   <input 
//     //   {...titleProps}
//     //   type="text" 
//     //   placeholder='color title...'/>

//     //   {/* <input 
//     //   ref={hexColor}
//     //   type="color"/>
//     //   <button>ADD</button> */}

//     //   <input 
//     //   {...colorProps}
//     //   type="color"/>

//     //   <button>ADD</button>

//     // </form>

//     // <h1>Data</h1>

//   // );
// }

// export default App;

import "./App.css";
import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}

export function About(){
  return(
    <div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
    </div>
  )
}

export function Contact(){
  return(
    <div>
      <h1>Contact Us</h1>
    </div>
  )
}

export function App()
{
  return(
    <Home/>
  );
}

