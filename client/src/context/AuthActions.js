import axios from "axios";

export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});


export const loginCall = async (userCredentials, dispatch) => {
    dispatch(LoginStart(userCredentials));
    try {
        const res = await axios.post("/auth/login", userCredentials);
        dispatch(LoginSuccess(res.data));
    }
    catch(err) {
        dispatch(LoginFailure(err));
    }
};