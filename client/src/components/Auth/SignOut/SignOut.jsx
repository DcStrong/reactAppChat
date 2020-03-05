import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "../../../store/actions/index";


const SignOut = () => {
  const [login] = useState("");
  const [sessid] = useState("");
  const dispatch = useDispatch();
  const setAuth = payload => dispatch(actions.outAuthorize(payload));

  function onClick() {
    const user = {
      login,
      sessid
    }
    setAuth(user);
  }


return (
  <button onClick={onClick} type="button">Выход</button>
)
}
export default SignOut;