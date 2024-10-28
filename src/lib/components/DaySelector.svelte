<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { selectedDay } from "$lib/selectedDayStore.js"; // Import the store
  import { get } from "svelte/store"; // Helper to get the initial value

  export let days = ["Fredag", "Lördag", "Söndag"];
  let initialLoad = true; // Track initial load to prevent scrolling on mount

  function scrollToTop() {
    window.scrollTo({ top: 300, behavior: "smooth" });
  }

  // Automatically select the correct day based on the actual date
  onMount(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    if (year === 2025 && month === 8 && date === 9) {
      selectedDay.set("Lördag");
    } else if (year === 2025 && month === 8 && date === 10) {
      selectedDay.set("Söndag");
    }

    initialLoad = false; // Set initialLoad to false after onMount completes

    // Subscribe to `selectedDay` changes
    selectedDay.subscribe((newDay) => {
      if (!initialLoad) {
        scrollToTop();
      }
    });
  });

  // Triggered when the user selects a day
  function selectDay(day) {
    if (get(selectedDay) !== day) {
      selectedDay.set(day); // Update the store value
      console.log(day);
    }
  }
</script>

<div class="day-selector-wrapper">
  <div class="day-selector">
    <div class="days">
      {#each days as day}
        <button
          class:selected={day === $selectedDay}
          on:click={() => selectDay(day)}
          transition:slide
        >
          {day}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .day-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--pure-white);
    border-radius: 40px;
    padding: 1px;
    margin-bottom: 40px;
    box-shadow: 25px 15px 60px 0px rgba(39, 31, 10, 0.38);
    -webkit-box-shadow: 15px 25px 60px 0px rgba(39, 31, 10, 0.38);
    -moz-box-shadow: 25px 15px 60px 0px rgba(39, 31, 10, 0.38);
  }

  .days {
    display: flex;
    gap: 0px;
  }

  button {
    padding: 10px 12px;
    margin: 1px;
    border-radius: 40px;
    background-color: var(--pure-white);
    color: var(--text-muted);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button.selected {
    background-color: var(--blue);
    color: var(--pure-white);
    box-shadow: rgba(0, 4, 84, 0.1) 0px 3px 5px 2px;
  }

  button:hover:not(.selected) {
    background-color: #ddd;
  }

  @media only screen and (max-width: 799px) {
    .day-selector-wrapper {
      position: fixed;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
    }

    .day-selector {
      backdrop-filter: blur(30px);
      background-color: rgba(255, 255, 255, 0.1) !important;
    }

    .days button {
      background-color: rgba(255, 255, 255, 0.01) !important;
    }

    .day-selector .days button.selected {
      background-color: var(--blue) !important;
      color: var(--pure-white);
    }
  }
</style>
