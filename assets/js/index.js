import { apod } from "./api.js";

window.onload = function () {
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  if (mes <= 9) {
    mes = `0${mes}`;
  }
  if (dia <= 9) {
    dia = `0${dia}`;
  }

  let calendario = `${ano}-${mes}-${dia}`;
  $("#data").val(calendario);
  apod();
};

$("#submit").click(function (event) {
  event.preventDefault();
  apod();
});
