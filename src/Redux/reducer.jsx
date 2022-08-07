import { FETCH_ERROR, FETCH_LOAD, FETCH_SUCCESS } from "./actionTypes"

const intialState = {
    list: [],
    loading: false,
    error: false
}

export const reducer = (state = intialState, { type, payload }) => {

    switch (type) {
        case FETCH_LOAD:
            return {
                ...state,
                loading: true
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                list: payload,
                loading: false,
                error: false
                
            }

        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }


        default:
           return {state}
    }

}