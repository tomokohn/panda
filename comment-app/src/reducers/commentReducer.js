import {
    FILTER,
    GET_COMMENTS,
    COMMENTS_LOADING
} from '../actions/types';

const initialState = {
    comments: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER:
            let newArr = state.comments.map(comment => {
                if (comment.email.indexOf(action.payload) > -1 || comment.message.indexOf(action.payload) > -1) {
                    comment.visible = true;
                    return comment;
                } else {
                    comment.visible = false;
                    return comment;
                }
            });
            return {
                ...state,
                comments: [...newArr]
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            };
        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}