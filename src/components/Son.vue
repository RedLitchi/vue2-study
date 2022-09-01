<template>
    <div class="c">
        <h1>儿子组件</h1>
        <hr/>
        <button @click="sendGrandpa">给爷爷发消息</button>&nbsp;&nbsp;
        <button @click="sonSendFather">给父亲发消息</button>&nbsp;&nbsp;
        <button @click="sendUncle">给叔叔发消息</button><br/><br/>
        <h5>[消息总线]来自{{busMessage.name}}的消息:{{ busMessage.val }}</h5><br/><br/>
    </div>
</template>
<script>
export default {
    props: {
        message: Object
    },
    data(){
        return{
            busMessage:{},
            vuexMessage:{}
        }
    },
    methods:{
        sendGrandpa(){
            this.$eventBus.$emit("sendGrandpa", {name:'大娃', val:`爷爷,我高考考了全国第${parseInt(Math.random() * 100)}名`});
        },
        sonSendFather(){
            this.$emit("sonSendFather", {name:"大娃", val:`好的，我知道了，那到时候我等你${parseInt(Math.random() * 10)}个小时,到时候你来不了我自己回去也行`});
        },
        sendUncle(){}
    },
    created() {
        this.$eventBus.$on("sendGrandSon", msg=>{
            this.busMessage = msg;
        });
        this.$eventBus.$on("sendNephew", msg=>{
            this.busMessage = msg;
        });
    }
}
</script>
<style scoped>
.c{
    width: 300px;
    height: 300px;
    background: rgb(107, 157, 195);
}
</style>