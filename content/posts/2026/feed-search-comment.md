---
title: 订阅、搜索与评论
description: 介绍 Clarity 的 Atom 订阅源、OPML 聚合、友链页、全站搜索、草稿预览与可选的评论系统。
date: 2026-10-03 10:50:00
updated: 2026-10-03 10:50:00
image: /covers/feed-search-comment.jpg
categories: [站点配置]
tags: [订阅源, 搜索, 评论]
series: 站点搭建手册
---

## Atom 订阅源

站点根路径的 [`/atom.xml`](/atom.xml) 是 Atom 订阅源，由服务端路由生成，最大文章数量在 `blog.config.ts` 的 `feed.limit` 中配置，订阅源样式（XSLT）可通过 `feed.enableStyle` 开关。

::alert{type="info" title="绝对地址"}
订阅源要求站内链接使用绝对 URL，因此 `blog.config.ts` 的 `url` 必须与实际访问地址（协议、主机、端口）保持一致。
::

## OPML 聚合

`/subscriptions.opml` 会把 `app/feeds.ts` 中配置的友链订阅源聚合为一个 OPML 文件，方便导入阅读器。

## 友链页

[`/link`](/link) 由 `app/feeds.ts` 的分组数据渲染：

- 每个分组是一段 `FeedGroup`
- 每条友链是 `FeedEntry`，包含名称、描述、链接、订阅源、头像、技术栈等
- 可选的 `error` 字段会标注友链的异常状态

页面上还有两个分页：「我的博客信息」展示本站的友链名片与复制按钮，「申请友链」渲染 `content/link.md`。

## 全站搜索

按 **Ctrl / Cmd + K** 或点击左栏搜索框即可唤起搜索面板。它由 MiniSearch 在客户端建立索引，覆盖正式文章与草稿预览。

## 草稿与预览

未发布的文章放在 `content/previews/` 下，它们会：

- 出现在 [`/preview`](/preview) 页面
- 参与站内搜索
- 但**不会**出现在首页、归档与订阅源中

本仓库就放了一篇预览示例（访问 [`/previews/draft-example`](/previews/draft-example) 查看），用来演示这一能力。

## 评论系统

Clarity 默认集成 Twikoo 评论。本站**未启用**评论：`blog.config.ts` 的 `twikoo.envId` 为空，评论组件会自动隐藏，不会残留「加载中」占位。

要启用评论，只需在 `blog.config.ts` 中填写自部署的 Twikoo 地址：

```ts
twikoo: {
	envId: 'https://your-twikoo.example.com/',
	preload: 'https://your-twikoo.example.com/',
},
```

然后在 `blog.config.ts` 的 `scripts` 中加入 Twikoo 的脚本即可。若偏好 GitHub Discussions，也可以改用 giscus 等无需自建服务的方案。
