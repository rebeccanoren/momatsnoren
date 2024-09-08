export function initBorderRadius() {
  const sections = document.querySelectorAll(".content-wrapper"); // Select all content-wrapper sections

  const calculateBorderRadius = () => {
    sections.forEach((section) => {
      const topBackground = section.querySelector(
        ".top-background.border-radius",
      ); // Select the top-background inside each section

      if (!topBackground) return; // If no top-background, skip the section

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If the top of the section is in view or above
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate the percentage based on the section's top position relative to the viewport
        const progress = Math.max(0, Math.min(1, rect.top / viewportHeight));

        // Border-radius transitions from 50% to 0% as it reaches the top
        const borderRadius = 80 * progress;

        topBackground.style.borderTopLeftRadius = `${borderRadius}%`;
        topBackground.style.borderTopRightRadius = `${borderRadius}%`;
      }
    });
  };

  const handleScroll = () => {
    calculateBorderRadius();
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Call once to set the initial value
  calculateBorderRadius();

  // Return a cleanup function to remove the event listener when needed
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
