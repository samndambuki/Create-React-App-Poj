import './App.css';

//const cities = ["Tokyo","Tahoe City","Bend"];
//console.log(cities[0]);

const [firstcity,second] = ["Tokyo","Tahoe City","Bend"];
console.log(firstcity);
console.log(second);

function App({library}) {
  return (
    <div className="App">
     <h1>Hello From {library}</h1>
    </div>
  );
}

export default App;
