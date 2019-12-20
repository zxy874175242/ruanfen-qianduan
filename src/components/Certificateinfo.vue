<template>
  <div class = "homebody">
    <div class = "homecontainer">

      <!--      <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>-->
      <div class = "ctitle">申请专家认证</div>
      <div style="text-align: center">认证编号：{{certificateinfo.id}}</div>
      <div style="padding: 20px 50px 70px">
        <div style="text-align:left;width: 60%;margin: 0 auto">
          <div class="commitline">
            <div class="inline" style="margin-right: 15px">真实姓名：</div>
            <div class="inline">{{certificateinfo.name}}</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">联系方式：</div>
            <div class="inline">{{certificateinfo.telephone}}</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">所属单位：</div>
            <div class="inline">{{certificateinfo.placeofwork}}</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">个人简介：</div>
            <div class="inline" style="padding-top:8px;display:inline-block;width:70%">{{certificateinfo.introduction}}</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">研究领域：</div>
            <div class="inline" style="padding-top:8px;display:inline-block;width:70%">{{certificateinfo.researcharea}}</div>

          </div>
<!--
          <div class="commitline">
            <div class="inline"style="margin-right: 15px">发表文献：</div>
            <div class="inline">
              <div class="downbuttom" >{{certificateinfo.fileList[0].name}}</div>
              <div class="downbuttom" >{{certificateinfo.fileList[1].name}}</div>

            </div>
          </div>
!-->
          <div class="commitline" style="margin-bottom: 20px">
            <div class="inline" style="margin-right: 15px">审批结果：</div>
            <div class="inline"style="margin-right: 20px"><input @click="fillInReason"  checked="checked" name="result" type="radio" value="1" />通过 </div>
            <div class="inline"><input @click="fillInReason2" name="result" type="radio" value="2" />不通过 </div>
          </div>

          <div id = "refusereason" class="commitline" style="margin-top:20px;display: none" >
            <div class="inline" style="margin-right: 15px">拒绝理由：</div>
            <textarea v-model="certificateinfo.reason" class="inputbox" placeholder="请输入拒绝理由" ></textarea>
          </div>

          <div style="margin-top:40px;width: 100%;text-align: center">
            <div class="searchbuttom" @click = "uploadresult">确认提交</div>
          </div>
        </div>

      </div>


    </div>
    <!--    Footer-->
    <div style="background: black;height:100px;width: 100%"  >
    </div>

  </div>
</template>

<script>

    export default{
        data(){
            return {
                certificateinfo:{
                  id:'',
                  name:'me',
                  placeofwork:'beihang',
                  telephone:'111',
                  introduction:'hello world',
                  researcharea:'computer',
                  fileList:[{name:'the first',url:'kong'},{name:'',url:''}],
                  result:'1',
                  reason:'',
                }
            };
        },
        mounted(){

        },
        created(){
          var _this = this;
          _this.getcertificateinfo();
        },
        methods: {

            fillInReason(){
                // obj.style.属性名 = “属性值”;
                document.getElementById("refusereason").style.display = 'none';
                this.certificateinfo.result='1';
            },
            fillInReason2(){
                // obj.style.属性名 = “属性值”;
                document.getElementById("refusereason").style.display = 'inline';
                this.certificateinfo.result='0';

            },
            getcertificateinfo(){
              var _this = this;
              var _id = this.$route.params.cid;
              var par = new URLSearchParams();
              par.append('applyid', _id);
              this.$axios({
                url: '/rest/apply/getById',//请求的地址
                method: 'post',//请求的方式
                data: par,//请求的表单数据
              }).then(res => {
                console.log(res.data);
                if (res.data != null) {
                  this.certificateinfo.id = this.$route.params.cid;
                  this.certificateinfo.name=res.data.content.realName;
                  this.certificateinfo.telephone=res.data.content.phoneNumber;
                  this.certificateinfo.researcharea=res.data.content.education;
                  this.certificateinfo.introduction=res.data.content.profile;
                  this.certificateinfo.placeofwork=res.data.content.company;
                }
              });
            },
            uploadresult(){
              var _this=this;
              var _id=this.$route.params.cid;
              var par = new URLSearchParams();
              par.append('applyid', _id);
              par.append('result', this.certificateinfo.result);
              par.append('reason', this.certificateinfo.reason);
              this.$axios({
                url:'/rest/apply/check',
                method:'post',
                data:par,
              }).then(res => {
                console.log(res.data);
                if (res.data == "success") {
                  alert("提交成功");
                  // router push
                  this.$router.push({name: 'Approval'});
                }
              }).catch((error)=> {
                alert("提交失败");
                console.log(error);
                window.location.reload();
              });
            },
        },

    }


</script>

<style>
  .el-button--primary{
    background: #3e606b;
    border: 0px solid ;
  }
  .el-button--primary:hover{
    background: #63b2c3;
  }
  .el-tabs__active-bar {
    background: #63b2c3;
  }
  .el-tabs__item.is-active {
    color: #63b2c3;
  }
  .el-tabs__item:hover {
    color: #63b2c3;
  }
  .homebody{
    /*display: flex;*/
    font-family: "Source Han Sans CN";
    height: 100%;
    text-align: left;
    background: #f1f1f1;
  }
  .ctitle{
    font-size: 26px;
    text-align: center;
    margin-bottom: 0px;

  }
  .homecontainer{
    width: 65%;
    height: auto;
    margin: 0 auto;
    background: white;
    padding-top: 30px;
    box-shadow:0px 0px 15px 0px rgba(0,0,0,0.05);
  }
  .downbuttom{
    height: 30px;
    padding-right: 20px;
    padding-left: 20px;
    vertical-align: center;
    line-height: 30px;
    border: 1px solid darkgray;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .inline{
    display: inline-block;
    vertical-align:middle;

  }
  .commitline{
    margin-top: 25px;

  }
  .searchbox {
    display: inline-block;
    outline:none;
    height: 36px;
    width:65%;
    border:1px solid #000000;
    border-radius: 10px;
    /*border-right-width: 10px;*/
    vertical-align:middle;
    font-size: 14px;
    background: transparent;
    color: #000000;
    padding-left: 8px;
    transition: width 0.5s ease,border-color 0.3s;
    letter-spacing: 1px;
  }
  .searchbox:hover {

    border:1px solid #63b2c3;
    /*border-color: #a6dadd;*/
  }

  .searchoption {
    margin-left: 5px;
    display: inline-block;
    outline:none;
    height: 36px;
    width:15%;
    border:1px solid #000000;
    border-radius: 10px;
    /*border-right-width: 10px;*/
    vertical-align:middle;
    font-size: 14px;
    background: transparent;
    color: #000000;
    padding-left: 8px;
    transition: width 0.5s ease,border-color 0.3s;
    letter-spacing: 1px;
  }
  .searchoption:hover {

    border:1px solid #63b2c3;
    /*border-color: #a6dadd;*/
  }
  .searchbuttom {
    display: inline-block;
    height: 40px;
    width:15%;
    background: #3e606b;
    text-align: center;
    vertical-align:middle;
    line-height: 40px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 10px;
    margin-left: 5px;
  }
  .searchbuttom:hover{
    background: #63b2c3;
  }
  .searchbuttom:active{
    background: black;
  }

  .inputbox {
    display: inline-block;
    outline:none;
    height: 30px;
    width:65%;
    border:1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    /*border-right-width: 10px;*/
    vertical-align:middle;
    font-size: 14px;
    background: transparent;
    color: #000000;
    padding-left: 8px;
    transition: width 0.5s ease,border-color 0.3s;
    letter-spacing: 1px;
  }
  .inputbox:hover {

    border:1px solid #63b2c3;
    /*border-color: #a6dadd;*/
  }


</style>
