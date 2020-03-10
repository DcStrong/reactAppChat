import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';

const Message = () => {
  const [message, setMessage] = useState('');


  function onSubmit(e) {
    e.preventDefault();

    setMessage('');
  }


  return (
    <div>
      <div className='item__message'>
        {<MessageList/>}
      </div>
      <div className='message__form'>
        <form onSubmit={onSubmit}>
          <textarea
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            />
          <button type="submit"/>
        </form>
      </div>
    </div>
  )
}

export default Message;