import { UPLOAD_MODEL } from '../constants/index'
import { createReducer } from '../utils/misc'


const initialState = {
    model: 'No Model Uploaded'
}
export default createReducer(initialState, {
    [UPLOAD_MODEL]: (state, payload) => {
        console.log('triggering');
        const reader = new FileReader();
        reader.onload = () => {
            const modelText = reader.result;
            console.log('loaded');
            console.log(modelText);
        }
        
        reader.readAsBinaryString(payload.model[0]);
        return Object.assign({}, state, {
            model: payload.model,
        })
    }

});