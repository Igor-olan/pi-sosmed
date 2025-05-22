
const init = {
    load: true,
    user: null,
    message: null,
    err: null
}

const authReducer = (state = init, action) => {
    switch (action?.type) {
        case 'MAJOR_INIT':
            return init
        case 'MAJOR_SUCCESS':
            return {
                ...state,
                data: action?.payload?.data
            }
        case 'MAJOR_FAIL':
            return {
                ...state,
                err: action?.payload?.error
            }
        default:
            return state
    }
}

export default authReducer