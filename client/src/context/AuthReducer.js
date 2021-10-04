export const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false
            }
        case "ADD_TO_LIST":
            return {
                ...state,
                user: {
                    ...state.user, 
                    watchList: [...state.user.watchList, action.payload],
                }
            }
        case "REMOVE_FROM_LIST":
            return {
                ...state,
                user: {
                    ...state.user, 
                    watchList: state.user.watchList.filter(item=>item !== action.payload),
                }
            }
        default:
            return state;
    }
}