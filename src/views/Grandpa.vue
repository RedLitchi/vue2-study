<template>
    <div class="home">
        <h1>父组件</h1>
        <button @click="sendFather">给大儿子发消息</button>&nbsp;&nbsp;
        <button @click="sendUncle">给二儿子发消息</button>&nbsp;&nbsp;
        <button @click="sendGrandSon">给孙子发消息</button><br/><br/>
        <h5>[Props]来自{{propsMessage.name}}的消息:{{ propsMessage.val }}</h5><br/><br/>
        <h5>[消息总线]来自{{busMessage.name}}的消息:{{ busMessage.val }}</h5><br/><br/>
        <h5>[Vuex]来自{{vuexMessage.name}}的消息:{{ vuexMessage.val }}</h5><br/><br/>
        <div style="display: flow-root;">
            <Father :message="grandpaSendFather" @fatherSendGrandpa="receive"/>
            <Uncle :message="grandpaSendFatherUncle" @uncleSendGrandpa="receive"/>
        </div>
    </div>
</template>

<script>
import Uncle from '@/components/Uncle.vue'
import Father from '@/components/Father.vue'
export default {
    components: {
        Uncle, Father
    },
    data(){
        return{
            grandpaSendFather:{},//发给大儿子
            grandpaSendFatherUncle:{},//发给二儿子
            propsMessage:{},
            busMessage:{},
            vuexMessage:{}
        }
    },
    methods:{
        sendFather(){
            this.grandpaSendFather = {name:"大娃的爷爷", val:`在外面注意身体，我给你寄了${parseInt(Math.random() * 100)}斤家乡土特产，记得收！`};
        },
        sendUncle(){
            this.grandpaSendFatherUncle = {name:"大娃的爷爷", val:`在外面注意身体，我给你寄了${parseInt(Math.random() * 100)}斤家乡土特产，记得收！`};
        },
        sendGrandSon(){
            this.$eventBus.$emit("sendGrandSon", {name:"大娃的爷爷", val:`乖孙呀,爷爷给你转了${parseInt(Math.random() * 100)}块钱,天热买点水喝`});
        },
        receive(val){
            this.propsMessage = val;
        }
    },
    mounted() {
        this.$eventBus.$on('sendGrandpa', (message) => {
            this.busMessage = message;
        })
    }
}
</script>
<style scoped>
.home{
    background: wheat;
    height: auto;
}
</style>