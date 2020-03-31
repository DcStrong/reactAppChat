import React from 'react';
import {Link} from "react-router-dom";

import "./style.css";

const ButtonsAuth = () => {
  return(
    <div className="buttons">
          <Link to="/login">Войти</Link>
    </div>
  )
}

export default ButtonsAuth;