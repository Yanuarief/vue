<template>
    <b-form-group v-if="getType1" :label="tittle" :label-for="id">
        <b-form-input 
            :id="id" 
            :name="name" 
            :type="type" 
            v-model="model"
            :required="required"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :plaintext="plaintext"
            :min="min"
            :max="max"
            :step="step"
        >
        </b-form-input>
    </b-form-group>

    <b-form-group v-else-if="getType2" :label="tittle" :label-for="id">
        <b-form-checkbox-group
            :id="id"
            v-model="model"
            :options="options"
            :name="name"
            :stacked="stacked"
            :switches="switches"
        >
        </b-form-checkbox-group>
    </b-form-group>

    <b-form-group v-else-if="getType3" :label="tittle" :label-for="id">
        <b-form-input 
            :id="id" 
            :name="name"
            v-model="model"
            :required="required"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
        >
        </b-form-input>
    </b-form-group>

    <b-form-group v-else-if="getType4" :label="tittle" :label-for="id">
        <input
            :id="id+'myDropify'" 
            :name="name"
            type="file"
            :required="required"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            accept="image/*"
            :value="value"
        />
    </b-form-group>

    <b-form-group v-else-if="getType5" :label="tittle" :label-for="id">
        <editor
            :name="name" 
            :id="id" 
            :value="value"
    		api-key="0tm99psgbg3sch3u5h8ot8ieully2t15j94awu261vz0bsp2"
		  	:init="editorconfig"
            :required="required"
		/>
    </b-form-group>

    <b-form-group v-else-if="getType6" :label="tittle" :label-for="id">
        <b-form-datepicker 
            :id="id" 
            :name="name" 
            v-model="model"
            :locale="locale"
            :aria-required="required"
            :required="required"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :min="min"
            :max="max"
            :today-button="nowButton"
            :reset-button="resetButton"
            :close-button="closeButton"
        >
        </b-form-datepicker>
    </b-form-group>

    <b-form-group v-else-if="getType7" :label="tittle" :label-for="id">
        <b-form-file
            v-model="model"
            :multiple="multiple"
            :required="required"
            :placeholder="placeholder"
            drop-placeholder="Drop file here..."
            accept="*/*"
            capture
            :name="name"
        >
        </b-form-file>
    </b-form-group>

    <b-form-group v-else-if="getType8" :label="tittle" :label-for="id">
        <b-form-radio-group
            :id="id"
            v-model="model"
            :options="options"
            :name="name"
            :required="required"
        >
        </b-form-radio-group>
    </b-form-group>

    <b-form-group v-else-if="getType9" :label="tittle" :label-for="id">
        <b-form-rating 
            v-model="model" 
            :show-clear="showclear"
            :show-value="showvalue"
            :show-value-max="showvaluemax"
            :disabled="disabled"
            :readonly="readonly"
            :color="color"
            :stars="stars"
            :inline="inline"
            :name="name"
        >
        </b-form-rating>
    </b-form-group>

    <b-form-group v-else-if="getType10" :label="tittle" :label-for="id">
        <b-form-select 
            v-model="model" 
            :options="options"
            :multiple="multiple"
            :disabled="disabled"
            :required="required"
            :name="name"
        >
            <template v-slot:first>
                <b-form-select-option :value="undefined" disabled>{{ placeholder }}</b-form-select-option>
            </template>
        </b-form-select>
    </b-form-group>

    <b-form-group v-else-if="getType11" :label="tittle" :label-for="id">
        <b-form-timepicker
            :id="id"
            v-model="model"
            :now-button="nowButton"
            :reset-button="resetButton"
            :required="required"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :show-seconds="seconds"
            :name="name"
            :aria-required="required"
        >
        </b-form-timepicker>
    </b-form-group>

    <b-form-group v-else-if="getType12" :label="tittle" :label-for="id">
        <b-form-textarea
            :id="id"
            v-model="model"
            :placeholder="placeholder"
            :rows="rows"
            :max-rows="maxrows"
            :plaintext="plaintext"
            :required="required"
            :no-auto-shrink="autoshrink"
            :name="name"

        >
        </b-form-textarea>
    </b-form-group>

    <b-form-group v-else-if="getType13" :label="tittle" :label-for="id">
        <b-form-tags
            :input-id="id"
            v-model="model"
            :separator="separator"
            :placeholder="placeholder"
            :remove-on-delete="removeOnDelete"
            :no-add-on-enter="noAddEnter"
            tag-variant="primary"
            :tag-pills="pills"
            :disabled="disabled"
            :name="name"
        >
        </b-form-tags>
    </b-form-group>

    <b-form-group v-else-if="getType14" :label="tittle" :label-for="id">
        <select 
            class="js-data-example-ajax"
            :id="id"
            :name="name"
            :multiple="multiple"
            :required="required"
        >
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
    </b-form-group>

    <b-form-group v-else-if="getType15" :label="tittle" :label-for="id">
        <select 
            class="js-example-basic-single"
            :id="id"
            :name="name"
            :multiple="multiple"
            :required="required"
        >
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
    </b-form-group>
    
    
</template>

<script>
export default {
    props:{
        id : {
            type : String,
            required : true
        },
        type : {
            type : String,
            required : true
        },
        tittle : {
            type : String,
            required : true
        },
        name : {
            type : String
        },
        value : {
            type : [String, Array]
        },
        required : {
            type : Boolean,
        },
        plaintext : {
            type : Boolean,
        },
        disabled : {
            type : Boolean,
        },
        placeholder : {
            type : String,
        },
        options : {
            type : Array
        },
        stacked : {
            type : Boolean,
        },
        readonly : {
            type : Boolean
        },
        min : {
            type : [String, Number]
        },
        max : {
            type : [String, Number]
        },
        step : {
            type : [String, Number]
        },
        switches : {
            type : Boolean
        },
        width: {
            type : String
        },
        height : {
            type : String
        },
        locale : {
            type : String,
            default(){
                return "en"
            }
        },
        nowButton : {
            type : Boolean
        },
        resetButton : {
            type : Boolean
        },
        closeButton : {
            type : Boolean
        },
        multiple : {
            type : Boolean
        },
        showclear : {
            type : Boolean
        },
        showvalue : {
            type : Boolean
        },
        showvaluemax : {
            type : Boolean
        },
        color : {
            type : String
        },
        stars : {
            type : String
        },
        inline : {
            type : Boolean
        },
        seconds : {
            type : Boolean
        },
        rows : {
            type : String
        },
        maxrows : {
            type : String
        },
        autoshrink : {
            type : Boolean
        },
        separator : {
            type : String
        },
        removeOnDelete : {
            type : Boolean
        },
        noAddEnter : {
            type : Boolean
        },
        pills : {
            type : Boolean
        },
        urlAPI : {
            type : String
        },


    },
    data() {
        return {
            model : this.value,
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
			},
            typeInput1 : [
                'text',
                'number',
                'email',
                'password',
                'search',
                'url',
                'tel',
                'date',
                'time',
                'range',
                'color',
            ],
            typeInput2 : [
                'checkbox',
            ],
            typeInput3 : [
                'maskcurrency',
                'maskemail',
                'maskdate'
            ],
            typeInput4 : [
                'imgdropify',
            ],
            typeInput5 : [
                'tinyeditor',
            ],
            typeInput6 : [
                'datepicker',
            ],
            typeInput7 : [
                'file',
            ],
            typeInput8 : [
                'radio',
            ],
            typeInput9 : [
                'rating',
            ],
            typeInput10 : [
                'select',
            ],
            typeInput11 : [
                'timepicker',
            ],
            typeInput12 : [
                'textarea',
            ],
            typeInput13 : [
                'tag',
            ],
            typeInput14 : [
                'select2',
            ],
            typeInput15 : [
                'select2single',
            ],
        }
    },
    watch:{
        value(e){
            this.model = e
        }
    },
    computed: {
        getType1(){
            return this.typeInput1.includes(this.type)
        },
        getType2(){
            return this.typeInput2.includes(this.type)
        },
        getType3(){
            return this.typeInput3.includes(this.type)
        },
        getType4(){
            return this.typeInput4.includes(this.type)
        },
        getType5(){
            return this.typeInput5.includes(this.type)
        },
        getType6(){
            return this.typeInput6.includes(this.type)
        },
        getType7(){
            return this.typeInput7.includes(this.type)
        },
        getType8(){
            return this.typeInput8.includes(this.type)
        },
        getType9(){
            return this.typeInput9.includes(this.type)
        },
        getType10(){
            return this.typeInput10.includes(this.type)
        },
        getType11(){
            return this.typeInput11.includes(this.type)
        },
        getType12(){
            return this.typeInput12.includes(this.type)
        },
        getType13(){
            return this.typeInput13.includes(this.type)
        },
        getType14(){
            return this.typeInput14.includes(this.type)
        },
        getType15(){
            return this.typeInput15.includes(this.type)
        },
    },
    mounted(){
        let type = this.type
        let id = this.id
        let vue = this

        $(this.$el).ready(function(e){
            
            switch(type){
                case "maskdate":
						$(`#${id}`).inputmask({
							alias : "datetime",
							inputFormat : "yyyy-mm-dd"
						});
						$(`#${id}`).datepicker({
						format: "yyyy-mm-dd",
						todayHighlight: true,
						autoclose: true
						});
                    break;
                    
                case "maskcurrency":
                    $(`#${id}`).inputmask({ 
						alias : "currency", 
						prefix: `${(vue.currency==null?`Rp`:vue.currency)} `,
						groupSeparator: ".",
						radixPoint: ",",
						rightAlign: false
					});
                    break;

                case "maskemail":
					$(`#${id}`).inputmask({
						alias : "email"
					});
                    break;
                
                case "imgdropify":
					$(`#${id}myDropify`).dropify();
					$(`#${id} .dropify-wrapper`).css('height', `${vue.height}`);
                    $(`#${id} .dropify-wrapper`).css('width', `${vue.width}`);
                    
                    $(`#${id}myDropify`).on('change', function() {
                        $(this).val().replace(/C:\\fakepath\\/i, '');
					});
                    break;
                
                case "select2":
					$(`#${id}`).select2({
						placeholder: vue.placeholder,
                    allowClear: true,
                    enable: true,
                    tags: false,
                    ajax: {
                        url: vue.urlAPI,
                        method: "GET",
                        data: function(params) {
                            var keyword = params.term;
                            if (keyword === undefined) {
                                keyword = "";
                            }
                            var query = {
                                column: "text",
                                value: keyword,
                                page: params.page || 1
                            }
                            return query;
                        },
                        processResults: function(data) {
                            return {
                                results: $.map(data.data, function(obj) {
                                    var placeId = obj.id;
                                    var placeName = obj.text;
                                    return {
                                        id: placeId,
                                        text: placeName
                                    }
                                }),
                                pagination: {
                                    more: (data.next_page==data.current_page?false:true)
                                }
                            }
                        }
                    }
                    });

                    $(`#${id}`).html(`<option value="${vue.model[0].id}">${vue.model[0].text}</option>`)
                                
                    break;

                case "select2single":
					$(`#${id}`).select2({
                        placeholder: vue.placeholder,
                        allowClear: true
                    });

                    // $(`#${id}`).html(`<option value="${vue.model[0].id}">${vue.model[0].text}</option>`)
                                
                    break;
            }
        })

    }

}
</script>

<style>

</style>