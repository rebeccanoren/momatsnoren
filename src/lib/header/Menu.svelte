<script>

	import NavigationLinks from '$lib/header/NavigationLinksMenu.svelte';
	export let closeMenu; // Function to close the menu
	let menuicon = '/menu.svg';
	let close = '/close.svg';
	let closeDark = '/close-dark.svg';
	
	
  </script>
  
  <div class="menu-overlay">
	<div class="menu-content">
		<button on:click={closeMenu}><img src={close} alt="Sound Icon" /></button>
		<NavigationLinks/>

	</div>
  </div>
  
  <style>

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .menu-content {
    font-size: 24px;
    text-align: center;
  }

  button {
		position: absolute;
		right: 24px;
		top: 16px;
	}

  </style>
  