---
title: 标签系统
description: 标签用于给文章打上细粒度的关键词，比分类更灵活。本文介绍标签的写法、展示位置与统计方式。
date: 2026-10-03 09:40:00
updated: 2026-10-03 09:40:00
image: /covers/tags.jpg
categories: [功能演示]
tags: [标签, Front matter, 统计]
series: Clarity 功能地图
---

## 标签是什么

如果说[分类](/2026/categories)回答「这篇文章属于哪一类」，那么标签回答的是「这篇文章涉及哪些关键词」。一个分类通常只有一个父级，而标签可以有多个：

```yaml
---
categories: [功能演示]
tags: [标签, Front matter, 统计]
---
```

## 标签在哪里展示

标签不像分类那样有独立的筛选下拉框，而是出现在**归档页**的每一条文章记录上，鼠标悬浮条目时随其他信息一起浮现：

- 打开 [归档页](/2026/archive)，把鼠标移到任意一条记录上，即可看到该文章的标签。

这种设计让标签保持轻量：它服务于「快速扫读关键词」，而不是额外增加一层导航。

## 标签的统计

博客的统计接口 `/api/stats` 会遍历所有文章，收集去重后的标签列表，并在构建时预渲染为 JSON。它和分类统计一样，属于「站点元数据」的一部分：

```ts
// server/api/stats.get.ts（节选）
const tags = post.tags || []
tags.filter((tag): tag is string => typeof tag === 'string')
	.forEach((tag: string) => {
		if (!stats.tags.includes(tag))
			stats.tags.push(tag)
	})
```

::alert{type="info" title="标签与合集的分工"}
标签是「关键词」，合集是「系列」。当一组文章需要按阅读顺序组织时，用[合集](/2026/collections)会比标签更合适。
::

## 命名建议

- 保持粒度一致：不要既有 `Vue`，又有 `Vue3 组合式 API 实践`。
- 控制数量：每篇 2–5 个标签通常足够。
- 中英文混用时，尽量在同一主题内统一写法。
