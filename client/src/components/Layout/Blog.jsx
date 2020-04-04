import React from "react";
import Buttons from "./Buttons/ButtonsNavigation/ButtonsNavigation"
import Chat from "../Chat/Chat";
import ButtonAuth from "./Buttons/ButtonsAuth/ButtonsAuth"
import './Blog.css';
// import Rooms from "./chatRooms/chatRooms";

import { useSelector } from 'react-redux';



const Blog = () => {

  const store = useSelector(state => state.user.email);

  console.log(store);

  return (
      <div className="main-container">
        { store ?
        <div className="user-bar">
          <div className="user">
            <div className="user__info">
              <img src="http://placehold.it/100x120" alt="" className="avatar"/>
              <div className="user__about">
                <div className="firstname">Анастаси</div>
                <div className="lastname">Леонтьева</div>
                <div className="profession">Графический дизайнер</div>
                <div className="nickname">mentolka99</div>
                <div className="date-birth">18.08.2020</div>
                <div className="city">Ялта</div>
              </div>
            </div>
            <Buttons/>
          </div>
          <div className="chat-room-contain">
            <div className="private__chat">
              <h3>Private chat</h3>
              <ul className="private__chat_list">
                <li className="private__chat_item">DcStrong</li>
              </ul>
            </div>
            <ul className="rooms__list">
              <li className="room__item">Design chat</li>
              <li className="room__item">Games chat</li>
            </ul>
          </div>
        </div>
        : <ButtonAuth/>}
        <div className="section-content">
          <Chat/>
        </div>
        <div className="sidebar">
          <ul className="hot__post_list">
            <li className="post__item">
              <div className="autor"><p>@mentolka99</p></div>
              <div className="title">Какой-то кусок текст</div>
              <div className="description">Как подготовить макет визитки к 
                печати? Не получается сделать 
                правильно вылеты, помогите!</div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Blog;