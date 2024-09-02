<script>
  import Header from '$lib/header/Header.svelte';
  import FlyingImage from '$lib/components/FlyingImage.svelte';
  import DaySelector from '$lib/components/DaySelector.svelte';
  import { onMount, afterUpdate } from 'svelte';
  import { startCountdown } from '$lib/countdowntimer.js';
  import { initBorderRadius } from '$lib/borderradius.js';
  import AnimatedText from '$lib/components/AnimatedText.svelte';

  let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };
  let targetDate = new Date("August 9, 2025 13:00:00").getTime();

  let selectedDay = 'Fredag'; // Default day

  onMount(() => {
      const stopCountdown = startCountdown(targetDate, (newCountdown) => {
          countdown = newCountdown;
      });

      initBorderRadius(); // Initialize border-radius effect for each section

      return () => {
          stopCountdown();
      };
  });

  afterUpdate(() => {
      initBorderRadius(); // Reapply border-radius effect after each DOM update
  });

  const days = ['Fredag', 'Lördag', 'Söndag'];

  function handleDaySelection(day) {
      selectedDay = day;
  }
</script>

<Header />

<section class="scrolling-slider dark-blue-background secondary">
    
    <div class="content-wrapper dark-blue-background">
   
            <DaySelector {days} bind:selectedDay on:selectDay={handleDaySelection} />
        
            {#if selectedDay === 'Fredag'}
            <div class="content-wrapper dark-blue-background">
                <div class="top-background border-radius beige-background"></div>
                <div class="square-background-small beige-background">
                  <div class="content content-overlap-small beige-background">
                    <div class="content-illustration">
                        <FlyingImage src="ekenas.png" alt="Kosters Kyrka" imageClass="illustration" /> 
                    </div>
                    <div class="text-wrapper">
                        <AnimatedText
                        subtitle="Från kl 15:00"
                        title="Incheckning Ekenäs Havshotell"
                        content="Vi ser fram emot att fira denna otroliga helg med er! Ni är varmt välkomna att checka in från kl. 15:00 på fredagen den 8 augusti. Passa på att njuta av en härlig helg tillsammans med oss. För mer information om hur ni bokar hotellrum, vänligen läs vidare."
                      />
                      <a href="https://maps.app.goo.gl/L8pRLxcTtyUTEtpM7" target="_blank">Hur du bokar hotellrum</a>
                      <a href="https://maps.app.goo.gl/Tptc9CPWWyPCQp7x8" rel="external" target="_blank">Visa Ekenäs Havshotell på Google Maps</a>
                
                
                    </div>
                  </div>
                </div>
              </div>         <div class="content-wrapper beige-background">
                <div class="top-background border-radius white-background"></div>
                <div class="square-background white-background">
                  <div class="content content-overlap-small white-background">
                    <div class="content-illustration">
                      <FlyingImage src="kostersrokeri.png" alt="Kosters Kyrka" imageClass="illustration" /> 
                    </div>
                    <div class="text-wrapper">
                        <AnimatedText
                        subtitle="20:30"
                        title="Middag på Kosters Rökeri"
                        content="Vi bjuder på middag! Se fram emot en avslappnad kväll på Kosters Rökeri, en av våra favoritrestauranger. På menyn står fyllda baguetter med skagenröra, noggrant tillagade av deras grymma kök. För er som behöver det finns självklart glutenfria och vegetariska alternativ.  Restaurangen ligger ca 300 meter från Ekenäs Havshotell."
                      />
                     
                

                      <a href="https://maps.app.goo.gl/PQQF8Xy3kfs6Y5Zs7" rel="external" target="_blank">Visa Kosters Rökeri på Google Maps</a>
                
                    </div>
                  </div>
                </div>
              </div>
            {:else if selectedDay === 'Lördag'}

<div class="content-wrapper dark-blue-background">
            <div class="top-background border-radius beige-background"></div>
            <div class="square-background beige-background">
              <div class="content content-overlap">
                <div class="text-wrapper">
                  <AnimatedText
                    subtitle="Subtitle"
                    title="Vi gifter oss!"
                    content="Vi gifter oss på vackra Sydkoster i en liten kyrka mitt på ön. Efteråt väntar en härlig middag på Ekenäs Havshotell och sedan fest på Kosters Rökeri! Kom gärna redan på fredagskvällen för att hänga med oss innan den stora dagen på lördagen."
                  />
                </div>
              </div>
            </div></div>

            {:else if selectedDay === 'Söndag'}
              <div>
                <h2>Schedule for Söndag</h2>
                <p>This is the content for Söndag.</p>
              </div>
            {/if}
        </div>


      </section>
<style>


</style>
