import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps } from "./interfaces/AppProps"

function App({title}:AppProps): JSX.Element {
  const [counter, setCounter] = useState(0)
  return (
    <div>
			<h3>Henry Workshop - {title}</h3>
			<hr></hr>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
			<button onClick={() => setCounter(counter - 1)}>Decrement</button>
			<br></br>
			<span>{counter}</span>
		</div>
  );
}

export default App;
