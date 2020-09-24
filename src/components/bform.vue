<template>
    <b-container fluid>
        <b-card>
            <!-- HEADER -->
            <b-card-header>
                <h4>{{ tittle }}</h4>
            </b-card-header>
            
            <!-- FORM -->
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" :id="id" novalidate :validated="validated" class="mt-3 mb-3">

                <!-- INPUT -->
                <slot></slot>

                <!-- ACTION BUTTON -->
                <b-button class="mr-2 mt-3" v-if="action.isOKBtn" pill type="submit" variant="primary">{{ action.isOKName }}</b-button>
                <b-button class="mt-3" v-if="action.isCancelBtn" pill type="reset" variant="danger">{{ action.isCancelName }}</b-button>

            </b-form>

            <!-- PROGRESS BAR -->
            <b-progress class="mr-2" v-if="isloading" :value="progressValue" :max="100" show-progress animated></b-progress>

        </b-card>
        
    </b-container>
</template>

<script>
export default {
    props: {
        id : {
            type: String,
            required: true
        },
        tittle : {
            type : String
        },
        action : {
            type: Object,
            default(){
                return {
                    isOKBtn : true,
                    isCancelBtn : true,
                    isOKName : 'Add',
                    isCancelName : 'Reset',
                    isUrlApi : ''
                }
            }
        }

    },
    data() {
		return {
            show: true,
            isloading : false,
            progressValue : 0,
            validated : false
        }
	},
    methods:{
        async onSubmit(e){
            this.validated = true
            e.preventDefault()
            
            const form = document.getElementById(this.id);
            const formData = new FormData(form);
            this.isloading = true

            const config = {
                onUploadProgress: function(v) {
                        var percentCompleted = Math.round((v.loaded * 100) / v.total)
                        this.progressValue = percentCompleted
                    }
                }

            if(form.checkValidity()){
                axios.post(this.action.isUrlApi, formData, config)
                .then(response => {
                    this.info = response.data
                    this.isloading = false
                    this.$bvToast.toast('Success', {
                        title: `Success`,
                        variant: 'success',
                        solid: true
                    })
                })
                .catch(error => {
                    this.isloading = false
                    this.$bvToast.toast(error.response.statusText, {
                        title: `Error`,
                        variant: 'danger',
                        solid: true
                    })
                })
            }else{
                this.isloading = false
                    this.$bvToast.toast('Please Complate The Form', {
                        title: `Error`,
                        variant: 'danger',
                        solid: true
                    })
            }
        },
        onReset(e){
            e.preventDefault()
            this.show = false
            this.validated = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
	mounted(){}

}
</script>
