import React, {Component} from "react";
import axios from "axios";


export default class Join extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      message: '',
      messageStatus: '',
    }
  }

  onChangeMessage(e) {
    this.setState({
      message: '',
      messageStatus: ''
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
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

    const user = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    }


       // Store hash in your password DB.

    axios.post('http://localhost:5000/user/add', user)
      .then((req, res) => {
        this.setState({message: req.data.message, messageStatus: 'success'});
      })
      .catch((error, status) => {
        // console.log(error.response.data);
        this.setState({message: error.response.data, messageStatus: 'error'});
      });

      this.setState({
        email: '',
        password: '',
        passwordConfirm: ''
      })
  }

  render () {
    return (
      <div>
        <div className="message">
          {
          this.state.message &&
            <div className={this.state.messageStatus}>{this.state.message}</div>
          }
        </div>
        <form onSubmit={this.onSubmit} onClick={this.onChangeError} className="form form-registration">
          <div className="form__group">
            <label className="form__label">Email: </label>
            <input  type="email"
                name="email"
                required
                className="form__input"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form__group">
            <label className="form__label">Пароль: </label>
            <input  type="password"
                required
                className="form__input"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form__group">
            <label className="form__label">Повторите пароль: </label>
            <input  type="password"
                required
                className="form__input"
                value={this.state.passwordConfirm}
                onChange={this.onChangePasswordConfirm}
                />
          </div>
          <div className="form__group submit">
            <button className="form__input submit" type="submit">Отправить</button>
          </div>
        </form>
      </div>
    )
  }
}