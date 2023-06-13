var loginLogoutButton = document.getElementById('login-logout-button');
var loginButton = document.getElementById('login-button');
var logoutModal = document.getElementById('logout-modal');
var cancelButton = document.getElementById('cancel-button');
var logoutConfirmButton = document.getElementById('logout-confirm-button');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var donateButton = document.getElementById('donate-button');
var donationModal = document.getElementById('donation-modal');
var donationModalKey = document.getElementById('donation-modal-key');
var copyButton = document.getElementById('donation-modal-copy-button');

loginButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  var username = usernameInput.value;
  var password = passwordInput.value;
  if (username && password) {
    alert('Login bem-sucedido!');
    loginLogoutButton.style.display = 'inline-block';
    loginLogoutButton.textContent = 'Logout';
  } else {
    alert('Usuário ou senha incorretos!');
  }
});

cancelButton.addEventListener('click', function() {
  logoutModal.style.display = 'none';
});

logoutConfirmButton.addEventListener('click', function() {
  logoutModal.style.display = 'none';
  loginLogoutButton.style.display = 'none';
});

loginLogoutButton.addEventListener('click', function() {
  if (loginLogoutButton.textContent === 'Logout') {
    logoutModal.style.display = 'block';
  }
});

donateButton.addEventListener('click', function() {
  donationModal.style.display = 'block';
});

copyButton.addEventListener('click', function() {
  // Lógica para copiar a chave PIX para a área de transferência
  var dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = donationModalKey.textContent;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert('Chave PIX copiada para a área de transferência!');
});

var closeButtons = document.getElementsByClassName('close');
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    donationModal.style.display = 'none';
  });
}
