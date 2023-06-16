// Lógica JavaScript para redirecionamento dos botões
var backButton = document.querySelector('.button-back');
var nextButton = document.querySelector('.button-next');

backButton.addEventListener('click', function() {
  window.location.href = 'introduce.html';
});

nextButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});
