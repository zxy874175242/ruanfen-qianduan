<template>
  <div class = "homebody">
    <div class = "homecontainer">

      <!--      <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>-->

      <div style="padding: 10px 40px 70px">
        <div>
          <div style="color: #454545;font-size: 20px;margin-bottom: 5px;" >未处理申请</div>
          <div style="width: 150px;height: 3px;background: black"></div>
          <div class ="isline2"></div>
        </div>


        <div>
<!--          <router-link :to="{name: 'Resource', params:{type:'blog', keyword: 'all'}}">-->
<!--            <div class="resultcard">-->
<!--              <div style="vertical-align: bottom;margin-bottom: 5px">-->
<!--                <div class="cardtitle" >是个学者1</div>-->
<!--                <div class="cardauthor" >北京航空航天大学</div>-->
<!--                <div class="cardyear" >20191021</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </router-link>-->
<!--          <router-link :to="{name: 'Resource', params:{type:'blog', keyword: 'all'}}">-->
<!--            <div class="resultcard">-->
<!--              <div style="vertical-align: bottom;margin-bottom: 5px">-->
<!--                <div class="cardtitle" >是个学者2</div>-->
<!--                <div class="cardauthor" >北京航空航天大学软件学院</div>-->
<!--                <div class="cardyear" >20191022</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </router-link>-->

          <div class="resultcard">
            <div style="vertical-align: bottom;margin-bottom: 5px" v-for="blog in applylist">
              <div class="cardtitle" @click="gotoRenzheng(blog.id)" >{{blog.content.realName}}</div>
              <div class="cardauthor" >{{blog.content.company}}</div>
              <div class="cardyear" >{{blog.time}}</div>
            </div>
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
              applylist:[],
            }
        },
        mounted(){


        },
        created(){
          this.getapplylist();
        },
        methods: {
          gotoRenzheng(id)
          {
            this.$router.push({name: 'Certificateinfo', params: {cid: id}});
          },
          getapplylist()
          {
            this.$axios({
              url: '/rest/apply/getAll',//请求的地址
              method: 'get',//请求的方式
              data: {},
            }).then(res => {
              if (res.data != null) {
                console.log(res.data);
                this.applylist = res.data;
              }
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
  .fiterline{
    margin-top: 10px;
  }
  .isline2{
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0,0.3);

  }
  .isline{
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0,0.3);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .resultcard{
    width: 100%;
    background: #f1f1f1;
    border-left: #3e606b solid 3px;
    padding: 10px 10px 10px 20px;
    margin-bottom: 7px;
    margin-top: 8px;

  }
  .resultcard:hover{

    border-left: #63b2c3 solid 5px;
    transition: border-left-width 0.3s,border-left-color 0.3s;
  }
  .cardtitle{
    color: rgba(0, 0, 0,0.8);
    font-size: 20px;font-weight: bold;
    display: inline-block;
  }
  .cardauthor{
    color: rgba(0, 0, 0,0.7);
    font-size: 15px;
    display: inline-block;
  }
  .cardyear{
    color: rgba(0, 0, 0,0.7);
    font-size: 12px;font-style: italic;
    display: inline-block;
  }
  .inline{
    display: inline-block;
    vertical-align:middle;

  }
  .inline2{
    display: inline-block;
    vertical-align:middle;
    margin-left: 15px;
    margin-right: 15px;
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
    transition: border-color 0.2s;
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

</style>
