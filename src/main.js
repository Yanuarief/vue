import Vue from 'vue'
import App from './App.vue'
require('@/core/load');
import { baseurl } from '@/config'
import './registerServiceWorker'
import router from './router'
import rest from './utils'
import store from './store'
import $ from 'jquery'
import axios from 'axios'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
// BOOTSTRAP VUE
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueGoodTablePlugin);

Vue.mixin({
    data: function() {
        return {
            baseurl: `http://${document.location.hostname}:3000/`,
            token: localStorage.getItem('token')
        }
    }
})
Vue.config.productionTip = false
new Vue({
	router,
	store,
	methods: {
		async init() {
            var token = localStorage.getItem("token")
            var vue = this
            if(token==null){
                this.$router.replace('/')
                $("#app .page-wrapper").addClass(" full-page");
                $("#app .page-content").hide();
            }
            
            if(token!=null){
                var url = rest["checking"]
                const auth = await axios.get(url,{
                    headers: {
                       Authorization: token
                    }
                });
                var active = auth.data.active;
                if(active==false){
                    localStorage.removeItem('token');
                    location.reload();
                }
            }
        }
	},
	mounted() {
		this.$nextTick()
		this.init()
	},
  render: h => h(App)
}).$mount('#app')