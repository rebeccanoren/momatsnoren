// menustore.js
import { writable } from "svelte/store";

export const isMenuOpen = writable(false);

// Function to disable body scroll
function disableBodyScroll() {
  document.body.style.overflow = "hidden";
  console.log("menu is open");
}

// Function to enable body scroll
function enableBodyScroll() {
  document.body.style.overflow = "auto";
  console.log("overflow hidden removed");
}

export function openMenu() {
  isMenuOpen.set(true);
  disableBodyScroll();
}

export function closeMenu() {
  isMenuOpen.set(false);
  enableBodyScroll();
}

export function toggleMenu() {
  isMenuOpen.update((value) => {
    if (!value) {
      disableBodyScroll(); // If menu is opening
    } else {
      enableBodyScroll(); // If menu is closing
    }
    return !value;
  });
}
