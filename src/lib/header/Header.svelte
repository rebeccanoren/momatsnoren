<script>
	import { fade, slide } from 'svelte/transition';
	import { isMenuOpen, openMenu, closeMenu } from '$lib/menustore.js'; // Import from menustore
	import { page } from '$app/stores';
	import NavigationLinks from '$lib/header/NavigationLinks.svelte';
	import Menu from '$lib/header/Menu.svelte';
	import Music from '$lib/header/Music.svelte';

	let y = 0;
</script>
  
<svelte:window bind:scrollY={y} />
  
<header>
  <nav>
    {#if y > 250}
      <div class="fixed-nav" transition:slide>
        <div>
          <h1>Henrik & Rebecca</h1>
          <p>9 augusti, 2025</p>
          <button on:click={openMenu}><img src="/menu.svg" alt="Open Menu" /></button>

          {#if $isMenuOpen}
            <!-- Wrap Menu in a div and apply transition to this div -->
            <div transition:fade={{ duration: 300 }}>
              <Menu {closeMenu} />
            </div>
          {/if}

          <!-- Pass menu state to Music component -->
          <div class="music-container { $isMenuOpen ? 'slide-left' : ''}">
            <Music />
          </div>
        </div>
      </div>
    {/if}

    <h1>Henrik & Rebecca</h1>
    <p>9 augusti, 2025 • Ekenäs, Sydkoster</p>

    <div class="music-container { $isMenuOpen ? 'slide-left' : ''}">
      <Music />
    </div>
    
    <NavigationLinks />
  </nav>
</header>
  
<style>
	header {
	  width: 100%;
	  background-color: var(--beige);
	  z-index: 999;
	}
  
	nav {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  text-align: center;
	  max-width: 100%;
	}
  
	nav h1 {
	  color: var(--blue);
	}
  
	.fixed-nav {
	  position: fixed;
	  background-color: var(--beige);
	  top: 0;
	  left: 0;
	  width: 100vw;
	  padding: 16px;
	  box-sizing: border-box;
	}
  
	.fixed-nav h1 {
	  color: var(--blue);
	  font-size: 22px;
	  margin: 0;
	  letter-spacing: 1px;
	}
  
	.fixed-nav p {
	  font-size: 14px;
	  margin: 0;
	}

	button {
		position: absolute;
		right: 24px;
		top: 16px;
		height: 38px;
		width: 38px;
	}

	img {
		color: var(--pure-white);
	}
  
	@media only screen and (max-width: 799px) {
	  nav {
		flex-direction: column;
	  }
  
	  nav h1 {
		margin-top: 8px;
	  }
  
	  nav p {
		font-size: 14px;
		margin: 0px;
	  }
  
	  .fixed-nav {
		display: flex;
		justify-content: space-between;
		text-align: left;
		padding: 16px 16px 8px 16px;
		width: 100vw;
	  }
	}
</style>
