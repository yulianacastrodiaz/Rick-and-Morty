import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps } from "./interfaces/AppProps"

function App({title}:AppProps): JSX.Element {
  return (
    <div className="App">
      Henry Workshop - Typescript {title}
    </div>
  );
}

export default App;
