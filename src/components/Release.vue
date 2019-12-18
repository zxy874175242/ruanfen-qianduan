<template>
  <div class = "homebody">
    <div class = "homecontainer">

      <!--      <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>-->
      <div class = "ctitle">上传资源</div>


      <div style="padding: 20px 50px 70px">
        <div style="text-align:center;width: 60%;margin: 0 auto">
          <div class="commitline">
            <div class="inline" style="margin-right: 15px">标题：</div>
            <input class="inputbox"/>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">作者：</div>
            <input class="inputbox" placeholder="若有多名作者，用“，”分隔"/>
          </div>



          <div class="commitline">
            <div class="inline" style="margin-right: 15px">关键词：</div>
            <input class="inputbox" placeholder="用“，”分隔"/>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">文章摘要：</div>
            <textarea name="a" class="inputbox" style="padding-top:8px;display:inline-block;width:70%;height:150px;">这里写内容</textarea>
          </div>

          <div class="commitline">
            <div class="inline" style="margin-right: 15px">DOI：</div>
            <input class="inputbox"/>
          </div>

          <div class="commitline">
<!--            <div class="inline"style="margin-right: 15px">上传资源：</div>-->
            <div class="inline">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-change="handleChange"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传pdf/caj文件，且不超过500kb</div>
              </el-upload>
            </div>
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
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            };
        },
        mounted(){

        },
        created(){

        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleChange(file, fileList) {
                this.fileList = fileList.slice(-3);
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
