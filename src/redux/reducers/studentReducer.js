import {
    SET_SUBJECTS,
    SET_SUBJECT,
    SET_LISTS,
    SET_LIST,
    SET_QUESTIONS,
    LOADING_DATA
} from "../types"

const initialState = {
    subjects: [],
    subject: {},
    lists: [],
    list: {},
    questions: [],
    answers: [],
    answer: {},
    results: [],
    finalScore: {},
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
        case SET_LIST:
            return {
                ...state,
                list: action.payload
            }
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state;
    }
}