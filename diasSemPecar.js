var markDayButton = document.getElementById('mark-day-button');
var checklistButton = document.getElementById('checklist-button');
var checklistModal = document.getElementById('checklist-modal');
var closeButton = document.getElementById('modal-close-button');
var saveButton = document.getElementById('save-button');
var checkboxes = document.getElementsByClassName('checkbox-item');
var messageContainer = document.getElementById('message-container');
var message = document.getElementById('message');
var fireworks = document.querySelector('.fireworks');

// Variáveis para controle do último dia marcado
var lastMarkedDay = null;

// Evento de clique no botão "Marcar dia"
markDayButton.addEventListener('click', function () {
  var currentDate = new Date().toLocaleDateString();

  if (lastMarkedDay === currentDate) {
    // Dia já marcado
    message.innerHTML = 'O dia de hoje já foi marcado, volte amanhã para marcar outro dia sem pecado.';
    messageContainer.style.display = 'block';
  } else {
    var lastMarkedDate = lastMarkedDay ? new Date(lastMarkedDay) : null;
    var currentTime = new Date();
    var timeDifference = currentTime - lastMarkedDate;

    if (!lastMarkedDay || timeDifference >= 24 * 60 * 60 * 1000) {
      // Adiciona um dia e atualiza o contador
      addDay();
      lastMarkedDay = currentDate;
    } else {
      // Tempo mínimo não atingido
      var remainingTime = new Date(24 * 60 * 60 * 1000 - timeDifference);
      var remainingHours = remainingTime.getUTCHours();
      var remainingMinutes = remainingTime.getUTCMinutes();
      var remainingSeconds = remainingTime.getUTCSeconds();

      message.innerHTML =
        'Espere ' +
        remainingHours +
        ' horas, ' +
        remainingMinutes +
        ' minutos e ' +
        remainingSeconds +
        ' segundos para marcar outro dia sem pecado.';
      messageContainer.style.display = 'block';
    }
  }
});

// Evento de clique no botão "Checklist do bem"
checklistButton.addEventListener('click', function () {
  checklistModal.style.display = 'block';
  checkCompletion();
});

// Evento de clique no botão de fechar o modal
closeButton.addEventListener('click', function () {
  checklistModal.style.display = 'none';
});

// Evento de clique no botão "Salvar"
saveButton.addEventListener('click', function () {
  saveButton.classList.add('clicked');
  saveChecklist();
});

// Função para adicionar um dia
function addDay() {
  var daysCounter = document.getElementById('days-counter');
  var currentDays = parseInt(daysCounter.innerText);
  if (!isNaN(currentDays)) {
    currentDays += 1;
  } else {
    currentDays = 1;
  }
  daysCounter.innerText = currentDays;

  // Atualiza o texto abaixo do botão
  var daysText = currentDays === 1 ? 'dia' : 'dias';
  document.getElementById('days-text').innerText = currentDays + ' ' + daysText;

  // Desabilita o botão após clicar
  markDayButton.disabled = true;

  setTimeout(function () {
    markDayButton.disabled = false;
  }, 24 * 60 * 60 * 1000); // 24 horas em milissegundos
}

// Evento de clique em qualquer checkbox
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', checkCompletion);
}

// Função para verificar a conclusão da checklist
function checkCompletion() {
  var checkedCount = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
  }
  if (checkedCount === checkboxes.length) {
    saveButton.disabled = false;
    fireworks.style.display = 'none';
  } else {
    saveButton.disabled = false;
    fireworks.style.display = 'none';
  }
}

// Função para salvar a checklist
function saveChecklist() {
  fireworks.style.display = 'none';

  var checkedCount = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
  }

  if (checkedCount === checkboxes.length) {
    fireworks.style.display = 'block';

    setTimeout(function () {
      message.innerHTML = 'Parabéns! Sua checklist foi salva com sucesso!';
      messageContainer.style.display = 'block';
      fireworks.style.display = 'none';
      resetChecklist();
      addDay();
    }, 3000);
  } else if (checkedCount > 0) {
    message.innerHTML =
      'Continue assim, um dia de cada vez contra o pecado. Observe onde errou hoje para não errar na mesma coisa amanhã.';
    messageContainer.style.display = 'block';
    resetChecklist();
  } else {
    message.innerHTML = 'Você precisa selecionar pelo menos um item para salvar.';
    messageContainer.style.display = 'block';
  }
}

// Função para reiniciar a checklist
function resetChecklist() {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
  saveButton.disabled = true;
}
