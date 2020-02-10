import React, {Component} from "react";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      login: '',
      password: '',
    }
  }


  onChangeLogin(e) {
    this.setState({
      login: e.target.value,
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      login: this.state.login,
      password: this.state.password
    }

      console.log(user);

      axios.post('http://localhost:5000/user/login', user)
        .then(res => console.log(res.data));

    this.setState({
      login: '',
      password: ''
    })
  }


  render() {
    return (
      <div>
        <h3>Sign IN</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username: </label>
            <input  type="text"
                required
                value={this.state.login}
                onChange={this.onChangeLogin}
            />
          </div>
          <div>
            <label>password: </label>
            <input  type="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}