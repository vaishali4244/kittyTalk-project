import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTENS_PENDING,
    REQUEST_KITTENS_SUCCESS,
    REQUEST_KITTENS_FAILED
} from "./constants";


// initial state for search field
const initialStateSearch = {
    searchField: ''
}

export const searchKittens = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        //object destructing-object spread operator
        default:
            return state;
    }
}


//initial state for Kittens
const initialStateKittens = {
    isPending: false,
    Kittens:[],
    error: ''
}
export const requestKittens = (state = initialStateKittens, action = {}) => {
    switch (action.type) {
        case REQUEST_KITTENS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_KITTENS_SUCCESS:
            return Object.assign({}, state, { Kittens: action.payload, isPending: false })
        case REQUEST_KITTENS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}