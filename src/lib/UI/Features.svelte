<script lang="ts">
	export let features: feature[];
</script>

<div class="full-width">
	<section class="center-content-container section">
		<div class="mx-auto max-w-[540px] text-center">
			<h2 class="section-title text-veryDarkBlue">Advanced Statistics</h2>
			<p class="mt-4 text-grayishViolet md:mt-[18px]">
				Track how your links are performing across the web with our advanced statistics
				dashboard.
			</p>
		</div>

		<div class="relative mt-24">
			<!-- Horizontal/Vertical bar container -->
			<div
				class="
					center-x
					center-y
					absolute
					z-0
					h-3/4
					w-2
					md:h-2
					md:w-3/4
				"
			>
				<!-- Offset horizontal bar by half of images height (44px) to find true center. -->
				<div
					class="
						h-full
						w-full
						bg-cyan
						md:-translate-y-[22px]
					"
				/>
			</div>

			<!-- Features -->
			<div
				class="
					relative
					z-10
					flex
					flex-col
					gap-24
					md:flex-row
					md:items-center
					md:gap-4
					lg:gap-8
				"
			>
				{#each features as { icon, title, text }}
					<div class="feature">
						<h3 style="--img-url: url('{icon}')" class="feature__title">{title}</h3>
						<p class="feature__text">{text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
	:global(.center-x) {
		@apply left-1/2 -translate-x-1/2;
	}
	:global(.center-y) {
		@apply top-1/2 -translate-y-1/2;
	}

	.feature {
		@apply relative rounded-md bg-white px-8 pb-10 pt-[77px] text-center md:px-2 lg:px-8;
	}

	.feature:nth-child(1) {
		@apply md:self-start;
	}

	.feature:nth-child(2) {
		@apply md:my-12;
	}

	.feature:nth-child(3) {
		@apply md:self-end;
	}
	.feature__title {
		@apply text-2xl font-bold leading-normal text-veryDarkBlue md:text-xl lg:text-2xl;
	}

	.feature__title::before {
		@apply center-x absolute top-0 h-[88px] w-[88px] -translate-y-1/2 rounded-full bg-darkViolet p-6 md:left-8 md:translate-x-0;
		content: var(--img-url);
	}

	.feature__text {
		@apply mt-3 text-md text-grayishViolet;
	}
</style>
