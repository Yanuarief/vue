var token = localStorage.getItem("token")
 	token = token==null?'unbind':'bind'

var login;
switch(token){
    case 'unbind':
        login = 
		[{
			path: '/',
			name: 'login',
			components: {
				login: () => import('./index.vue')
			},
			meta: {
				title: 'Rivalinz :: Login',
			}
		}];
    break;

    case 'bind':
        login = [{
			path: '/',
			name: 'login',
			components: {
				header: () => import('@/views/layout/header.vue'),
				default: () => import('@/views/home/index.vue'),
				nav: () => import('@/views/layout/nav.vue'),
				footer: () => import('@/views/layout/footer.vue'),
			},
			meta: {
				title: 'Rivalinz :: Home',
			}
		}];
    break;
}

export { login };