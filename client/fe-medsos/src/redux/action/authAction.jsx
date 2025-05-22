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