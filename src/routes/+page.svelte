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

<section class="scrolling-slider beige secondary">
  <div class="content-wrapper beige">
    <div class="top-background border-radius yellow-background"></div>
    <div class="square-background yellow-background">
      <div class="content content-overlap">
        <FlyingTwoImages
          src1="rebecca.jpg"
          alt1="Rebecca"
          imageClass1="image"
          src2="henrik.jpg"
          alt2="Henrik och Rebecca"
          imageClass2="image"
        />

        <div class="text-wrapper">
          <AnimatedText
            title="Vi gifter oss!"
            content="Okej, vi erkänner – det tog ett tag men som man säger: långsamt byggs det bästa kärleksslottet (eller något sånt). Efter att ha varit tillsammans i 10 år är det nu äntligen dags att knyta ihop säcken! Den 9 augusti 2025 gör vi det officiellt på Kosteröarna. Eftersom en dag inte räcker kör vi på en hel bröllopshelg som ni inte vill missa. Vi lovar en helg fylld av kärlek, skratt och dans! Här hittar ni all info så att ni vet precis vad som händer, när det händer och hur ni bäst njuter av er tid."
            action1={{
              label: "Se hela helgens schema här!",
              url: "/schema",
              className: "button-link light",
            }}
          />
        </div>
      </div>
    </div>
  </div>

  <div class="time-counter">
    {#if !countdown.expired}
      <h3>Nedräkningen har börjat...</h3>
      <p>
        {countdown.days} Dagar, {countdown.hours} Timmar, {countdown.minutes} Minuter,
        {countdown.seconds} Sekunder
      </p>
    {:else}
      <p>Vi är gifta ❤️‍🔥</p>
    {/if}
  </div>

  <div class="content-wrapper dark-blue-background">
    <div class="top-background border-radius salmon-background"></div>
    <div class="square-background salmon-background">
      <div class="content content-overlap salmon-background">
        <div class="content-illustration">
          <FlyingImage
            src="rebecca-henrik-kajak.jpg"
            alt="Henrik och Rebecca paddlar kajak"
            imageClass="image"
          />
        </div>
        <div class="text-wrapper">
          <AnimatedText
            className="salmon"
            title="Varför Koster?"
            content="Det är en plats som är svår att beskriva utan att låta som en turistbroschyr – naturreservat mitt i havet, fantastiska vyer och en känsla av lugn som är svår att hitta någon annanstans. Bara en sådan sak!"
            content2="Henriks familj har en särskild relation till Koster. I ungefär 50 år har de hyrt samma stuga, en riktig pärla utan vare sig toalett eller varmvatten. Här snackar vi att leva nära naturen på riktigt – duscha i havet och göra det bästa av situationen. Men det är just det som gör Koster så magiskt. Det är en plats där havsbrisen är det enda man behöver bry sig om."
            content3="Och eftersom Rebecca är från västkusten blev det en självklarhet. (Okej, hon hade en kort dröm om att gifta sig på en vingård i Frankrike men den skrotades rätt snabbt) När det var dags att välja plats för vårt bröllop fanns det bara ett alternativ. Koster är vår plats."
          />
        </div>
      </div>
    </div>
  </div>

  <div class="content-wrapper salmon-background">
    <div class="top-background border-radius yellow-background"></div>
    <div class="square-background yellow-background">
      <div class="content content-overlap">
        <div class="content-image">
          <FlyingImage
            src="henrikrebecca-2.jpg"
            alt="Henrik och Rebecca för många år sedan"
            imageClass="image"
          />
        </div>
        <div class="text-wrapper">
          <AnimatedText
            title="Hur allt började"
            content="Första gången Rebecca besökte ön var 2017 eller kanske 2018? Det var i alla fall den sommaren då Henrik råkade ut för salmonella efter en tveksam kycklingsmörgås inköpt på en bensinstation i Portugal (rekommenderas inte!). Vi flög direkt från Portugal till Koster och Henrik låg däckad, likblek och utslagen i över en vecka."
            content2="När Henrik äntligen piggnade till fick vi upptäcka den magiska ön tillsammans. Bilden ni ser här ovan är faktiskt från vår första resa till Koster, när Henrik var tillbaka på fötter. Trots den lite kaotiska starten har vi återvänt nästan varje år sedan dess."
            action1={{
              label: "Kommer du? OSA!",
              url: "/osa",
              className: "button-link light",
            }}
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
