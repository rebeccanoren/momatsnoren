<script>
  import NavigationLinks from "$lib/header/NavigationLinksMenu.svelte";
  export let closeMenu;
  let close = "/close.svg";
</script>

<div class="menu-overlay">
  <div class="menu-content">
    <button on:click={closeMenu}><img src={close} alt="Close" /></button>
    <NavigationLinks />
  </div>
</div>

<style>
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      180deg,
      var(--dark-blue) 0%,
      var(--secondary-color) 74.48%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  .menu-content {
    font-size: 24px;
    text-align: center;
  }

  button {
    position: absolute;
    right: 24px;
    top: 16px;
    height: 38px;
    width: 38px;
  }
</style>
