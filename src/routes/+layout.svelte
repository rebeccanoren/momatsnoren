<script>
  import "../app.css";
  import "../links.css";
  import "../backgrounds.css";
  import "../rsvp.css";
  import "../button.css";
  import "../typography.css";
  import { onNavigate } from "$app/navigation";
  import { goto } from "$app/navigation"; // SvelteKit's built-in navigation

  function navigateToOSA() {
    goto("/osa"); // Navigate to the "/osa" route
  }

  let y = 0;
  let innerWidth = 0;
  let open = false;

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
      <img
        id="rsvp"
        src="rsvp.png"
        alt="RSVP"
        style="transform: rotate({y * 0.5}deg)"
      />
    </div>
  {/if}

  <div class="CTA">
    <button class="CTA" on:click={navigateToOSA}>OSA!</button>
  </div>

  <div class="page-slot">
    <slot />
  </div>
</div>

<style>
  .CTA {
    position: fixed;
    right: 76px;
    top: 16px;
    background-color: var(--yellow-dark);
    z-index: 999;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    height: 38px;
  }

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
