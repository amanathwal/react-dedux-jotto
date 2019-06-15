import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../actions';

class InputBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleButtonClick() {
        this.props.guessWord(this.state.value);
    }

    handleInputChange(evt) {

        this.setState({
            value: evt.target.value
        });
    }

    render() {
        return (
            <div className='searchBar'>
                <input type='text' name='searchTerm' value={ this.state.value } onChange={this.handleInputChange}/>
                <button onClick={ this.handleButtonClick }>Guess!!!</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    guesses: state.guesses
});

export default connect(mapStateToProps, { guessWord })(InputBar);