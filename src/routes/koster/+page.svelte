<script>
  import Header from "$lib/header/Header.svelte";
  import FlyingImage from "$lib/components/FlyingImage.svelte";
  import { onMount, afterUpdate } from "svelte";
  import { startCountdown } from "$lib/countdowntimer.js";
  import { initBorderRadius } from "$lib/borderradius.js";
  import AnimatedText from "$lib/components/AnimatedText.svelte";
  import Map from "$lib/components/Map.svelte";
</script>

<Header />

<section class="scrolling-slider dark-blue-background secondary">
  <div class="content-wrapper dark-blue-background"></div>
</section>

<style>
</style>
