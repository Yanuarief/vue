<template>
    <bform 
    id="form1"
    tittle="Tittle of Tittle"
    :action="{
        isOKBtn : true,
        isCancelBtn : true,
        isOKName : 'Submit',
        isCancelName : 'Reset',
        isUrlApi : baseurl + 'addpelanggan'
    }"
    >
        <binput id="input1" tittle="text" placeholder="Placeholder 1" name="nameinput1" type="text" required value="asdfsdaffd"></binput>
        <binput id="input2" tittle="email" placeholder="Placeholder 2" name="nameinput2" type="email" required value="asd"></binput>
        <binput id="input3" tittle="password" placeholder="Placeholder 3" name="nameinput3" type="password" required></binput>
        <binput id="input4" tittle="number" placeholder="Placeholder 4" name="nameinput4" type="number" required></binput>
        <binput id="input5" tittle="search" placeholder="Placeholder 5" name="nameinput5" type="search" required></binput>
        <binput id="input6" tittle="url" placeholder="Placeholder 5" name="nameinput6" type="url" required></binput>
        <binput id="input7" tittle="tel" placeholder="Placeholder 5" name="nameinput7" type="tel" required></binput>
        <binput id="input8" tittle="date" placeholder="Placeholder 5" name="nameinput8" type="date" required></binput>
        <binput id="input9" tittle="time" placeholder="Placeholder 5" name="nameinput9" type="time" required></binput>
        <binput id="input10" tittle="range" placeholder="Placeholder 5" name="nameinput10" type="range" required min="0" max="10"></binput>
        <binput id="input11" tittle="color" placeholder="Placeholder 5" name="nameinput11" type="color" required></binput>
        <binput id="input12" tittle="checkbox" placeholder="Placeholder 5" name="nameinput12" type="checkbox" :options="options" required stacked></binput>
        <binput id="input13" tittle="checkbox" placeholder="Placeholder 5" name="nameinput13" type="checkbox" :options="options" switches :value="value"></binput>
        <binput id="input14" tittle="maskcurrency" placeholder="Placeholder 1" name="nameinput14" type="maskcurrency" required></binput>
        <binput id="input15" tittle="maskemail" placeholder="Placeholder 1" name="nameinput15" type="maskemail" required></binput>
        <binput id="input16" tittle="maskdate" placeholder="Placeholder 1" name="nameinput16" type="maskdate" required></binput>
        <binput id="input17" tittle="imgdropify" placeholder="Placeholder 1" name="nameinput17" type="imgdropify" required height="200px" width="100%"></binput>
        <binput id="input18" tittle="tinyeditor" placeholder="Placeholder 1" name="nameinput18" type="tinyeditor" required></binput>
        <binput id="input19" tittle="datepicker" placeholder="Placeholder 1" name="nameinput19" type="datepicker" nowButton resetButton required></binput>
        <binput id="input20" tittle="file" placeholder="Placeholder 1" name="nameinput20" type="file" required multiple></binput>
        <binput id="input21" tittle="radio" placeholder="Placeholder 5" name="nameinput21" type="radio" :options="options" required></binput>
        <binput id="input22" tittle="rating" placeholder="Placeholder 5" name="nameinput22" color="#ff8800" showclear showvalue stars="10" type="rating"></binput>
        <binput id="input23" tittle="select" placeholder="Placeholder 5" name="nameinput23" type="select" :options="options" required></binput>
        <binput id="input24" tittle="timepicker" placeholder="Placeholder 5" name="nameinput24" type="timepicker" required nowButton resetButton></binput>
        <binput id="input25" tittle="textarea" placeholder="Placeholder 5" name="nameinput25" type="textarea" maxrows="8" required></binput>
        <binput id="input26" tittle="tag" placeholder="Placeholder 6" name="nameinput26" type="tag" required></binput>
        <binput id="input27" tittle="select2" :urlAPI="baseurl+'sel2tenant'" multiple :value="selectV" placeholder="Placeholder 444" name="nameinput27" type="select2" required></binput>
        <binput id="input28" tittle="select2single" multiple :options="options" :value="selectV" placeholder="Placeholder 555" name="nameinput28" type="select2single" required></binput>


    </bform>
</template>

<script>
import rest from './rest'

export default {
    data(){
        return {
            options:[
                {
                    text: 'Orange 1', 
                    value: 'orange'
                },
                {
                    text: 'Apple', 
                    value: 'apple' 
                },
                {
                    text: 'Pineapple', 
                    value: 'pineapple' 
                },
                { 
                    text: 'Grape', 
                    value: 'grape' 
                }
            ],
            value:['orange'],
            selectV : [{id: 144, text: "3 SECOND"}],
            sbox:[
                {
                    name: 'Hahaha 1',
                    value: '1',
                },
                {
                    name: 'Hahaha 2',
                    value: '2'
                }
            ]
        }
    },
    methods:{
    
    },
    mounted(){
    }
}
</script>