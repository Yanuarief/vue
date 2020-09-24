<template>
	<div class="form-group" v-if="ctype != true">
	 	<label>{{title}}</label>
	    <input :type="type" :name="name" :id="id" :value="value" :placeholder="placeholder" :class="`form-control${setclass!=null?` ${setclass}`:``}`">
	</div>
	<div class="form-group" v-else-if="rcbox == true">
		<label>{{title}}</label>
		<div class="box-rcbox">
			<div v-for="(v,k) in value" :key="k" class="form-check form-check-inline">
				<label class="form-check-label" :id="`${id}-label-${k}`">
				<input required :type="type" :name="name" :value="v['value']" :class="`form-check-input${setclass!=null?` ${setclass}`:``}`">{{v['name']}}<i class="input-frame"></i>
				</label>
			</div>
		</div>
	</div>
	<div class="form-group" v-else-if="datebox == true">
        <label>{{title}}</label>
        <div class="input-group date datepicker" :id="`${id}-date`">
          <input type="text" :name="name" :id="id" :value="value" :placeholder="placeholder" class="form-control">
          <span class="input-group-addon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </span>
        </div>
    </div>
    <div class="form-group" v-else-if="tagbox == true">
      <label>{{title}}</label>
      <input-tag  :name="name" :id="id" :placeholder="placeholder" :allow-duplicates="false"></input-tag>
    </div>
    <div class="form-group" v-else-if="currencybox == true">
      <label>{{title}}</label>
      <input class="form-control" :name="name" :id="id" :value="value" :placeholder="placeholder"/>
    </div>
    <div class="form-group" v-else-if="emailbox == true">
      <label>{{title}}</label>
      <input class="form-control" :name="name" :id="id" :value="value" :placeholder="placeholder"/>
    </div>
    <div class="form-group" v-else-if="filebox == true">
        <label>{{title}}</label>
        <input type="file" :name="name" :id="id" class="file-upload-default">
        <div class="input-group col-xs-12">
            <input type="text" class="form-control file-upload-info" disabled="" :placeholder="placeholder">
            <span class="input-group-append">
                <button :id="`${id}-inpupl`" class="file-upload-browse btn btn-primary" type="button">Upload</button>
            </span>
        </div>
    </div>
    <div class="form-group" v-else-if="selectbox == true">
      <label>{{title}}</label>
      <select v-if="multi == true" multiple :name="name" :id="id" class="form-control js-example-basic-single w-100">
        <option v-for="(v,k) in option" :key="k" :value="v.value">{{v.name}}</option>
      </select>
      <select v-else :name="name" :id="id" class="form-control js-example-basic-single w-100">
        <option v-for="(v,k) in option" :key="k" :value="v.value">{{v.name}}</option>
      </select>
    </div>
    <div class="form-group" v-else-if="imagebox == true" :id="id">
        <label v-on:click="anjay($event)">{{title}}</label>
        <div id="file_img"></div>
        <input type="file" :name="name" :id="`${id}myDropify`" class="border" accept="image/*"/>
    </div>
    <div class="form-group" v-else-if="textareabox == true">
        <label>{{title}}</label>
        <textarea class="form-control" :rows="rows==null?'5':rows" :name="name" :id="id" :placeholder="placeholder"></textarea>
    </div>
    <div class="form-group" v-else-if="editorbox == true">
    	<editor :name="name" :id="id" :value="value"
    		api-key="0tm99psgbg3sch3u5h8ot8ieully2t15j94awu261vz0bsp2"
		  	:init="editorconfig"
		/>
    </div>
</template>

<script>
export default {
	props:{
		title : {
			default: ""
		},
		type : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		name : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		id : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		value : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		placeholder : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		setclass : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		option : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		multiple : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		height : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		width : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		rows : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
		currency : {
			type: [Array , Object , String , Boolean , Number , Promise],
			default: ""
		},
	},
	data() {
		return {
			ctype : {
				type : Boolean,
				default: false
			},
			rcbox : {
				type : Boolean,
				default: false
			},
			datebox : {
				type : Boolean,
				default: false
			},
			tagbox : {
				type : Boolean,
				default: false
			},
			currencybox : {
				type : Boolean,
				default: false
			},
			emailbox : {
				type : Boolean,
				default: false
			},
			filebox : {
				type : Boolean,
				default: false
			},
			selectbox : {
				type : Boolean,
				default: false
			},
			imagebox : {
				type : Boolean,
				default: false
			},
			textareabox : {
				type : Boolean,
				default: false
			},
			editorbox : {
				type : Boolean,
				default: false
			},
			multi : {
				type : Boolean,
				default: false
			},
			editorconfig:{
				selector: 'textarea#full-tinyeditor',
				plugins:
				    'print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons',
				mobile: {
				    plugins:
				        'print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons',
				},
				menubar: 'file edit view insert format tools table help',
				quickbars_insert_toolbar: 'quicktable hr pagebreak',
				quickbars_image_toolbar: false,
				toolbar:
				    'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen preview print | link anchor codesample | ltr rtl',
				autosave_ask_before_unload: true,
				autosave_interval: '30s',
				autosave_prefix: '{path}{query}-{id}-',
				autosave_restore_when_empty: false,
				autosave_retention: '2m',
				help_tabs: [
				  'shortcuts', 
				  'keyboardnav',
				],
				height: 600,
			}
		}
	},
	mounted(){
		this.multi = this.multiple==true?true:false;

		var type_date = ["date"];
		this.datebox = type_date.includes(this.type);

		var type_textarea = ["textarea"];
		this.textareabox = type_textarea.includes(this.type);
		
		var type_image = ["image"];
		this.imagebox = type_image.includes(this.type);

		var type_tag = ["tag"];
		this.tagbox = type_tag.includes(this.type);

		var type_currency = ["currency"];
		this.currencybox = type_currency.includes(this.type);

		var type_select = ["select"];
		this.selectbox = type_select.includes(this.type);

		var type_file = ["file"];
		this.filebox = type_file.includes(this.type);

		var type_email = ["email"];
		this.emailbox = type_email.includes(this.type);

		var type_editor = ["editor"];
		this.editorbox = type_editor.includes(this.type);

		var type_rcbox = ["checkbox","radio"];
		this.rcbox = type_rcbox.includes(this.type);

		var types = []
			types = types.concat(
			type_date,
			type_rcbox,
			type_tag,
			type_currency,
			type_email,
			type_file,
			type_select,
			type_image,
			type_textarea,
			type_editor
		);

		var n = types.includes(this.type);
		this.ctype = n;

		var inpid = this.id;
		var inptype = this.type;
		var vue = this;
		$(this.$el).ready(function(e){
			switch (inptype) {
				case "date":
						$(`#${inpid}`).inputmask({
							alias : "datetime",
							inputFormat : "yyyy-mm-dd"
						});
						$(`#${inpid}-date`).datepicker({
						format: "yyyy-mm-dd",
						todayHighlight: true,
						autoclose: true
						});
					break;

				case "currency":
					$(`#${inpid}`).inputmask({ 
						alias : "currency", 
						prefix: `${(vue.currency==null?`Rp`:vue.currency)} `,
						groupSeparator: ".",
						radixPoint: ",",
						rightAlign: false
					});
					break;

				case "email":
					$(`#${inpid}`).inputmask({
						alias : "email"
					});
					break;

				case "file":
					$(`#${inpid}-inpupl`).on('click', function(e) {
					var file = $(this).parent().parent().parent().find('.file-upload-default');
					file.trigger('click');
					});
					$(`#${inpid}`).on('change', function() {
					$(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
					});
					break;

				case "select":
					$(`select#${inpid}.js-example-basic-single`).select2({placeholder: vue.placeholder});
					if(vue.value==null) $(`select#${inpid}.js-example-basic-single`).val('').trigger('change');
					break;

				case "image":
					$(`#${inpid}myDropify`).dropify();
					$(`#${inpid} .dropify-wrapper`).css('height', `${vue.height}`);
					$(`#${inpid} .dropify-wrapper`).css('width', `${vue.width}`);
					break;
			}
		})
	}
}
</script>
