// DOM queries
const chatList = document.querySelector('.class-list');

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'shaun');

// get chats and render
chatroom.getChats(data => chatUI.render(data));