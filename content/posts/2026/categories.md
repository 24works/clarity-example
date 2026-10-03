---
title: 文章分类
description: 分类用于给文章归类并在列表页筛选。本文介绍分类的配置、多级分类与筛选入口。
date: 2026-10-03 09:30:00
updated: 2026-10-03 09:30:00
image: /covers/categories.jpg
categories: [功能演示]
tags: [分类, 导航, Front matter]
series: Clarity 功能地图
---

## 分类是什么

分类（`categories`）写在文章的 Front matter 里，用于表达文章「属于哪一类」。首页、归档页和预览页的列表顶部都有一个分类下拉框，切换后即可只看某一分类的文章。

```yaml
---
title: 文章分类
categories: [功能演示]
---
```

本站使用的分类都定义在 `blog.config.ts` 的 `article.categories` 中，并为每个分类配置了图标与颜色：

```ts
article: {
	categories: {
		未分类: { icon: 'tabler:circle-dashed' },
		功能演示: { icon: 'tabler:components', color: '#ff77aa' },
		写作指南: { icon: 'tabler:pencil', color: '#33bbaa' },
		站点配置: { icon: 'tabler:settings', color: '#7777ff' },
		关于: { icon: 'tabler:info-circle', color: '#33aaff' },
	},
},
```

## 多级分类

`categories` 是**数组**，因此可以表达层级。分类统计接口会把数组按顺序构建成一棵树；列表筛选则以第一项（父级）为准：

```yaml
---
# 表示「技术 → 前端」下的文章
categories: [技术, 前端]
---
```

::alert{type="info" title="约定"}
列表筛选只使用数组的第一项，因此建议把最粗的粒度放在最前面。更细的层级交给[标签](/2026/tags)或[合集](/2026/collections)表达。
::

## 默认分类

未填写 `categories` 的文章会落到 `blogConfig.defaultCategory`（本站为「未分类」）。分类的排序字段在 `article.order` 中配置，本站支持按「创建日期」与「更新日期」排序。

## 在哪里看到分类

- 首页 / 归档页：列表顶部的分类下拉框
- 文章卡片与归档条目：显示图标 + 分类名
- 文章页头部：显示当前分类

想看实际效果，点开列表顶部的分类筛选，切到「功能演示」即可。
