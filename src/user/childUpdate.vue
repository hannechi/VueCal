<template>
    <div>
        <p>hello im the child</p>
        <p>
            messgae from my fadher  : {{ parentMessage }}
        </p>
        <button @click="sendMessageToParent">Send message to Parent</button>
    </div>
   
    
</template>

<script>
export default
{
    name: 'child',
    props: {
    parentMessage: {
      type: String,
      required: true
    }
    },
    data()
    {
        return {
            msg: 'hello'
            };
    },
    methods: 
    {
    sendMessageToParent() {
      this.$emit('childMessage', 'Hello from Child!');
    }

    }
}
</script>