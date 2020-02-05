import React, {Component} from "react";

export default class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  render () {
    return (
      <div>
        <h2>Join form</h2>
      </div>
    )
  }
}