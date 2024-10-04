<script>
  import Header from "$lib/header/Header.svelte";
  import FlyingImage from "$lib/components/FlyingImage.svelte";
  import FlyingTwoImages from "$lib/components/FlyingTwoImages.svelte";
  import { onMount } from "svelte";
  import { startCountdown } from "$lib/countdowntimer.js";
  import { initBorderRadius } from "$lib/borderradius.js";
  import AnimatedText from "$lib/components/AnimatedText.svelte";

  let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };
  let targetDate = new Date("August 9, 2025 13:00:00").getTime();

  onMount(() => {
    const stopCountdown = startCountdown(targetDate, (newCountdown) => {
      countdown = newCountdown;
    });

    const cleanupBorderRadius = initBorderRadius(); // Initialize border-radius effect for each section

    return () => {
      stopCountdown();
      cleanupBorderRadius();
    };
  });
</script>

<Header />

<section class="scrolling-slider yellow-background secondary">
  <div class="content-wrapper yellow-background">
    <div class="square-background yellow-background">
      <iframe
        title="RSVP Form"
        src="https://app.youform.com/forms/tgqcho2u"
        loading="lazy"
        width="100%"
        height="700"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
      ></script>
      <script>
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-242466586250360']",
          "https://form.jotform.com/",
        );
      </script>
    </div>
  </div>
</section>

<style>
</style>
