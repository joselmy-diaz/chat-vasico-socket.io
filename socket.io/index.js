module.exports = (http, session) => {
  const io = require("socket.io")(http);

  io.use((socket, exit) => {
    session(socket.request, socket.request.res, exit);
  });

  io.on("connect", (socket) => {
    console.log("nueva conesion");
    var user = socket.request.session.user;
    
    if(user){
      socket.emit("newMen", ['socket','hola']);
      socket.join(user);
    }
    socket.on("mensaje", (data) => {
      console.log(data);
      io.to(user).emit("newMen", data);
    });
    socket.on ( 'disconnecting' , () => { console.log('desconectando');}) // la matriz de habitaciones contiene al menos el ID del socket   }) ;
    
    socket.on ( 'disconnect' , () => { console.log('desconectar'); });
  });

};