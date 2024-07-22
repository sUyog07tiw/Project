// JavaScript for playing Vimeo video on button click

document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-video-btn');
    const vimeoPlayer = document.getElementById('vimeo-player');

    playBtn.addEventListener('click', function() {
        // Hide the play button
        playBtn.style.display = 'none';
        // Show the Vimeo player
        vimeoPlayer.style.display = 'block';
    });
});
