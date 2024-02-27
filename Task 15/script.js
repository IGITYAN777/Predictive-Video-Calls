const tabContent = ['First Tab', 'Second Tab', 'Third Tab'];

function openTab(event, tabIndex) {
  const tabs = document.getElementsByClassName('tab');
  
  
  for(var i = 0; i < tabs.length; ++i){
    tabs[i].classList.remove('active');
  }

  event.currentTarget.classList.add('active');

  document.getElementById('tabContent').innerText = tabContent[tabIndex];
}
