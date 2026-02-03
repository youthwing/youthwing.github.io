import { navbar } from 'vuepress-theme-hope';

export default navbar([
	{
		text: 'React 源码',
		icon: 'react',
		prefix: '/my-react/',
		link: '/my-react/'
	},
	{
		text: 'Vue 源码',
		icon: 'vue',
		prefix: '/my-vue/',
		link: '/my-vue/'
	},
	{
		text: '系统设计',
		icon: 'launch',
		prefix: '/system-design/',
		link: '/system-design/'
	},
	{
		text: '前端面试题',
		icon: 'creative',
		prefix: '/interview/',
		link: '/interview/'
	}
]);
