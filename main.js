const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playBtn = document.querySelector('.play');
const mediaContainer = document.querySelector('.container-content');
const progressContainer = document.querySelector('.container-progress-bar');
const progressBar = document.querySelector('.progress-bar');
const audio = document.querySelector('audio');
const songTitle = document.querySelector('.title-song');
const img = document.querySelector('img');

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


// playSong function

function playSong() {
  mediaContainer.classList.add('playsg');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  mediaContainer.classList.remove('playsg');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
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