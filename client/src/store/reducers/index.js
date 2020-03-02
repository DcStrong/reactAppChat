import { AUTHORIZE } from "../action-types";

const initialState = {
  user: {
    email: localStorage.getItem('email'),
    isAuth: localStorage.getItem('isAuth'),
    sessid: localStorage.getItem('sessid')
  }
};

function rootReducer(state = initialState, action) {
  console.log(3, action);

  if (action.type === AUTHORIZE) {
    let email = localStorage.setItem('email', action.payload.email);
    let isAuth = localStorage.setItem('isAuth', action.payload.isAuth);
    let sessid = localStorage.setItem('sessid', action.payload.sessid);
    console.log(4);
    return Object.assign({}, state, {
      user: {
        email: email,
        isAuth: isAuth,
        sessid: sessid
      }
    });
  }
  return state;
}

export default rootReducer;