// menustore.js
import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);

// Function to disable body scroll
function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable body scroll
function enableBodyScroll() {
    document.body.style.overflow = '';
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
    isMenuOpen.update(value => {
        if (!value) {
            disableBodyScroll();  // If menu is opening
        } else {
            enableBodyScroll();   // If menu is closing
        }
        return !value;
    });
}
