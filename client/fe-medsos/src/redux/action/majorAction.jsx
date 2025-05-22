import {APISERVICE, config} from '../../utils'

export const fetchMajor = (token) => {
    APISERVICE().get('/auth/me', config(token))
        .then((response) => {
            dispatch({
                type: 'MAJOR_SUCCESS',
                payload: {
                    data: response.data
                }
            })
        })
        
        .catch((err) => {
            if (err.response.status) {
                window.location.href = '/login'
            }
            dispatch({
                type: 'MAJOR_FAIL',
                payload: {
                    error: err.response.data.message
                }
            })
   })
}