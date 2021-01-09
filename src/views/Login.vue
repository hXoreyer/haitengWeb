<template>
  <div id="app" class="center">
    <label class="lb">管理员登录</label>
    <input type="text" class="username" placeholder="账号" v-model="username">
    <input type="password" class="userpsw" placeholder="密码" v-model="userpsw">
    <input type="button" class="login" value="登 录" @click="login">
    <p class="foot">@海腾五金</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data(){
    return{
      username: '',
      userpsw: ''
    }
  },
  methods:{
    login: function() {
      const that = this;
      axios.post("http://localhost:8050/haiteng/login", { username: this.username, userpsw: this.userpsw }).then(function(response) {
        if (response.status != 200) {
          alert(response.data);
        } else {
          console.log(response.data.key);
          sessionStorage.setItem("key",response.data.key)
          that.$router.push({name: 'Admin'});
        }
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
body {
  background-color: #F8F8FF;
}

.center {
  position: absolute;
  width: 30%;
  height: 40%;
  left: 35%;
  top: 30%;
  border: 0px solid;
  border-radius: 1vw;
  box-shadow: 1vw 1vw 1vw #888888;
  background-color: white;
}

.lb {
  position: absolute;
  font-size: 2vw;
  left: 30%;
  top: 10%;
  font-family: "Lucida Console", Cursive;
}

.username {
  display: block;
  position: absolute;
  width: 70%;
  height: 10%;
  left: 15%;
  top: 30%;
  border: 1px solid;
  outline: none;
  text-indent: 1vw;
}

.username:focus {
  border-color: #1E90FF;
}

.userpsw {
  display: block;
  position: absolute;
  width: 70%;
  height: 10%;
  left: 15%;
  top: 50%;
  border: 1px solid;
  outline: none;
  text-indent: 1vw;
}

.userpsw:focus {
  border-color: #1E90FF;
}

.login {
  position: absolute;
  border: 0px solid;
  width: 70%;
  height: 15%;
  left: 15%;
  top: 70%;
  outline: none;
  background-color: #00F5FF;
  font-size: 3vh;
  font-family: "Lucida Console", Cursive;
  color: white;
  font-weight: bold;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}

.login:hover {
  cursor: pointer;
  background-color: #00E5EE;
}

.login:active {
  background-color: #00C5CD;
}

.foot {
  position: absolute;
  bottom: 1%;
  left: 40%;
  font-size: 1vh;
  color: gray;
}
</style>
