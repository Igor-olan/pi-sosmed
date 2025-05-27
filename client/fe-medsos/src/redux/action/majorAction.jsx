import { APISERVICE } from '../../utils'

export const fetchMajor = () => (dispatch) => {
    dispatch({type: 'MAJOR_INIT' })
    APISERVICE().get('/major')
        .then((response) => {
            dispatch({
                type: 'MAJOR_SUCCESS',
                payload: {
                    data: response?.data?.data
                }
            })
        })
        
        .catch((err) => {
            if (err.response.status === 400) {
                window.location.href = '/login'
            }
            dispatch({
                type: 'MAJOR_FAIL',
                payload: {
                    error: err.response
                }
            })
   })
}