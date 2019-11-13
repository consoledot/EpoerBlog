import React, { Component } from 'react';
import logo from './logo.svg';
import SinglePost from './singlepost'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: []
    }
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://epower.ng/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({ post: data })
        console.log(data)
      })
  }

  render() {
    return (
      <>
        <header>
          <h1>Epower Blog</h1>
        </header>
        <section className="container">
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </section>
        <section></section>
        <footer>
          <h3>Copyright 2019</h3>
        </footer>
      </>
    )
  }
}

export default App;
