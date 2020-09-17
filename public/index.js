var socket = io();

var men = document.getElementById('men');
var button = document.getElementById('button');
var mensajes = document.getElementById('mensajes');

var nom = prompt('tu nombre:');

button.addEventListener('click',()=>{
  console.log(men.value);
  socket.emit("mensaje",[nom,men.value]);
  men.value='';
})

function mensa (aray){
  var node = document.createElement("p");
  var textnode = document.createTextNode(aray[0]+':'+aray[1]);
  node.appendChild(textnode); 
  return node
}

socket.on('newMen',(data)=>{
  mensajes.appendChild(mensa(data));
});