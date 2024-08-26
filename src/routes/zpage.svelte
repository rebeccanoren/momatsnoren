<script>
	import Header from '$lib/header/Header.svelte';
	import FlyingSvg from '$lib/components/FlyingSvg.svelte';
	import { onMount } from 'svelte';
	import { startCountdown } from '$lib/countdowntimer.js';
	import { initBorderRadius } from '$lib/borderradius.js'; // Import the JavaScript function
	
	// State to hold countdown values
	let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };
	let targetDate = new Date("August 9, 2025 13:00:00").getTime();
	
	// Start the countdown and border-radius effect when the component mounts
	onMount(() => {
	  const stopCountdown = startCountdown(targetDate, (newCountdown) => {
		countdown = newCountdown; // Update the countdown values reactively
	  });
  
	  // Initialize border-radius effect
	  const cleanupBorderRadius = initBorderRadius();
  
	  // Cleanup both the countdown and border-radius effect when the component is destroyed
	  return () => {
		stopCountdown();
		cleanupBorderRadius();
	  };
	});
  </script>
  
  <Header />
  
  <!-- Time Counter -->
  <div class="time-counter">
	{#if !countdown.expired}
	  <h3>Nedräkning...</h3>
	  <p>{countdown.days} Dagar, {countdown.hours} Timmar, {countdown.minutes} Minuter, {countdown.seconds} Sekunder</p>
	{:else}
	  <p>Vi är gifta ❤️‍🔥</p>
	{/if}
  </div>
  
  <!-- Section 1 -->
  <div class="page-content salmon-background border-radius stack-section">
	<div class="primary-section">
	  <p>En Kärlekssaga i Skärgården</p>
	  <h2 class="blue">
		Vi skulle bli överlyckliga om du vill vara med och fira vår dag när vi säger ja till varandra
		och firar kärleken med alla våra favoritpersoner – inklusive dig!
	  </h2>
	  <p>
		Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag
		på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för
		att hänga med oss innan den stora dagen på lördagen.
	  </p>
	</div>
  </div>
  
  <!-- Section 2 -->
  <div class="page-content white-background border-radius stack-section">
	<div class="primary-section">
	  <FlyingSvg src="ekenas.png" alt="Ekenäs Havshotell" />
	  <p>Lördag, 13:00</p>
	  <h2 class="blue">Vigsel i Kosters Kyrka</h2>
	  <p>
		Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag
		på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för
		att hänga med oss innan den stora dagen på lördagen.
	  </p>
	</div>
  </div>
  
  <!-- Section 3 -->
  <div class="page-content blue-background border-radius stack-section">
	<div class="primary-section">
	  <p>Lördag, 13:00</p>
	  <h2 class="blue">Vigsel i Kosters Kyrka</h2>
	  <p>
		Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag
		på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för
		att hänga med oss innan den stora dagen på lördagen.
	  </p>
	</div>
  </div>
  
  <style>
	.time-counter {
	  background-color: var(--dark-blue);
	  color: var(--beige);
	  width: 100%;
	  padding: 100px 0 100vh 0;
	  text-align: center;
	}
  
	.time-counter p {
	  text-align: center;
	}
  
	/* Ensure sections stack properly */
	.stack-section {
	  position: relative;
	  z-index: 1;
	  margin-top: -80vh;
	  padding-top: 100px;
	}
  
	/* Remove top margin for the first section */
	.stack-section:first-child {
	  margin-top: 0;
	}
  
	.page-content {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  width: 100%;
	  padding: 30vh 0 100vh 0;
	  position: relative;
	  transition: border-radius 0.5s ease, background-color 0.5s ease;
	  z-index: 1; /* Ensure proper stacking */
	}
  
	.primary-section {
	  max-width: 500px;
	  margin: auto;
	  text-align: center;
	}
  
	.border-radius {
	  transition: border-radius 0.5s ease; /* Smooth transition for border-radius */
	}
  

  </style>
  