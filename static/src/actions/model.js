import {
    UPLOAD_MODEL,
    UPDATE_MODEL_LAYOUT,
    ADD_MODEL_LAYER,
    DELETE_MODEL_LAYER
} from "../constants/index";

export const uploadModel = model => {
    return {
        type: UPLOAD_MODEL,
        payload: {
            model: model
        }
    };
};

export const updateModelLayout = layout => {
    return {
        type: UPDATE_MODEL_LAYOUT,
        payload: {
            layout: layout
        }
    };
};

export const addModelLayer = ({ config, pos }) => {
    return {
        type: ADD_MODEL_LAYER,
        payload: {
            config: config,
            pos: pos
        }
    };
};

export const deleteModelLayer = ({ id, pos }) => {
    return {
        type: DELETE_MODEL_LAYER,
        payload: {
            id: id,
            pos: pos
        }
    };
};
