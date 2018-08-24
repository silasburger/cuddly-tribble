function copyText() {
  var copyText = document.getElementById('email');
  var currentFocus = document.activeElement;
  var icon = document.getElementById('copy');
  copyText.value = 'silasburger.co@gmail.com';
  copyText.select();
  document.execCommand('copy');
  currentFocus.focus();
  copyText.value = '';
  icon.className = 'fas fa-check';
}
