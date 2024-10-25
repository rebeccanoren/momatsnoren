import { writable } from "svelte/store";

// Store to track whether music is playing or paused
export const isPlaying = writable(false);

let backgroundMusic;
let lastPlayed = 0;


// Initialize audio in the browser
if (typeof window !== "undefined") {
  backgroundMusic = new Audio("/music.mp3");
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
          console.error("Failed to play music:", err);
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


export function playHoverSound() {
  const audio = new Audio('/happy-pop.mp3'); // Replace with your sound file path
  audio.volume = 0.5; // Set volume to 50%
  audio.play();
}