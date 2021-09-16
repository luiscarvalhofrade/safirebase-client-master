import {
    SET_ANSWERS,
    SET_RESULT,
    SHOW_RESULT
} from "../types";

import axios from "axios";

// get one option as answer
export const getOneOption = (option) => (dispatch) => {
    dispatch({type: SET_ANSWERS, payload: option})
};

// post each question answer
export const getAnswers = (listId, answers) => (dispatch) => {
    answers.forEach((element) => {
        axios
            .post(`${listId}/resposta`, element);
    });
};
export const getResult = (listId, answers) => (dispatch) => {
    let trueCounter = 0;
    let falseCounter = 0;
    let newResult = {};
    answers.forEach((element) => {
        element.result === true ? (trueCounter = trueCounter + 1) : (falseCounter = falseCounter + 1)
    });
    newResult.trueCount = trueCounter;
    newResult.falseCount = falseCounter;
    axios
        .post(`/${listId}/resultado`, newResult)
        .then((res) => {
            dispatch({
                type: SET_RESULT,
                payload: res.data 
            })
        })
};

export const showResult = (resultId) => (dispatch) => {
    axios
        .get(`/u/resultado/${resultId}`)
        .then((res) => {
            dispatch({
              type: SHOW_RESULT,
              payload: res.data
            });
          })
          .catch((err) => console.log(err));
}