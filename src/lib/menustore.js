// menustore.js
import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);

export function openMenu() {
    isMenuOpen.set(true);
}

export function closeMenu() {
    isMenuOpen.set(false);
}

export function toggleMenu() {
    isMenuOpen.update(value => !value);
}
