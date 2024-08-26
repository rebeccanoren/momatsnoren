import { writable } from 'svelte/store';

// Store to track whether music is playing or paused
export const isPlaying = writable(false);

let backgroundMusic;

// Initialize audio in the browser
if (typeof window !== 'undefined') {
  backgroundMusic = new Audio('/music.mp3');
  backgroundMusic.loop = true; // Loop the music when playing
  backgroundMusic.muted = false; // Start unmuted but not autoplaying

  // Do not attempt to autoplay music on page load
  console.log("Music initialized but not playing");
}

// Function to toggle the music
export const toggleMusic = () => {
  if (backgroundMusic) {
    isPlaying.update((current) => {
      if (current) {
        backgroundMusic.pause(); // Pause music if it's currently playing
      } else {
        backgroundMusic.play().catch((err) => {
          console.error('Failed to play music:', err);
        });
      }
      return !current; // Toggle the playing state
    });
  }
};

// Function to mute or unmute the music (if needed for other interactions)
export const toggleMute = () => {
  if (backgroundMusic) {
    backgroundMusic.muted = !backgroundMusic.muted;
  }
};
