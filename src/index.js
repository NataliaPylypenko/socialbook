import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './media.scss';

import App from './components/app/App';

let nav = {
    socialbook : "Profile",
    friends: "Friends",
    dialogs : "Dialogs",
    photo: "Photo",
    news : "News",
    music : "Music",
    settings : "Settings",
}

let dialogsData = [
    {id: 1, translit: 'pablo', name: "Pablo"},
    {id: 2, translit: 'marissa', name: "Marissa"},
    {id: 3, translit: 'philipe', name: "Philipe"},
    {id: 4, translit: 'mia', name: "Mia"}
]

let messagesData = [
    {id: 1, message: "Мощно пошутил в начале!"},
    {id: 2, message: "Согласен, что скучновато верстать, иногда хочется просто писать код)"},
    {id: 3, message: "Сегодня за день 6 уроков, сверстал даже симпатичнее, чем у вас)"},
    {id: 4, message: "С каждым днем, все ближе к цели! Спасибо за урок!"}
]

let postData = [
    {id: 1, message: "If I can’t trust you, it does not matter how smart you are.", likesCount: "0"},
    {id: 2, message: "Have a great weekend!!!", likesCount: "3"},
]

ReactDOM.render(
  <React.StrictMode>
    <App nav={nav} dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
