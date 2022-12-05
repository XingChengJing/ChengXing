<template>
    <div class="app">
       <h1> 我们自己编写的页面信息</h1>
       <h2 @click="btnclick">{{message}}</h2>

    </div>
</template>


<script>

export default{
    name:'app',
    data(){
        return{
            message:"Hello world vue cli"
        }
    },
    methods:{
        btnclick(){
            console.log("为难忘")
        }
    }

}
</script>



<style scoped>

</style>