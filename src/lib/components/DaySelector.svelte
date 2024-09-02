<script>
  import { onMount } from 'svelte'; // Import onMount from Svelte

  export let days = ['Fredag', 'Lördag', 'Söndag'];
  export let selectedDay = 'Fredag';

  function selectDay(day) {
    selectedDay = day;
  }

  // Automatically select the correct day based on the actual date
  onMount(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // JavaScript months are 0-11
    const date = today.getDate();

    if (year === 2025 && month === 8 && date === 9) {
      selectedDay = 'Lördag';
    } else if (year === 2025 && month === 8 && date === 10) {
      selectedDay = 'Söndag';
    }
  });
</script>
<div class="day-selector-wrapper">

<div class="day-selector">
  <div class="days">
    {#each days as day}
      <button
        class:selected={day === selectedDay}
        on:click={() => selectDay(day)}>
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
    border-radius: 16px;
    padding: 1px;
    margin-bottom: 40px;
    box-shadow: 25px 15px 60px 0px rgba(135,101,11,0.38);
-webkit-box-shadow: 15px 25px 60px 0px rgba(135,101,11,0.38);
-moz-box-shadow: 25px 15px 60px 0px rgba(135,101,11,0.38);

  }

  .days {
    display: flex;
    gap: 0px;
  }

  button {
    padding: 10px 16px;
    margin: 2px;
    border-radius: 14px;
    background-color: var(--pure-white);
    color: var(--text-color-muted);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button.selected {
    background-color: var(--blue);
    color: var(--pure-white);
  }

  button:hover:not(.selected) {
    background-color: #ddd;
  }
</style>
