<template>
    <div class="hello">
        <h3>娃的父亲，爷爷的大儿子！</h3>
        <hr/>
        <button @click="sendGrandpa">给爷爷发消息</button>&nbsp;&nbsp;
        <button @click="sendUnclue">给叔叔发消息</button>&nbsp;&nbsp;
        <button @click="sendSon">给儿子发消息</button><br/><br/>
        <h5>[消息总线]来自{{busMessage.name}}的消息:{{ busMessage.val }}</h5><br/><br/>
        <Son :message="message" @sonSendFather="receive"/>
    </div>
</template>
<script>
import Son from '@/components/Son.vue'
export default {
    components:{Son},
    props: {
        message: Object
    },
    data(){
        return{
            messageData:{},
            busMessage:{},
            vuexMessage:{}
        }
    },
    methods:{
        sendGrandpa(){
            this.$emit("fatherSendGrandpa", {name:"大娃的爹", val:`好的，我知道了，你在家注意身体呀，我给你打了${parseInt(Math.random() * 1000)}块钱，你查一下收到没？`});
        },
        sendUnclue(){
            this.$eventBus.$emit("uncleSendGrandpa", {name:"大娃的爹", val:`父亲给我寄了${parseInt(Math.random() * 100)}斤土特产，你要不要？`});
        },
        sendSon(){
            this.message = {name:"大娃的爹", val:`今天下午${parseInt(Math.random() * 10)}点我来接你，你先放的话就等我一下`}
        },
        receive(val){
            this.messageData = val;
        }
    },
    created() {
        this.$eventBus.$on('sendFather', (message) => {
            this.busMessage = message;
        })
    }
}
</script>
<style scoped>
.hello{
    width: 600px;
    height: 300px;
    background: rgb(190, 141, 135);
    float: left;
    padding: 30px;
}
</style>