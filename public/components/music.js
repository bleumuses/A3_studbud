
const musicContainer = document.getElementById('music-container');
const activateMusicPlayer = document.getElementById('music-btn');
const closeMusicPlayerBtn = document.getElementById('close-music');
// const playBtn = document.getElementById('play');
// const pauseBtn = document.getElementById('pause');
// const prevBtn = document.getElementById('prev');
// const skipBtn = document.getElementById('skip');

// const audio = document.getElementById('audio');
// const progress = document.getElementById('progress');
// const progressContainer = document.getElementById('progress-container');
// const title = document.getElementById('title');
// const cover = document.getElementById('cover');

// Music Player opening event listener
activateMusicPlayer.addEventListener('click', () => {
    musicContainer.style.display= 'flex';
    activateMusicPlayer.style.color = '#FCFCFC';
    activateMusicPlayer.style.backgroundColor = '#4D7A7A';
    document.getElementById('song1').style.display = 'flex';
  })

// Close Music Player Modal
closeMusicPlayerBtn.addEventListener('click', () => {
    musicContainer.style.display='none';
    activateMusicPlayer.style.color = '#4D7A7A';
    activateMusicPlayer.style.backgroundColor = '#FCFCFC';
  })

// Adapted from https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player
// // Song titles
// const songs = [
//     {
//       path: './music/I-cant-make-you-love-me.mp3',
//       songName: "I can't make you love me",
//       cover: './music-cover/I-cant-make-you-love-me.jpeg'
//     },
//     {
//       path: './music/Movie.mp3',
//       songName: "Movie",
//       cover: './music-cover/Movie.jpeg'
//     },
//     {
//       path: './music/Thats-OK.mp3',
//       songName: "That's OK",
//       cover: './music-cover/Thats-OK.jpeg'
//     }
// ];

// // Update song details
// function loadSong(songs) {
//   title.innerText = songs.songName;
//   audio.src = songs.path;
//   cover.src = songs.cover;
// }

// // Play song
// function playSong() {
//   musicContainer.classList.add('play');
//   playBtn.style.color = '#5E9797';
//   playBtn.style.cursor = 'default';
//   pauseBtn.style.color = '#4D7A7A';

//   audio.play();
// }

// // Pause song
// function pauseSong() {
//   musicContainer.classList.remove('play');
//   playBtn.style.color = '#4D7A7A';
//   pauseBtn.style.color = '#5E9797';
//   pauseBtn.style.cursor = 'default';

//   audio.pause();
// }

// // Current song
// let i = 0;

// // loadSong(songs[i]);

// // Initially load song details into DOM
// // loadSong(songs[songIndex]);

// // // Previous song
// // function prevSong() {
// //   songIndex--;

// //   if (songIndex < 0) {
// //     songIndex = songs.length - 1;
// //   }

// //   loadSong(songs[songIndex]);

// //   playSong();
// // }

// // // Next song
// // function nextSong() {
// //   songIndex++;

// //   if (songIndex > songs.length - 1) {
// //     songIndex = 0;
// //   }

// //   loadSong(songs[songIndex]);

// //   playSong();
// // }

// // // Update progress bar
// // function updateProgress(e) {
// //   const { duration, currentTime } = e.srcElement;
// //   const progressPercent = (currentTime / duration) * 100;
// //   progress.style.width = `${progressPercent}%`;
// // }

// // // Set progress bar
// // function setProgress(e) {
// //   const width = this.clientWidth;
// //   const clickX = e.offsetX;
// //   const duration = audio.duration;

// //   audio.currentTime = (clickX / width) * duration;
// // }

// // // Event listeners
// // playBtn.addEventListener('click', () => {
// //   const isPlaying = musicContainer.classList.contains('play');

// //   if (isPlaying) {
// //     pauseSong();
// //   } else {
// //     playSong();
// //   }
// // });

// // // Change song
// // prevBtn.addEventListener('click', prevSong);
// // nextBtn.addEventListener('click', nextSong);

// // // Time/song update
// // audio.addEventListener('timeupdate', updateProgress);

// // // Click on progress bar
// // progressContainer.addEventListener('click', setProgress);

// // // Song ends
// // audio.addEventListener('ended', nextSong);