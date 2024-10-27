<script>
  import { goto } from "$app/navigation"; // Import for navigation

  import { fade, slide } from "svelte/transition";
  import { isMenuOpen, openMenu, closeMenu } from "$lib/menustore.js"; // Import from menustore
  import { page } from "$app/stores";
  import NavigationLinks from "$lib/header/NavigationLinks.svelte";
  import Menu from "$lib/header/Menu.svelte";
  import Music from "$lib/header/Music.svelte";

  let y = 0;

  let isSchemaPage = false;

  // Update the flag based on the current path
  $: isSchemaPage = $page.url.pathname === "/schema";

  function navigateToOSA() {
    goto("/osa"); // Navigate to the "/osa" route
  }

  function handleKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      navigateToOSA();
    }
  }
</script>

<svelte:window bind:scrollY={y} />

<header class:is-schema={isSchemaPage}>
  <nav>
    {#if y > 250}
      <div class="fixed-nav" class:is-schema={isSchemaPage} transition:slide>
        <div>
          <h1>Henrik & Rebecca</h1>
          <p>9 augusti, 2025</p>

          <div class="buttons">
            <button class="CTA" on:click={navigateToOSA}>OSA!</button>
            <button class="menu" on:click={openMenu}>
              <img src="/menu.svg" alt="Open Menu" />
            </button>
          </div>

          <!-- Menu -->
          {#if $isMenuOpen}
            <div transition:fade={{ duration: 300 }}>
              <Menu {closeMenu} />
            </div>
          {/if}

          <!-- Music Component with sliding effect -->
          <div class="music-container {$isMenuOpen ? 'slide-left' : ''}">
            <!-- <Music /> -->
          </div>
        </div>
      </div>
    {/if}

    <h1>Henrik & Rebecca</h1>
    <p>9 augusti, 2025 • Ekenäs, Sydkoster</p>

    <div class="music-container {$isMenuOpen ? 'slide-left' : ''}">
      <Music />
    </div>

    <NavigationLinks />
  </nav>
</header>

<style>
  header {
    width: 100%;
    background-color: var(--beige);
    z-index: 99;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  header.is-schema {
    background-color: var(--dark-blue);
    color: white;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
    color: inherit;
  }

  nav h1 {
    color: var(--dark-blue);
  }

  header.is-schema nav h1,
  header.is-schema nav p {
    color: white;
  }

  .fixed-nav {
    position: fixed;
    backdrop-filter: blur(40px);
    background-color: var(--background-without-opacity);
    top: 0;
    left: 0;
    width: 100vw;
    padding: 16px;
    box-sizing: border-box;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .fixed-nav.is-schema {
    background-color: var(--dark-blue);
    color: white;
  }

  .fixed-nav h1 {
    color: var(--blue);
    font-size: 22px;
    margin: 0;
    letter-spacing: 1px;
  }

  .fixed-nav.is-schema h1 {
    color: white;
  }

  .fixed-nav p {
    font-size: 14px;
    margin: 0;
  }

  .fixed-nav.is-schema p {
    color: white;
  }

  .buttons {
    position: fixed;
    top: 16px;
    right: 24px;
    display: flex;
    gap: 4px;
  }

  .menu {
    /* position: absolute; */
    height: 38px;
    width: 38px;
  }

  .CTA {
    background-color: var(--yellow-dark);
    padding: 0 12px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: var(--dark);
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
