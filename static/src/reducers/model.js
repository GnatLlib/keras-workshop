import { UPLOAD_MODEL } from '../constants/index'
import { createReducer } from '../utils/misc'


const initialState = {
    model: 'No Model Uploaded'
}
export default createReducer(initialState, {
    [UPLOAD_MODEL]: (state, payload) => {
    
        return Object.assign({}, state, {
            model: payload.model,
        })
        
    }

});