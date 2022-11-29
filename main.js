const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playBtn = document.querySelector('.play');
const mediaContainer = document.querySelector('.container-content');
const progressContainer = document.querySelector('.container-progress-bar');
const progressBar = document.querySelector('.progress-bar');
const audio = document.querySelector('audio');
const songTitle = document.querySelector('.title-song');
const img = document.querySelector('#img-songs');

// Song title

const songs = ['Chill Lofi Song', 'Forest Song', 'Let It Go', 'Vibes Of Nature']


// Song index

let songIndex = 0;

// Load Song

loadSong(songs[songIndex])

function loadSong(song){
  songTitle.innerText = song;
  audio.src = `songs/${song}.mp3`;
  img.src = `images/${song}.jpg`;
  
}

// Functions

// --playSong

function playSong() {
  mediaContainer.classList.add('playsg');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// --updateProgress

const updateProgress = function(e){
  const { duration, currentTime } = e.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

// Pause song
function pauseSong() {
  mediaContainer.classList.remove('playsg');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Next song

function nextSong(){
  songIndex++;

  if(songIndex === songs.length) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Prev Song

function prevSong(){
  songIndex--;

  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Set progress on click

function setProgress(e){
  const width = this.clientWidth;
  const click = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (click / width) * duration;
}

// Event listener

playBtn.addEventListener('click', ()=> {
  const isPLaying = mediaContainer.classList.contains('playsg')
  
  if(isPLaying) {
    pauseSong()
  }else {
    playSong()
  }
})

// --Next Song

nextBtn.addEventListener('click', ()=> {
  nextSong();
  
})

// --Previus Song

prevBtn.addEventListener('click', ()=> {
  prevSong();
  
})

// Audio event 

audio.addEventListener('timeupdate', updateProgress);

// Click event on progress bar

progressContainer.addEventListener('click', setProgress);

// Next song when ended

audio.addEventListener('ended', nextSong);