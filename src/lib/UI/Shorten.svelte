<script lang="ts">
	export let shortnedLinks: shortenedLink[];
</script>

<div class="w-full">
	<section class="center-content-container section relative">
		<div
			class="
				absolute
				inset-x-6
				-translate-y-1/2
				rounded-[10px]
				bg-darkViolet
				bg-[url('/images/bg-shorten-mobile.svg')]
				bg-cover
				bg-[left_90px_top_-50px]
				bg-no-repeat
				p-6
				md:bg-[url('/images/bg-shorten-desktop.svg')]
				md:bg-left-top
				md:px-16
				md:py-[52px]
			"
		>
			<form class="flex flex-col justify-center gap-4 md:flex-row md:items-start md:gap-6">
				<div class="grow">
					<input
						type="url"
						name=""
						id=""
						value=""
						class="
							w-full
							rounded-[10px]
							px-4
							pb-[11px]
							pt-3
							text-base
							leading-relaxed
							tracking-open
							placeholder-veryDarkBlue/50
							placeholder:font-medium
							invalid:border-[3px]
							invalid:border-red
							md:px-8
							md:py-3.5
							md:text-xl
							md:leading-easy
						"
						placeholder="Shorten a link here..."
					/>

					<!-- Error Message -->
					<p
						class="
							mt-1
							hidden
							text-xs
							italic
							leading-normal
							tracking-open
							text-red
							md:mt-2
							md:text-base
						"
					>
						Please add a link
					</p>
				</div>
				<button
					class="
						btn-secondary--md
						md:btn-secondary--xl
						w-full
						md:w-auto
						md:grow-0
					"
				>
					Shorten It!
				</button>
			</form>
		</div>

		<!-- Shortened Links -->
		<ul class="flex flex-col gap-6 pt-28 md:gap-4">
			{#each shortnedLinks as { original, shortened }}
				<li class="shortened-link">
					<p class="link p-4 text-veryDarkBlue md:p-0">{original}</p>
					<div
						class="
							flex
							flex-col
							gap-[18px]
							p-4
							md:m-0
							md:flex-row
							md:items-center
							md:gap-6
							md:p-0
						"
					>
						<p class="link text-cyan">{shortened}</p>
						<button class="btn-theme btn-sm md:btn-xs rounded-md">Copy</button>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style lang="postcss">
	.shortened-link {
		@apply flex flex-col justify-between gap-2 divide-y-[1px] divide-grayishViolet/25 rounded-md bg-white md:flex-row md:items-center md:divide-y-0 md:py-4 md:pl-8 md:pr-6;
	}
	.link {
		@apply text-base leading-none tracking-open md:text-xl md:leading-easy;
	}
</style>
