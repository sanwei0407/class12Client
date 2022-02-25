<template>
    <router-view/>
</template>
<script>
  export  default  {
    created(){
       //
    }
  }
</script>

<style>
  .br{
    border: 1px solid red;
  }

  html,body {
    height:100vh;
    padding:0;
    margin:0
  }
  .main{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .ct {
    height:0;
    flex-grow: 1;
    overflow-y: auto;
  }

</style>
