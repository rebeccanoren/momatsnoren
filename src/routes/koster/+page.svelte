<script>
  import Header from "$lib/header/Header.svelte";
  import FlyingImage from "$lib/components/FlyingImage.svelte";
  import { onMount, afterUpdate } from "svelte";
  import { startCountdown } from "$lib/countdowntimer.js";
  import { initBorderRadius } from "$lib/borderradius.js";
  import AnimatedText from "$lib/components/AnimatedText.svelte";
  import Map from "$lib/components/Map.svelte";

  onMount(() => {
    initBorderRadius(); // Initialize border-radius effect for each section
  });

  afterUpdate(() => {
    initBorderRadius(); // Reapply border-radius effect after each DOM update
  });
</script>

<Header />

<!-- First Section: Image and Animated Text -->
<section class="scrolling-slider beige secondary">
  <div class="content-wrapper beige">
    <div class="top-background border-radius white-background"></div>
    <div class="square-background white-background">
      <div class="content content-overlap row">
        <div class="text-wrapper">
          <AnimatedText
            title="Koster – en bilfri ö och skärgårdsidyll"
            content="Kosteröarna är inte bara en naturskön oas mitt i havet, de är också bilfria. Det gör att allt sker i ett lite lugnare tempo men det kan också göra resan lite krångligare än vanligt. Just därför har vi bjudit in alla gäster redan från fredagen så ni kan slappna av och njuta av helgen utan stress."
            content2="På Koster tar man sig runt till fots eller med cykel. Men vi vill att ni är förberedda på lite extra logistik och planering inför helgen. Ge er själva gott om tid att resa och börja njuta av er vistelse redan från start!"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="scrolling-slider white-background secondary">
  <div class="content-wrapper white-background">
    <div class="top-background border-radius yellow-background"></div>
    <div class="square-background yellow-background">
      <div class="content content-overlap row">
        <!-- Image on the left -->
        <div class="content-image">
          <FlyingImage
            src="kostervag.jpg"
            alt="Kosterbåtarna"
            imageClass="image"
          />
        </div>
        <!-- Text on the right -->
        <div class="text-wrapper">
          <AnimatedText
            title="Hur tar man sig till Koster?"
            content="För att ta er till Ekenäs måste ni hoppa på Kosterbåtarna som körs av Västtrafik. De avgår från Strömstad Norra Hamnen och tar er över till Ekenäs på Sydkoster på ungefär 40 minuter. Kolla tidtabellen i förväg – ni vill ju inte stå kvar på land när båten glider iväg!"
            content2="Och ett hett tips: Ladda ner Västtrafiks app! Där kan ni enkelt köpa biljetter och hålla koll på avgångar, utan att behöva stressa i hamnen. Finns för både iOS och Android – så ni kan fixa allt i lugn och ro innan ni ens når kajen."
            action1={{
              label: "Sök båtresor",
              url: "https://www.vasttrafik.se/reseplanering/reseplaneraren/",
              className: "button-link light",
            }}
            action2={{
              label: "Ladda ner Västtrafiks app",
              url: "https://www.vasttrafik.se/biljetter/mer-om-biljetter/vasttrafik-to-go/",
              className: "button-link light",
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="scrolling-slider yellow-background secondary">
  <div class="content-wrapper yellow-background">
    <div class="top-background border-radius white-background"></div>
    <div class="square-background white-background">
      <div class="content content-overlap row">
        <div class="text-wrapper">
          <AnimatedText
            title="Bästa sättet att ta sig till Strömstad"
            content="Ett smidigt alternativ är att ta tåget, då slipper ni oroa er för parkering. Strömstad station ligger bara en kort promenad från Norra Hamnen där båten till Koster avgår. Vi rekommenderar att ni ger er själva minst en timmes marginal innan båten går – bättre att vänta än att stressa!"
            content2="Om ni tar bilen är ett bra tips att köra förbi Norra Hamnen. Lasta av era grejer vid kajen och sedan parkera på någon av långtidsparkeringarna i närheten. Det gör resan enklare och mindre stressig."
            action1={{
              label: "Hitta parkeringsplplats",
              url: "https://www.stromstad.se/trafikochinfrastruktur/trafikochgator/parkeraistromstad/tipsfordigsomskatillkoster.4.4ca260c0179effeb59210636.html",
              className: "button-link light",
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="scrolling-slider white-background secondary">
  <div class="content-wrapper white-background">
    <div class="top-background border-radius beige-background"></div>
    <div class="square-background beige-background">
      <div class="content content-overlap row">
        <Map />

        <AnimatedText
          title="Upptäck Kosteröarna"
          content="Spana in kartan där ni kan hitta viktiga platser för bröllopshelgen. Zooma och navigera runt för att hitta Kosters Kyrka, Ekenäs Havshotell och Kosters Rökeri. Se till att ha koll på dessa platser för att inte gå vilse!"
          action1={{
            label: "Visa detaljerad karta",
            url: "/karta",
            className: "button-link light",
          }}
        />
      </div>
    </div>
  </div>
</section>

<style>
</style>
