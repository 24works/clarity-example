---
title: 预览与草稿
description: 这是一篇放在 previews 目录下的草稿，用于演示 Clarity 的草稿预览能力：它可被站内搜索，但不会出现在首页、归档与订阅源中。
date: 2026-10-03 11:10:00
categories: [功能演示]
tags: [预览, 草稿]
draft: true
---

## 这是一篇草稿

你现在看到的内容来自 `content/previews/` 目录。Clarity 把「正式文章」与「草稿」用目录区分：

- `content/posts/` 下的文章会进入首页、归档、订阅源与全站搜索
- `content/previews/` 下的文章**只**进入 [`/preview`](/preview) 页面与全站搜索

## 为什么这样设计

写作过程中，总有一些还没打磨好的内容。把它们放在 `previews` 里，就可以：

::card-list
- 在发布前先预览排版效果
- 通过站内搜索快速找回草稿
- 避免半成品被订阅者读到
::

## 发布它

当草稿写完，把它移动到 `content/posts/2026/` 下、并把 `draft: true` 去掉即可正式发布。

::alert{type="warning" title="被引用要注意"}
如果草稿被其他正式文章引用，而草稿又不在正式列表中，构建时可能因找不到目标而报错。建议发布后再相互引用。
::
