---
title: 合集与系列文章
description: 合集把同一系列的文章组织在一起。本站通过 series 字段与 /collections 页面实现，本文介绍用法。
date: 2026-10-03 10:00:00
updated: 2026-10-03 10:00:00
image: /covers/collections.jpg
categories: [功能演示]
tags: [合集, 系列, 扩展]
series: Clarity 功能地图
---

## 什么是合集

**合集**（也叫「系列」）用于把一组有内在顺序或共同主题的文章组织到一起。当一篇文章属于某个系列时，在这个系列内阅读就能顺藤摸瓜地看完整条脉络。

::alert{type="warning" title="这是本站扩展的能力"}
上游 Clarity 主题本身没有「合集」概念。本站为演示与实用补充了：内容 schema 新增 `series` 字段、查询索引同步该字段、以及一个 `/collections` 页面。相关改动都已在变更文档中标注，方便与上游合并。
::

## 用法

只需在 Front matter 里填写 `series`：

```yaml
---
title: 合集与系列文章
categories: [功能演示]
series: Clarity 功能地图
---
```

具有相同 `series` 值的文章会自动归入同一合集，并按日期倒序排列。

## 合集页面

访问左侧栏的「合集」或 [`/collections`](/collections) 即可看到所有合集：

- 每个合集显示名称、文章数量与文章列表（复用首页的卡片组件）
- 合集之间按名称排序
- 没有填写 `series` 的文章不会出现在这里

本站当前有两个合集：

- **Clarity 功能地图**：介绍主题各项能力的一组演示文章
- **站点搭建手册**：站点配置与上线相关的一组文章

## 与分类、标签的分工

::card-list
- **分类**：回答「是什么类型」，通常选一个父级
- **标签**：回答「涉及哪些关键词」，可以有多个
- **合集**：回答「属于哪个系列」，强调一组文章的**整体性与阅读顺序**
::

## 实现要点

如果你要在自己的分支上复刻这一能力，核心是三处改动：

1. `content.config.ts` 的内容 schema 增加 `series: z.string().optional()`
2. `app/utils/article.ts` 的查询字段列表加入 `series`
3. 新增 `app/pages/collections.vue`，按 `series` 分组渲染
