import baseApi from "../../api/baseApi";
import * as TYPES from "../actions/types";


export const postPromptOpenAIImageGeneration = (data)=>{
    return async (dispatch)=>{
        const response = await baseApi.post("/openai/generate-image",data);
        dispatch({type:TYPES.OPEN_AI_IMAGE_GENERATION,payload:response.data});
    }
}
export const postPromptOpenAITextCompletion = (data)=>{
    return async (dispatch)=>{
        const response = await baseApi.post("/openai/create-completion",data);
        dispatch({type:TYPES.OPEN_AI_TEXT_COMPLETION,payload:response.data});
    }
}
export const postPromptCoherentTextGeneration = (data)=>{
    return async (dispatch)=>{
        const response = await baseApi.post("/cohereai/generate-text",data);
        dispatch({type:TYPES.COHERE_TEXT_GENERATION,payload:response.data});
    }
}