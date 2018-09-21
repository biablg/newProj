$(function(){
    $('#contato').on('submit',function(){
        //evita de o formulario ser submetido e a página ser recarregada
        event.preventDefault();
        
        //Capturar os dados digitados
        let nome = $('#nome').val();
        let email = $('#email').val();
        let assunto = $('#assunto').val();
        let mensagem = $('#msg').val();

        //Guardar o que foi digitado em variáveis
        let contato = {
            nome:nome,
            email:email,
            assunto:assunto,
            comentario:mensagem
        }

        //zerar os campos de erros - Pode-se fazer assim?
        $('#erroNome').innerHTML="";
        $('#erroEmail').innerHTML="";
        $('#erroAsunto').innerHTML="";
        $('#erroMsg').innerHTML="";

        //guardar a quantidade de erros
        let erro = 0;
        
        // Validar campo Nome
        if(nome === ''){
            document.getElementById('erroNome').innerHTML += "Digite um nome!!!<br>";
            erro++;
        }
            //Verifica nome e sobrenome
        else if(nome.split(' ').length < 2){
            document.getElementById('erroNome').innerHTML += "Digite um nome e o sobrenome<br>";
            erro++;
        }

        //Validação de email
        //Filtro de e-mail do stackoverflow
        let filtroEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        
        if(email === ''){
            $('#erroEmail').innerHTML += "Digite um e-mail!!!<br>";
            erro++;
        }else if(email.length < 10){
            $('#erroEmail').innerHTML += "Digite um e-mail com mais de 10 caracteres!!!<br>";
            erro++;
            //verificar se o e-mail e válido 
        }else if(!filtroEmail.test(email)){
            $('#erroEmail').innerHTML += "Digite um e-mail válido!!!<br>";
            erro++;
        }

        //Validação do campo Assunto
        if(assunto.val==""){
            $('#erroAssunto').innerhtml+="Selecione uma opção <br>"; 
        }

        //Validação da mensagem
        if(msg.value === ''){
            document.getElementById('erroEmail').innerHTML += "Digite uma mensagem!!!<br>";
            erro++;
        }
        //Cadastrar apenas se a não houver de erros
        if (erro==0){
            var tbContatos;
            if(localStorage.getItem('tbContatos')){
                tbContatos = JSON.parse(localStorage.getItem('tbContatos'));
            }else{
                tbContatos = [];
            }
            tbContatos.push(contato);
            localStorage.setItem('tbContatos', JSON.stringify(tbContatos));
            alert('Contato enviado com sucesso! Em breve entraremos em contato!');
        };
    });
});