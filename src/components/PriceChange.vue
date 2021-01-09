<template>
  <div>
    <input type="text" id="textfield" class="txt" v-model="fileName" placeholder="文件路径(./demo.xlsx)"/>
    <input @click="changes" value="选择文件" class="chose" type="button">
    <input type="file" class="files" @change="changes($event)" id="fileid">
    <input @click="upload" value="上传" class="chose2" type="button">
    <div class="downloadDiv" :style="{display : isDownload}">
      <span>文件转换成功！点击下载!</span>
    </div>
    <div :style="{display : isDownload}">
      <input type="button" value="下载" class="downloadBtn" @click="download">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PriceChange",
  data(){
    return{
      fileName: '',
      file: null,
      isDownload: 'none'
    }
  },
  methods: {
    download(){
      axios({
        methods: 'get',
        url: 'http://localhost:8050/haiteng/download',
        responseType: 'blob',
      }).then(function (res){
        const content = res.data
        const blob = new Blob([content])
        const filename = "result.xls"
        if('download' in document.createElement('a')) {
          const elink = document.createElement('a')
          elink.download = filename
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(blob)
          document.body.append(elink)
          elink.click()
          URL.revokeObjectURL(elink.href)
          document.body.removeChild(elink)
        }else {
          navigator.msSaveBlob(blob,filename)
        }

      })
    },
    changes(e){
      this.fileName = document.getElementById('fileid').value
      let file = e.target.files[0]
      this.file = file
      this.isDownload = 'none'
    },
    upload(){
      this.isDownload = 'none'
      if(this.file == null)
      {
        alert("请选择文件")
        return
      }
      let file = this.file
      let param = new FormData()
      const that = this
      param.append('filename',file)
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      }
      axios.post("http://localhost:8050/haiteng/upload",param,config)
          .then(function (response){
            if(response.data.status === 'ok'){
              console.log("return ok")
              that.isDownload = 'inline-block'
            }
          }).catch(function (error){
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
.txt{
  position: absolute;
  height:48px;
  border:0px solid #cdcdcd;
  width: 50%;
  font-size: 25px;
  left: 10%;
  top: 40%;
  border-radius: 5px;
  outline: none;
  text-indent: 10px;
}
.chose{
  position: absolute;
  height: 48px;
  left: 62%;
  top: 40%;
  width: 15%;
  cursor: pointer;
  border: 0px solid;
  border-radius: 5px;
  background-color: #FFB6C1;
  outline: none;
  font-weight: bold;
  color: white;
}

.chose2{
  position: absolute;
  height: 48px;
  left: 80%;
  top: 40%;
  width: 15%;
  cursor: pointer;
  border: 0px solid;
  border-radius: 5px;
  background-color: #FFB6C1;
  outline: none;
  font-weight: bold;
  color: white;
}

.downloadDiv{
  position: absolute;
  top:60%;
  left: 10%;
  right: 30%;
  width: 80%;
  border-left: 10px solid #4CAF50;
  background-color: #ddffdd;
  text-align: center;
  height: 48px;
  padding-top: 15px;
}

.downloadDiv span{
  font-weight: bold;
  font-size: 20px;
}

.downloadBtn{
  position: absolute;
  width: 20%;
  left: 40%;
  top: 80%;
  height: 48px;
  cursor: pointer;
  border: 0px solid;
  border-radius: 5px;
  background-color: #FFB6C1;
  outline: none;
  font-weight: bold;
  color: white;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.downloadBtn:hover{
  background-color: #DB7093;
}

.files{
  opacity: 0;
  position: absolute;
  height: 48px;
  left: 62%;
  top: 40%;
  width: 15%;
  cursor: pointer;
}
</style>
