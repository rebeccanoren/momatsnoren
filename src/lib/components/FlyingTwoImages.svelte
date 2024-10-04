<script>
  import { onMount, onDestroy } from "svelte";

  export let src1 = ""; // Path to the first image
  export let alt1 = ""; // Alt text for the first image
  export let imageClass1 = ""; // Class for the first image

  export let src2 = ""; // Path to the second image
  export let alt2 = ""; // Alt text for the second image
  export let imageClass2 = ""; // Class for the second image

  let scrollY = 0; // Current scroll position
  let transform1 = ""; // CSS transform applied to the first image
  let transform2 = ""; // CSS transform applied to the second image

  // Function to calculate transformation for the first image based on scroll
  const calculateTransform1 = () => {
    const translateY1 = scrollY * -0.125; // Adjust for Y movement
    const rotateDeg1 = scrollY * 0.015; // Adjust rotation factor
    transform1 = `translate3d(0px, ${translateY1}%, 0px) rotate(${rotateDeg1}deg)`;
  };

  // Function to calculate transformation for the second image based on scroll
  const calculateTransform2 = () => {
    const translateY2 = scrollY * -0.05; // Different Y movement factor
    const rotateDeg2 = scrollY * -0.012; // Different rotation factor
    transform2 = `translate3d(0px, ${translateY2}%, 0px) rotate(${rotateDeg2}deg)`;
  };

  const handleScroll = () => {
    scrollY = window.scrollY; // Capture scroll position
    calculateTransform1(); // Apply transform to the first image
    calculateTransform2(); // Apply transform to the second image
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    }
  });
</script>

<div class="flying-image-container">
  <!-- First image with its own transformation -->
  <img
    src={src1}
    alt={alt1}
    class={`flying-image ${imageClass1}`}
    style="transform: {transform1};"
  />

  <!-- Second image with its own transformation -->
  <img
    src={src2}
    alt={alt2}
    class={`flying-image ${imageClass2}`}
    style="transform: {transform2};"
  />
</div>

<style>
  .flying-image-container {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: -8px;
  }

  .flying-image-container img:first-child {
    transform: rotate(-4deg);
  }

  .flying-image-container img:nth-child(2) {
    transform: rotate(5deg);
  }

  .flying-image {
    max-width: 400px;
    transform-origin: bottom;
    transition: transform 0.1s ease-out;
  }

  @media only screen and (max-width: 799px) {
    .flying-image-container {
      gap: 0px;
    }

    .flying-image {
      max-width: 200px;
    }
  }

  @media only screen and (max-width: 399px) {
    .flying-image {
      max-width: 120px;
      border-radius: 12px;
    }
  }
</style>
