<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition"; // Import the slide transition
  import LinkButton from "./LinkButton.svelte"; // Import LinkButton

  let expanded = false; // Controls the open/close state
  let isIconRotated = false; // Controls the rotation of the expand icon

  export let Question = ""; // Main question or title
  export let responsePrimary = ""; // First response
  export let responseSecondary = ""; // Second response
  export let Action = null; // Single action (button or link)

  const dispatch = createEventDispatcher();

  function toggleAccordion() {
    expanded = !expanded;
    isIconRotated = !isIconRotated;
    dispatch("toggle", { expanded });
  }
</script>

<div class="accordion {expanded ? 'open' : ''}">
  <button type="button" class="accordion-summary" on:click={toggleAccordion}>
    <div class="accordion-content">
      <h3>{Question}</h3>
    </div>
    <img
      src="/expand-more-white.svg"
      alt="Expand Icon"
      class="icon {isIconRotated ? 'rotate' : ''}"
    />
  </button>

  <!-- Apply the slide transition to the accordion details -->
  {#if expanded}
    <div class="accordion-details" transition:slide>
      {#if responsePrimary}
        <p>{responsePrimary}</p>
      {/if}

      {#if responseSecondary}
        <p>{responseSecondary}</p>
      {/if}

      {#if Action}
        <div class="button-wrapper">
          <LinkButton
            url={Action.url}
            label={Action.label}
            className={Action.className || "default-class"}
          />
        </div>
      {/if}

      <slot></slot>
    </div>
  {/if}
</div>

<style>
  .accordion {
    border-bottom: 1px solid RGB(255, 255, 255, 0.2);
    width: 90vh;
  }

  .accordion-summary {
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    cursor: pointer;
    border-radius: 0px;
    background: none;
    border: none;
    width: 100%;
    color: var(--pure-white);
  }

  .accordion-content {
    color: var(--pure-white);
    display: flex;
    text-align: left;
  }

  .accordion-details {
    padding: 8px 0;
    overflow: hidden;
    text-align: left;
    color: var(--pure-white);
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  .icon.rotate {
    transform: rotate(180deg);
  }

  .button-wrapper {
    margin: 32px 0;
  }

  @media only screen and (max-width: 799px) {
    .accordion {
      width: 80%;
    }
  }
  @media only screen and (max-width: 399px) {
    .accordion {
      width: 80%;
    }
  }
</style>
