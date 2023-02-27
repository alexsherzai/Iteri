import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Neuron from './components/neuron'
import Layer from './components/layer'
import Header from './components/Header'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
