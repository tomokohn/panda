import axios from 'axios';
import { COMMENTS_LOADING , GET_COMMENTS, FILTER } from './types';

const SERVER_URL = 'http://localhost:5000';

export const getComments = () => dispatch => {
    dispatch(setCommentsLoading());
    axios.get(SERVER_URL + '/api/comments').then(res =>
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        })
    );
};

export const addComment = comment => dispatch => {
    axios.post(SERVER_URL + '/api/comments', comment).then(res =>
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        })
    );
};

export const filterComments = value => dispatch => {
        dispatch({
            type: FILTER,
            payload: value
        })
};

export const setCommentsLoading = () => {
    return {
        type: COMMENTS_LOADING
    };
};