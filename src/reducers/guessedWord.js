import { GUESSED_WORD } from '../actions/actionTypes';

export default (state = [], action) => {

    switch(action.type) {
        case GUESSED_WORD:
            return [...state, action.payload];
        default: 
            return state;
    }
}