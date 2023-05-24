<script lang="ts">
	import HamburgerButton from '$lib/UI/HamburgerButton.svelte';
	import Navbar from '$lib/UI/Navbar.svelte';

	let isMenuOpen = false;
	let header: HTMLElement;
	let scrollY: number;

	const toggleMenu = (event: CustomEvent<boolean>) => {
		isMenuOpen = event.detail;
	};

	$: if (scrollY >= 400 && !header.classList.contains('shadow-lg')) {
		header.classList.add('shadow-lg');
		header.classList.remove('pt-6');
	} else if (scrollY < 150 && header.classList.contains('shadow-lg')) {
		header.classList.remove('shadow-lg');
		header.classList.add('pt-6');
	}
</script>

<svelte:window bind:scrollY />

<!-- Reference(s):
	- https://www.modusagency.com/blog/css-tricks-expanding-beyond-a-parent-div/
-->
<div class="full-width bg-white">
	<!-- fix: Specify width again because it is taken out of normal flow of the DOM because of it's fixed position. -->
	<header
		bind:this={header}
		class="
			fixed
			z-50
			mx-auto
			w-full
			bg-white
			pt-6
			transition
			duration-1000
		"
	>
		<div
			class="
				mx-auto
				flex
				max-w-6xl
				flex-wrap
				items-center
				justify-between
				gap-6
				px-6
				pb-2
				pt-4
				md:flex-nowrap
				md:gap-11
				md:pt-6
			"
		>
			<img src="/images/logo.svg" alt="" />
			<div class="flex justify-end md:hidden">
				<HamburgerButton on:toggleMenu={toggleMenu} />
			</div>
			<Navbar {isMenuOpen} />
		</div>
	</header>
</div>
