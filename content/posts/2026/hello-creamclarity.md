---
title: 你好，CreamClarityDEMO
description: 欢迎来到 CreamClarityDEMO——一个用上 Clarity 主题全部功能的功能演示站。本文介绍站点定位、能力清单与阅读路线。
date: 2026-10-03 09:00:00
updated: 2026-10-03 09:00:00
image: /covers/hello-creamclarity.jpg
categories: [关于]
tags: [Clarity, Nuxt, 演示]
recommend: 3
---

## 这是什么

**CreamClarityDEMO** 是基于 [Clarity 博客主题](https://github.com/L33Z22L11/blog-v3)（上游项目 `L33Z22L11/blog-v3`）搭建的功能演示站点。Clarity 是面向个人博客的 Nuxt 4 + Nuxt Content v3 主题，没有像 Hexo 那样把主题抽离出来，而是把「站点」本身当作一份可深度定制的工程。

本站由上游的初始化脚本 `pnpm init-project` 清理而成，随后逐项开启并演示主题能力。你可以把它当作一份「能跑起来的功能清单」：每篇演示文章都对应一类特性，且正文本身就是该特性的用例。

::alert{type="info" title="阅读方式"}
正文里的组件、代码块、公式、图表都不是截图，而是实时渲染的结果。想看某个组件怎么写的，直接对照[组件图鉴](/2026/content-components)文章内的「语法」分页即可。
::

## 能力清单

::card-list
- **内容写作**
  - MDC 语法：在 Markdown 里直接用 Vue 组件
  - 文章分类、标签、合集（系列）
  - 技术 / 故事两套文章版式
  - 数学公式（KaTeX）、Mermaid 图表、ABC 乐谱
- **阅读体验**
  - 归档页（按年聚合、密度可调）
  - 全站搜索、目录侧栏、图片灯箱
  - 亮色 / 深色 / 跟随系统三种主题
- **站点能力**
  - Atom 订阅源、OPML 聚合、友链页
  - SEO、Sitemap、站内预览草稿
  - 可选评论系统（默认关闭）
::

## 演示路线

如果你想快速了解主题，推荐按下面的顺序阅读；它们同时构成了「Clarity 功能地图」合集：

1. [MDC 语法速览](/2026/mdc-syntax)：一切组件能力的语法基础
2. [内容组件图鉴](/2026/content-components)：常用组件的实景与写法
3. [文章分类](/2026/categories) 与 [标签系统](/2026/tags)
4. [归档页](/2026/archive) 与 [合集](/2026/collections)
5. [代码块与高亮](/2026/code-blocks)、[公式 / 图表 / 乐谱](/2026/math-charts-music)
6. [侧栏插槽与文章内插槽](/2026/aside-slots)

关于站点本身如何配置，见「站点搭建手册」合集里的 [站点配置与个性化](/2026/site-config) 与 [订阅、搜索与评论](/2026/feed-search-comment)。

## 关于上游

> [!NOTE]
> Clarity 是深度定制的个人博客工程，改动幅度较大，建议 Fork 后安心使用自己的分支；如需引入上游新功能，建议参考本站的「改动清单」重新合并，以避免同步冲突。

::quote{icon="tabler:info-circle"}
本站的配置改动都集中记录在仓库内的一份变更文档中，方便上游更新时快速比对与合并。
::
