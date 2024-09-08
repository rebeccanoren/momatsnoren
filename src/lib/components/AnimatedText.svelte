<script>
  import LinkButton from "./LinkButton.svelte"; // Import LinkButton
  export let className = "";
  export let subtitle = ""; // Prop for h3
  export let title = ""; // Prop for h2
  export let content = ""; // Prop for paragraph
  export let subheading = ""; // Prop for paragraph
  export let content2 = ""; // Prop for paragraph
  export let content3 = ""; // Prop for paragraph
  export let action1 = null; // Prop for action 1 (button or link)
  export let action2 = null; // Prop for action 2 (button or link)

  let visibility = 0; // Track visibility percentage (intersectionRatio)
  let hasReachedFinalPosition = false; // Track if the element has reached translateY(0px)

  // Function to calculate opacity based on visibility
  function calculateOpacity(visibility) {
    return Math.pow(visibility, 10); // Cubing visibility to make it fade out faster
  }

  // Function to observe element visibility using IntersectionObserver
  function observe(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility = entry.intersectionRatio; // Update visibility

          // Fix the element's position once it reaches translateY(0px)
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            hasReachedFinalPosition = true;
          }
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i * 0.01) }, // Thresholds from 0 to 1 (0%, 1%, ..., 100%)
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      },
    };
  }
</script>

<div class="wrapper {className}" use:observe>
  <div
    class="box"
    style="
      opacity: {calculateOpacity(visibility)};
      transform: translateY({hasReachedFinalPosition
      ? 0
      : 50 * (1 - visibility)}px);
    "
  >
    {#if subtitle}
      <h3>{subtitle}</h3>
    {/if}

    {#if title}
      <h2>{title}</h2>
    {/if}

    {#if content}
      <p>{content}</p>
    {/if}

    {#if subheading}
      <h4>{subheading}</h4>
    {/if}

    {#if content2}
      <p>{content2}</p>
    {/if}

    {#if content3}
      <p>{content3}</p>
    {/if}

    <div class="button-wrapper">
      {#if action1}
        <!-- Always use LinkButton for both internal and external links -->
        <LinkButton
          url={action1.url}
          label={action1.label}
          className={action1.className || "default-class"}
        />
      {/if}

      {#if action2}
        <LinkButton
          url={action2.url}
          label={action2.label}
          className={action2.className || "default-class"}
        />
      {/if}
    </div>
  </div>
</div>

<style>
  .wrapper {
    margin-top: 30px;
  }

  .button-wrapper {
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }

  .box {
    margin: auto;
    opacity: 0; /* Start hidden */
    transform: translateY(50px); /* Start below by 50px */
    transition:
      opacity 0.5s ease,
      transform 0.5s ease; /* Smooth opacity and transform transition */
  }

  @media only screen and (max-width: 799px) {
    .button-wrapper {
      flex-direction: column;
    }
  }
</style>
