<script>
  export let subtitle = ""; // Prop for h3
  export let title = ""; // Prop for h2
  export let content = ""; // Prop for paragraph

  let visibility = 0; // Track visibility percentage (intersectionRatio)
  let previousVisibility = 0; // Track previous visibility to detect scroll direction

  // Custom function to calculate opacity based on visibility (fades out even faster)
  function calculateOpacity(visibility) {
    // Apply cubic scaling to visibility to decrease opacity even faster
    return Math.pow(visibility, 8); // Cubic scaling makes it fade out aggressively
  }

  // Function to observe element visibility using IntersectionObserver
  function observe(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          previousVisibility = visibility; // Store previous visibility
          visibility = entry.intersectionRatio;

          // Check if the element is becoming more visible (scrolling in from the bottom)
          if (visibility > previousVisibility) {
            node.classList.add('slide-up-opacity'); // Apply slide up and fade in
          } else {
            node.classList.remove('slide-up-opacity'); // Only fade out (no sliding)
          }
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i * 0.01) } // Creates an array of thresholds from 0 to 1 (0%, 1%, ..., 100%)
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
</script>

<div class="wrapper" use:observe>
  <div class="box" style="opacity: {calculateOpacity(visibility)}">
    <h3>{subtitle}</h3>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
</div>

<style>
  .wrapper {
    margin-top: 30px;
  }

  .box {
    margin: auto;
    opacity: 0; /* Start hidden */
    transform: translateY(0); /* Default transform */
    transition: opacity 0.2s ease, transform 0.5s ease; /* Faster opacity transition */
  }

  /* Slide up and fade in when the element is becoming visible (from the bottom) */
  .slide-up-opacity {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Slide up to its original position */
  }
</style>
