<template>
  <div>
    <router-link class="router" v-for="(data) in barvalue" :to="data.addr" active-class="spanFocus" exact>
      <span>{{data.name}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data(){
    return{
      barvalue:[
        {
          name : "价格替换",
          addr : "/admin/pricechange"
        },
        {
          name : "others",
          addr : "/admin/others"
        },
      ]
    }
  }
}
</script>
<style scoped>

.router{
  margin-left: 50px;
  text-decoration: none;
  color: white;
}

.spanFocus{
  color: #AFEEEE
}

span{
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  font-size: 18px;
}

span:hover{
  color: #00F5FF;
}

</style>
