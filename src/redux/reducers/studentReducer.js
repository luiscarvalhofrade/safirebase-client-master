import {
    SET_SUBJECTS,
    SET_SUBJECT,
    SET_LISTS,
    LOADING_DATA
} from "../types"

const initialState = {
    subjects: [],
    subject: {},
    lists: [],
    list: {},
    loading: false
};

export default function(state =initialState, action) {
    switch(action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload,
                loading: false
            };
        case SET_SUBJECT:
            return {
                ...state,
                subject: action.payload
            };
        case SET_LISTS:
            return {
                ...state,
                lists: action.payload
            }
        default:
            return state;
    }
}