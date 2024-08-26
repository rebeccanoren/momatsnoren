<script>
	import '../app.css';
	import '../links.css';
	import '../backgrounds.css';
	
	import { onNavigate } from '$app/navigation';
	let y = 0;
	let innerWidth = 0
	let open = false

	// Handle navigation transitions (this should work both on server and client)
	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(() => {
				resolve();
			});
		});
	});

	
</script>

<svelte:window bind:scrollY={y} bind:innerWidth />



<div class="primary app-container">

	{#if innerWidth > 500}
	<div>
	<img id="rsvp" src="rsvp.png" alt="RSVP" style="transform: rotate({y * 0.5}deg)" />
</div>
	{/if}

	
	<div class="page-slot">
		<slot />
	</div>
</div>

<style>
	#rsvp {
		width: 200px;
		position: fixed;
		bottom: 8px;
		left: 8px;
		will-change: transform;
		transform-style: preserve-3d;
		z-index: 99;
	}

	.page-slot {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
				width: 100%;
	}


</style>
