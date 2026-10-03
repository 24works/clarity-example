import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: 'CreamClarityDEMO',
	subtitle: '用上 Clarity 主题全部功能的演示站点',
	// 长 description 利好于 SEO
	description: 'CreamClarityDEMO 是基于 Clarity 博客主题构建的功能演示站点，覆盖 MDC 语法、文章分类、标签、归档、合集、订阅源、代码高亮、数学公式、图表与乐谱渲染、友链和全站搜索等能力，用于快速了解主题特性并沉淀下游改动。',
	author: {
		name: 'CreamClarityDEMO',
		avatar: 'https://weavatar.com/avatar/?d=initials&name=Cream',
		email: 'creamdemo@iicemeta.com',
		homepage: '/',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://weavatar.com/avatar/?d=initials&name=Cream',
	language: 'zh-CN',
	timeEstablished: '2026-10-03',
	timeZone: 'Asia/Shanghai',
	url: 'https://cdemo.iicemeta.com/',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'tabler:circle-dashed' },
			/** 框架能力演示：MDC/分类/标签/归档/合集/组件 */
			功能演示: { icon: 'tabler:components', color: '#ff77aa' },
			/** 写作与排版技巧：版式、语法、长文组织 */
			写作指南: { icon: 'tabler:pencil', color: '#33bbaa' },
			/** 站点个性化与部署：配置、订阅、SEO */
			站点配置: { icon: 'tabler:settings', color: '#7777ff' },
			/** 关于本演示站：站点介绍与更新 */
			关于: { icon: 'tabler:info-circle', color: '#33aaff' },
		},
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [],

	/** 文章统计配置 */
	stats: {
		/**
		 * 统计范围，匹配 content 下不含扩展名的路径（stem）；空数组统计全部内容
		 * 使用 SQL LIKE 语法：% 匹配任意长度字符，_ 匹配单个字符
		 * 多个范围取并集，如 ['posts/%', 'book/%']
		 */
		includePaths: [] as string[],
	},

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: '',
		preload: '',
	},
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: blogConfig.title,
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt'],
	date: blogConfig.timeEstablished,
	comment: '这是我自己',
}

export default blogConfig
