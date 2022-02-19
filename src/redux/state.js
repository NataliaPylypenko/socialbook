let rerenderEntireTree = () => {
    console.log('State');
}

let state = {
    nav : {
        socialbook : "Profile",
        friends: "Friends",
        dialogs : "Dialogs",
        photo: "Photo",
        news : "News",
        music : "Music",
        settings : "Settings",
    },

    profilePage: {
        postData : [
            {id: 1, message: "If I can’t trust you, it does not matter how smart you are.", likesCount: "0"},
            {id: 2, message: "Have a great weekend!!!", likesCount: "3"},
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogsData : [
            {id: 1, translit: 'pablo', name: "Pablo"},
            {id: 2, translit: 'marissa', name: "Marissa"},
            {id: 3, translit: 'philipe', name: "Philipe"},
            {id: 4, translit: 'mia', name: "Mia"}
        ],

        messagesData : [
            {id: 1, message: "Мощно пошутил в начале!"},
            {id: 2, message: "Согласен, что скучновато верстать, иногда хочется просто писать код)"},
            {id: 3, message: "Сегодня за день 6 уроков, сверстал даже симпатичнее, чем у вас)"},
            {id: 4, message: "С каждым днем, все ближе к цели! Спасибо за урок!"}
        ],
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;