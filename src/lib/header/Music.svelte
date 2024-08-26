<script>
	import { isPlaying, toggleMusic } from '$lib/musicstore.js'; // Import store and toggle function
	import { onMount } from 'svelte';
	
	let soundIcon = '/sound-dark.svg'; // Default to dark sound icon
	let mutedIcon = '/muted-dark.svg'; // Default to dark muted icon
	let y = 0; // Track scroll position
	let innerWidth = 0; // Track window width, initialized to 0 for SSR

	// Dynamically update the icon based on scroll position and music play state
	$: currentIcon = y > 250 
		? ($isPlaying ? '/sound.svg' : '/muted.svg') 
		: ($isPlaying ? '/sound-dark.svg' : '/muted-dark.svg');

	// Check if we are running in the browser and set innerWidth accordingly
	onMount(() => {
		innerWidth = window.innerWidth;

		const resizeListener = () => {
			innerWidth = window.innerWidth;
		};

		// Add the resize event listener
		window.addEventListener('resize', resizeListener);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	});
</script>

<svelte:window bind:scrollY={y} />

<div class="container">
	<button 
		class="mute-btn" 
		on:click={toggleMusic} 
		style="background-color: {y > 250 ? 'var(--blue)' : 'var(--beige)'}; color: {y > 250 ? 'var(--beige)' : 'black'};">
		<img src={currentIcon} alt="Sound Icon" />
		{#if innerWidth > 799}
			<span>{ $isPlaying ? 'Sound: On' : 'Sound: Off' }</span>
		{/if}
	</button>
</div>

<style>
	/* Default styles for the button */
	button.mute-btn {
		position: fixed;
		right: 24px;
		bottom: 24px;
		transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
		display: flex;
		align-items: center;
		gap: 8px; /* Add space between icon and label */
	}

	button.mute-btn img {
		width: 16px; /* Smaller icon width */
		height: 16px; /* Smaller icon height */
	}

	@media only screen and (max-width: 799px) {
		button.mute-btn {
			width: 38px; /* Shrink button to just the icon */
			height: 38px;
		}

		button.mute-btn span {
			display: none; /* Hide label on smaller screens */
		}
	}
</style>
