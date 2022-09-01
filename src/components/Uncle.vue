<template>
    <div class="hello">
        <h3>叔叔，爷爷的二儿子！</h3>
        <hr/>
        <button @click="sendGrandpa">给父亲发消息</button>&nbsp;&nbsp;
        <button @click="sendFather">给大哥发消息</button>&nbsp;&nbsp;
        <button @click="sendNephew">给侄子发消息</button><br/><br/>
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
            this.$emit("uncleSendGrandpa", {name:"二儿子", val:`好的，我知道了，你在家注意身体呀，我给你打了${parseInt(Math.random() * 1000)}块钱，你查一下收到没？`});
        },
        sendFather(){
            this.$eventBus.$emit("sendFather", {name:"二弟", val:`不用不用，娃他爷给我寄了${parseInt(Math.random() * 100)}斤土特产，你要不？`});
        },
        sendNephew(){
            this.$eventBus.$emit("sendNephew", {name:"叔叔", val:`高考成绩出来了,全国前${parseInt(Math.random() * 100)}名有信心不？`});
        }
    },
    created() {
        this.$eventBus.$on('uncleSendGrandpa', (msg) => {
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