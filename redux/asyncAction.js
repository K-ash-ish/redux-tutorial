const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
const USER_FETCH_FAILED = "USER_FETCH_FAILED";
const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
const initialState = {
  loading: false,
  users: [],
  error: "",
};
function userRequested() {
  return {
    type: USER_FETCH_REQUESTED,
  };
}
function userSuccess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}
function userFailed(error) {
  return {
    type: USER_FETCH_FAILED,
    payload: error,
  };
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case USER_FETCH_FAILED:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(userRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      })
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(userFailed(error.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
