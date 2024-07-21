function showContent(contentType, tabElement) {
    const employeesContent = document.getElementById('employees-content');
    const employersContent = document.getElementById('employers-content');

    employeesContent.style.display = 'none';
    employersContent.style.display = 'none';
    const tabs = document.getElementsByClassName('tab');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    if (contentType === 'employees') {
      employeesContent.style.display = 'block';
    } else if (contentType === 'employers') {
      employersContent.style.display = 'block';
    }
    tabElement.classList.add('active');
  }

  var videoPlayer = document.getElementById('video');
  videoPlayer.play()
  // Play / pause.
  videoPlayer.addEventListener('click', function () {
      if (videoPlayer.paused == false) {
          videoPlayer.pause();        
      } else {
          videoPlayer.play();
      }
  });