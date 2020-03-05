import React, {Component} from 'react';


export default class SignOut extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const user = {
      login: '',
      isAuth: '',
      sessid: ''
    }

      this.props.auth({
        isAuth: false,
        ...user
      });
  }

  render() {
    return (
      <button onClick={this.onClick} type="button">Выход</button>
    )
  }
}