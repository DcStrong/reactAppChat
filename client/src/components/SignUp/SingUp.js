import React, {Component} from "react";
import axios from "axios";


export default class Join extends Component {
  constructor(props) {
    super(props);

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);

    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      login: '',
      password: '',
      passwordConfirm: ''
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

  onChangePasswordConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const passwordConfirm = this.state.passwordConfirm;

    const user = {
      login: this.state.login,
      password: this.state.password,
    }

    if (user.password === passwordConfirm) {

      console.log(true);
       // Store hash in your password DB.
    
      console.log(user);
      
      axios.post('http://localhost:5000/user/add', user)
        .then(res => console.log(res.data));
    }


    this.setState({
      login: '',
      password: '',
      passwordConfirm: ''
    })
  }

  render () {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.login}
                onChange={this.onChangeLogin}
                />
          </div>
          <div className="form-group"> 
            <label>password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group"> 
            <label>password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.passwordConfirm}
                onChange={this.onChangePasswordConfirm}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}