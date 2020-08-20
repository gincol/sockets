var socket = io();
// escuchar sucesos
socket.on("connect", function () {
  console.log("Contectado al servidor");
});
// escuchar sucesos
socket.on("disconnect", function () {
  console.log("Perdimos la conexión al servidor");
});

// Enviar información al servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log("Respuesta server:", resp);
  }
);

// escuchar información
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor: ", mensaje);
});
