document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('.preloader');

  setTimeout(function () {
    preloader.style.display = 'none';
  }, 2000);
});

const audio = document.querySelector('audio');
const play_btn = document.getElementById('play_btn');
const progress = document.querySelector('.progress');
const f_btn = document.getElementById('forward_btn');
const b_btn = document.getElementById('back_btn');
const audio_name = document.getElementById('audio_name');
const singer_name = document.getElementById('singer_name');
const audio_photo = document.getElementById('audio_photo');

const songs = [
  {
    audio_name: 'SHAPE OF YOU',
    singer_name: 'ED SHEERAN',
    audio_photo: 'https://images.genius.com/071a819f088609ee9d24b2dba4546b23.1000x1000x1.jpg',
    audio_src: 'songs_folder/sou1.mp3'
  },
  {
    audio_name: 'DESPACITO',
    singer_name: 'LOUIS FONSI',
    audio_photo: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png',
    audio_src: 'songs_folder/despacito.mp3'
  },
  {
    audio_name: 'PERFECT',
    singer_name: 'ED SHEERAN',
    audio_photo: 'https://i.pinimg.com/originals/86/62/11/866211be5c328632afbf53490477206c.jpg',
    audio_src: 'songs_folder/perfect.mp3'
  },
  {
    audio_name: 'TAKI TAKI',
    singer_name: 'DJ SNAKE',
    audio_photo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Taki_Taki_%28Official_Single_Cover%29_-_DJ_Snake.png',
    audio_src: 'songs_folder/taki.mp3'
  }
];

let current_time = document.getElementById('current_time');
let duration = document.getElementById('duration');
let songIndex = 0;

function loadSong(song) {
  audio_name.textContent = song.audio_name;
  singer_name.textContent = song.singer_name;
  audio.src = song.audio_src;
  audio_photo.src = song.audio_photo;
}

f_btn.addEventListener('click', function () {
  songIndex++;
  loadSong(songs[songIndex]);
  progress.style.width = '0%';
  // duration.textContent = "0:00"
  audio.play();
  if (play_btn.classList.contains('fa-play')) {
    play_btn.classList.remove('fa-play');
    play_btn.classList.add('fa-pause');
    play_btn.style.paddingLeft = '0.2rem';
  }

});

b_btn.addEventListener('click', function () {
  songIndex--;
  loadSong(songs[songIndex]);
  console.log(songIndex);
  progress.style.width = '0%';

  audio.play();
  if (play_btn.classList.contains('fa-play')) {
    play_btn.classList.remove('fa-play');
    play_btn.classList.add('fa-pause');
    play_btn.style.paddingLeft = '0.2rem';
  }
});

play_btn.addEventListener('click', function () {
  if (play_btn.classList.contains('fa-play')) {
    play_btn.classList.remove('fa-play');
    play_btn.classList.add('fa-pause');
    play_btn.style.paddingLeft = '0.2rem';
    audio.play();
  } else {
    play_btn.classList.remove('fa-pause');
    play_btn.classList.add('fa-play');
    audio.pause();
  }
});

audio.addEventListener('timeupdate', function () {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percentage + '%';

  let min_duration = Math.floor(audio.duration / 60);
  let sec_duration = Math.floor(audio.duration % 60);
  let total_duration = `${min_duration}:${sec_duration}`;
  duration.textContent = total_duration;

  let min_current_time = Math.floor(audio.currentTime / 60);
  let sec_current_time = Math.floor(audio.currentTime % 60);
  if (sec_current_time < 10) {
    sec_current_time = `0${sec_current_time}`;
  }
  let updated_current_time = `${min_current_time}:${sec_current_time}`;
  current_time.textContent = updated_current_time;

if(progress.style.width>"99.7%"){play_btn.classList.replace('fa-pause', "fa-play")}
});

const progressBar = document.querySelector('.progress_bar');

progressBar.addEventListener('click', function (event) {
  const progressWidth = progressBar.clientWidth;
  const clickX = event.offsetX;
  const newTime = (clickX / progressWidth) * audio.duration;
  audio.currentTime = newTime;
});

// audio.addEventListener('error', function () {
//   duration.textContent = "0:00"; 
// })