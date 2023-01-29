import * as TYPES from "../actions/types"
export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.OPEN_AI_IMAGE_GENERATION:
            return {...state,openAIImageData:action.payload}
        default:
            return state;
    }
}