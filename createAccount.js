function validateForm(event) {
    event.preventDefault();
    
    var fullNameInput = document.getElementById('full-name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var churchNameInput = document.getElementById('church-name');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');
    var successMessage = document.getElementById('success-message');
    
    if (
      fullNameInput.validity.valid &&
      phoneInput.validity.valid &&
      emailInput.validity.valid &&
      churchNameInput.validity.valid &&
      passwordInput.validity.valid &&
      confirmPasswordInput.validity.valid &&
      passwordInput.value === confirmPasswordInput.value
    ) {
      successMessage.textContent = 'Sua conta foi criada com sucesso!';
      successMessage.style.color = 'white';
      clearForm();
    } else {
      successMessage.textContent = '';
    }
  }
  
  function clearForm() {
    var fullNameInput = document.getElementById('full-name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var churchNameInput = document.getElementById('church-name');
    var whatsappCheckbox = document.getElementById('whatsapp-checkbox');
    var whatsappContactCheckbox = document.getElementById('whatsapp-contact-checkbox');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');
    
    fullNameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    churchNameInput.value = '';
    whatsappCheckbox.checked = false;
    whatsappContactCheckbox.checked = false;
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    
    toggleWhatsappContact();
    checkPasswordRequirements();
  }
  
  function toggleWhatsappContact() {
    var whatsappContactCheckboxContainer = document.getElementById('whatsapp-contact-checkbox-container');
    var whatsappCheckbox = document.getElementById('whatsapp-checkbox');
    var whatsappContactCheckbox = document.getElementById('whatsapp-contact-checkbox');
    
    if (whatsappCheckbox.checked) {
      whatsappContactCheckboxContainer.style.display = 'block';
      whatsappContactCheckbox.disabled = false;
    } else {
      whatsappContactCheckboxContainer.style.display = 'none';
      whatsappContactCheckbox.disabled = true;
    }
  }
  
  function checkPasswordRequirements() {
    var passwordInput = document.getElementById('password');
    var passwordRequirements = document.getElementById('password-requirements');
    var lengthRequirement = document.getElementById('length-requirement');
    var lowercaseRequirement = document.getElementById('lowercase-requirement');
    var uppercaseRequirement = document.getElementById('uppercase-requirement');
    var numberRequirement = document.getElementById('number-requirement');
    var specialCharRequirement = document.getElementById('special-char-requirement');
    
    if (passwordInput.value.length >= 8) {
      lengthRequirement.classList.remove('invalid');
      lengthRequirement.classList.add('valid');
    } else {
      lengthRequirement.classList.remove('valid');
      lengthRequirement.classList.add('invalid');
    }
    
    if (/[a-z]/.test(passwordInput.value)) {
      lowercaseRequirement.classList.remove('invalid');
      lowercaseRequirement.classList.add('valid');
    } else {
      lowercaseRequirement.classList.remove('valid');
      lowercaseRequirement.classList.add('invalid');
    }
    
    if (/[A-Z]/.test(passwordInput.value)) {
      uppercaseRequirement.classList.remove('invalid');
      uppercaseRequirement.classList.add('valid');
    } else {
      uppercaseRequirement.classList.remove('valid');
      uppercaseRequirement.classList.add('invalid');
    }
    
    if (/[0-9]/.test(passwordInput.value)) {
      numberRequirement.classList.remove('invalid');
      numberRequirement.classList.add('valid');
    } else {
      numberRequirement.classList.remove('valid');
      numberRequirement.classList.add('invalid');
    }
    
    if (/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {
      specialCharRequirement.classList.remove('invalid');
      specialCharRequirement.classList.add('valid');
    } else {
      specialCharRequirement.classList.remove('valid');
      specialCharRequirement.classList.add('invalid');
    }
  }
  
  function checkPassword() {
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');
    var confirmPasswordError = document.getElementById('confirm-password-error');
    
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = 'A senha não confere com a senha fornecida acima.';
    } else {
      confirmPasswordError.textContent = '';
    }
  }
  