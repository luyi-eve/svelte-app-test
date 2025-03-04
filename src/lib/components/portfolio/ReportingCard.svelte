<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { marked } from 'marked';
	export let title: string;
	export let url: string;
	export let description: string;
	export let dates: string;
	export let location: string;
	export let image: string = '';
	export let links: readonly {
		icon?: any;
		title: string;
		href: string;
	}[] = [];
</script>

<li class="relative ml-1 py-4 flex">
    <div class="flex items-start">
        <Avatar.Root class="m-auto border" style="margin-right:20px; border-radius: 0; width: 100px; height: 100px;">
            <img src={image} alt={title} class="object-contain" />
            <!-- <Avatar.Fallback>{title[0]}</Avatar.Fallback> -->
        </Avatar.Root>
        <div class="flex flex-1 flex-col justify-start gap-1 ml-4">
			<a href="{url}" class="custom-underline text-current hover:text-opacity-75">
				<h2 class="font-semibold leading-1.6 mb-2 ">{title}</h2>
			</a>
            {#if location}
                <p class="text-sm text-muted-foreground">{location}</p>
            {/if}
            {#if dates}
                <time class="text-xs text-muted-foreground">{dates}</time>
            {/if}
            
            <!-- {#if description}
                <span class="prose dark:prose-invert text-sm text-muted-foreground">
                    {@html marked(description)}
                </span>
            {/if} -->

			{#if links && links.length > 0}
				<div class="mt-2 flex flex-row flex-wrap items-start gap-2">
					{#each links as link, idx}
						<a href="{link.href}">
							<Badge key={idx} title="{link.title}" class="flex gap-2" style="color:black; background-color:#d9f9f4">
								<svelte:component this="{link.icon}" class="h-4 w-4 " strokeWidth="1.6" />
								{link.title}
							</Badge>
						</a>
					{/each}
				</div>
			{/if}
        </div>
    </div>
</li>

<style>
	/* Scoped CSS for this component */
	.custom-underline {
        cursor: pointer;
    }
    .custom-underline:hover {
        text-decoration: underline;
        text-decoration-color: #a1bbff; /* Change underline color on hover */
        text-decoration-thickness: 1.5px; /* Set the thickness of the underline */
        text-underline-offset: 5px; /* Adjust the space between text and underline */
    }
</style>
