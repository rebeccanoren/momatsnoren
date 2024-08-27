<script>
  export let subtitle = ""; // Prop for h3
  export let title = ""; // Prop for h2
  export let content = ""; // Prop for paragraph

  let visibility = 0; // Track visibility percentage (intersectionRatio)
  let hasReachedFinalPosition = false; // Track if the element has reached translateY(0px)

  // Function to calculate opacity based on visibility, fading out faster
  function calculateOpacity(visibility) {
    return Math.pow(visibility, 3); // Cubing visibility to make it fade out faster
  }

  // Function to observe element visibility using IntersectionObserver
  function observe(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update if the element hasn't reached its final position
          if (!hasReachedFinalPosition) {
            visibility = entry.intersectionRatio; // Update visibility

            // If visibility is 1 (fully visible), mark as reached final position
            if (visibility >= 1) {
              hasReachedFinalPosition = true;
            }
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
  <div
    class="box"
    style="
      opacity: {calculateOpacity(visibility)};
      transform: translateY({hasReachedFinalPosition ? 0 : 50 * (1 - visibility)}px);
    "
  >
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
    transform: translateY(50px); /* Start below by 50px */
    transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth opacity and translate transition */
  }
</style>
