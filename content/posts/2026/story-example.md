---
title: 两种文章版式
description: Clarity 内置 tech 与 story 两套版式：前者适合技术文章，后者把标题居中、正文缩进、使用衬线体。本文用 story 版式写一篇短文。
date: 2026-10-03 11:00:00
updated: 2026-10-03 11:00:00
image: /covers/story-example.jpg
type: story
categories: [写作指南]
tags: [版式, 故事, 排版]
---

::quote{icon="tabler:quote"}
同一篇文章，换一种版式，就换了一种语气。
::

## 一

Clarity 把文章版式抽象为一个字段 `type`。默认的 `tech` 版式标题左对齐、正文不缩进，适合技术说明；而 `story` 版式会把标题居中、正文首行缩进，并改用衬线体，读起来更像纸质书。

::timeline
{从前}

有一篇文章，只是想被好好阅读。

{后来}

作者在 Front matter 里写下 `type: story`。

{于是}

它拥有了呼吸的余地——
一次缩进\
一行留白。
::

## 二

切换到 story 版式并不需要改动正文的任何一个字。标题的对齐方式、字体的衬线与否、段落的缩进，全由版式决定。这也意味着，一篇文章的「气质」可以与它的「内容」解耦。

::poetry
---
title: 版式
author: CreamClarityDEMO
footer: 记于功能演示
---
同一段文字，
在 `tech` 里是说明，
在 `story` 里，
*是诗*。
::

## 三

如果你要写技术笔记，保持默认即可；如果你要写随笔、故事或感悟，把 `type` 设为 `story`，让排版替你说话。

::alert{type="info" title="在哪里配置版式"}
文章版式在 `blog.config.ts` 的 `article.types` 中声明，首个为默认值。当前可选 `tech` 与 `story`，也可以自行扩展新的版式。
::
