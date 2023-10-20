

function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    alert('Seu IMC é: ' + imc.toFixed(2));
}

function calcularIdade() {
    var dataNascimento = new Date(document.getElementById('dataNascimento').value);
    var hoje = new Date();
    var diferenca = hoje - dataNascimento;
    var anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    var dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    var minutos = Math.floor(diferenca / (1000 * 60));
    var segundos = Math.floor(diferenca / 1000);

    alert('Idade: ' + anos + ' anos, ' + dias + ' dias, ' + minutos + ' minutos, ' + segundos + ' segundos');
}

function salvarCookie() {
    alert('Cookie será testado em breve.');
}

function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var resumo = "Nome: " + nome + "\nEmail: " + email + "\nData de Nascimento: " + dataNascimento + "\nPeso: " + peso + " kg\nAltura: " + altura + " m";
    
    localStorage.setItem('resumoCadastro', resumo);
    /* mostra os dados em outra página */

    window.location.href = 'ResumoCadastro.html';
}