import React, { Component } from 'react';
import logo from './logo.svg';
import SinglePost from './singlepost'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Epower Blog</h1>
        </header>
        <section>
          <SinglePost />
        </section>
      </>
    )
  }
}

export default App;
