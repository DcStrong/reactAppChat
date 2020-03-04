import React, { Component } from 'react';
import SignIn from '../SignIn/SignInContainer';
import SignUp from '../SignUp/SingUp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import logo from '../../logo.svg';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  user: state.user.isAuth
});

class Login extends Component {

  render() {
    return(

      <div className="section-login container">
        <div className="login__content w-70">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="login__wrapper w-30">
          {! this.props.user ?
          <Tabs>
            <TabList>
              <Tab className="entry react-tabs__tab">Вход</Tab>
              <Tab className="registration react-tabs__tab">Регистрация</Tab>
            </TabList>

            <TabPanel>
              <SignIn/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </Tabs>
          : <div>выход</div>}
        </div>
      </div>
      )
    }
}

export default connect(mapStateToProps)(Login);
