$(function () {
    $.ajax({
        url: "data/livros_home.json",
        success: function (arrLivros) {
            $.each(arrLivros, function (i, livro) {
                $('#livros').append(`
            <div class="col-lg-4">
              <img class="img-thumbnail" src="${livro.img}">
              <h2>${livro.nome}</h2>
              <p>${livro.descricao}</p>
              <p><a class="btn btn-secondary" href="#" role="button">Ver detalhes &raquo;</a></p>
            </div>
            `);
            })
        },
        error: function () {
            alert('Erro ao retornar os livros da pagina principal!');
        }
    });
});