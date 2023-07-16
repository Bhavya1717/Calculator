document.addEventListener('DOMContentLoaded', function() {
    const accessBox = document.querySelector('.access-box');
    const progressBar = document.querySelector('.progress-bar');
    const secretFiles = document.querySelector('.secret-files');
  
    progressBar.addEventListener('animationend', () => {
      accessBox.classList.add('hidden');
      secretFiles.classList.add('shown');
    });
}); 
function redirectTo(url) {
  window.location.href = url;
}
