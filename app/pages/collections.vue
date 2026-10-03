<script setup lang="ts">
import type { ArticleProps } from '~/types/article'
import { orderBy } from 'es-toolkit/array'

const appConfig = useAppConfig()
useSeoMeta({
	title: '合集',
	description: `${appConfig.title}的系列文章合集。`,
})

const { data: listRaw } = await useAsyncData('posts:collections', () => queryArticleIndex(), { default: () => [] })

const collections = computed(() => {
	const groups = new Map<string, ArticleProps[]>()
	for (const article of listRaw.value) {
		const name = article.series
		if (!name)
			continue

		const group = groups.get(name) ?? []
		group.push(article)
		groups.set(name, group)
	}

	return [...groups.entries()]
		.map(([name, items]) => ({
			name,
			items: orderBy(items, ['date'], ['desc']),
		}))
		.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'))
})
</script>

<template>
<template #aside>
	<WidgetBlogStats />
	<WidgetBlogLog />
</template>

<div class="collections proper-height">
	<BlogHeader class="hide-above-mobile" to="/" suffix="合集" tag="h1" />

	<p class="collections-intro">
		合集用于把同一系列的文章聚集在一起。只需在文章的 Front matter 中填写
		<code>series</code> 字段，文章便会自动归入对应合集。
	</p>

	<ZError
		v-if="!collections.length"
		icon="tabler:stack-2"
		title="还没有任何合集"
	/>

	<section v-for="collection in collections" :key="collection.name" class="collection">
		<h2 class="collection-title text-creative">
			<Icon name="tabler:stack-2" />
			<span>{{ collection.name }}</span>
			<span class="collection-count">{{ collection.items.length }} 篇</span>
		</h2>

		<menu class="collection-list">
			<PostArticle
				v-for="article in collection.items"
				:key="article.path"
				:data-list-key="article.path"
				v-bind="article"
				:to="article.path"
			/>
		</menu>
	</section>
</div>
</template>

<style scoped>
.collections {
	padding: 1rem;
}

.collections-intro {
	margin: 0 0 1.5rem;
	font-size: 0.9em;
	color: var(--c-text-2);

	code {
		padding: 0.1em 0.4em;
		border-radius: 0.3em;
		background-color: var(--c-bg-soft);
		font-family: var(--font-monospace);
		font-size: 0.9em;
	}
}

.collection {
	margin-bottom: 2.5rem;
}

.collection-title {
	display: flex;
	align-items: center;
	gap: 0.4em;
	font-size: 1.15em;
	color: var(--c-text);

	.collection-count {
		font-size: 0.8em;
		font-weight: normal;
		color: var(--c-text-3);
	}
}
</style>
