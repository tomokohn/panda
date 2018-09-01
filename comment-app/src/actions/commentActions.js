import axios from 'axios';
import { DELETE_COOMENT, COMMEMTS_LOADING, GET_COMMENTS, ADD_COMMENT } from './types';

const SERVER_URL = 'http://localhost:5000';

export const getComments = () => dispatch => {
    //dispatch(setcommentsLoading());
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

// export const deleteComment = id => dispatch => {
//     axios.delete(`/api/comments/${id}`).then(res =>
//         dispatch({
//             type: DELETE_COMMENT,
//             payload: id
//         })
//     );
// };

// export const setCommentsLoading = () => {
//     return {
//         type: COMMENTS_LOADING
//     };
// };