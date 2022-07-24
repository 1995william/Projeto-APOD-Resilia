export async function apod() {
  const data = $("#data").val();
  const titulo = $("#titulo-img-video");
  const img = $("#img");
  const video = $("#video");
  const descricao = $("#descricao");
  const copy = $("#copy");

  const url = `https://api.nasa.gov/planetary/apod?api_key=fbsykoUkJoV39rRlbPttDGaynD06twqc86wYSQK1&date=${data}`;

  await $.ajax({
    url: url,

    success: function (pesquisa) {
      titulo.text(pesquisa.title);

      descricao.text(pesquisa.explanation);

      if (pesquisa.copyright === undefined) {
        copy.text("No author");
      } else {
        copy.text(`Copyright © ${pesquisa.copyright}`);
      }

      if (pesquisa.media_type == "image") {
        img.attr("src", pesquisa.url);
        img.css("display", "block");
        video.css("display", "none");
        descricao.css("display", "block");
        copy.css("display", "block");
      } else {
        video.attr("src", pesquisa.url);
        img.css("display", "none");
        video.css("display", "block");
        descricao.css("display", "block");
        copy.css("display", "block");
      }

      return pesquisa;
    },

    error: function () {
      titulo.text(`Error in Api. Read the documentation!`);
      img.attr("src", "./img/erro.png");
      img.css("width", "200px");
      video.css("display", "none");
      descricao.css("display", "none");
      copy.css("display", "none");
    },
  });
}
