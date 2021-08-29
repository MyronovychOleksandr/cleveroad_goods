import axios from "axios";
import authActions from "./authActions";

const signUpLink =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5wEd-hOMin64AgbwgEzcrZs1t8I5nBEY";

const loginLink =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5wEd-hOMin64AgbwgEzcrZs1t8I5nBEY";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post(signUpLink, credentials)
    .then((response) => {
      token.set(response.data.idToken);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post(loginLink, credentials)
    .then((response) => {
      console.log(response.data);
      token.set(response.data.idToken);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  token.set();
  dispatch(authActions.logoutSuccess());
};

export default {
  register,
  login,
  logout,
};
