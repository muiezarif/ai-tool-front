import {combineReducers} from "redux";
import PostOpenAIImageGenerationReducer from "./PostOpenAIImageGenerationReducer";
import PostOpenAITextCompletionReducer from "./PostOpenAITextCompletionReducer";
import CohereTextGenerationReducer from "./CohereTextGenerationReducer";

export default combineReducers({
    openAIImageGenerate:PostOpenAIImageGenerationReducer,
    openAITextGenerate:PostOpenAITextCompletionReducer,
    cohereAITextGenerate:CohereTextGenerationReducer
})