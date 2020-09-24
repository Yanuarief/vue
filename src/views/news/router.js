var news = [{
			path: '/news',
			name: 'news',
			components: {
				header: () => import('@/views/layout/header.vue'),
				default: () => import('@/views/news/index.vue'),
				nav: () => import('@/views/layout/nav.vue'),
				footer: () => import('@/views/layout/footer.vue'),
			},
			meta: {
				title: 'Rivalinz :: News',
			}
		}];

export { news };