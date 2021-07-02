import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

interface AppProps {
}

const App: React.FC<AppProps> = () => (
  <div className="App">
    <img src={logo} alt="logo" />
  </div>
);

export default App;
