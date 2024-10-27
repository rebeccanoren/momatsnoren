<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import LinkButton from "./LinkButton.svelte";

  let isIconRotated = false;
  let accordionElement;

  export let keyword = "";
  export let Question = "";
  export let responsePrimary = "";
  export let listItems = [];
  export let responseSecondary = "";
  export let Action = null;
  export let expanded = false;

  const dispatch = createEventDispatcher();

  function toggleAccordion() {
    expanded = !expanded;
    isIconRotated = !isIconRotated;
    dispatch("toggle", { expanded });

    if (expanded) {
      accordionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

<div
  class="accordion {expanded ? 'open' : ''}"
  bind:this={accordionElement}
  data-keyword={keyword}
>
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

  {#if expanded}
    <div class="accordion-details" transition:slide>
      {#if responsePrimary}
        <p>{responsePrimary}</p>
      {/if}

      {#if listItems.length > 0}
        <ul>
          {#each listItems as item}
            <li>{item}</li>
          {/each}
        </ul>
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
            isDarkBackground={Action.isDarkBackground || false}
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

  ul {
    padding-left: 20px;
    list-style-type: disc;
    margin: 16px 0;
  }

  li {
    margin-bottom: 8px;
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
