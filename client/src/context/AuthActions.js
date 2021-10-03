import axios from "axios";

const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});

const logout = () => ({
    type: "LOGOUT",
});


export const loginCall = async (userCredentials, dispatch) => {
    dispatch(LoginStart(userCredentials));
    try {
        const res = await axios.post("/api/auth/login", userCredentials);
        dispatch(LoginSuccess(res.data));
    }
    catch(err) {
        alert("Login failed!");
        dispatch(LoginFailure(err));
    }
};

export const logoutCall = (dispatch) => {
    dispatch(logout());
}