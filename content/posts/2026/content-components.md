---
title: 内容组件图鉴
description: 挑出 Clarity 常用的内容组件，给出实景效果与 MDC 写法，方便在文章里直接取用。
date: 2026-10-03 09:20:00
updated: 2026-10-03 09:20:00
image: /covers/content-components.jpg
categories: [功能演示]
tags: [组件, MDC, 排版]
series: Clarity 功能地图
recommend: 2
---

## 提示类

### Alert

::alert
你好，我是默认提示。
::

::alert{type="info" title="带标题的信息"}
默认插槽里支持 [链接](#alert)、**粗体** 和 `行内代码`。
::

::alert{type="warning" flat}
#title
扁平风格
#default
通过 `flat` 属性切换为扁平风格，`card` 是默认的卡片风格。
::

```mdc
::alert{type="info" title="带标题的信息"}
支持 [链接](#alert)、**粗体** 和 `行内代码`。
::
```

### Tip / Quote

行内小提示：:tip[我是一条小提示]{tip="鼠标悬浮时显示"}，也可以没有图标 :tip[只有提示]{icon tip="纯文本"}。

::quote{icon="tabler:quote"}
引用组件可以自定义图标，图标也可以是 Emoji 或颜文字。
::

::quote
#icon
ヾ(•ω•`)o
#default
图标插槽同样支持任意内容。
::

### Badge

:badge[纯文本] :badge[带链接]{link="#badge"} :badge[方形]{square} :badge[GitHub 头像自动识别]{link="https://github.com/24works"}

```mdc
:badge[带链接]{link="#badge"} :badge[方形]{square}
```

## 布局类

### Tab

::tab{:tabs='["组件", "语法"]'}
#tab1
选项卡用于在「效果」和「源码」之间切换，本站多处演示都用了它。

::link-card
---
icon: https://content.nuxt.com/favicon.ico
title: MDC 基本语法
link: https://content.nuxt.com/docs/files/markdown#mdc-syntax
---
::
#tab2
```mdc
::tab{:tabs='["组件", "语法"]'}
#tab1
第一个分页的内容
#tab2
第二个分页的内容
::
```
::

### CardList

::card-list
- 把普通列表渲染成卡片
  - 支持多级嵌套
  - 适合罗列特性
::

### Folding

::folding{open title="默认展开的折叠"}
折叠内部可以再次嵌套组件：

::alert{type="error"}
#title
嵌套时注意缩进
#default
在插槽内使用 `#slot` 语法必须正确缩进，否则会解析失败。
::
::

```mdc
::folding{open title="默认展开的折叠"}
内容……
::
```

### Timeline

::timeline
{第一步}

安装依赖并初始化项目。

{第二步}

填写站点配置与内容。

{第三步}

构建并部署。
::

### Chat

::chat
{:2026-10-03 09:20:00}

{.}

这个组件可以还原即时通讯的排版。

{.纸鹿}

还支持昵称和撤回提示。

{:纸鹿撤回了一条消息}
::

## 交互类

### Copy

`pnpm init-project`{lang="sh" copy} 这样带复制按钮的行内代码，也可以做成整块命令：

:copy{code="pnpm init-project # 输入 confirm 确认"}
:copy{prompt code="https://cdemo.iicemeta.com/atom.xml"}

### Key

按 **Ctrl / Cmd + K** 可以唤起全站搜索，键位提示就是 Key 组件渲染的：:key{code="Control" icon} :key{code="K"}。

### EmojiClock

现在大概几点？:emoji-clock (半小时) :emoji-clock{rotate} (五分钟) :emoji-clock{datetime="2026-10-03 09:20:00"} (指定时间)

### Blur

:blur[被遮住的文字，鼠标悬浮才能看清。]

## 链接与图片

### LinkCard / LinkBanner

::link-card
---
icon: https://picsum.photos/seed/card/100
title: 卡片式链接
description: 适合放在正文里指向站内外资源。
link: "#linkcard"
---
::

::link-banner
---
banner: https://picsum.photos/seed/banner/960/360
title: 横幅式链接
description: 带封面图的链接，适合放在文章开头。
link: "#linkbanner"
---
::

### Pic

::pic
---
src: https://picsum.photos/seed/pic/960/480
caption: 图片组件支持说明文字，点击可打开灯箱缩放。
---
::

### VideoEmbed

::video-embed
---
type: bilibili
id: BV1Yr421p7rW
---
::

## 更多组件

除上述组件外，`app/components` 下还有一些「微型组件」，可在 MDC 或 Vue 模板中按需使用：`Slider`、`Toggle`、`Dropdown`、`Expand`、`RadioGroup`、`DlGroup`、`Secret`、`Button` 等。它们的用法可以在源码中找到，日常写文时向上面的常用组件看齐即可。
