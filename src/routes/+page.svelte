<script>
  import Header from '$lib/header/Header.svelte';
  import FlyingImage from '$lib/components/FlyingImage.svelte';
  import FlyingTwoImages from '$lib/components/FlyingTwoImages.svelte';
  import { onMount } from 'svelte';
  import { startCountdown } from '$lib/countdowntimer.js';
  import { initBorderRadius } from '$lib/borderradius.js';
  import AnimatedText from '$lib/components/AnimatedText.svelte';

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

<section class="scrolling-slider beige secondary">
  <div class="content-wrapper beige">
    <div class="top-background border-radius yellow-background"></div>
    <div class="square-background yellow-background">
      <div class="content content-overlap">
        <div class="content-image">
          <FlyingTwoImages 
            src1="rebecca.jpg" 
            alt1="Rebecca" 
            imageClass1="image" 
            src2="henrik.jpg" 
            alt2="Henrik och Rebecca" 
            imageClass2="image" 
          />
        </div>

        <div class="text-wrapper">
          <AnimatedText
            subtitle="Subtitle"
            title="Vi gifter oss!"
            content="Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för att hänga med oss innan den stora dagen på lördagen."
          />
        </div>
      </div>
    </div>
  </div>

  <div class="time-counter">
    {#if !countdown.expired}
      <h3>Nedräkning...</h3>
      <p>{countdown.days} Dagar, {countdown.hours} Timmar, {countdown.minutes} Minuter, {countdown.seconds} Sekunder</p>
    {:else}
      <p>Vi är gifta ❤️‍🔥</p>
    {/if}
  </div>

  <div class="content-wrapper dark-blue-background">
    <div class="top-background border-radius white-background"></div>
    <div class="square-background white-background">
      <div class="content content-overlap white-background">
        <div class="content-illustration">
          <FlyingImage src="kosterskyrka.png" alt="Kosters Kyrka" imageClass="illustration" /> 
        </div>
        <div class="text-wrapper">
			<AnimatedText
            subtitle="Subtitle"
            title="Huvudtitel till andra sektionen"
            content="Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag
            på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för
            att hänga med oss innan den stora dagen på lördagen."
          />
    
        </div>
      </div>
    </div>
  </div>

  <div class="content-wrapper white-background">
    <div class="top-background border-radius beige-background"></div>
    <div class="square-background beige-background">
      <div class="content content-overlap">
        <div class="content-image">
          <FlyingImage src="henrikrebecca.jpg" alt="Henrik och Rebecca" imageClass="image" /> 
        </div>
        <div class="text-wrapper">
			<AnimatedText
            title="Huvudtitel till tredje sektionen"
            content="Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag
            på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för
            att hänga med oss innan den stora dagen på lördagen."
          />
    
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .time-counter {
    background-color: var(--dark-blue);
    color: var(--beige);
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }
</style>
