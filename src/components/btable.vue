<template>
    <b-container fluid>
        <!-- TITTLE -->
        <b-col><h2>{{ tittle }}</h2></b-col>

        <!-- SEARCH -->
        <b-col v-if="actionTable.isSearch" cols="12" class="my-1">
            <b-form-group
                label="Search : "
                label-align-sm="left"
                label-size="sm"
                label-for="filterInput"
                class="mb-3"
            >
                <b-input-group size="lg">
                    <b-form-input
                        v-model="filter"
                        type="search"
                        id="searchInput"
                        :placeholder="placeHolder">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
        </b-col>


        <b-row>
            <b-card class="col-md-12 grid-margin stretch-card">
                <!-- ADD -->
                <template v-if="actionTable.isAddBtn">
                    <b-row align-h="end">
                        <b-col cols="auto" class="pb-2">
                        <router-link :to="isURL.isRouterAdd">
                            <b-button pill variant="warning">ADD</b-button>
                        </router-link>
                        
                        </b-col>
                    </b-row>
                </template>
            
                <!-- Main table element -->
                <b-table
                  :id="id"
                  :striped="striped"
                  :bordered="bordered"
                  :borderless="borderless"
                  :outlined="outlined"
                  :small="small"
                  :hover="hover"
                  :dark="dark"
                  :responsive="responsive"
                  :fixed="fixed"
                  :foot-clone="footClone"
                  :no-border-collapse="noCollapse"
                  :head-variant="headVariant"
                  :table-variant="tableVariant"
                  :busy.sync="isBusy"
                  :sticky-header="sticky"
                  primary-key="id"
                  :no-sort-reset="true"

                  :items="getDatas"
                  :fields="fields"
                  :current-page="serverParams.page"
                  :per-page="serverParams.perPage"
                  :filter="filter"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                >

                    <!-- LOADING -->
                    <template v-slot:table-busy>
                        <div class="text-center text-danger my-2">
                            <b-spinner small variant="warning" type="grow"></b-spinner>
                            <b-spinner small variant="warning" type="grow"></b-spinner>
                            <b-spinner small variant="warning" type="grow"></b-spinner>
                        </div>
                    </template>

                    <!-- INDEX NUMBER -->
                    <template v-if="actionTable.isIndex" #cell(no)="data">
                        {{ data.index + 1 }}
                    </template>

                    <!-- BUTTON -->
                    <template #cell(actions)="data">
                        <b-button v-if="actionTable.isEditBtn" pill size="sm" @click="actionEdit(data.item)" variant="outline-danger" class="mr-1">
                            EDIT
                        </b-button>
                        <b-button v-if="actionTable.isDeleteBtn" pill size="sm" @click="actionDelete(data.item, data.index, $event.target)" variant="outline-success" class="ml-1">
                            DELETE
                        </b-button>
                    </template>

                    <!-- ROW CUSTOM -->
                    <template v-for="(value) in customRow" v-slot:[`cell(`+value+`)`]="data">
                        <slot :name='value' v-bind:rows="data"></slot>
                    </template>

                </b-table>
                
                <!-- PAGING -->
                <b-row>
                    <b-col cols="4" class="my-1 mt-4">
                        <b-form-group
                        label="Per page"
                        label-cols-sm="4"
                        label-align-sm="right"
                        label-for="perPageSelect"
                        >
                        <b-form-select
                        v-model="serverParams.perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                        ></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col class="my-1 mt-4">
                        <b-pagination
                            v-model="serverParams.page"
                            :total-rows="totalRows"
                            :per-page="serverParams.perPage"
                            align="center"
                            pills 
                        >

                        <template v-slot:first-text><span class="text-info">First</span></template>
                        <template v-slot:prev-text><span class="text-warning">Prev</span></template>
                        <template v-slot:next-text><span class="text-warning">Next</span></template>
                        <template v-slot:last-text><span class="text-info">Last</span></template>
                        <template v-slot:ellipsis-text>
                            <b-spinner small variant="primary" type="grow"></b-spinner>
                            <b-spinner small variant="primary" type="grow"></b-spinner>
                            <b-spinner small variant="primary" type="grow"></b-spinner>
                        </template>
                        <template v-slot:page="{ page, active }">
                            <b v-if="active">{{ page }}</b>
                            <i v-else>{{ page }}</i>
                        </template>

                        </b-pagination>
                    </b-col>
                </b-row>
            </b-card>
        </b-row>

        <!-- Info modal -->
        <b-modal :id="infoModal.id" :title="infoModal.title" @ok="submitDelete">
            {{ infoModal.content }}
        </b-modal>
    </b-container>
</template>

<script>
  export default {
    props:{
        id : {
            type: String
        },
        tittle : {
            type: String
        },
        placeHolder : {
            type: String
        },
        headerTable : {
            type: Array,
            required: true
        },
        actionTable :{
            type: Object,
            required: true,
            default(){
                return {
                isActionEnabled: true,
                isIndex: false,
                isAddBtn: true,
                isEditBtn: true, 
                isDeleteBtn: true,
                isSearch: true
                }
            }
        },
        isURL :{
            type: Object,
            required: true,
            default(){
                return {
                    isAPIList : '',
                    isAPIDelete : '',
                    isRouterEdit : '',
                    isRouterAdd : ''
                }
            }
        },
        customRow : {
            type: Array,
        },
      
    },
    data() {
        return {
            // SETUP TABLE
            striped: false,
            bordered: true,
            borderless: false,
            outlined: false,
            small: false,
            hover: true,
            dark: false,
            fixed: false,
            footClone: false,
            headVariant: 'light',
            tableVariant: '',
            noCollapse: false,
            responsive:true,
            isBusy: false,
            sticky: false,
            
            router : this.$router,
            totalRows: 1,
            pageOptions: [10, 20, 30, 40, 50],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            infoModal: {
                id: 'info-modal',
                title: '',
                content: '',
                itemId:'',
            },
            serverParams: {
                search: '',
                field: '',
                type: '',
                page: 1, 
                perPage: 10
            },
              
        }
      
    },
    computed: {
        fields(){
            let temp = this.headerTable
            
            if(this.actionTable.isActionEnabled){
                temp = temp.concat({ key: 'actions', label: 'Actions' , sortable: false})
            }else{
                temp = temp
            }

            return temp
        },
    },
    methods: {
        async getDatas(opt){
            this.isBusy = true
            this.updateParams({
                search: opt.filter,
                type: opt.sortDesc ? 'DESC' : 'ASC',
                field: opt.sortBy,
                page: opt.currentPage,
                perPage: opt.perPage
            });

            
            const promise = axios.get(this.isURL.isAPIList, {params : this.serverParams})
                return promise.then(data => {
                    const items = data.data.data
                    this.totalRows = data.data.sum
                    this.isBusy = false
                    
                    return (items)
                }).catch(error => {
                    this.isBusy = false
                    return []
                })

        },
        updateParams(newProps) {
              this.serverParams = Object.assign({}, this.serverParams, newProps);
        },
        actionDelete(item, index, button) {
            this.infoModal.title = `DELETE`
            this.infoModal.content = `Are you sure?`
            this.infoModal.itemId = item.id
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        resetModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
            this.infoModal.itemId = ''
        },
        async submitDelete(e){
            e.preventDefault()
            let idDelete = this.infoModal.itemId
            let token = this.token

            const htoken = {
                'Authorization': token
            }

            let formData = new FormData();
                formData.append("id", idDelete);

            await axios.post(this.isURL.isAPIDelete, formData, {headers: htoken});

            this.$nextTick(() => {
                this.$bvModal.hide('info-modal')
            })
        },
        actionEdit(item) {
            let idEdit = item.id
            this.router.push({ name: this.isURL.isRouterEdit, params: { userId: idEdit } })
        },
    },
    async mounted () {
    },
  }
</script>
