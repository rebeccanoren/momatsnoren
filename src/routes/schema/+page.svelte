<script>
  import Header from '$lib/header/Header.svelte';
  import { onMount } from 'svelte';
    import { startCountdown } from '$lib/countdowntimer.js';

    // State to hold countdown values
    let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };

    let targetDate = new Date("August 9, 2025 13:00:00").getTime();

    // Start the countdown when the component mounts
    onMount(() => {
        const stopCountdown = startCountdown(targetDate, (newCountdown) => {
            countdown = newCountdown; // Update the countdown values reactively
        });

        return () => {
            stopCountdown(); // Cleanup countdown when component is destroyed
        };
    });

</script>

<Header />



<div class="page-content">
	<div class="primary-section">
        <img class="illustration" src="kosterskyrka.png" alt="Henrik & Rebecca" />
		<p>Lördag, 13:00</p>
        <p id="countdowntimer"></p>
		<h2 class="blue">
			Vigsel i Kosters Kyrka
		</h2>

		<a href="https://maps.app.goo.gl/L8pRLxcTtyUTEtpM7" rel="external">Visa i Google Maps</a>

		<p>
			Mer info kommer
		</p>
	</div>
</div>

<style>

</style>
