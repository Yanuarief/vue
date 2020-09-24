<template>
    <section>
        <div class="text-right pb-4">
            <router-link :to="{name:'news_action_add',params:{ action: 'add'}}" class="btn btn-success btn-icon-text">
              <i class="btn-icon-prepend" data-feather="plus-square"></i>
              Add New
            </router-link>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h6 class="card-title">Search</h6>
                <div id="search-form">
                </div>
            </div>
        </div>
        <div id="table-news"></div>
    </section>
</template>

<script>
module.exports = {
    mounted: function(){
        var vue = this
        $('#search-form').createForm(function(){
            var form = [
               $.html(`<div class="row"><div class="col-md-12"><div class="row">`),
                $.html(`<div class="col-md-12">`),
                $.inptext('Title','Tittle','Tittle',true,{
                    placeholder: 'Title'
                }),
                $.html(`</div>`),
                $.html(`</div></div></div>`),
            ]

            return {
                form: form,
                vue: vue,
                action: `search`,
                back: false,
                reset: true
            }
        })


        const router = this.$router
        const urldel = rest['delnews']
        const redit = 'news_action_edit'
        $.table('table-news',router,async function(param){
            var url = rest['news'];
            var title = 'List News'
            var column = [ 'Image', 'Title', 'Details']
            var value = ['Image', 'Tittle', '']
            var custom = [
                `<img class="image-normal" style="object-fit:contain;height:100px;width:100px;" src="{{'<~this.Image.small~>'}}"/>`,
                false,
                `<ul style="padding-left:15px;">
                    <li><b>Status :</b> {{'<~this.status~>'}}</li>
                    <li><b>Created Date :</b> {{'<~this.created_date~>'}}</li>
                    <li><b>Modified Date :</b> {{'<~this.modified_date~>'}}</li>
                </ul>`,
                false,
            ]

            const list = await axios.get(url)
            const datas = list.data;

            return {
                title:title,
                datas:datas,
                column:column,
                value:value,
                custom:custom,
                search:false,
                action:{
                    delall:false,
                }
            }
            
        },urldel,redit,'search-form');
        
    }
}
</script>