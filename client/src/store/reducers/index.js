import { AUTHORIZE, OUT_AUTHORIZE, MESSAGE, MESSAGES } from "../action-types";

const initialState = {
  user: {
    email: localStorage.getItem('email'),
    sessid: localStorage.getItem('sessid'),
  },
  message: {
    title: null,
  }
};

function rootReducer(state = initialState, action) {

  if (action.type === OUT_AUTHORIZE) {

    localStorage.removeItem('email');
    localStorage.removeItem('sessid');

    return Object.assign({}, state, {
      user: {
        email: '',
        sessid: ''
      }
    });
  }

  if (action.type === AUTHORIZE) {
    let email = action.payload.email
    let sessid = action.payload.sessid

    localStorage.setItem('email', email);
    localStorage.setItem('sessid', sessid);

    return Object.assign({}, state, {
      user: {
        email,
        sessid
      }
    });
  }

  if (action.type === MESSAGE) {
    // console.log(action.payload);
  }

  return state;
}


export default rootReducer;