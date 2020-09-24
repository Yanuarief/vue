var forminput = [{
	path: '/forminput',
	name: 'forminput',
	components: {
		header: () => import('@/views/layout/header.vue'),
		default: () => import('@/views/forminput/index.vue'),
		nav: () => import('@/views/layout/nav.vue'),
		footer: () => import('@/views/layout/footer.vue'),
	},
	meta: {
		title: 'Rivalinz :: table Bootstrap',
	}
}];

export { forminput };