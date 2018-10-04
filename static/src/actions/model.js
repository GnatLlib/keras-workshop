import UPLOAD_MODEL from '../constants/index'

export const uploadModel = (model) => {
    return {
        type: UPLOAD_MODEL,
        payload:{
            model: model
        } 
    }
}