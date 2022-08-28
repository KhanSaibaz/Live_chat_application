// current = io("http://localhost:8000/");
// import { current, emit, on } from "socket.io-client";
// var socket = io('http://localhost:8000')

var socket = io('http://localhost:8000.azurewebsites.net');



const form = document.getElementById('send-msg')
const meassageinput = document.getElementById('msg-inp')
const messagecontainer=document.querySelector('.container')

const append=(message,position)=>{
    const messagelement=document.createElement('div')  // create a element with div
    messagelement.innerText=message                    // diaplay that element on html
    messagelement.classList.add('message')             // Add a class message on that div 
    messagelement.classList.add('position')              // Add a position on that div
    messagecontainer.append(messagelement)             // Append a Message on container 
}

const names=prompt("Enter Your namess To Join Chat")
socket.emit('new-user-Added',names)


socket.on('user-joined',names=>{
    append(`${names} Join the chat`,right)
})

form.addEventListener('submit',e=>{
    e.preventDefault()
    const message=meassageinput.value;
    append(`you : ${message}`,right)
    socket.emit('send',message)
    meassageinput.value=''
})

socket.on('receive',data=>{
    socket.emit(`${data.names}: ${data.message}`,'right')
})


socket.on('left',meassage=>{
    append(`${names} left the chat`)
})