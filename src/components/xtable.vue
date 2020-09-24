<template>
    <div>
        <!-- TITTLE TABLE -->
        <h3>{{ tittle }}</h3>

        <!-- SET VUE GOOD TABLE -->
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :fixed-header="true"
            max-height="300px"
            compactMode
            mode="remote"
            :pagination-options="{ 
                enabled: true, 
                perPage: 10,
                setCurrentPage: 1,
                mode: 'pages',
                dropdownAllowAll: false,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Per page',
                ofLabel: 'of',
                pageLabel: 'page',
            }" 
            :search-options="{ 
                enabled: tableSearch.isSearch,
                trigger: 'enter',
                placeholder: tableSearch.isPlaceHolder,
                
            }"
            :select-options="{ enabled: false }"
            @on-page-change="onPageChange"
            @on-sort-change="onSortChange"
            @on-per-page-change="onPerPageChange"
            @on-search="onSearch"
            :totalRows="totalRecords"
            :isLoading.sync="isLoading"
            theme="nocturnal"

        >
            <!-- BUTTON ADD -->
            <div v-if="actionButton.isAddBtn" slot="table-actions" class="text-right pb-4">
                <router-link :to="{ name:urlTable.isUrlAdd, params:{ action: 'add'} }" class="btn btn-success btn-icon-text">
                <i class="btn-icon-prepend" data-feather="plus-square"></i>
                Add New
                </router-link>
            </div>

            <!-- CUSTOM ROWS -->
            <template slot="table-row" slot-scope="props">
                <!-- BUTTON ACTION -->
                <span v-if="props.column.field == 'action'">
                    <button v-if="actionButton.isEditBtn" :data-id="props.row.id" @click="edittable(props.row.id, $event)" data-action="edit" class="btn btn-xs btn-success btn-icon-text">Edit</button>
                    <button v-if="actionButton.isDeleteBtn" :data-id="props.row.id" @click="deletetable(props.row.id, $event)" data-action="del" class="btn btn-xs btn-danger btn-icon-text">Delete</button>
                </span>
                <!-- CUSTOM ROWS -->
                <span v-else-if="customRow.field.includes(props.column.field) && customRow.isActive">
                    <slot :name='props.column.field' v-bind:datas="props"></slot>
                </span>
                <!-- NORMAL ROWS -->
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>

        </vue-good-table>

        <template>

        </template>
    </div>
</template>

<script>
export default {
    props:{
        tittle : {
            type: String,
			default: ""
        },
        tableSearch : {
            type: Object,
            default: function () {
                return { 
                    isSearch: true,
                    isPlaceHolder : 'Search...'
                 }
            }
        },
        actionButton : {
            type: Object,
            default: function () {
                return {
                    enabled: true,
                    isAddBtn : true,
                    isEditBtn : true,
                    isDeleteBtn : true,
                }
            }
        },
        headerTable : {
            type: Array,
            required: true
        },
        urlTable : {
            type: Object,
            default: function () {
                return { 
                    isAPI: String,
                    isUrlEdit : String,
                    isApiDelete : String,
                    isUrlAdd : String
                 }
            }
        },
        customRow: {
            type: Object,
            default: function () {
                return{
                    isActive: false,
                    field: Array,
                }
            }
        }
    },
    computed:{
        columns(){
            var temp = this.headerTable
            if(this.actionButton.enabled){
                temp = temp.concat({
                    label: 'Action',
                    field: 'action',
                    sortable: false,
                })
            }else{
                temp = temp
            }
            return temp
        },

    },
    data(){
        return {
            isLoading: false,
            placeholder : String,
            rows: [],
            totalRecords: 0,
            serverParams: {
                search: '',
                field: '',
                type: '',
                page: 1, 
                perPage: 10
            },
            router : this.$router,
            modalShow: false,
        };
    },
    methods: {
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
        },
    
        onPageChange(params) {
            this.updateParams({page: params.currentPage});
            this.loadItems();
        },

        onPerPageChange(params) {
            this.updateParams({perPage: params.currentPerPage});
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                type: params[0].type,
                field: params[0].field,
            });
            this.loadItems();
        },
        onSearch(params) {
            this.updateParams({
                search: params.searchTerm,
                page: 1,
                perPage: 10
            });
            this.loadItems();
        },
    
        async loadItems() {
            await axios.get(this.urlTable.isAPI, {params : this.serverParams}).then(response => {
                this.totalRecords = response.data.sum;
                this.rows = response.data.data;
            });
        },

        edittable(id, e){
            this.router.push({ name: this.urlTable.isUrlEdit, params: { userId: id } })
        },
        async deletetable(id, e){
            console.log(id)
            // await axios.delete(this.urlTable.isApiDelete);
        }
    },
    mounted(){
        this.loadItems();
    }
};
</script>