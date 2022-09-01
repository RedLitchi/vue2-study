<template>
    <div class="home">
        <h1>大娃爷爷</h1>
        <button @click="sendFather">给大娃的爹发消息</button>&nbsp;&nbsp;
        <button @click="sendUncle">给大娃的叔叔发消息</button>&nbsp;&nbsp;
        <button @click="sendGrandDaWa">给大娃发消息</button><br/><br/>
        <h5>[Props]来自{{propsMessage.name}}的消息:{{ propsMessage.val }}</h5><br/><br/>
        <div style="display: flow-root;">
            <Father :grandpaSendFather="grandpaSendFather"/>
            <Uncle :grandpaSendUncle="grandpaSendUncle"/>
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
            this.$eventBus.$emit("grandpaSendFather", {name:"大娃的爷爷", val:`好大儿,为父给你寄了${parseInt(Math.random() * 100)}斤土特产,记得收!`});
        },
        sendUncle(){
            this.$eventBus.$emit("grandpaSendUncle", {name:"大娃的爷爷", val:`老二呀,为父给你寄了${parseInt(Math.random() * 100)}斤土特产,记得去拿`});
        },
        sendGrandDaWa(){
            this.$eventBus.$emit("grandpaSendGrandDaWa", {name:"大娃的爷爷", val:`乖孙呀,爷爷给你转了${parseInt(Math.random() * 100)}块钱,天热买点水喝`});
        }
    },
    mounted() {
        this.$eventBus.$on('fatherSendGrandpa', (message) => {
            this.busMessage = message;
        })
        this.$eventBus.$on('uncleSendGrandpa', (message) => {
            this.busMessage = message;
        })
        this.$eventBus.$on('daWaSendGrandpa', (message) => {
            this.busMessage = message;
        })
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