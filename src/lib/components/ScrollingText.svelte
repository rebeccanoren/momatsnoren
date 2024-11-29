<script>
</script>

<div>
  <a href="/faq?accordion=hotel-booking">
    <div class="scrolling-text-container">
      <div class="scrolling-text">
        <span>
          Vill du veta hur man bokar hotell? Vi har samlat all info här – så är
          du redo långt innan någon annan!
        </span>
        <span>
          Nyfiken på hur du bokar hotell? Klicka här och säkra ditt rum i god
          tid!
        </span>
        <span>
          Se till att boka hotellrummet tidigt – här hittar du all information
          du behöver
        </span>
        <span>
          Redo att fixa ditt boende? Klicka här för att läsa hur du bokar hotell
          i tid!
        </span>
        <span>
          Planera smart och boka hotell tidigt – vi har gjort det enkelt för dig
          här!
        </span>
        <span>
          Vill du undvika sista minuten-stress? Läs här hur du bokar ditt
          hotellrum redan nu
        </span>
        <span>
          Boka ditt hotellrum i god tid – klicka här för att läsa hur du gör
        </span>
        <span>
          Allt om hur du bokar hotellrummet, så du slipper stressa senare – läs
          mer här
        </span>
        <span>
          Vi vet att du är ute i god tid – klicka här för att läsa om hur du
          bokar hotell
        </span>
        <span>
          Vill du vara först med att boka boende? Läs allt om hur du fixar
          hotellrummet här
        </span>
      </div>
    </div></a
  >
</div>

<style>
  .scrolling-text-container {
    height: 40px;
    background-color: var(--dark-blue);
    overflow: hidden; /* Döljer text utanför området */
    position: relative;
    display: flex;
    align-items: center; /* Centrera texten vertikalt */
  }

  .scrolling-text {
    display: flex; /* Arrangera spans i rad */
    gap: 200px; /* Mellanrum mellan spans */
    animation: scroll-left 120s linear infinite; /* Kontinuerlig animation */
    animation-play-state: running; /* Standard är att animationen körs */
  }

  .scrolling-text:hover {
    animation-play-state: paused; /* Pausar animationen vid hover */
  }

  .scrolling-text span {
    font-size: 12px;
    color: var(--yellow);
    white-space: nowrap; /* Förhindrar radbrytning */
    letter-spacing: 1px; /* Mellanrum mellan bokstäver */
    text-transform: uppercase;
  }

  @keyframes scroll-left {
    from {
      transform: translateX(0); /* Startposition */
    }
    to {
      transform: translateX(-100%); /* Flytta texten åt vänster */
    }
  }
</style>
