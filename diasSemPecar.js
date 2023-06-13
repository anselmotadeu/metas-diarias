document.addEventListener("DOMContentLoaded", function() {
  var markDayButton = document.getElementById("mark-day-button");
  var checklistButton = document.getElementById("checklist-button");
  var checklistModal = document.getElementById("checklist-modal");
  var closeButton = document.getElementById("modal-close-button");
  var saveButton = document.getElementById("save-button");
  var checkboxes = document.getElementsByClassName("checkbox-item");
  var messageContainer = document.getElementById("message-container");
  var message = document.getElementById("message");
  var fireworks = document.querySelector(".fireworks");
  var daysCounter = document.getElementById("days-counter");

  if (!daysCounter) {
    console.error("Element with id 'days-counter' not found in the HTML.");
    return;
  }

  // Variáveis para controle do último dia marcado
  var lastMarkedDay = null;

  // Evento de clique no botão "Marcar dia"
  markDayButton.addEventListener("click", function () {
    var currentDate = new Date().toLocaleDateString();

    if (lastMarkedDay === currentDate) {
      // Dia já marcado
      message.innerHTML = "O dia de hoje já foi marcado, volte amanhã para marcar outro dia sem pecado.";
      messageContainer.style.display = "block";
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
          "Espere " +
          remainingHours +
          " horas, " +
          remainingMinutes +
          " minutos e " +
          remainingSeconds +
          " segundos para marcar outro dia sem pecado.";
        messageContainer.style.display = "block";
      }
    }
  });

  // Evento de clique no botão "Checklist do bem"
  checklistButton.addEventListener("click", function () {
    checklistModal.style.display = "block";
    checkCompletion();
  });

  // Evento de clique no botão de fechar o modal
  closeButton.addEventListener("click", function () {
    checklistModal.style.display = "none";
  });

  // Função para adicionar um dia
  function addDay() {
    var currentDays = parseInt(daysCounter.innerText);
    if (!isNaN(currentDays)) {
      currentDays += 1;
    } else {
      currentDays = 1;
    }
    daysCounter.innerText = currentDays;

    // Atualiza o texto abaixo do botão
    var daysText = currentDays === 1 ? "dia" : "dias";
    document.getElementById("days-text").innerText = currentDays + " " + daysText;

    // Desabilita o botão após clicar
    markDayButton.disabled = true;

    setTimeout(function () {
      markDayButton.disabled = false;
    }, 24 * 60 * 60 * 1000); // 24 horas em milissegundos

    // Atualiza a conclusão da checklist
    checkCompletion();
  }

  // Evento de clique em qualquer checkbox
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", checkCompletion);
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
      fireworks.style.display = "block";
    } else {
      fireworks.style.display = "none";
    }
  }

  // Evento de clique no botão de salvar
  saveButton.addEventListener("click", function () {
    var checkedCount = 0;
    var totalCount = checkboxes.length;

    for (var i = 0; i < totalCount; i++) {
      if (checkboxes[i].checked) {
        checkedCount++;
      }
    }

    if (checkedCount === 0) {
      // Nenhum checkbox marcado
      message.innerHTML = "Por favor, marque pelo menos um item da checklist.";
      messageContainer.style.display = "block";
    } else if (checkedCount === totalCount) {
      // Todos os checkboxes marcados
      message.innerHTML = "Você concluiu a checklist do bem!";
      messageContainer.style.display = "block";
    } else {
      // Alguns checkboxes marcados
      message.innerHTML = "Você marcou alguns itens da checklist, continue assim!";
      messageContainer.style.display = "block";
    }

    setTimeout(function () {
      messageContainer.style.display = "none";
      checklistModal.style.display = "none";
      resetChecklist();
    }, 2000);
  });

  // Função para redefinir a checklist
  function resetChecklist() {
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }

    fireworks.style.display = "none";
  }

  // Função para exibir corretamente o número de dias marcados
  function updateDaysText() {
    var currentDays = parseInt(daysCounter.innerText);
    var daysText = currentDays === 1 ? "dia" : "dias";
    document.getElementById("days-text").innerText = currentDays + " " + daysText;
  }

  // Atualiza o texto abaixo do botão ao carregar a página
  updateDaysText();
});
