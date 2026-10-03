---
title: MDC 语法速览
description: MDC 让 Markdown 可以直接使用 Vue 组件。本文介绍块级与行内组件、属性、插槽和样式类，是所有内容能力的基础。
date: 2026-10-03 09:10:00
updated: 2026-10-03 09:10:00
image: /covers/mdc-syntax.jpg
categories: [功能演示]
tags: [MDC, 语法, 组件]
series: Clarity 功能地图
---

## 为什么需要 MDC

Nuxt Content 使用 **MDC（Markdown Components）** 语法，在标准 Markdown 之上允许直接书写 Vue 组件。它是本站绝大多数「富文本」能力的语法基础：提示框、标签、折叠、对话、选项卡等，都是普通组件，只是换了一种写法。

::alert{type="info" title="官方文档"}
完整规范见 [Nuxt Content MDC Syntax](https://content.nuxt.com/docs/files/markdown#mdc-syntax)。本文只挑最常用的部分。
::

## 块级组件

块级组件用双冒号包裹，内部是内容与插槽：

::quote{icon="tabler:quote"}
块级组件适合包裹一段内容，例如引用、提示或分栏。
::

写法如下：

```mdc
::quote{icon="tabler:quote"}
块级组件适合包裹一段内容，例如引用、提示或分栏。
::
```

## 行内组件

行内组件用单冒号，写在句子中间：

行内组件 :badge[像这样]{link="/2026/content-components"} 可以嵌入段落，也可以带属性和插槽内容。

```mdc
行内组件 :badge[像这样]{link="/2026/content-components"} 可以嵌入段落。
```

## 属性

属性写在花括号里，值用引号包裹；布尔属性直接写名字：

::link-card
---
icon: https://picsum.photos/seed/mdclink/100
title: 属性演示
description: 属性既可以是字符串，也可以是布尔值或表达式。
link: https://content.nuxt.com/docs/files/markdown#mdc-syntax
---
::

```mdc
::link-card
---
icon: https://picsum.photos/seed/mdclink/100
title: 属性演示
description: 字符串属性也可以写成一行 YAML。
link: https://content.nuxt.com/docs/files/markdown#mdc-syntax
---
::
```

## 具名插槽

用 `#slotName` 声明具名插槽，嵌套组件时需要正确的缩进：

::alert{type="warning" card}
#title
卡片风格 + 具名插槽
#default
通过 `#title` 与 `#default` 分别填充标题和正文。

::folding{open title="插槽里还能再嵌套组件"}
折叠组件本身也是通过插槽传值的。
::
::

## 样式类与行内样式

MDC 支持用 `{.class}` 给元素加类名，也支持行内 style：

- [阴影回声]{.text-repeat}
- [故事感只在 story 版式生效]{.text-story}
- [像这样直接指定颜色——]{style="color: #00bb66"}

```md
- [阴影回声]{.text-repeat}
- [像这样直接指定颜色——]{style="color: #00bb66"}
```

## 富文本增强

Markdown 的其余能力由 remark / rehype 插件提供：脚注[^remark]、表格、任务列表、数学公式与代码高亮等。

| 能力 | 插件 |
| --- | --- |
| 数学公式 | `remark-math` + `rehype-katex` |
| 阅读时长 | `remark-reading-time` |
| 元数据插槽 | `rehype-meta-slots` |

[^remark]: 脚注由 remark-gfm 系列插件驱动，会自动生成编号与返回锚点。
