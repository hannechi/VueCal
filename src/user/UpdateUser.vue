<template>
    <div>
        <ChildUpdate :parentMessage ="msg" @childMessage="receiveChildMessage"></ChildUpdate>
        </div>
</template>
<script>
import ChildUpdate from './childUpdate.vue';
export default
{
    components: {ChildUpdate},
    data()
    {
        return {
            msg: 'Hello my son Vue.js!'
        };
    },
    methods:{
        receiveChildMessage(childMessage)
        {
            alert(childMessage)
        }
    }
}
</script>
<style>
</style>