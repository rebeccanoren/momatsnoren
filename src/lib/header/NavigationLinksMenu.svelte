<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	onMount(() => {
		// Query all elements with the class 'menu-text'
		let elements = document.querySelectorAll(".menu-text");
  
		elements.forEach((element) => {
			let innerText = element.innerText;
			element.innerHTML = "";

			let textContainer = document.createElement("div");
			textContainer.classList.add("menu-block");

			for (let letter of innerText) {
				let span = document.createElement("span");
				span.innerText = letter.trim() === "" ? "\xa0" : letter;
				span.classList.add("menu-letter");
				textContainer.appendChild(span);
			}

			element.appendChild(textContainer);
			element.appendChild(textContainer.cloneNode(true));
		});

		elements.forEach((element) => {
			element.addEventListener("mouseover", () => {
				element.classList.remove("menu-play");
			});
		});
	});
</script>

<navigationLinks>
	<div class="menu-container-links">
		<a 
			class:active={$page.url.pathname === '/'} 
			data-sveltekit-prefetch 
			class="menu-text" 
			href="/"
		>
			Hem
		</a>
		
		<a 
			class:active={$page.url.pathname === '/schema'} 
			data-sveltekit-prefetch 
			class="menu-text" 
			href="/schema"
		>
			Schema
		</a>
		
		<a 
			class:active={$page.url.pathname === '/koster'} 
			data-sveltekit-prefetch 
			class="menu-text" 
			href="/koster"
		>
			Om Koster
		</a>
		
		<a 
			class:active={$page.url.pathname === '/faq'} 
			data-sveltekit-prefetch 
			class="menu-text" 
			href="/faq"
		>
			Frågor och svar
		</a>
	</div>
</navigationLinks>

<style>


	/* Updated class names to ensure uniqueness */
/* Menu container styling */
.menu-container-links {
	font-family: var(--Abhaya);
	display: flex;
	flex-direction: column; /* Arrange items vertically */
	justify-content: flex-start;
	gap: 16px; /* Gap between items */
	align-items: center;
	padding: 40px;
}

/* Styling for active menu items */
:global(.menu-active) {
	font-weight: bold;
}

/* Styling for the main menu text */
:global(.menu-text) {
	color: var(--beige); /* Initial color for the menu text */
	text-decoration: none;
	font-size: 80px;
	line-height: 100px;
	height: 100px;
	overflow: hidden;
	white-space: nowrap; /* Ensure text doesn't wrap */
}

/* Ensure letters have the same color as the menu text initially */
:global(.menu-letter) {
	color: var(--beige); /* Same color as the main menu text */
	display: inline-block;
	transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), color 0.6s ease; /* Transition for both movement and color */
}

/* Change letters to salmon on hover */
:global(.menu-text:hover .menu-letter),
:global(.menu-text.menu-play .menu-letter) {
	transform: translateY(-100%);
	color: var(--saturated-salmon); /* Change color on hover */
}

/* Change color of cloned text block */
:global(.menu-text .menu-block:last-child) {
	color: var(--saturated-salmon);
}

/* Adding transition delays for each letter */
:global(.menu-letter:nth-child(1)) { transition-delay: 0.02s; }
:global(.menu-letter:nth-child(2)) { transition-delay: 0.04s; }
:global(.menu-letter:nth-child(3)) { transition-delay: 0.06s; }
:global(.menu-letter:nth-child(4)) { transition-delay: 0.08s; }
:global(.menu-letter:nth-child(5)) { transition-delay: 0.10s; }
:global(.menu-letter:nth-child(6)) { transition-delay: 0.12s; }
:global(.menu-letter:nth-child(7)) { transition-delay: 0.14s; }
:global(.menu-letter:nth-child(8)) { transition-delay: 0.16s; }
:global(.menu-letter:nth-child(9)) { transition-delay: 0.18s; }
:global(.menu-letter:nth-child(10)) { transition-delay: 0.20s; }
:global(.menu-letter:nth-child(11)) { transition-delay: 0.22s; }
:global(.menu-letter:nth-child(12)) { transition-delay: 0.24s; }
:global(.menu-letter:nth-child(13)) { transition-delay: 0.26s; }
:global(.menu-letter:nth-child(14)) { transition-delay: 0.28s; }
:global(.menu-letter:nth-child(15)) { transition-delay: 0.30s; }
:global(.menu-letter:nth-child(16)) { transition-delay: 0.32s; }
:global(.menu-letter:nth-child(17)) { transition-delay: 0.34s; }
:global(.menu-letter:nth-child(18)) { transition-delay: 0.36s; }
:global(.menu-letter:nth-child(19)) { transition-delay: 0.38s; }
:global(.menu-letter:nth-child(20)) { transition-delay: 0.40s; }

@media only screen and (max-width: 500px) {
	.menu-container-links {
		gap: 8px; /* Further reduce gap */
	}

	:global(.menu-text) {
		font-size: 32px; /* Smaller font size for small screens */
		line-height: 40px; /* Adjust line height accordingly */
		height: 40px; /* Adjust height accordingly */
	}

	:global(.menu-letter) {
		transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1), color 0.3s ease; /* Even faster transition */
	}
}

</style>