import {
    SET_ANSWERS,
    SET_RESULT,
    SHOW_RESULT
} from "../types";

const initialState = {
    answers: [],
    answer: {},
    result: {},
    finalresult: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ANSWERS:
            let index = state.answers.findIndex(
                (answer) => answer.questionId === action.payload.questionId
            );
            if (index === -1) {
                return {
                    ...state,
                    answers: [action.payload, ...state.answers]
                }
            } else {
                state.answers[index] = action.payload
                return {
                    ...state,
                }
            }
        case SET_RESULT:
            return {
                ...state,
                result: action.payload
            }
        case SHOW_RESULT:
            return {
                ...state,
                finalresult: action.payload
            }
        default:
            return state
    }
};