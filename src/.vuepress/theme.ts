import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.ts';
import sidebar from './sidebar.ts';
// import { enNavbar, zhNavbar } from "./navbar/index.ts";
// import { enSidebar, zhSidebar } from "./sidebar/index.ts";

export default hopeTheme(
	{
		pure: false, // 启用完整功能
		hostname: 'https://youthwing.github.io',

		author: {
			name: 'Youthwing',
			url: 'https://github.com/youthwing'
		},
		pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

		iconAssets: 'fontawesome-with-brands',

		logo: 'assets/image/logo.jpg',

		favicon: 'assets/image/logo.jpg',

		repo: 'youthwing/youthwing.github.io',

		docsBranch: 'main',

		docsDir: 'src',

		// 极客风格：深色模式优先
		darkmode: 'toggle',
		themeColor: {
			blue: '#2196f3',
			red: '#f26d6d',
			green: '#3eaf7c',
			orange: '#fb9b5f',
			purple: '#8e44ad',
			cyan: '#00bcd4'
		},

		// navbar
		navbar,

		// sidebar
		sidebar,

		// page meta
		metaLocales: {
			editLink: '在 GitHub 上编辑此页'
		},

		print: false,

		footer: '<a href="https://github.com/youthwing" target="_blank">GitHub</a> | Powered by VuePress & Hope Theme',

		displayFooter: true,

		copyright: 'Copyright © 2024-present Youthwing',

		// locales: {
		//   /**
		//    * Chinese locale config
		//    */
		//   "/": {
		//     // navbar
		//     navbar: zhNavbar,
		//     // sidebar
		//     sidebar: zhSidebar,
		//     // page meta
		//     metaLocales: {
		//       editLink: "在 GitHub 上编辑此页",
		//     },
		//   },
		//   /**
		//    * English locale config
		//    */
		//   "/en/": {
		//     // navbar
		//     navbar: enNavbar,
		//     // sidebar
		//     sidebar: enSidebar,
		//     metaLocales: {
		//       editLink: "Edit this page on GitHub",
		//     },
		//   },
		// },

		encrypt: {
			config: {
				// "/demo/encrypt.html": ["1234"],
			}
		},

		blog: {
			medias: {
				GitHub: 'https://github.com/youthwing',
				Email: 'mailto:youthwing@users.noreply.github.com'
			},
			avatar: 'assets/image/logo.jpg',
			roundAvatar: true,
			description: '全栈开发者 | 技术爱好者',
			intro: '/intro.html'
		},

		plugins: {
			// You should generate and use your own comment service
			// comment: {
			// 	provider: 'Giscus',
			// 	repo: 'youthwing/youthwing.github.io',
			// 	repoId: 'YOUR_REPO_ID',
			// 	category: 'General',
			// 	categoryId: 'YOUR_CATEGORY_ID'
			// },

			blog: {
				excerptLength: 100
			},

			// All features are enabled for demo, only preserve features you need here
			mdEnhance: {
				align: true,
				attrs: true,
				codetabs: true,
				component: true,
				demo: true,
				figure: true,
				imgLazyload: true,
				imgSize: true,
				include: true,
				tasklist: true,
				mark: true,
				
				// 极客风格：启用代码高亮和语法支持
				gfm: true,
				hint: true,
				vPre: true,
				
				// 代码块增强
				playground: {
					presets: ['ts', 'vue']
				},

				stylize: [
					{
						matcher: 'Recommended',
						replacer: ({ tag }) => {
							if (tag === 'em')
								return {
									tag: 'Badge',
									attrs: { type: 'tip' },
									content: 'Recommended'
								};
						}
					}
				],
				sub: true,
				sup: true,
				tabs: true,
				container: true
			},
			
			// 代码复制按钮
			copyCode: {
				showInMobile: true
			},
			
			// 启用搜索
			searchPro: {
				indexContent: true
			}

			// uncomment these if you want a pwa
			// pwa: {
			//   favicon: "/favicon.ico",
			//   cacheHTML: true,
			//   cachePic: true,
			//   appendBase: true,
			//   apple: {
			//     icon: "/assets/icon/apple-icon-152.png",
			//     statusBarColor: "black",
			//   },
			//   msTile: {
			//     image: "/assets/icon/ms-icon-144.png",
			//     color: "#ffffff",
			//   },
			//   manifest: {
			//     icons: [
			//       {
			//         src: "/assets/icon/chrome-mask-512.png",
			//         sizes: "512x512",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-mask-192.png",
			//         sizes: "192x192",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-512.png",
			//         sizes: "512x512",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-192.png",
			//         sizes: "192x192",
			//         type: "image/png",
			//       },
			//     ],
			//     shortcuts: [
			//       {
			//         name: "Demo",
			//         short_name: "Demo",
			//         url: "/demo/",
			//         icons: [
			//           {
			//             src: "/assets/icon/guide-maskable.png",
			//             sizes: "192x192",
			//             purpose: "maskable",
			//             type: "image/png",
			//           },
			//         ],
			//       },
			//     ],
			//   },
			// },
		}
	},
	{ custom: true }
);
