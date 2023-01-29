import * as TYPES from "../actions/types"
export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.COHERE_TEXT_GENERATION:
            return {...state,cohereTextData:action.payload}
        default:
            return state;
    }
}