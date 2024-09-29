let fireworkSound;
let lastPlayTime = 0; // Timestamp of the last time the sound was played
const cooldown = 400; // Cooldown period in milliseconds (0.5 seconds)

// Function to randomize which sound file is used
const randomizeFireworkSound = () => {
  // Array of available firework sounds
  const sounds = [
    "/firework.mp3", 
    "/firework-cluster.mp3", 
    "/firework-whistle.mp3", 
    "/woo.mp3",
    "wind-chimes.mp3",
  ];
  
  // Randomly select one sound from the array
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  
  // Create a new Audio object with the randomized sound
  fireworkSound = new Audio(randomSound);
  fireworkSound.volume = 0.4; // Default volume level
  fireworkSound.muted = false;
};

// Function to play the firework sound, with optional random volume
export const playFireworkSound = (options = {}) => {
  const currentTime = Date.now(); // Get the current time

  // Check if enough time has passed since the last play (0.5 seconds)
  if (currentTime - lastPlayTime < cooldown) {
    return; // Skip playing the sound if cooldown is not over
  }

  // Update the last play time
  lastPlayTime = currentTime;

  // Randomize the sound choice before playing
  randomizeFireworkSound();

  const { randomizeVolume = false } = options;

  // Randomize volume if specified in the options
  if (randomizeVolume) {
    fireworkSound.volume = Math.random() * 0.2 + 0.5; // Volume between 0.5 and 1
  }

  // Reset sound to the beginning and play
  fireworkSound.currentTime = 0;
  fireworkSound.play().catch((err) => {
    console.error("Failed to play firework sound:", err);
  });
};

// Function to mute/unmute the firework sound
export const muteFireworkSound = (mute = true) => {
  if (fireworkSound) {
    fireworkSound.muted = mute;
  }
};

// Function to set a specific volume for the firework sound
export const setFireworkVolume = (volume) => {
  if (fireworkSound && volume >= 0 && volume <= 1) {
    fireworkSound.volume = volume;
  }
};
