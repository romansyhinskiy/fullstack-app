import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  USER_REGISTRATION_BEGIN,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
  USER_LOGIN_BEGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from "./actions";
const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === USER_REGISTRATION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === USER_REGISTRATION_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }
  if (action.type === USER_REGISTRATION_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === USER_LOGIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }
  if (action.type === USER_LOGIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
};

export default reducer;
