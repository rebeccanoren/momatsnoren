<script>
</script>

<div>
  <a href="/faq?accordion=hotel-booking">
    <div class="scrolling-text-container">
      <div class="scrolling-text">
        <span> Läs mer om hur du bokar hotell! </span>

        <span> Hur funkar det med hotell? Läs mer här! </span>

        <span>
          Boka ditt hotellrum i god tid – klicka här för att läsa hur du gör
        </span>

        <span>
          Vill du vara först med att boka boende? Läs allt om hur du fixar
          hotellrummet här
        </span>

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
          Allt om hur du bokar hotellrummet, så du slipper stressa senare – läs
          mer här
        </span>
        <span>
          Vi vet att du är ute i god tid – klicka här för att läsa om hur du
          bokar hotell
        </span>
      </div>
    </div></a
  >
</div>

<style>
  .scrolling-text-container {
    height: 40px;
    background-color: var(--blue);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  .scrolling-text {
    display: flex;
    gap: 200px;
    animation: scroll-left 120s linear infinite;
    animation-play-state: running;
  }

  .scrolling-text:hover {
    animation-play-state: paused;
  }

  .scrolling-text span {
    font-size: 14px;
    color: var(--yellow);
    white-space: nowrap;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @keyframes scroll-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media only screen and (max-width: 799px) {
    .scrolling-text {
      gap: 64px; /* Mellanrum mellan spans */
    }
  }
</style>
