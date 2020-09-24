<template>
    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <xform :title="token" id="news" action="add">
                    <inputx title="Text" type="text" name="inp_1" id="inp_1" placeholder="Text"/> 
                    <inputx title="Password" type="password" name="inp_2" id="inp_2" placeholder="Password"/>
                    <inputx title="Number" type="number" name="inp_3" id="inp_3" placeholder="Number"/>
                    <inputx title="Checkbox" type="checkbox" name="inp_4"  :value="cbox"/>
                    <inputx title="Radiobox" type="radio" name="inp_5" id="inp_5" :value="rbox"/>
                    <inputx title="Date" type="date" name="inp_6" id="inp_6" placeholder="Date"/>
                    <inputx title="Tag" type="tag" name="inp_7" id="inp_7" placeholder="Tag"/>
                    <inputx title="Currency" type="currency" name="inp_8" id="inp_8" placeholder="Currency"/>
                    <inputx title="Email" type="email" name="inp_9" id="inp_9" placeholder="Email"/>
                    <inputx title="File" type="file" name="inp_10" id="inp_10" placeholder="File"/>
                    <inputx title="Select" type="select" name="inp_11" id="inp_11" placeholder="Select" :multiple="false" :option="sbox"/>
                    <inputx title="Multi Select" type="select" name="inp_12" id="inp_12" placeholder="Select 2" :multiple="true" :option="sbox"/>
                    <inputx title="Image" type="image" name="inp_13" id="inp_13" height="200px" width="100%"/>
                    <inputx title="Textarea" type="textarea" name="inp_14" id="inp_14" placeholder="Textarea" rows="10"/>
                    <inputx title="Editor" type="editor" name="inp_15" id="inp_15" placeholder="Editor"/>
                </xform>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Home',
        data(){
        return{
            cbox:[
                {
                    name: `Anjay X`,
                    value: `anjay 1`
                },
                {
                    name: `Anjay Y`,
                    value: `anjay 2`
                }
            ],
            rbox:[
                {
                    name: `Anjay X`,
                    value: `anjay 1`
                },
                {
                    name: `Anjay Y`,
                    value: `anjay 2`
                }
            ],
            sbox:[
                {
                    name: 'Hahaha 1',
                    value: '1'
                },
                {
                    name: 'Hahaha 2',
                    value: '2'
                }
            ]
        }
    },
    mounted(){
        // console.log(process.env)
    }
}
</script>