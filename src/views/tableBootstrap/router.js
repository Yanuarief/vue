var tableBootstrap = [{
	path: '/btable',
	name: 'btable',
	components: {
		header: () => import('@/views/layout/header.vue'),
		default: () => import('@/views/tableBootstrap/index.vue'),
		nav: () => import('@/views/layout/nav.vue'),
		footer: () => import('@/views/layout/footer.vue'),
	},
	meta: {
		title: 'Rivalinz :: table Bootstrap',
	}
}];

export { tableBootstrap };