import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./authActions";

const initialUserState = { email: null };

const email = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.email,
  [authActions.loginSuccess]: (_, { payload }) => payload.email,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.idToken,
  [authActions.loginSuccess]: (_, { payload }) => payload.idToken,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerSuccess]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginSuccess]: () => null,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.clearError]: () => null,
});

export default combineReducers({
  email,
  token,
  error,
});
