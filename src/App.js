import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
function App() {
 const [text, setFact] = useState("");
 const fetchFact = () => {
 axios.get("https://uselessfacts.jsph.pl/random.json?language=en").then((response) => {
  setFact(response.data.text)
  });
}
const handleClick = () => {
  fetchFact()
 }
useEffect(() => {
 fetchFact()
}, []);
return (
 <div className="App">
   <div class="container">
 <h3>Did you know that:</h3>
 <p class = "text">{text}</p>
 <button class = "button" onClick= {() => handleClick()}>Get another random fact</button>
 </div>
 </div>

 
);
}
export default App;