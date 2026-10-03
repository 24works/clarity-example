---
title: 站点配置与个性化
description: Clarity 的配置分为 blog.config.ts 与 app.config.ts 两层。本文说明两者的分工，并列本站的个性化改动。
date: 2026-10-03 10:40:00
updated: 2026-10-03 10:40:00
image: /covers/site-config.jpg
categories: [站点配置]
tags: [配置, 主题, 个性化]
series: 站点搭建手册
---

## 两层配置

Clarity 把配置拆成两层，思路很清晰：

::card-list
- **`blog.config.ts`**：启动时需要的静态配置。
  - 站点标题、副标题、描述、作者、版权协议、域名
  - 分类表、文章版式、排序字段
  - 订阅源、`<head>` 脚本、统计范围、评论服务
- **`app/app.config.ts`**：运行时可变的响应式配置。
  - 页脚导航、侧栏图标按钮、页脚版权
  - 左栏 Logo 与 Emoji、导航菜单
  - 分页、主题图标、组件行为
::

`app.config.ts` 会先把 `blog.config` 展开进来，因此两者的字段可以互相引用（例如页脚版权用站点标题拼接）。

## 本站的个性化改动

| 配置项 | 位置 | 本站取值 |
| --- | --- | --- |
| 站点标题 | `blog.config` | CreamClarityDEMO |
| 站点域名 | `blog.config` | `https://cdemo.iicemeta.com/` |
| 作者邮箱 | `blog.config` | creamdemo@iicemeta.com |
| 分类表 | `blog.config` | 功能演示 / 写作指南 / 站点配置 / 关于 |
| 页脚版权 | `app.config` | ©2026 CreamClarityDEMO |
| 页脚「探索」 | `app.config` | 仅保留 Atom 订阅 |
| 页脚「社交」 | `app.config` | GitHub、邮箱 |
| 页脚「信息」 | `app.config` | 主题版本、备案号 |
| 侧栏底部 | `app.config` | 个人主页、GitHub、Atom 订阅 |
| 左栏导航 | `app.config` | 文章 / 合集 / 友链 / 归档 |

## 页脚

页脚由 `app.config.ts` 的 `footer.nav` 控制，按「分组 → 条目」渲染。本站：

- **探索**：只保留 Atom 订阅
- **社交**：GitHub（`24works/clarity-example`）与邮箱
- **信息**：主题版本（自动取 `package.json` 的版本号）与备案号

```ts
footer: {
	copyright: `©2026 ${blogConfig.title}`,
	nav: [
		{ title: '探索', items: [{ icon: 'tabler:rss', text: 'Atom订阅', url: '/atom.xml' }] },
		// …社交、信息
	],
},
```

## 侧栏底部按钮

侧栏底部的图标按钮由 `footer.iconNav` 控制，本站保留三项：个人主页（指向本站）、GitHub、Atom 订阅。

## 左栏 Logo 与 Emoji

`header.emojiTail` 控制左栏 Logo 悬浮时浮现的 Emoji，`header.showTitle` 决定显示标题还是纯 Logo。本站的 Emoji 与站点气质呼应。

## 主题模式

`themes` 定义了「浅色 / 跟随系统 / 深色」三档及其图标，由 `@nuxtjs/color-mode` 实现，默认跟随系统、回退浅色。

::alert{type="tip" title="改配置的顺序"}
新增一个站点前，建议先跑一遍上游的 `pnpm init-project` 清理示例内容，再按上面的清单逐项填写，最后对照变更文档确认没有遗漏。
::
