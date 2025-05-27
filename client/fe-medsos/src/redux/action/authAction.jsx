export const authRegister = (data) => (dispatch) => {APISERVICE().post('/auth/register', data)
    .then((response) => {
        dispatch({
            type: 'AUTH_REGISTER_SUCCESS',
            payload: {
                message: response?.data?.message
            }
        })
    })
    .catch(err => {
        dispatch({
            type: 'AUTH_REGISTER_FAIL',
            payload: {
                error: err.response
            }
        })
    })
}

export const fetchProfile = (token) => {
    APISERVICE().get('/auth/me', config(token))
        .then((response) => {
            dispatch({
                type: 'AUTH_PROFILE_SUCCESS',
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
                type: 'AUTH_PROFILE_FAIL',
                payload: {
                    error: err.response.data.message
                }
            })
   })
}