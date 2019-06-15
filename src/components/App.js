import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import InputBar from './InputBar';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

import { fetchWord } from '../actions';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchWord && this.props.fetchWord();
  }

  render() {

    console.log(this.props.fetchedWord);
    console.log(this.props.guessedWords);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jotto App</h1> 
          {this.props.matchSuccess ? <Congrats /> : <InputBar />}
          <GuessedWords />
        </header>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  fetchedWord: state.fetchedWord,
  matchSuccess: state.matchSuccess,
  guessedWords: state.guessedWords
});

export default connect(mapStateToProps, { fetchWord })(App);
