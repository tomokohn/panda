import {
    FILTER,
    GET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
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
                if (comment.email.indexOf(action.filter) > -1 || comment.message.indexOf(action.filter) > -1) {
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
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload)
            };
        case ADD_COMMENT:
            const comment = {
                id: action.id,
                email: action.email,
                message: action.message,
                visible: true
            }
            return {
                ...state,
                comments: [...state.comments, comment]
            }
        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}