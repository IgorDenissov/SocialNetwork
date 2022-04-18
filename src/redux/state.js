import {rerenderEntireTree} from "../render"

let state = {
    profilePage: {
    posts: [
        {id: 1, message: "Hi this is my family", likesCount: 12},
        {id: 2, message: " Welcome to  my family", likesCount: 2}
],
    newPostText:'Enter post'
},

    dialogsPage: {

    dialogs: [
        {id: 1, name: 'Bob'}, {id: 2, name: 'Anna'},
        {id: 3, name: 'Jonny'}, {id: 4, name: 'Ron'},
        {id: 5, name: 'Helen'}, {id: 6, name: 'Hope'}
        ],
    messages: [
        {id: 1, message: 'Hi'}, {id: 2, message: 'How'},
        {id: 3, message: 'Great'}, {id: 4, message: 'Fun'},
        {id: 5, message: 'sunny'}, {id: 6, message: 'dance'}
        ]
    }
}

export let addPost = (postMessage)=>{
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree (state);
    
}

export let updateNewPostText = (newText)=>{
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
}

export default state;