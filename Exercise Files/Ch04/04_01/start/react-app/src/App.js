import './App.css';

const [firstCity, secondCity, ThridCity] = ["Tokyo", "Las Vegas", "New York"];

console.log(firstCity);
console.log(secondCity);
console.log(ThridCity);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello From {library}</h1>
    </div>
  );
}

export default App;
