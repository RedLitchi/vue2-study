<template>
    <div class="c">
        <h1>大娃</h1>
        <hr/>
        <button @click="sendGrandpa">给爷爷发消息</button>&nbsp;&nbsp;
        <button @click="sendFather">给父亲发消息</button>&nbsp;&nbsp;
        <button @click="sendUncle">给叔叔发消息</button><br/><br/>
        <h5>[Props]来自{{propsMessage.name}}的消息:{{ propsMessage.val }}</h5><br/><br/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            propsMessage:{}
        }
    },
    methods:{
        sendGrandpa(){
            this.$eventBus.$emit("daWaSendGrandpa", {name:'大娃', val:`爷爷,我高考考了全国第${parseInt(Math.random() * 100)}名`});
        },
        sendFather(){
            this.$eventBus.$emit("daWaSendFather", {name:"大娃", val:`好的，那到时候我等你${parseInt(Math.random() * 10)}个小时,到时候你来不了我自己回去也行`});
        },
        sendUncle(){
            this.$eventBus.$emit("daWaSendUncle", {name:"大娃", val:`谢谢叔叔关心，我高考考了全国第${parseInt(Math.random() * 10)}名`});}
    },
    mounted() {
        this.$eventBus.$on("grandpaSendGrandDaWa", msg=>{
            this.busMessage = msg;
        });
        this.$eventBus.$on("fatherSendDaWa", msg=>{
            this.busMessage = msg;
        });
        this.$eventBus.$on("uncleSendDaWa", msg=>{
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