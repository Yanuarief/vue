<template>
    <div class="card-body" id="card-body">
        <h6 class="card-title">{{title}}</h6>
        <div id="loc-alert"></div>
        <form method="post" :id="`${id}-form`" :class="`forms-sample${setclass!=null?` ${setclass}`:``}`" enctype="multipart/form-data">
            <slot></slot>
            <!-- ${create_attr}
            <div id="loading-submit" style="display:none;">
                <div class="progress" id="${$(this).attr('id')}-progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                </div>
            </div>
            <div id="loading-action" style="display:show;">
                ${(action!=false?`<button type="submit" id="${$(this).attr('id')}-submit" class="btn btn-primary mr-2">${acttext}</button>`:``)}
                ${(reset==true?`<button id="${$(this).attr('id')}-reset" class="btn btn-danger">Reset</button>`:``)}
                ${(back==false?``:`<button id="${$(this).attr('id')}-back"class="btn btn-light">Cancel</button>`)} 
            </div>-->
            <div id="loading-action" style="display:show;">
                <button type="submit" :id="`${id}-submit`" class="btn btn-primary mr-2" v-on:click="submit($event)">Submit</button>
                <button :id="`${id}-reset`" class="btn btn-danger mr-2">Reset</button>
                <button :id="`${id}-back`" class="btn btn-light mr-2">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
/* import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';
 */
export default {
    props:{
        title : {
            type: [Array , Object , String , Boolean , Number , Promise],
            default: ""
        },
        id : {
            type: [Array , Object , String , Boolean , Number , Promise],
            default: ""
        },
        setclass : {
            type: [Array , Object , String , Boolean , Number , Promise],
            default: ""
        },
        action : {
            type: [Array , Object , String , Boolean , Number , Promise],
            default: ""
        } 
    },
    methods:{
        submit(e){
            e.preventDefault();
        }
    },
    mounted() {
    }
}
</script>