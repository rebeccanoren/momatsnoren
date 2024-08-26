<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
  
	onMount(() => {
	  let elements = document.querySelectorAll(".text");
  
	  elements.forEach((element) => {
		let innerText = element.innerText;
		element.innerHTML = "";
  
		let textContainer = document.createElement("div");
		textContainer.classList.add("block");
  
		for (let letter of innerText) {
		  let span = document.createElement("span");
		  span.innerText = letter.trim() === "" ? "\xa0" : letter;
		  span.classList.add("letter");
		  textContainer.appendChild(span);
		}
  
		element.appendChild(textContainer);
		element.appendChild(textContainer.cloneNode(true));
	  });
  
	  elements.forEach((element) => {
		element.addEventListener("mouseover", () => {
		  element.classList.remove("play");
		});
	  });
	});
  </script>
  

  <navigationLinks>
	<div class="container-links">
	  <a 
		class:active={$page.url.pathname === '/'} 
		data-sveltekit-prefetch 
		class="text" 
		href="/"
	  >
		Hem
	  </a>
	  
	  <a 
		class:active={$page.url.pathname === '/schema'} 
		data-sveltekit-prefetch 
		class="text" 
		href="/schema"
	  >
		Schema
	  </a>
	  
	  <a 
		class:active={$page.url.pathname === '/koster'} 
		data-sveltekit-prefetch 
		class="text" 
		href="/koster"
	  >
		Om Koster
	  </a>
	  
	  <a 
		class:active={$page.url.pathname === '/faq'} 
		data-sveltekit-prefetch 
		class="text" 
		href="/faq"
	  >
		Frågor och svar
	  </a>
	</div>
  </navigationLinks>
  
  <style>

  
	.container-links {
	  font-family: var(--Abhaya);
	  display: flex;
	  flex-direction: row; /* Ensure items are arranged horizontally */
	  justify-content: flex-start; /* Align items to the start */
	  gap: 16px; /* Small gap between items */
	  align-items: center;
	  padding: 40px;
	}

	:global(.active) {
    font-weight: bold;
  }
  
	:global(.text) {
	  text-decoration: none;
	  font-size: 16px;
	  line-height: 20px;
	  height: 20px;
	  overflow: hidden;
	  white-space: nowrap; /* Ensure text doesn't wrap */
	}
  
	:global(.text:hover .letter),
	:global(.text.play .letter) {
	  transform: translateY(-100%);
	}
  
	:global(.text .block:last-child) {
	  color: var(--saturated-salmon);
	}
  
	:global(.text .letter) {
	  display: inline-block;
	  transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
	}
  
	:global(.letter:nth-child(1)) {
    transition-delay: 0.02s;
}

:global(.letter:nth-child(2)) {
    transition-delay: 0.04s;
}

:global(.letter:nth-child(3)) {
    transition-delay: 0.06s;
}

:global(.letter:nth-child(4)) {
    transition-delay: 0.08s;
}

:global(.letter:nth-child(5)) {
    transition-delay: 0.10s;
}

:global(.letter:nth-child(6)) {
    transition-delay: 0.12s;
}

:global(.letter:nth-child(7)) {
    transition-delay: 0.14s;
}

:global(.letter:nth-child(8)) {
    transition-delay: 0.16s;
}

:global(.letter:nth-child(9)) {
    transition-delay: 0.18s;
}

:global(.letter:nth-child(10)) {
    transition-delay: 0.20s;
}

:global(.letter:nth-child(11)) {
    transition-delay: 0.22s;
}

:global(.letter:nth-child(12)) {
    transition-delay: 0.24s;
}

:global(.letter:nth-child(13)) {
    transition-delay: 0.26s;
}

:global(.letter:nth-child(14)) {
    transition-delay: 0.28s;
}

:global(.letter:nth-child(15)) {
    transition-delay: 0.30s;
}

:global(.letter:nth-child(16)) {
    transition-delay: 0.32s;
}

:global(.letter:nth-child(17)) {
    transition-delay: 0.34s;
}

:global(.letter:nth-child(18)) {
    transition-delay: 0.36s;
}

:global(.letter:nth-child(19)) {
    transition-delay: 0.38s;
}

:global(.letter:nth-child(20)) {
    transition-delay: 0.40s;
}




  </style>
  