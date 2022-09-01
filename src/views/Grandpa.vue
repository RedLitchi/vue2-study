<template>
    <div class="home">
        <h1>大娃爷爷</h1>
        <button @click="sendFather">给大娃的爹发消息</button>&nbsp;&nbsp;
        <button @click="sendUncle">给大娃的叔叔发消息</button>&nbsp;&nbsp;
        <button @click="sendDaWa">给大娃发消息</button><br/><br/>
        <h5>[Props]来自{{propsMessage.name}}的消息:{{ propsMessage.val }}</h5><br/><br/>
        <div style="display: flow-root;">
            <Father :grandpaSendFather="grandpaSendFather" :grandpaSendDaWa="grandpaSendDaWa" @fatherSendGrandpa="receive" 
                @fatherSendUncle="fatherSendUncle"/>
            <Uncle :grandpaSendUncle="grandpaSendUncle" @uncleSendGrandpa="receive" @uncleSendFather="uncleSendFather"
                @uncleSendDaWa="uncleSendDaWa"/>
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
            propsMessage:{},
            grandpaSendFather:{},
            grandpaSendUncle:{},
            grandpaSendDaWa:{}
        }
    },
    methods:{
        sendFather(){
            this.grandpaSendFather = {name:"大娃的爷爷", val:`好大儿,为父给你寄了${parseInt(Math.random() * 100)}斤土特产,记得收!`};
        },
        sendUncle(){
            this.grandpaSendUncle = {name:"大娃的爷爷", val:`老二呀,为父给你寄了${parseInt(Math.random() * 100)}斤土特产,记得去拿`};
        },
        sendDaWa(){
            this.grandpaSendDaWa = {name:"大娃的爷爷", val:`乖孙呀,爷爷给你转了${parseInt(Math.random() * 100)}块钱,天热买点水喝`};
        },
        receive(val){this.propsMessage = val;},//大娃爹和大娃叔给大娃爷发消息
        fatherSendUncle(val){this.grandpaSendUncle = val;},//大娃爹给大娃叔的消息
        uncleSendFather(val){this.grandpaSendFather = val;},//大娃叔给大娃爹发消息
        uncleSendDaWa(val){this.grandpaSendDaWa = val;}//大娃叔给大娃发消息
    }
}
</script>
<style scoped>
.home{
    background: wheat;
    height: 100vh;
    width: 100vw;
}
</style>