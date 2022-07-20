import './App.css';
import { useState, useEffect } from 'react';

//const [firstCity, secondCity, ThridCity] = ["Tokyo", "Las Vegas", "New York"];

function App() {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <button onClick={() => setEmotion("Sad")}>
        Sad
      </button>
      <button onClick={() => setEmotion("Angry")}>
        Angry
      </button>
    </div>
  );
}

export default App;
