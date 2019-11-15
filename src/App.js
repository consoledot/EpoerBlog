import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SinglePost from './singlepost'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://epower.ng/wp-json/wp/v2/posts?per_page=6')
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data })
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
          {this.state.posts.map(post => <Link to={`/${post.title.rendered}`}><SinglePost post={post} key={post.id} /></Link>)}
        </section>
        <footer>
          <h3>Copyright 2019</h3>
        </footer>
      </>

    )
  }
}

export default App;
