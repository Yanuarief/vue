<template>
	<div class="row">
	  <div class="col-md-12 grid-margin stretch-card">
	    <div class="card">
	      <div class="card-body">
	        <h6 class="card-title">Add News</h6>
	        <div id="form-news"></div>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>

module.exports = {
	data() {
		return {
		}
	},
	computed:{
	},
	methods: {
	},
	mounted(){
		var vue = this
		$('#form-news').createForm(function(){
			var form = [
				$.inpimage('Image', 'image', 'image',true, {
	                path: 'news',
	                accept: ['jpg','png','jpeg'],
	                height: 250,
	                width: 250,
				}),
				$.inptext('Title','tittle','tittle',true,{
					placeholder: 'Title'
	            }),
	            $.inpckeditor('Description','description','description',true,{
	            }),
	            $.inpcheckbox(`Active ?`,`active`,`active`),
			]

			return {
				form: form,
				api: rest["addnews"],
				vue: vue,
				action: 'add',
				back: 'news'
			}
		})
	}
};
</script>