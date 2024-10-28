import { writable } from 'svelte/store';

// Define writable store with an initialization function
function createSelectedDay() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // JavaScript months are 0-11
  const date = today.getDate();

  let initialDay = "Fredag"; // Default to Friday
  if (year === 2025 && month === 8 && date === 9) {
    initialDay = "Lördag"; // Set to Saturday if date matches
  } else if (year === 2025 && month === 8 && date === 10) {
    initialDay = "Söndag"; // Set to Sunday if date matches
  }

  // Initialize the store with the default day
  const { subscribe, set } = writable(initialDay);

  // Expose a reset function to reinitialize the store on mount
  return {
    subscribe,
    set,
    reset: () => set(initialDay)
  };
}

export const selectedDay = createSelectedDay();
