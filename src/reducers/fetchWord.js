import { FETCH_WORD } from '../actions/actionTypes';

export default (state = '', action) => {
    switch(action.type) {
        case FETCH_WORD:
            return action.payload;
        default: 
            return state;
    }
}