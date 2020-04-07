import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import io from "socket.io-client";
import { useLocation } from 'react-router-dom';

import Messages from './Messages/Messages';
import Input from './Input/Input';


let socket;

//Создаем два массива. Первый у нас устанавливает сообщение которое вводили в поле ввода.
//Второй принимает от сокета полеченое сообщение и создает из них массив всех сообщений

const Chat = ({location}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const ENDPOINT = "localhost:5000";
  const userName = useSelector(state => state.user.email);
  


  useEffect(() => {
    socket = io(ENDPOINT);

    if(userName) {
      setName(userName.match(/(^.+)(?=@)/)[0]);
    } else {
      return;
    }

  }, [userName]);
  
  location = useLocation();

  useEffect(() => {
    const currentPath = location.search;
    setRoom(currentPath);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

  }, [location,name, room]);

  //Получаем текущее состояние элемента, каждый раз когда рендериться приложение. Принимаем событие с сервера
  // Принимаем один аргумент message.
  useEffect(() => {

    socket.on('message', (message) => {
      setMessages([...messages, message.text ]);
    });

    socket.on('notification', data => {
      console.log(data)
    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [messages])

  //Функция срабатывает в компоненте Input на кнопке отправки, в качестве аргумента принимает event,
  //стандартный слушатель события. Проверяем message, если не пусто, отправляем событие socket.emit на сервер
  //А поле input делаем пустым с помощью setMessage('');
  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', {message, name}, () => setMessage(''));
    }
  }

  //В компонент messages мы передаем массив из полученых сообщений и выводим на страницу
  return (
    <div className="outerContainer">
      <div className="container">
          <Messages messages={messages} user={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
