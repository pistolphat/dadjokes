import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.componentDidMount();
  }

  componentDidMount() {
    fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    }) //API lesson, attach header
      .then(res => res.json()) //Receive a joke
      .then(joke => this.setState({ joke: joke.joke })) //Input JSON onto this.state.joke object
      // .then(joke => console.log(this.state.joke))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className='main-content container-fluid'>
          <div className='header-container'>
            <header>Dad Jokes</header>
          </div>
          <div className='joke-container'>
            <p className='jokebox'>{this.state.joke}</p>
          </div>
          <div className='button-container'>
            <button className='jokebutton' onClick={this.handleClick}>
              Randomize
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
