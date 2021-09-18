import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from '../src/Components/User/User';
function App() {

  const [familiar , setFamiliar] = useState(false)
  
  return (
    <div className="App">
      <h2>Is Familiar: {familiar.toString()} </h2>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
