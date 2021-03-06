import {
    LOADING_DATA,
    SET_SUBJECTS,
    SET_SUBJECT,
    SET_LISTS,
    SET_LIST,
    SET_QUESTIONS,
    SET_ANSWERS,
    SET_SCORE,
    SET_RESULT,
    SET_GRADE
} from "../types";

import axios from "axios";

// Get all subjects
export const getSubjects = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
        .get("/materias")
        .then((res) => {
            dispatch({
                type: SET_SUBJECTS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_SUBJECTS,
                payload: []
            });
        });
};
// Get subject
export const getSubject = (subject, subjectId) => (dispatch) => {
    axios
      .get(`/materia/${subject}/${subjectId}`)
      .then((res) => {
        dispatch({
          type: SET_SUBJECT,
          payload: res.data
        });
        dispatch({
            type: SET_LISTS,
            payload: res.data.lists
        })
      })
      .catch((err) => console.log(err));
  };

  export const getList = (subject, listId) => (dispatch) => {
    axios
      .get(`/${subject}/${listId}`)
      .then((res) => {
        dispatch({
          type: SET_LIST,
          payload: res.data
        });
        dispatch({
            type: SET_QUESTIONS,
            payload: res.data.questions
        })
      })
      .catch((err) => console.log(err));
  };

  export const getOneAnswer = (answer) => (dispatch) => {
    dispatch({type: SET_ANSWERS, payload: answer})
  };

  export const getGrade = (listId, answer) => (dispatch) => {
    axios
      .post(`/${listId}/respostas`, answer)
      .then((res) => {
        dispatch({
          type: SET_GRADE
        });
      });
  };
  export const setScore = (listId) => (dispatch) => {
    axios
      .post(`/resultado/${listId}`)
      .then((res) => {
        dispatch({
          type: SET_SCORE,
          payload: res.data
        });
    });
  }
  export const getScore = (resultId) => (dispatch) => {
    axios
      .get(`/resultadofinal/${resultId}`)
      .then((res) => {
        dispatch({
          type: SET_RESULT,
          payload: res.data
        })
      })
  }