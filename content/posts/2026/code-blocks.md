---
title: 代码块与高亮
description: Clarity 的代码块由 Shiki 驱动，支持语言高亮、文件名图标、自动折叠、换行、行内高亮与一键复制。
date: 2026-10-03 10:10:00
updated: 2026-10-03 10:10:00
image: /covers/code-blocks.jpg
categories: [功能演示]
tags: [代码高亮, Shiki, 排版]
series: Clarity 功能地图
---

## 基本高亮

代码块由 Shiki 高亮，亮暗色模式会跟随主题切换：

```ts
export function greet(name: string) {
	return `Hello, ${name}!`
}
```

## 指定文件名

在语言后加方括号写文件名，会自动匹配图标：

```ts [server/api/stats.get.ts]
export default defineEventHandler(async (event) => {
	const query = queryCollection(event, 'content')
	return await query.all()
})
```

```python [train.py]
def main():
    print("带文件名的代码块")
```

## 行内代码

行内代码也能高亮语言并附带复制按钮：`pnpm generate`{lang="sh" copy}、`const answer = 42`{lang="js"}。

```md
`pnpm generate`{lang="sh" copy}
`const answer = 42`{lang="js"}
```

## 自动折叠与换行

超过 `triggerRows`（默认 32）行的代码块会自动折叠到 `collapsedRows`（默认 16）行：

```ts [long-file.ts]
export const note = '超过 32 行的代码块会自动折叠，这个文件带文件名图标'
```

::alert{type="info" title="控制折叠"}
- 加 `expand` 关闭自动折叠
- 加 `wrap` 开启自动换行
- 加 `icon=图标名` 自定义图标
::

````md
```ts [long-file.ts] expand wrap icon=tabler:file-code
// 用四层反引号包裹外层，即可在代码块里再写代码块语法
```
````

## 缩进导航

代码块默认开启缩进导航（Indent Guide），竖线对齐到 4 个空格：

```ts
function outer() {
	function inner() {
		if (true) {
			return 'nested'
		}
	}
	return inner()
}
```

## 更多转换器

Shiki 的转换器（如 diff 高亮）在 `app/stores/shiki.ts` 中启用。语言与主题的清单在 `blog.config.ts` 中配置。若需要为更多语言匹配图标，可扩展 `app/utils/icon.ts` 的映射表。

关于高亮主题：代码块的配色与整站亮暗色模式一致，浅色用 Catppuccin Latte，深色用 One Dark Pro :tip[查看主题配置]{tip="app/stores/shiki.ts 与 blog.config.ts"}。
