import * as TYPES from "../actions/types"
export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.OPEN_AI_TEXT_COMPLETION:
            return {...state,openAITextData:action.payload}
        default:
            return state;
    }
}