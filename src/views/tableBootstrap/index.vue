<template>
    <btable
    tittle="Table Bootstrap"
    id="tableBV"
    placeHolder="Type to Search.."
    :actionTable="{
        isActionEnabled: true,
        isAddBtn: true,
        isEditBtn: true, 
        isDeleteBtn: true,
        isSearch: true
    }"
    :isURL="{
        isAPIList : baseurl + 'pelanggan',
        isAPIDelete : baseurl + '',
        isRouterEdit : 'news',
        isRouterAdd : '/news'
    }"
    :headerTable="[
            { 
                key: 'fullname', 
                label: 'Person Full name', 
                sortable: true, 
            },
            { 
                key: 'lahir', 
                label: 'Birth', 
                sortable: true, 
            },
            { 
                key: 'hp', 
                label: 'HP',
            },
        ]"
    :customRow="['lahir', 'fullname']"

    >
        <template v-slot:lahir="isData" >
            <ul>
                <li>{{ isData.rows.value }}</li>
                <li>{{ isData.rows.value }}</li>
                <li>{{ isData.rows.value }}</li>
            </ul>
        </template>

        <template v-slot:fullname>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" style="width:100px;height:100px;" alt="Italian Trulli">
        </template>

    </btable>
</template>

<script>
import rest from './rest'

export default {
    data(){
        return {
        }
    },
    methods:{
    
    },
    mounted(){
    }
}
</script>