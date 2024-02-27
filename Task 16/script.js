  const nameInput = document.getElementById('name');
  
  nameInput.value = localStorage.getItem('name');
  
  nameInput.addEventListener('input', () => {
    localStorage.setItem('name', nameInput.value);
  });