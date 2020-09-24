import Vue from 'vue'
import InputTag from '@/components/InputTag.vue';
import Editor from '@tinymce/tinymce-vue';
import inputx from '@/components/inputx.vue'
import xform from '@/components/xform.vue'
import xtable from '@/components/xtable.vue'
import btable from '@/components/btable.vue'
import bform from '@/components/bform.vue'
import binput from '@/components/binput.vue'


/* Load Component */
Vue.component('input-tag', InputTag);
Vue.component('editor', Editor);
Vue.component('inputx', inputx);
Vue.component('xform', xform);
Vue.component('xtable', xtable);
Vue.component('btable', btable);
Vue.component('bform', bform);
Vue.component('binput', binput);