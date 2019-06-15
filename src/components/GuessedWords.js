import React, { Component } from 'react';

class GuessedWords extends Component {
    render() {
        if (!this.props.guesses) {
            return (
                <div>
                    Please Guess a word...
                </div>
            ); 
        }
    }
} 


export default GuessedWords;