<script>
</script>

<div>
  <a href="/faq">
    <div class="scrolling-text-container">
      <div class="scrolling-text">
        <span>Snart smäller det! Hitta svar på vanliga frågor här!</span>
        <span
          >Vi längtar efter att fira med er! Tills dess – allt ni behöver veta
          finns här</span
        >
        <span
          >Funderar du på att hålla tal? Kul! Läs mer om hur du anmäler dig!</span
        >
        <span
          >Undrar du något? Kika in på vanliga frågor – vi har svar på det
          mesta!</span
        >
        <span>Mejlat hotellet? Lugnt – de skickar snart en bekräftelse!</span>
        <span
          >Hotellbokning på gång? Bekräftelse kommer direkt från Ekenäs – håll
          utkik!</span
        >

        <span
          >Vill du hålla tal? Börja fila på något fint – här är info om anmälan</span
        >
        <span>Vad händer om det regnar? Det löser vi – men ta med paraply!</span
        >
        <span
          >Väder, tal, hotell och allt däremellan – kika på vanliga frågor!</span
        >
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
