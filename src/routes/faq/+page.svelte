<script>
  import { page } from "$app/stores"; // Import the page store from SvelteKit
  import Header from "$lib/header/Header.svelte";
  import Accordion from "$lib/components/Accordion.svelte";
  import { onMount, afterUpdate } from "svelte";
  import { initBorderRadius } from "$lib/borderradius.js";

  let keywordToOpen = null;

  // Reactively track the URL for changes
  $: {
    const urlParams = new URLSearchParams($page.url.search);
    keywordToOpen = urlParams.get("accordion"); // Get the keyword from the URL
  }

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
    <div class="top-background border-radius blue-background"></div>
    <div class="square-background blue-background">
      <div class="content content-overlap">
        <h2>Frågor och svar</h2>
        <div class="email">
          <p>Inte fått svar på din fråga? Skicka ett mejl till</p>
          <a
            href="mailto:brollop@momatsnoren.se"
            style="text-decoration: none; color: inherit;"
          >
            brollop@momatsnoren.se
          </a>
        </div>
        <div class="accordions">
          <Accordion
            Question="Hur bokar vi hotellrum?"
            responsePrimary="Vi rekommenderar varmt att bo på Ekenäs Havshotell – det är där festligheterna äger rum och det är helt klart smidigast att bo på plats. Vill ni kika på andra alternativ? Då är vårt tips att hålla er inom gångavstånd till Ekenäs på Sydkoster, så ni slipper missa något av helgens roligheter."
            responseSecondary="För att boka rum på Ekenäs behöver ni mejla hotellet direkt: bokning@ekenashavshotell.se. Skriv 'Henrik och Rebeccas bröllop' i ämnesraden och ange följande information: 1)  Vilket rum ni vill boka 2) Antal personer 3) Antal nätter inklusive ankomstdag. Hotellet kommer att svara så fort de hinner. Ni får ett autogenererat mejl direkt – oroa er inte, det riktiga svaret kommer inom kort! Här är rummen som finns att välja mellan:"
            listItems={[
              "Dubbelrum Superior, havsutsikt (24st) 2995:-/natt",
              "Dubbelrum Ekelunden, nybyggda (6st) 2995:-/natt",
              "Dubbelrum Kajutan (18st) 1995:-/natt",
              "Dubbelrum Standard (4 st) 1595:-/natt",
              "Trippelrum (8 st) 1595:-/rum",
              "Enkelrum (6st) 1695:-/natt",
            ]}
            Action={{
              label: "Läs mer om de olika rummen",
              url: "https://www.ekenashavshotell.se/hotellet",
              className: "button-link outline",
              isDarkBackground: true,
            }}
            keyword="hotel-booking"
            expanded={keywordToOpen === "hotel-booking"}
          />
          <Accordion
            Question="Vad gäller om jag vill hålla ett tal?"
            responsePrimary="Vill du hålla tal? Vad kul!
Börja fila på dina bästa stories – nu har vi instruktionerna på plats! Hör av dig till vår fantastiska toast madame Rebecka Gärderup på rgarderup@gmail.com eller +46 70 329 13 54."
            responseSecondary="Vi uppskattar om du håller dig kortfattad – så alla som vill får plats.
Skriv gärna några rader om vad du har tänkt dig till Rebecka, så kan hon pussla ihop kvällen på bästa sätt!"
          ></Accordion>

          <Accordion
            Question="Hur tar man sig till Koster?"
            responsePrimary="För att komma till Ekenäs på Sydkoster tar ni Kosterbåtarna som går från Strömstad Norra Hamnen. Vi har samlat all info på ett ställe så ni inte missar något."
            Action={{
              label: "Läs mer om hur man reser till Koster",
              url: "/koster",
              className: "button-link outline",
              isDarkBackground: true,
            }}
            keyword="hotel-booking"
            expanded={keywordToOpen === "travel"}
          ></Accordion>

          <Accordion
            Question="Vad är dresscoden?"
            responsePrimary="Vi kör på somrig elegans – tänk klänning, kostym eller något festligt. Gärna färgglatt som är bekvämt för en dag vid havet. Ta gärna med något extra varmt och ett paraflax om det skulle blåsa upp eller komma en skur (det är trots allt västkusten!)"
          ></Accordion>
          <Accordion
            Question="Kommer det finnas särskilda matalternativ?"
            responsePrimary="Självklart! Vi vill att alla ska kunna njuta av bröllopsmiddagen, oavsett matpreferenser eller allergier. Det kommer finnas både vegetariska och glutenfria alternativ, samt hänsyn till specifika allergier (som nötter, laktos, osv.)."
            responseSecondary="Om ni har några särskilda matpreferenser eller allergier som vi inte redan vet om, låt oss gärna veta i förväg i samband med att ni tackar ja så ser vi till att ni får något som passar er."
          ></Accordion>
          <Accordion
            Question="Hur är det med bröllopsgåvor?"
            responsePrimary="Vi uppskattar verkligen tanken, men vi vill vara tydliga: vi önskar oss inga fysiska gåvor. Att ni är med oss och firar på Koster är allt vi behöver! Eftersom vi kommer att vara på en ö, och låt oss vara ärliga – att frakta en brödrost eller en kristallvas över havet är inte direkt något vi vill utsätta er för, så det kan bli lite knepigt med transport och logistik."
            responseSecondary="Men om ni ändå vill ge något, har vi allt vi behöver hemma (utom möjligen ett större förråd för alla Henriks verktyg…). Ett bidrag till vår framtida resa skulle därför vara väldigt uppskattat. Vår fantastiska brudtärna Natalie kommer att administrera Swish-gåvorna. Ni kan swisha ert bidrag till henne på 0730542754."
          ></Accordion>
          <Accordion
            Question="Kan vi ta med barn?"
            responsePrimary="Vi älskar barn men vi har valt att göra bröllopet till en vuxenfest för att kunna slappna av och dansa till långt in på natten. Vi hoppas att ni ser det som en chans till en härlig barnfri helg. Med det sagt, förstår vi att ammande barn behöver följa med och de är självklart välkomna! Om ni tar med er ett ammande barn, låt oss veta i förväg så vi kan ordna allt på bästa sätt för er och er lilla."
          ></Accordion>
          <Accordion
            Question="Kommer det finnas transport till vigseln och tillbaka?"
            responsePrimary="Vigseln hålls i Kosters Kyrka, och efter ceremonin rör vi oss mot Ekenäs Havshotell för mingel och middag. Kyrkan ligger ungefär 2 kilometer från hotellet, och en promenad genom det vackra landskapet är nästan en del av upplevelsen. Det finns inga bilar på ön – cykel eller promenad är det vanligaste sättet att ta sig runt."
            responseSecondary="Vi är omkring 65 gäster och har bokat Kostertåget som kan ta upp till 45 passagerare. Om du kan tänka dig att promenera är det toppen – då räcker skjutsen till dem som behöver den allra mest. Och om du vet att det blir svårt att gå, hör gärna av dig i förväg så ser vi till att du kommer fram utan problem."
          ></Accordion>
          <Accordion
            Question="Vad händer om det regnar?"
            responsePrimary="Vi hoppas på strålande sol men västkustväder kan vara lite oförutsägbart! Om regnet skulle göra entré har vi såklart en plan B. Minglet flyttas inomhus och festen rullar på som planerat i skydd från vädret."
            responseSecondary="Men eftersom vi ändå kommer behöva röra oss mellan olika platser utomhus (och vädret kan skifta snabbt på Koster), rekommenderar vi att ni tar med er ett paraply och kanske en regnjacka. Vi vill att ni ska kunna njuta av helgen oavsett väder. Med ett paraply i handen blir även en regnskur lite mysigare!"
          ></Accordion>
          <Accordion
            Question="Vem gäller inbjudan för?"
            responsePrimary="Inbjudan är till dig och din partner om du har en. Om du funderar på att ta med någon vi inte hunnit träffa än får du gärna höra av dig. Vi vill gärna veta vilka vi ska fira dagen med och ser fram emot att skåla med er!"
          />
          <Accordion
            Question="Vad gör vi om vi vill stanna längre än bröllopshelgen?"
            responsePrimary="Om ni vill stanna lite längre och utforska mer av Kosteröarna – då har ni gjort ett bra val! Både Sydkoster och Nordkoster är små nog för att hinna med båda under samma resa. De förbinds med en linfärja, så det är enkelt att ta sig mellan öarna."
            responseSecondary="Om ni vill uppleva den magi vi älskar med Koster är en tur till Nordkoster ett måste. Det är mindre än Sydkoster men har oslagbara vyer och ett lugn som får vardagen att kännas långt borta. Om ni planerar att stanna längre kan ni boka fler dagar. Ekenäs Havshotell är ett alternativ, men det finns också mysiga stugor och pensionat på båda öarna – det är enkelt att njuta av båda världarna!"
          ></Accordion>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .content h2 {
    color: var(--pure-white);
  }
  .content p {
    color: var(--text-blue);
  }

  .content a {
    color: var(--pure-white) !important;
    text-decoration: underline !important;
  }

  .email {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .accordions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
