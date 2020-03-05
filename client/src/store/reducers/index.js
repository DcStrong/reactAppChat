import { AUTHORIZE, OUT_AUTHORIZE } from "../action-types";

const initialState = {
  user: {
    email: localStorage.getItem('email'),
    isAuth: localStorage.getItem('isAuth'),
  }
};


function rootReducer(state = initialState, action) {

  console.log(3, action);

  if (action.type === OUT_AUTHORIZE) {

    localStorage.removeItem('email');
    localStorage.removeItem('sessid');

    return Object.assign({}, state, {
      user: {
        email: '',
        sessid: ''
      }
    })
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
  return state;
}

export default rootReducer;