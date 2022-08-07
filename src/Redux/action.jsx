import { FETCH_ERROR, FETCH_LOAD, FETCH_SUCCESS } from "./actionTypes"

export const fetchLoad = () => {
    return {
     
         type : FETCH_LOAD
    }
}

export const fetchSuccess= (payload) => {
    return {
     
         type : FETCH_SUCCESS,
         payload
    }
}

export const fetchError = () => {
    return {
     
         type : FETCH_ERROR
    }
}