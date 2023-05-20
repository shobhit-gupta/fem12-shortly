<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let isMenuOpen = false;
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		dispatch('toggleMenu', isMenuOpen);
	};
</script>

<button class="hamburger" class:open={isMenuOpen} on:click={toggleMenu}>
	<span class="hamburger__top" />
	<span class="hamburger__middle" />
	<span class="hamburger__bottom" />
</button>

<style lang="postcss">
	.hamburger {
		@apply relative h-[21px] w-6 duration-200;
	}

	.hamburger > * {
		@apply absolute left-0 top-0 h-[3px] w-full rotate-0 bg-grayishViolet duration-500;
	}

	.hamburger__middle {
		@apply translate-y-[9px];
	}

	.hamburger__bottom {
		@apply translate-y-[18px];
	}

	.hamburger.open {
		@apply rotate-90;
	}

	.hamburger.open .hamburger__top {
		@apply translate-y-[9px] rotate-45;
	}

	.hamburger.open .hamburger__middle {
		@apply hidden;
	}

	.hamburger.open .hamburger__bottom {
		@apply translate-y-[9px] -rotate-45;
	}
</style>
