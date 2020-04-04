import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import * as actions from "../../store/actions/index";


 const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const store = useSelector(state => state.user.email);
  const setAuth = payload => dispatch(actions.authorize(payload));

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };

    axios
      .post("http://localhost:5000/user/login", user)
      .then(res => {
        if (res.status === 200) {
          let userSessid = {
            email,
            token: res.data.token,
          }
          setAuth(userSessid);
          // document.location.href = '/';
        }
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form form-login">
        <div className="form__group">
          <label className="form__label">Email: </label>
          <input
            className="form__input"
            type="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Пароль: </label>
          <input
            className="form__input"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form__group submit">
          <button className="form__input submit" type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;