<template>
  <div class = "homebody">
    <div class = "homecontainer">

      <!--      <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>-->
      <div class = "ctitle">申请专家认证</div>
      <div style="text-align: center">认证编号：20191022</div>
      <div style="padding: 20px 50px 70px">
        <div style="text-align:left;width: 60%;margin: 0 auto">
          <div class="commitline">
            <div class="inline" style="margin-right: 15px">真实姓名：</div>
            <div class="inline">是个学者</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">联系方式：</div>
            <div class="inline">17610612380</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">所属单位：</div>
            <div class="inline">北京航空航天大学</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">个人简介：</div>
            <div class="inline" style="padding-top:8px;display:inline-block;width:70%">我也不知道写什么啊啊啊啊啊啊啊啊啊啊啊我也不知道写什么啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">研究领域：</div>
            <div class="inline" style="padding-top:8px;display:inline-block;width:70%">我也不知道写什么啊啊啊啊啊啊啊啊啊啊啊我也不知道写什么啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>

          </div>

          <div class="commitline">
            <div class="inline"style="margin-right: 15px">发表文献：</div>
            <div class="inline">
              <div class="downbuttom">点击下载</div>
              <div class="downbuttom">点击下载</div>

            </div>
          </div>

          <div class="commitline" style="margin-bottom: 20px">
            <div class="inline" style="margin-right: 15px">审批结果：</div>
            <div class="inline"style="margin-right: 20px"><input @click="fillInReason"  checked="checked" name="result" type="radio" value="1" />通过 </div>
            <div class="inline"><input @click="fillInReason2" name="result" type="radio" value="2" />不通过 </div>
          </div>

          <div id = "refusereason"class="commitline" style="margin-top:20px;display: none">
            <div class="inline" style="margin-right: 15px">拒绝理由：</div>
            <textarea name="a" class="inputbox" style="padding-top:8px;display:inline-block;width:70%;height:100px;">这里写内容</textarea>
          </div>

          <div style="margin-top:40px;width: 100%;text-align: center">
            <div class="searchbuttom">确认提交</div>
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
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                radio:'1'
            };
        },
        mounted(){

        },
        created(){

        },
        methods: {

            fillInReason(){
                // obj.style.属性名 = “属性值”;
                document.getElementById("refusereason").style.display = 'none';
            },
            fillInReason2(){
                // obj.style.属性名 = “属性值”;
                document.getElementById("refusereason").style.display = 'inline';

            }
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
