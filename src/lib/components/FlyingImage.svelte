<script>
  import { onMount, onDestroy } from "svelte";

  export let src = ""; // Path to the SVG or image
  export let alt = ""; // Alt text for accessibility
  export let imageClass = ""; // Class to be applied to the img

  let scrollY = 0; // Current scroll position
  let transform = ""; // CSS transform applied to the SVG

  // Function to calculate the transformation based on scroll
  const calculateTransform = () => {
    const translateY = scrollY * -0.01; // Adjust the factor for Y movement
    const rotateDeg = scrollY * 0.0001; // Adjust rotation factor
    transform = `translate3d(0px, ${translateY}%, 0px) rotate(${rotateDeg}deg)`;
  };

  const handleScroll = () => {
    scrollY = window.scrollY; // Capture the scroll position
    calculateTransform();
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll); // Attach the scroll event listener
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    }
  });
</script>

<div class="flying-svg-container">
  <img
    {src}
    {alt}
    class={`flying-svg ${imageClass}`}
    style="transform: {transform};"
  />
</div>

<style>
  .flying-svg-container {
    display: flex;
    justify-content: center;
    margin: -80px;
  }

  .flying-svg {
    transform-origin: bottom;
    transition: transform 0.1s ease-out;
  }

  /* Styling for illustrations */
  .illustration {
    max-width: 500px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 0;
  }

  @media only screen and (max-width: 799px) {
    .flying-svg {
      max-width: 300px;
    }

    @media only screen and (max-width: 399px) {
      .flying-svg {
        max-width: 300px;
        overflow: hidden;
      }
    }
  }
</style>
