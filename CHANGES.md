# CreamClarityDEMO 改动清单

> 基线：`pnpm init-project --yes` 之后的**空站点**（上游 commit `381f1c1`，Clarity v3.8.0）。
> 用途：记录本站相对空站点的全部改动，便于上游更新时**快速比对与合并**。
> 站点：<https://cdemo.iicemeta.com/> · 主题：Clarity 3.8.0 · 更新：2026-10-03

改动分四类：**配置**（改现成文件）、**功能扩展**（新增「合集」）、**框架修复**（1 处）、**内容**（文章）。除特别说明外，`app/feeds.ts`、`nuxt.config.ts`、`content.config.ts` 之外的工程文件均未改动。

---

## 一、配置改动

### 1. `blog.config.ts`

| 字段 | 空站点默认 | 本站取值 |
| --- | --- | --- |
| `title` | 我的博客 | **CreamClarityDEMO** |
| `subtitle` | 记录技术与生活 | 用上 Clarity 主题全部功能的演示站点 |
| `description` | 分享学习笔记… | 站点功能演示相关长描述（利于 SEO） |
| `author.name` | 博主 | CreamClarityDEMO |
| `author.avatar` / `favicon` | WeAvatar 首字占位 | WeAvatar `name=Cream` |
| `author.email` | （空） | **creamdemo@iicemeta.com** |
| `author.homepage` | `/` | `/`（本站在主页按钮处显式写为 `/`） |
| `url` | `http://localhost:3000/` | **`https://cdemo.iicemeta.com/`** |
| `article.categories` | 技术 / 开发 / 安全 / 杂谈 / 生活 | **功能演示 / 写作指南 / 站点配置 / 关于**（含 icon、color） |

其余（`copyright`、`timeEstablished`、`defaultCategory`、`article.types/order`、`feed`、`scripts`、`stats`、`twikoo`、`myFeed`）保持空站点默认。评论未启用（`twikoo.envId` 为空）。

### 2. `app/app.config.ts`

| 位置 | 改动 |
| --- | --- |
| 顶部 import | 移除未再使用的 `temporal-polyfill` 的 `Temporal` |
| `footer.copyright` | 由动态年份改为 **`©2026 ${blogConfig.title}`**（即 ©2026 CreamClarityDEMO） |
| `footer.iconNav`（侧栏底部按钮） | 依次为 **个人主页（本站 `/`）**、**GitHub（`24works/clarity-example`）**、**Atom 订阅（`/atom.xml`）** |
| `footer.nav` → 探索 | **仅保留 Atom 订阅**（移除「开往」） |
| `footer.nav` → 社交 | **GitHub（`24works/clarity-example`）+ 邮箱（creamdemo@iicemeta.com）** |
| `footer.nav` → 信息 | **主题（`主题: Clarity 3.8.0`，自动取版本号）** + **备案号「邦多利备00001号」**（移除「主题和组件文档」） |
| `header.emojiTail` | `['🍦','🎨','🧩','📝','✨']` |
| `nav`（左栏导航） | 在「文章」与「友链」之间新增 **`{"合集", url: '/collections'}`** |

其余（`component.*`、`header.logo/showTitle/subtitle`、`link`、`pagination`、`themes`）保持默认。

### 3. 其他配置

- `content/link.md`：友链说明改为本站版本（申请方式填 `creamdemo@iicemeta.com`）。
- `redirects.json`：清空为 `{}`（移除初始化脚本生成的 `/theme → 上游站点` 跳转）。

---

## 二、功能扩展：新增「合集 / 系列」

上游无「合集」概念。本站以最小改动补充，共 **4 处**：

| 文件 | 改动 |
| --- | --- |
| `content.config.ts` | `ArticleSchema` 接口与 zod schema 各新增 `series: z.string().optional()` |
| `app/utils/article.ts` | `queryArticleIndex()` 的 `.select(...)` 字段列表加入 `'series'` |
| `app/pages/collections.vue` | **新增页面**：按 `series` 分组渲染所有合集，复用首页的 `PostArticle` 卡片；支持侧栏 `blog-stats` / `blog-log` |
| `app/app.config.ts` | 左栏导航新增「合集」入口 |

使用方式：文章 Front matter 写 `series: 合集名` 即可归档。

---

## 三、框架文件修复（1 处）

**`scripts/init-project.ts`**：图标行清理的正则在 Windows CRLF 换行下失效（JS 正则的 `.` 不匹配 `\r`，导致 `.*\n` 无法命中整行），残留上游的 QQ 群 / GitHub / 开往 / 备案行。

```diff
- .replace(/^.*\{ icon:.*(?:jq\.qq\.com|travellings\.cn|github\.com\/(?:L33Z22L11|octocat)'|beian\.miit\.gov\.cn).*\n/gm, '')
+ .replace(/^.*\{ icon:.*(?:jq\.qq\.com|travellings\.cn|github\.com\/(?:L33Z22L11|octocat)'|beian\.miit\.gov\.cn).*\r?\n/gm, '')
```

> 说明：这是上游脚本在 Windows 上的通用缺陷，与本站定制无关，但直接影响了初始化结果，故一并记录。

另有 **`app/components/post/Comment.vue`** 的小改进：仅在配置了评论服务（`twikoo.envId` 非空）时渲染评论区，避免未启用评论时残留「评论加载中…」占位。属于体验修复，可按需保留或回退。

---

## 四、内容改动

删除初始化生成的示例文章 `content/posts/2026/example.md`，新建 **13 篇**正式文章与 **1 篇**草稿（`content/posts/2026/`、`content/previews/`）：

| 文章 | 分类 | 对应能力 |
| --- | --- | --- |
| hello-creamclarity | 关于 | 站点介绍（含 `recommend` 精选） |
| mdc-syntax | 功能演示 | MDC 语法 |
| content-components | 功能演示 | 内容组件图鉴 |
| categories | 功能演示 | 文章分类 |
| tags | 功能演示 | 标签系统 |
| archive | 功能演示 | 归档页 |
| collections | 功能演示 | 合集（本站扩展） |
| code-blocks | 功能演示 | 代码块与高亮 |
| math-charts-music | 功能演示 | 公式 / Mermaid / 乐谱 |
| aside-slots | 功能演示 | 侧栏插槽与文章内插槽 |
| feed-search-comment | 站点配置 | 订阅源 / 搜索 / 预览 / 评论 |
| site-config | 站点配置 | 站点配置与个性化 |
| story-example | 写作指南 | `type: story` 版式 |
| `previews/draft-example` | 功能演示 | 草稿预览 |

**合集划分**：`Clarity 功能地图`（10 篇）、`站点搭建手册`（2 篇）。**标签**：每篇 2–3 个，覆盖 MDC、分类、标签、归档、合集、订阅源、搜索、评论、代码高亮、数学公式、Mermaid、乐谱、版式等。

**封面图**：13 张本地封面（精选风景 / 抽象照片，picsum 固定 ID，1200×600），位于 `public/covers/*.jpg`，各篇文章 frontmatter 的 `image` 指向 `/covers/<slug>.jpg`。

---

## 五、合并建议

上游更新时，按以下顺序处理：

1. **先合并工程/框架层**：`nuxt.config.ts`、`content.config.ts`、`app/utils/`、`app/components/`、`app/composables/`、`scripts/`。注意第二节的 `series` 字段与第三节的两处改动，它们与上游同文件共存，需**逐段合并**而非整文件覆盖。
2. **再处理配置层**：`blog.config.ts`、`app/app.config.ts` 是本站定制最集中的文件，按上表逐字段核对；这两处通常可整体采用本站版本。
3. **最后处理内容**：`content/` 为本站原创，与上游无关，直接保留。
4. 合并后执行 `pnpm install && pnpm generate` 验证；关注 `/2026/*`、`/collections`、`/archive`、`/preview` 及 `/atom.xml`。

**易冲突文件清单**（合并时重点看）：

```
content.config.ts          # series 字段
app/app.config.ts          # 页脚 / 导航 / 版权（定制最多）
blog.config.ts             # 站点身份与分类
app/components/post/Comment.vue   # 评论守卫
scripts/init-project.ts    # CRLF 正则修复
app/pages/collections.vue  # 新增文件（上游不会有冲突）
public/covers/*.jpg        # 新增封面资源（上游不会有冲突）
```
