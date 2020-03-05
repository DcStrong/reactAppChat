import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import * as actions from "../../../store/actions/index";


const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const store = useSelector(state => state.user.email);
  const setAuth = payload => dispatch(actions.authorize({ isAuth: true, ...payload }));

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
          setAuth(res.data);
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
      <div>{store}</div>
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

// export default class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       email: '',
//       password: '',
//     }
//   }

//   onChangeEmail(e) {
//     this.setState({
//       email : e.target.value,
//     })
//   }

//   onChangePassword(e) {
//     this.setState({
//       password: e.target.value,
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const user = {
//       email: this.state.email,
//       password: this.state.password
//     }

//     axios.post('http://localhost:5000/user/login', user)
//       .then(res => {

//         if(res.status === 200 ) {
//           console.log(1);
//           this.props.auth({
//             isAuth: true,
//             ...res.data
//           });
//           // document.location.href = '/';
//         };

//       })
//       .catch(err => { console.log(`Error ${err}`) });

//     this.setState({
//       email: '',
//       password: ''
//     })

//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onSubmit} className="form form-login">
//           <div className="form__group">
//             <label className="form__label">Email: </label>
//             <input  className="form__input"
//                 type="email"
//                 name="email"
//                 required
//                 value={this.state.email}
//                 onChange={this.onChangeEmail}
//             />
//           </div>
//           <div className="form__group">
//             <label className="form__label">Пароль: </label>
//             <input  className="form__input"
//                 type="password"
//                 required
//                 value={this.state.password}
//                 onChange={this.onChangePassword}
//             />
//           </div>
//           <div className="form__group submit">
//             <button className="form__input submit" type="submit">Войти</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
