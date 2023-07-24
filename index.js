// preloader event added already here
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
  
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
  });


var audio1 = document.querySelector('audio') 
  var play_btn = document.getElementById("play_btn");
play_btn.addEventListener("click", function() {
  if (play_btn.classList.contains("fa-play")) {
    play_btn.classList.remove("fa-play");
   play_btn.classList.add("fa-pause");
   play_btn.style.paddingLeft = "0.2rem"; 
audio1.play();

  } else { 
    play_btn.classList.remove("fa-pause");
    play_btn.classList.add("fa-play");
    audio1.pause();
  }
});
