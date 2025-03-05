<script lang="ts">
	import { base } from '$app/paths'; // Import base path for image

	import { marked } from 'marked';
	import Badge from '../ui/badge/badge.svelte';

	let _class = '';
	export { _class as class };
	export let href: string = '';
	export let description: string;
	export let dates: string;
	export let publisher: string;
	export let tags: readonly string[];
	export let link: string = '';
	export let image: string = '';
	export let video: string = '';
	export let links: { icon: any; type: string; href: string }[] = [];

	export let title: string;
	// Set font size ONLY for this specific title
	let fontSize = title === 'How Much It Takes to Get an Abortion in the \'PURPLE\' State of Florida?'? "14px" : "16px";

</script>



<div class="relative flex flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg bg-card text-card-foreground">
	<a href={href || '#'} class="block cursor-pointer relative">
		{#if video}
			<video class="pointer-events-none mx-auto w-full object-cover object-top" src={video} autoplay loop muted></video>
		{:else}
			<div class="image-container relative">
				<img class="w-full object-cover object-top" src="{base}{image}" alt={title} />
				<div class="description-overlay text-[14px]">
					{@html marked(description)}
					<div class="px-2 pb-2">
						{#if tags && tags.length > 0}
							<div class="mt-2 flex flex-wrap gap-1">
								{#each tags as tag}
									<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">{tag}</Badge>
								{/each}
							</div>
						{/if}

					</div>
					
				</div>
			</div>
		{/if}
	</a>
</div>

<!-- Card Title Below -->
<div id="project-card-text" class="pb-5 text-center">
	<div class="px-2 pt-2 font-semibold" style="font-size: {fontSize};">
		{title}
	</div>	
	<div class="px-2">
		<time class="font-sans text-[12px]">{dates} ･ <span style="background-color:#d9f9f4">{publisher}</span></time>
	</div>
	{#if links && links.length > 0}
	<div class="flex flex-row flex-wrap items-start gap-1 mt-2 px-2">
		{#each links as link}
			<a href={link?.href} target="_blank" >
				<Badge class=" flex gap-1 px-2 py-1 text-[9px] items-center justify-center text-black bg-[#FFF7D1] hover:bg-[#b6c9fb]">
					<svelte:component this={link.icon} class="size-3 mb-px" strokeWidth={1.6} />
					{link.type}
				</Badge>
			</a>
		{/each}
	</div>
	{/if}
</div>

<style>
	.square-card {
		aspect-ratio: 1 / 1;
	}

	.description-overlay {
		background-color: rgba(75, 85, 99, 0.5);
		transition: opacity 0.3s ease-in-out;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		color: white;
		text-align: center;
	}
	.image-container:hover .description-overlay {
		opacity: 1;
	}

	.bg-primary {
		color:black; 
		background-color: #FFF7D1
	}

	.bg-primary:hover {
		color:black; 
		background-color: red;
	}

</style>
