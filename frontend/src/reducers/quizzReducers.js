import { QUIZZ_LIST_REQUEST, 
    QUIZZ_LIST_SUCCESS, 
    QUIZZ_LIST_FAIL, 
    QUIZZ_DETAILS_REQUEST, 
    QUIZZ_DETAILS_SUCCESS, 
    QUIZZ_DETAILS_FAIL,
    QUIZZ_DELETE_REQUEST,
    QUIZZ_DELETE_SUCCESS,
    QUIZZ_DELETE_FAIL,
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAIL,
    QUESTION_DELETE_REQUEST,
    QUESTION_DELETE_FAIL,
    QUESTION_DELETE_SUCCESS,
    QUIZZ_ADD_REQUEST,
    QUIZZ_ADD_SUCCESS,
    QUIZZ_ADD_FAIL,
    QUIZZ_ADD_RESET,
    QUIZZ_UPDATE_REQUEST,
    QUIZZ_UPDATE_SUCCESS,
    QUIZZ_UPDATE_FAIL,
    QUIZZ_UPDATE_RESET} 
from '../constants/quizzConstants'



export const quizzListReducers = (state = { quizz: []}, action) => {

    switch(action.type) {
        case QUIZZ_LIST_REQUEST:
            return { loading: true, quizz: []}
        case QUIZZ_LIST_SUCCESS:
            return { loading: false, quizz: action.payload } 
        case QUIZZ_LIST_FAIL: 
            return{ loading: false, error: action.payload }
        default: 
            return state

    }
}


export const quizzDetailsReducers = (state = { lequizz: {} }, action) => {

    switch(action.type) {
        case QUIZZ_DETAILS_REQUEST:
            return { loading: true, ...state}
        case QUIZZ_DETAILS_SUCCESS:
            return { loading: false, lequizz: action.payload } 
        case QUIZZ_DETAILS_FAIL: 
            return{ loading: false, error: action.payload }
        default: 
            return state

    }
}

export const quizzDeleteReducer = (state = {}, action) => {

    switch(action.type) {
        case QUIZZ_DELETE_REQUEST:
            return { loading: true }
        case QUIZZ_DELETE_SUCCESS:
            return { loading: false,  sucess: true } 
        case QUIZZ_DELETE_FAIL: 
            return{ loading: false, error: action.payload }
        default: 
            return state

    }
}


export const questionListReducer = (state = { question: [] }, action) => {

    switch(action.type) {
        case QUESTION_LIST_REQUEST:
            return {loading: true,  question: [] }
        case QUESTION_LIST_SUCCESS:
            return { loading: false, question: action.payload } 
        case QUESTION_LIST_FAIL: 
            return{ loading: false, error: action.payload }
        default: 
            return state

    }
}


export const questionDeleteOneReducer = (state = {}, action) => {

    switch(action.type) {
        case QUESTION_DELETE_REQUEST:
            return { loading: true }
        case QUESTION_DELETE_SUCCESS:
            return { loading: false,  sucess: true } 
        case QUESTION_DELETE_FAIL: 
            return{ loading: false, error: action.payload }
        default: 
            return state

    }
}


export const quizzAddReducer = (state = { }, action) => {

    switch(action.type) {
        case QUIZZ_ADD_REQUEST:
            return { loading: true }
        case QUIZZ_ADD_SUCCESS:
            return { loading: false, sucess: true, quizzAd: action.payload } 
        case QUIZZ_ADD_FAIL: 
            return{ loading: false, error: action.payload }
        case QUIZZ_ADD_RESET: 
            return { }
        default: 
            return state

    }
}


export const quizzUpdateReducer = (state = { quizzEdit: {}}, action) => {

    switch(action.type) {
        case QUIZZ_UPDATE_REQUEST:
            return { loading: true } 
        case QUIZZ_UPDATE_SUCCESS:
            return { loading: false, sucess: true, quizzEdit: action.payload } 
        case QUIZZ_UPDATE_FAIL: 
            return{ loading: false, error: action.payload }
        case QUIZZ_UPDATE_RESET: 
            return { quizzEdit: {}}
        default: 
            return state
    }
}