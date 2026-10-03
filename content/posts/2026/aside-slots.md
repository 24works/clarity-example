---
title: 侧栏插槽与文章内插槽
description: 通过 rehype-meta-slots 插件，文章可以把组件注入到文章末尾与侧栏。本文演示其用法。
date: 2026-10-03 10:30:00
updated: 2026-10-03 10:30:00
image: /covers/aside-slots.jpg
categories: [功能演示]
tags: [插槽, meta-slots, 侧栏]
series: Clarity 功能地图
aside: [toc, meta-aside-demo, meta-aside-link]
---

::meta-aside-demo{title="从文章插入的组件" card}
这是一个由文章正文注入到侧栏的组件。它写在正文里，却渲染在页面侧栏中。

通过 `aside: [toc, meta-aside-demo, meta-aside-link]` 声明侧栏要使用哪些组件。

虽然一般情况下， :blur[文章侧栏并不需要这么复杂]
::

:::meta-aside-link
::link-card
---
icon: https://picsum.photos/seed/slot/100
title: 侧栏里的链接卡片
link: https://content.nuxt.com/docs/files/markdown#mdc-syntax
---
::
:::

::meta-copyright{title="本文章不保留版权"}
通过 [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.zh-hans){icon="ri:creative-commons-zero-line"} 贡献至公共领域。
::

## 这个页面的侧栏有什么不一样

注意右侧：除了默认的目录（`toc`），还多了两张卡片——它们都来自**本页正文**。这正是 `rehype-meta-slots` 插件的作用。

## 用法

在 Front matter 里声明 `aside`，列出侧栏要加载的组件名：

```yaml
---
aside: [toc, meta-aside-demo, meta-aside-link]
---
```

然后在正文里用 `::meta-xxx` 定义对应的内容：

```mdc
::meta-aside-demo{title="从文章插入的组件" card}
这个块会被剪切到侧栏渲染。
::

::meta-copyright{title="本文章不保留版权"}
这里的内容会替换文章末尾的默认许可协议。
::
```

## 两类特殊插槽

::card-list
- **`meta-aside-*`**：注入到侧栏。命名需与 `aside` 数组中的名字对应。
  - 例如 `::meta-aside-demo` 对应 `meta-aside-demo`
- **`meta-copyright`**：注入到文章末尾的「许可协议」区块。
  - 不写时使用 `blog.config.ts` 中的默认版权信息
::

::alert{type="info" title="命名规则"}
插件的规则很简单：凡是以 `meta-` 开头的块级组件，都会从正文中被「剪切」，按名字存入文章的插槽表，供侧栏或页脚按需取用。
::

## 适用场景

- 给某篇文章单独添加侧栏说明、相关链接或作者卡片
- 为特定文章覆盖默认的许可协议
- 在不修改全局组件的前提下，做「一篇文章一版」的定制
