<script>
  import { onMount, onDestroy } from "svelte";

  let canvas;
  let ctx;
  let confetti = [];
  let width, height;
  let lastTime = 0;
  const cursorEffects = [];
  let lastMouseX = 0;
  let lastMouseY = 0;
  let isMounted = false;

  export let trigger = false;

  function getRandomColor() {
    // Generate a random color in the range of the rainbow
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
  }

  class Confetto {
    constructor(x, y, velocityX, velocityY) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 15;
      this.color = getRandomColor(); // Use a random rainbow color
      this.velocityX = velocityX * 0.05;
      this.velocityY = 1 + Math.random() * 0.5 + velocityY * 0.005;
      this.gravity = 0.02;
      this.drag = 0.97;
      this.timeToLive = 500;
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();

      const spikes = 4;
      const outerRadius = this.size;
      const innerRadius = this.size / 2;

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i / spikes) * Math.PI;

        const x = this.x + Math.cos(angle) * radius;
        const y = this.y + Math.sin(angle) * radius;

        ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.fill();
    }

    update(deltaTime) {
      this.x += this.velocityX;
      this.velocityX *= this.drag;
      this.y += this.velocityY;
      this.velocityY += this.gravity;
      this.size = Math.max(
        0,
        this.size - (this.size * deltaTime) / this.timeToLive,
      );
    }
  }

  function addConfettoAndCursorEffect(e) {
    if (!trigger) {
      clearCursorEffects();
      return;
    }

    const mouseVelocityX = e.clientX - lastMouseX;
    const mouseVelocityY = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    const randomOffsetX = (Math.random() - 0.5) * 100;
    const randomOffsetY = (Math.random() - 0.5) * 100;

    confetti.push(
      new Confetto(
        e.clientX,
        e.clientY,
        mouseVelocityX + randomOffsetX,
        mouseVelocityY + randomOffsetY,
      ),
    );

    // Create a cursor effect element
    const cursorEffect = document.createElement("div");
    cursorEffect.classList.add("cursor-effect");
    cursorEffect.style.top = `${e.clientY}px`;
    cursorEffect.style.left = `${e.clientX}px`;
    document.body.appendChild(cursorEffect);

    setTimeout(() => {
      cursorEffect.remove();
    }, 500); // Adjust time to control duration of the effect

    if (confetti.length > 100) {
      confetti.splice(0, confetti.length - 100);
    }
  }

  function clearCursorEffects() {
    document
      .querySelectorAll(".cursor-effect")
      .forEach((element) => element.remove());
  }

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    ctx.clearRect(0, 0, width, height);
    confetti.forEach((confetto) => {
      confetto.update(deltaTime);
      confetto.draw(ctx);
    });

    confetti = confetti.filter(
      (confetto) =>
        confetto.size > 0 &&
        confetto.y < height &&
        confetto.x > 0 &&
        confetto.x < width,
    );

    requestAnimationFrame(update);
  }

  onMount(() => {
    isMounted = true;

    if (typeof window !== "undefined") {
      resizeCanvas(); // Set canvas size on mount
      ctx = canvas.getContext("2d");

      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("mousemove", addConfettoAndCursorEffect);

      // Start the animation loop
      requestAnimationFrame(update);

      // Optionally trigger confetti to start immediately
      trigger = true;

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        window.removeEventListener("mousemove", addConfettoAndCursorEffect);
      };
    }
  });

  onDestroy(() => {
    clearCursorEffects();
  });
</script>

<canvas
  bind:this={canvas}
  style="position: fixed; top: 0; left: 0; z-index: 9999;"
></canvas>

<style>
  canvas {
    pointer-events: none;
  }
</style>
