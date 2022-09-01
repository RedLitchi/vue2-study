<template>
    <div class="hello">
        <h1>大娃的父亲，大娃爷爷的大儿子！</h1>
        <hr/><br/>
        <button @click="sendGrandpa">给大娃爷爷发消息</button>&nbsp;&nbsp;
        <button @click="sendUnclue">给大娃叔叔发消息</button>&nbsp;&nbsp;
        <button @click="sendDaWa">给大娃发消息</button><br/><br/>
        <h5>[Props]来自{{propsMessage.name}}的消息:{{ propsMessage.val }}</h5><br/><br/>
        <DaWa :grandpaSendDaWa="grandpaSendDaWa" :fatherSendDaWa="fatherSendDaWa" @daWaSendGrandpa="daWaSendGrandpa"
            @daWaSendFather="daWaSendFather" @daWaSendUncle="daWaSendUncle"/>
    </div>
</template>
<script>
import DaWa from '@/components/DaWa.vue'
export default {
    components:{DaWa},
    props:{
        grandpaSendFather: Object,
        grandpaSendDaWa: Object
    },
    data(){
        return{
            propsMessage:{},
            fatherSendDaWa:{}
        }
    },
    methods:{
        sendGrandpa(){
            this.$emit("fatherSendGrandpa", {name:"大娃的爹", val:`好的，你在家注意身体呀，我给你打了${parseInt(Math.random() * 1000)}块钱，你查一下收到没？`});
        },
        sendUnclue(){
            this.$emit("fatherSendUncle", {name:"大娃的爹", val:`二弟,父亲给我寄了${parseInt(Math.random() * 100)}斤土特产，你要不要？`});
        },
        sendDaWa(){
            this.fatherSendDaWa = {name:"大娃的爹", val:`今天下午${parseInt(Math.random() * 10)}点我来接你，你先放的话就等我一下`};
        },
        daWaSendGrandpa(val){this.$emit("fatherSendGrandpa", val);},//大娃给大娃爷发消息
        daWaSendFather(val){this.propsMessage = val;},//大娃给大娃爹发消息
        daWaSendUncle(val){this.$emit("fatherSendUncle", val)}//大娃给大娃叔发消息
    },
    watch:{
        grandpaSendFather(){
            this.propsMessage = this.grandpaSendFather;
        }
    }
}
</script>
<style scoped>
.hello{
    width: 600px;
    height: 400px;
    background: rgb(190, 141, 135);
    float: left;
}
</style>