<script>
  export let url = ""; // The URL to link to
  export let label = ""; // The text label of the link
  export let className = ""; // Optional class for styling

  // Helper function to check if the URL is external
  function isExternalUrl(url) {
    return /^https?:\/\//.test(url);
  }
</script>

<a
  href={url}
  target={isExternalUrl(url) ? "_blank" : "_self"}
  rel={isExternalUrl(url) ? "noopener noreferrer" : undefined}
  class={className}
>
  {label}
  {#if isExternalUrl(url)}
    <!-- Optional icon for external links -->
    <span class="external-icon"></span>
  {/if}
</a>

<style>
  a {
    text-decoration: none;
    padding: 12px 14px;
    border-radius: 60px;
    font-family: "Abhaya Libre", serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .external-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 8px;
    background-image: url("/external-dark.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
