import { combineReducers } from 'redux';

import fetchWord  from './fetchWord';
import guessedWord from './guessedWord';
import matchedWord from './matchedWord';

const rootReducer = combineReducers({
    fetchedWord: fetchWord,
    guessedWords: guessedWord,
    matchSuccess: matchedWord
});

export default rootReducer;