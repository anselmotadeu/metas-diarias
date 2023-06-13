// Lógica JavaScript para redirecionamento dos botões
var skipButton = document.getElementById('skip-button');
var nextButton = document.getElementById('next-button');

skipButton.addEventListener('click', function() {
  window.location.href = 'metas.html';
});

nextButton.addEventListener('click', function() {
  window.location.href = 'mandamentos.html';
});
