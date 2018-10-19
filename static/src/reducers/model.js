import {
    UPLOAD_MODEL,
    UPDATE_MODEL_LAYOUT,
    ADD_MODEL_LAYER,
    DELETE_MODEL_LAYER
} from "../constants/index";
import { createReducer } from "../utils/misc";

const initialState = {
    modelSave: null,
    layers: null,
    backend: null,
    version: null,
    class: null
};
export default createReducer(initialState, {
    [UPLOAD_MODEL]: (state, payload) => {
        const model = JSON.parse(payload.model);
        return Object.assign({}, state, {
            modelSave: model,
            layers: model.config.map((layer, index) => {
                return {
                    id: index,
                    position: index,
                    ...layer
                };
            }),
            backend: model.backend,
            version: model.keras_version,
            class: model.class_name
        });
    },

    [ADD_MODEL_LAYER]: (state, payload) => {
        let newID = 0;
        while (state.layers.map(layer => layer.id).includes(newID)) {
            newID += 1;
        }

        return Object.assign({}, state, {
            layers: [
                ...state.layers.map(layer => {
                    return {
                        ...layer,
                        position:
                            layer.position >= payload.pos
                                ? layer.position + 1
                                : layer.position
                    };
                }),
                {
                    id: newID,
                    position: payload.pos,
                    config: {
                        ...payload.config,
                        name: newID
                    }
                }
            ]
        });
    },

    [DELETE_MODEL_LAYER]: (state, payload) => {
        return Object.assign({}, state, {
            layers: state.layers
                .filter(layer => layer.id !== payload.id)
                .map(layer => {
                    return {
                        ...layer,
                        position:
                            layer.position > payload.pos
                                ? layer.position - 1
                                : layer.position
                    };
                })
        });
    }
});
