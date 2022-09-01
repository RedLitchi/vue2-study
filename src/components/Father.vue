<template>
    <div class="hello">
        <h3>大娃的父亲，大娃爷爷的大儿子！</h3>
        <hr/>
        <button @click="sendGrandpa">给大娃爷爷发消息</button>&nbsp;&nbsp;
        <button @click="sendUnclue">给大娃叔叔发消息</button>&nbsp;&nbsp;
        <button @click="sendDaWa">给大娃发消息</button><br/><br/>
        <h5>[Vuex]来自{{vuexMessage.name}}的消息:{{ vuexMessage.val }}</h5><br/><br/>
        <DaWa/>
    </div>
</template>
<script>
import DaWa from '@/components/DaWa.vue'
export default {
    components:{DaWa},
    computed:{
        vuexMessage(){
            return this.$store.state.sendFatherMessage;
        }
    },
    data(){
        return{
        }
    },
    methods:{
        sendGrandpa(){
            this.$store.commit("sendGrandpa", {name:"大娃的爹", val:`好的，你在家注意身体呀，我给你打了${parseInt(Math.random() * 1000)}块钱，你查一下收到没？`});
        },
        sendUnclue(){
            this.$store.commit("sendUncle", {name:"大娃的爹", val:`二弟,父亲给我寄了${parseInt(Math.random() * 100)}斤土特产，你要不要？`});
        },
        sendDaWa(){
            this.$store.commit("sendDaWa", {name:"大娃的爹", val:`今天下午${parseInt(Math.random() * 10)}点我来接你，你先放的话就等我一下`});
        },
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