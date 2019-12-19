<template>
  <div class = "homebody">
    <div class = "homecontainer">
      <div class = "topbar" style="height: 100px;margin-bottom: 30px"></div>

      <div style="padding: 20px 40px 70px">
        <div style="text-align:center">
          <div class="resourcetitle">{{resource.title}}</div>
          <div style="width: 100%;height: 10px;"></div>
          <div v-for="k in resource.keyword" class="inline">
            <div class="inline" style="margin-left: 15px;margin-right: 15px">{{k}}</div>
          </div>
          <br>
          <div v-for="au in resource.authors" class="inline">
            <div class="inline" style="margin-left: 15px;margin-right: 15px">{{au}}</div>
          </div>
          <br>
          <div v-for="co in resource.companies" class="inline">
            <div class="inline" style="margin-left: 15px;margin-right: 15px">{{co}}</div>
          </div>
          <div style="width: 100%;height: 15px;"></div>
          <!--<div >{{resource.contactInfo}}</div>-->
        </div>


        <div class="isline"></div>
        <div>
          <div style="float: left;width: 10%;font-size: 14px;text-align: right">摘要</div>
          <div style="float: right;width: 85%;height: auto;font-size: 14px;line-height: 28px">{{resource.abstract}}</div>
          <div style="clear: both"></div>
        </div>

        <!--
        <div class="isline"></div>
        <div style="text-align: center">
          <div class="searchbuttom" style="width: 25%;margin-left: 15px;margin-right: 15px;">查看全文</div>
          <div class="searchbuttom" style="width: 25%;margin-left: 15px;margin-right: 15px;">下载资源</div>
        </div>
        <div style="text-align: center;margin-top: 10px">
          <div class="inline" style="margin-left: 20px;margin-right: 20px">下载：16</div>
          <div class="inline" style="margin-left: 20px;margin-right: 20px">大小：128K</div>
        </div>

        <div class="isline"></div>

        <div>
          <div style="float: left;width: 10%;font-size: 14px;text-align: right">引文网络</div>
          <div style="float: right;width: 85%;height: auto;font-size: 14px;line-height: 28px">[1]火箭运动的原理和物理模型[J]. 袁卫民.  物理通报. 1996(04)</div>
          <div style="float: right;width: 85%;height: auto;font-size: 14px;line-height: 28px">[1]火箭运动的原理和物理模型[J]. 袁卫民.  物理通报. 1996(04)</div>
          <div style="float: right;width: 85%;height: auto;font-size: 14px;line-height: 28px">[1]火箭运动的原理和物理模型[J]. 袁卫民.  物理通报. 1996(04)</div>
          <div style="float: right;width: 85%;height: auto;font-size: 14px;line-height: 28px">[1]火箭运动的原理和物理模型[J]. 袁卫民.  物理通报. 1996(04)</div>
          <div style="clear: both"></div>
        </div>
        -->
      </div>


      <!--      <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>-->


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
                resource: {
                  title: 'test',
                  authors: ['test'],
                  companies: ['test'],
                  abstract: 'abstract',
                  keyword: ['keyword'],
                }
            }
        },
        mounted(){

        },
        created(){

          this.getResource();
        },
        methods: {
            getResource(){
              var par = new URLSearchParams();
              par.append('id', this.$route.params.resourceId);
              this.$axios({
                url: '/rest/expert/findById',//请求的地址
                method: 'post',//请求的方式
                data: par//请求的表单数据
              }).then(res => {
                // 赋值
                this.resource.title = res.data.title;
                this.resource.authors = res.data.authorName;
                this.resource.companies = res.data.authorCompany;
                this.resource.abstract = res.data.abstract;
                this.resource.keyword = res.data.keyword;

              }).catch(err => {
                console.info('报错的信息', err.response.message);
              });

            }
        },

    }


</script>

<style>
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
  .resourcetitle{
    font-size: 36px;
    font-family: 汉仪新人文宋W;
    color: #0C1021;
  }
  .topbar{
    width: 100%;
    height: 150px;
    background: aliceblue;

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
  .isline{
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0,0.3);
    margin-top: 20px;
    margin-bottom: 20px;
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


</style>
