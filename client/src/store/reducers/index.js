import { AUTHORIZE, OUT_AUTHORIZE } from "../action-types";

const initialState = {
  user: {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
  },

  message: {
    mess: null,
    source: false,
    userAvatar: '',
    date: '',
  }
};


function rootReducer(state = initialState, action) {
  console.log(state.user)
  if (action.type === OUT_AUTHORIZE) {

    localStorage.removeItem('email');
    localStorage.removeItem('token');

    return Object.assign({}, state, {
      user: {
        email: '',
        token: ''
      }
    })
  }

  if (action.type === AUTHORIZE) {
    let email = action.payload.email
    let token = action.payload.token

    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    return Object.assign({}, state, {
      user: {
        email,
        token,
      }
    });
  }
  return state;
}

export default rootReducer;