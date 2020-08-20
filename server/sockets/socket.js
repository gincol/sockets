const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "Administrador",
    mensaje: "Bienvenido a esta aplicación",
  });

  client.on("disconnect", () => {
    console.log("Usuario descontectado");
  });

  // escuchar el cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "TODO SALIO BIEN!",
    //   });
    // } else {
    //   callback({
    //     resp: "TODO SALIO MAL!",
    //   });
    // }

    // enviar a todos los clientes
    client.broadcast.emit("enviarMensaje", data);
  });
});
