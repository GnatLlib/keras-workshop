import { UPLOAD_MODEL }  from '../constants/index'

export const uploadModel = (model) => {

    const reader = new FileReader();

        return {
            type: UPLOAD_MODEL,
            payload:{
                model: model
            } 
        }
}