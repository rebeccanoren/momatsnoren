<script>
  import Header from "$lib/header/Header.svelte";
  import FlyingImage from "$lib/components/FlyingImage.svelte";
  import DaySelector from "$lib/components/DaySelector.svelte";
  import { onMount, afterUpdate } from "svelte";
  import { initBorderRadius } from "$lib/borderradius.js";
  import AnimatedText from "$lib/components/AnimatedText.svelte";
  import ConfettiEffect from "$lib/components/ConfettiEffect.svelte";
  import { selectedDay } from "$lib/selectedDayStore.js"; // Import the store

  let confettiTrigger = false;

  function handleMouseEnter() {
    confettiTrigger = true;
  }

  function handleMouseLeave() {
    confettiTrigger = false;
  }

  const days = ["Fredag", "Lördag", "Söndag"];

  // Reset selectedDay on mount to ensure the default day is set
  onMount(() => {
    selectedDay.reset(); // Set the default day based on the store’s initial logic
    initBorderRadius();
  });

  afterUpdate(initBorderRadius);

  // Reactive statement to update content based on `selectedDay`
  $: dayContent =
    $selectedDay === "Fredag"
      ? "fridayContent"
      : $selectedDay === "Lördag"
        ? "saturdayContent"
        : "sundayContent";
</script>

<Header />

<section class="scrolling-slider dark-blue-background secondary">
  <div class="content-wrapper dark-blue-background">
    <DaySelector {days} bind:selectedDay={$selectedDay} />

    {#if dayContent === "fridayContent"}
      <div class="content-wrapper dark-blue-background">
        <div class="top-background border-radius beige-background"></div>
        <div class="square-background-small beige-background">
          <div class="content content-overlap-small beige-background">
            <div class="content-illustration">
              <FlyingImage
                src="ekenas.png"
                alt="Kosters Kyrka"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="Från kl 15:00"
                title="Incheckning Ekenäs Havshotell"
                content="Vi fixat så att alla får plats på Ekenäs Havshotell – en plats där havsbrisen styr klockan och tiden går i slow motion. Checka in från 15:00, släpp väskorna och gör er redo för fredagsmys. Kanske gå en promenad längs stranden eller en drink på terrassen medan ni njuter av atmosfären. Och för dig som gärna kollar upp saker i förväg:"
                action1={{
                  url: "/faq?accordion=hotel-booking",
                  label: "Hur du bokar hotellrum",
                  className: "button-link light",
                }}
                action2={{
                  label: "Ekenäs Havshotell på Google Maps",
                  url: "https://maps.app.goo.gl/Tptc9CPWWyPCQp7x8",
                  className: "button-link external-button light",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper beige-background">
        <div class="top-background border-radius white-background"></div>
        <div class="square-background white-background">
          <div class="content content-overlap-small white-background">
            <div class="content-illustration">
              <FlyingImage
                src="kostersrokeri.png"
                alt="Kosters Kyrka"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="~20:30"
                title="Middag på Kosters Rökeri"
                content="Fredagsmiddagen är på oss. Vi har bord på Kosters Rökeri, 
                ett ställe vi älskar och där vi har beställt deras signaturrätt: baguetter fyllda med skagenröra. 
                Är ni inte fans av skaldjur? Oroa er inte, det finns vegetariska och glutenfria alternativ – ingen ska gå hungrig här! Och vad gäller drycken? Ni köper det ni vill på plats – oavsett vad ni är sugna på så finns det något för alla törstiga själar. Ni hittar restaurangen bara 300 meter från hotellet. En promenad med havsdoft på köpet!"
                action1={{
                  label: "Kosters Rökeri på Google Maps",
                  url: "https://maps.app.goo.gl/PQQF8Xy3kfs6Y5Zs7",
                  className: "button-link external-button light",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    {:else if dayContent === "saturdayContent"}
      <div class="content-wrapper dark-blue-background">
        <div class="top-background border-radius white-background"></div>
        <div class="square-background-small white-background">
          <div class="content content-overlap-small white-background">
            <div class="content-illustration">
              <FlyingImage
                src="ekenas.png"
                alt="Ekenäs Havshotell"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="Från 08:00"
                title="Frukostmys och lunch i farten"
                content="Efter gårdagens bravader vaknar ni upp till en hotellfrukost som inte går att motstå. Tänk nybakat bröd, färska juicer och allt annat gott som får er att gå tillbaka för en andra omgång. Perfekt sätt att starta dagen och ladda inför det som komma skall!"
                subheading="Och vad gäller lunch?"
                content2="Medan vi är fullt upptagna med att göra oss redo inför bröllopet (lugn, vi har allt under kontroll – typ), så får ni klara er själva. Hotellet har fixat goda wraps som ni kan plocka med er. Perfekt att ta med på en liten promenad eller bara chilla med på hotellet. Lunchen är er egen tid!"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper white-background">
        <div class="top-background border-radius beige-background"></div>
        <div class="square-background beige-background">
          <div class="content content-overlap-small beige-background">
            <div class="content-illustration">
              <FlyingImage
                src="kosterskyrka.png"
                alt="Kosters Kyrka"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="~13:00 (preliminär tid)"
                title="Vigsel i Kosters Kyrka"
                content="Nu händer det – vi säger ja till varandra i den vackra Kosters Kyrka som ligger 2 km från Ekenäs Havshotell. Med kärlek i luften och en och annan glädjetår (solglasögon och näsdukar kan vara bra att ha), blir vi herr och fru Momats Norén. Det är ögonblicket då vi officiellt delar allt – från Netflix-lösenord till vardagsäventyr. Missa inte det!"
                action1={{
                  label: "Kosters Kyrka på Google Maps",
                  url: "https://maps.app.goo.gl/2pTWLy7tKUA8wb7s8",
                  className: "button-link external-button light",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="content-wrapper beige-background">
        <div class="top-background border-radius white-background"></div>
        <div class="square-background white-background">
          <div class="content content-overlap-small white-background">
            <div class="content-illustration">
              <FlyingImage
                src="ekenas.png"
                alt="Ekenäs Havshotell"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="~15:00 (preliminär tid)"
                title="Mingel och Bröllopsmiddag"
                content="Efter vigseln återsamlas vi på Ekenäs Havshotell för mingel, foton och lite snacks. Vi ska göra vårt bästa för att hålla oss snygga för alla bilder. Och glöm inte att ladda mobilen – vi har en fotograf, men vi vill också se dagen genom era ögon"
                content2="Sedan är det dags för kvällens höjdpunkt – bröllopsmiddagen! Vi ser fram emot att njuta av en god måltid tillsammans med er, fylld av skratt, tal (ja, några fler tårar kanske också) och självklart massa kärlek. När middagen är avklarad väntar en kväll med dans och fest – så spara lite energi för dansgolvet!"
                action1={{
                  label: "Kosters Kyrka på Google Maps",
                  url: "https://maps.app.goo.gl/2pTWLy7tKUA8wb7s8",
                  className: "button-link external-button light",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="content-wrapper white-background interactive-element"
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
        role="button"
        aria-label="Trigger confetti"
        tabindex="0"
      >
        {#if confettiTrigger}
          <ConfettiEffect trigger={confettiTrigger} />{/if}

        <div class="top-background border-radius beige-background"></div>
        <div class="square-background beige-background">
          <div class="content content-overlap-small beige-background">
            <div class="content-illustration">
              <FlyingImage
                src="kostersrokeri.png"
                alt="Kosters Rökeri"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="~21:00 (preliminär tid)"
                title="Bröllopsfest"
                content="Då blir det fest på Kosters Rökeri! Här var vi ju på fredagen, men den här gången blir det en helt annan nivå – med musik, dans och firande långt in på natten. Oavsett om ni är på dansgolvet eller bara njuter av atmosfären, så lovar vi en kväll att minnas. Så snöra på er dansskorna – nu drar festen igång."
              />
            </div>
          </div>
        </div>
      </div>
    {:else if dayContent === "sundayContent"}
      <div class="content-wrapper dark-blue-background">
        <div class="top-background border-radius white-background"></div>
        <div class="square-background-small white-background">
          <div class="content content-overlap-small white-background">
            <div class="content-illustration">
              <FlyingImage
                src="ekenas.png"
                alt="Ekenäs Havshotell"
                imageClass="illustration"
              />
            </div>
            <div class="text-wrapper">
              <AnimatedText
                subtitle="Från 08:00"
                title="Frukost och farväl"
                content="Efter en helg fylld med firande och glädje äter vi frukost på Ekenäs Havshotell. Perfekt för att ladda batterierna innan det är dags att börja tänka på hemresan.
"
                subheading="Hejdå!"
                content2="När ni är mätta och belåtna, är det dags att packa ihop och ta Kosterbåten tillbaka till fastlandet. Tack för att ni har delat denna oförglömliga helg med oss – vi ser fram emot att ses snart igen!"
              />
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
</style>
