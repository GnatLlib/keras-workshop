import { UPLOAD_MODEL }  from '../constants/index'

export const uploadModel = (model) => {
    console.log('action');
    console.log(UPLOAD_MODEL);
    return {
        type: UPLOAD_MODEL,
        payload:{
            model: model
        } 
    }
}