<template>
  <div >
    <div class="tittle">
      <span @click="goHome">海腾Admin</span>
    </div>
    <div class="nav">
      <NavBar></NavBar>
    </div>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "Admin",
  components: {
    NavBar
  },
  methods: {
    goHome(){
      this.$router.push('pricechange')
    }
  },
  created() {
    sessionStorage.getItem("key")
    if(sessionStorage.getItem("key") == null){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

.tittle{
  text-align: center;
}

span{
  font-size: 50px;
  text-shadow: #FFB6C1 0 0 10px;
  cursor: pointer;
  color: #DB7093 ;
}

.nav{
  background-color: black;
  border: 0 solid;
  height: 40px;
  padding-top: 10px;
  border-left: 10px solid #483D8B;
}
.router{
  background-color: #E6E6FA;
  height: 85vh;
  border: 0 solid;
  border-radius: 5px;
}

</style>
