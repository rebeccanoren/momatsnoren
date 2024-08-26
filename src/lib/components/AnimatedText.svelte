<script>
  export let subtitle = ""; // Prop for h3
  export let title = ""; // Prop for h2
  export let content = ""; // Prop for paragraph

  let isInView = false; // Track if the content is in view

  // Observer function to trigger when the content comes into view
  function observe(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInView = true; // Set to true when the element enters the view
          } else {
            isInView = false; // Set to false when the element exits the view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
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
  <div class="box {isInView ? 'slide-up-opacity' : ''}">
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
    transform: translateY(100px); /* Start 100px below its normal position (increased distance) */
    transition: opacity 1s ease, transform 1s ease; /* Slower transition for both opacity and position */
  }

  .slide-up-opacity {
    opacity: 1; /* Become visible */
    transform: translateY(0); /* Slide up to its original position */
  }
</style>
