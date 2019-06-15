import { MATCH_SUCCESS } from '../actions/actionTypes';

export default (state = false, action) => {
    switch(action.type) {
        case MATCH_SUCCESS:
            return true;
        default: 
            return state;
    }
}