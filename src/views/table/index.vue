<template>
    <xtable 
    tittle="Tittle Table"
    :tableSearch="{
        isSearch: true, 
        isPlaceHolder: 'PlaceHolder'
    }"
    :actionButton="{
        enabled: true,
        isAddBtn: true,
        isEditBtn: true, 
        isDeleteBtn: true
    }"
    :headerTable="[
        {
            label: 'Name',
            field: 'fullname',
        },
        {
            label: 'HP',
            field: 'hp',
            type: 'number',
        },
        {
            label: 'Jenis Kelamin',
            field: 'jk',
        },
    ]"
    :customRow="{
        isActive: true,
        field: ['fullname', 'jk', 'hp']
    }"
    :urlTable="{
        isAPI : 'http://localhost:3000/pelanggan', 
        isUrlEdit : 'news',
        isApiDelete : 'http://localhost:3000/pelanggan',
        isUrlAdd : 'news'
    }"
    >

        <!-- TEMPLATE CUSTOM FOR ROW FIELD 'fullname' -->
        <template v-slot:fullname="thisData" >
            <ul>
                <li>{{ thisData.datas.row.fullname }}</li>
                <li>{{ thisData.datas.row.hp }}</li>
            </ul>
        </template>

        <!-- TEMPLATE CUSTOM FOR ROW FIELD 'hp' -->
        <template slot='hp' >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" style="width:100px;height:100px;" alt="Italian Trulli">
        </template>

        <!-- TEMPLATE CUSTOM FOR ROW FIELD 'jk' -->
        <template v-slot:jk="thisData" >
            <ul>
                <li>{{ thisData.datas.row.jk }}</li>
            </ul>
        </template>
    </xtable>
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