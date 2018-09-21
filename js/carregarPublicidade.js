$(function(){
    $.ajax({
        url: "views/carousel.html",
        success: function(html){
            $('#publicidade').html(html);
        },
        error: function(){
            alert('Ocorreu um erro ao carregar a publicidade!');
        }
    })
})