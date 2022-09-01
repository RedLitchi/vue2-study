<template>
    <div class="hello">
        <h1>大娃的叔叔，大娃爷爷的二儿子！</h1>
        <hr/><br/>
        <button @click="sendGrandpa">给大娃爷爷发消息</button>&nbsp;&nbsp;
        <button @click="sendFather">给大娃爹发消息</button>&nbsp;&nbsp;
        <button @click="sendDaWa">给大娃发消息</button><br/><br/>
        <h5>[消息总线]来自{{busMessage.name}}的消息:{{ busMessage.val }}</h5><br/><br/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            busMessage:{}
        }
    },
    methods:{
        sendGrandpa(){
            this.$eventBus.$emit("uncleSendGrandpa", {name:"大娃的叔叔", val:`好的,天冷了我给你买了${parseInt(Math.random() * 10)}件衣服,应该这几天就到了`});
        },
        sendFather(){
            this.$eventBus.$emit("uncleSendFather", {name:"大娃的叔叔", val:`父亲给我寄了${parseInt(Math.random() * 100)}斤土特产，你要不要？`});
        },
        sendDaWa(){
            this.$eventBus.$emit("uncleSendDaWa", {name:"大娃的叔叔", val:`大娃,高考全国前${parseInt(Math.random() * 100)}名有信心没？`});
        }
    },
    created() {
        this.$eventBus.$on('daWaSendUncle', (msg) => {
            this.busMessage = msg
        })
        this.$eventBus.$on('grandpaSendUncle', (msg) => {
            this.busMessage = msg
        })
        this.$eventBus.$on('fatherSendUncle', (msg) => {
            this.busMessage = msg
        })
    }
}
</script>
<style scoped>
.hello{
    width: 600px;
    height: 300px;
    background: salmon;
    float: right;
}
</style>