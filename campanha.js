// Lista de palavras de incentivo
var encouragementMessages = [
    "Lembre-se de que tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel. (Isaías 41:10)",
    "O Senhor é o meu pastor; nada me faltará. (Salmos 23:1)",
    "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. (Provérbios 3:5)",
    "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei. (Mateus 11:28)"
    // Adicione mais palavras de incentivo aqui...
  ];
  
  // Lógica para exibir uma mensagem aleatória de incentivo ao clicar no baú
  var treasureIcon = document.getElementById('treasure-icon');
  var popup = document.getElementById('popup');
  var popupClose = document.getElementById('popup-close');
  var encouragementMessage = document.getElementById('encouragement-message');
  
  treasureIcon.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * encouragementMessages.length);
    encouragementMessage.textContent = encouragementMessages[randomIndex];
    popup.style.display = 'block';
  });
  
  popupClose.addEventListener('click', function() {
    popup.style.display = 'none';
  });
  
  // Lógica JavaScript para manipulação dos botões e contadores
  var setCampaignButton = document.getElementById('set-campaign-button');
  var campaignNameInput = document.getElementById('campaign-name');
  var campaignDaysInput = document.getElementById('campaign-days');
  var campaignHoursInput = document.getElementById('campaign-hours');
  var campaignList = document.getElementById('campaigns');
  var markDayButton = document.getElementById('mark-day-button');
  var dailyCounter = document.getElementById('daily-counter');
  
  var campaignCount = 0;
  var dailyMarked = false;
  
  setCampaignButton.addEventListener('click', function() {
    var name = campaignNameInput.value;
    var days = campaignDaysInput.value;
    var hours = campaignHoursInput.value;
  
    if (name && days && hours) {
      var listItem = document.createElement('li');
      listItem.textContent = name + ' - ' + days + (days === '1' ? ' dia' : ' dias') + ' - ' + hours;
      campaignList.appendChild(listItem);
      campaignNameInput.value = '';
      campaignDaysInput.value = '';
      campaignHoursInput.value = '';
    }
  });
  
  markDayButton.addEventListener('click', function() {
    if (!dailyMarked) {
      campaignCount++;
      dailyMarked = true;
      dailyCounter.textContent = campaignCount + (campaignCount === 1 ? ' dia' : ' dias');
    }
  });
  
  // Lógica para verificar o horário e exibir um alerta
  function checkCampaignTime() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
  
    var campaignTime = campaignHoursInput.value.split('-');
    var startTime = campaignTime[0].trim();
    var endTime = campaignTime[1].trim();
  
    var startHours = parseInt(startTime.split(':')[0]);
    var startMinutes = parseInt(startTime.split(':')[1]);
    var endHours = parseInt(endTime.split(':')[0]);
    var endMinutes = parseInt(endTime.split(':')[1]);
  
    if (
      currentHours >= startHours && currentHours <= endHours &&
      (currentHours !== endHours || currentMinutes <= endMinutes) &&
      (currentHours !== startHours || currentMinutes >= startMinutes)
    ) {
      alert('É hora da campanha!');
    }
  }
  
  // Verificar o horário a cada minuto
  setInterval(checkCampaignTime, 60000);
  
  // Lógica para exibir o pop-up ao clicar no ícone de baú
  var treasureIcon = document.getElementById('treasure-icon');
  var popup = document.getElementById('popup');
  var popupClose = document.getElementById('popup-close');
  
  treasureIcon.addEventListener('click', function() {
    popup.style.display = 'block';
  });
  
  popupClose.addEventListener('click', function() {
    popup.style.display = 'none';
  });
  