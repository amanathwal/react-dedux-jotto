import generateRandomWord from '../utils';
import { FETCH_WORD, MATCH_SUCCESS, GUESSED_WORD } from './actionTypes';

export const  fetchWord = () => {
    return {
        type: FETCH_WORD,
        payload: generateRandomWord()
    };
}


export const successMatch = () => ({
    type: MATCH_SUCCESS
});


export const guessWord = ( guessedWord ) => {
    return (dispatch, getState) => {
        const fetchedWord = getState().fetchedWord;

        if (fetchedWord === guessedWord) {
            dispatch(successMatch());
        } else {

            const map = fetchedWord.split('').reduce((obj, char) => {
                if (obj[char]) {
                    obj[char] ++;
                } else {
                    obj[char] = 1;
                }

                return obj;
            }, {});

            let count = 0;

            for (let i = 0; i < guessedWord.length; i++) {

                if (map[guessedWord[i]] && map[guessedWord[i]] > 0) {
                    count ++;
                    map[guessedWord[i]] --;    
                }
            }

            dispatch({
                type: GUESSED_WORD,
                payload: {
                    guessedWord,
                    count
                }
            });
        }


    };
};