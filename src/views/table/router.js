var table = [{
	path: '/table',
	name: 'table',
	components: {
		header: () => import('@/views/layout/header.vue'),
		default: () => import('@/views/table/index.vue'),
		nav: () => import('@/views/layout/nav.vue'),
		footer: () => import('@/views/layout/footer.vue'),
	},
	meta: {
		title: 'Rivalinz :: table',
	}
}];

export { table };