<template>
  <div class = "homebody">
    <div class = "homecontainer">
      <div class = "topbar" style="height: 100px;margin-bottom: 30px"></div>

      <div style="padding: 20px 40px 70px">
        <div style="text-align:center">
          <div class="resourcetitle">关于多级火箭若干问题的探讨</div>
          <div style="width: 100%;height: 10px;"></div>
          <div class="inline" style="margin-left: 15px;margin-right: 15px">为民</div>
          <div class="inline" style="margin-left: 15px;margin-right: 15px">广宇</div>
          <div style="width: 100%;height: 15px;"></div>
          <div >西北大学数学系 ××号信箱</div>
        </div>


        <div class="isline"></div>
        <div>
          <div style="float: left;width: 10%;font-size: 14px;text-align: right">摘要</div>
          <div style="float: right;width: 85%;height: auto;font-size: 14px;line-height: 28px">本文提出五个问题,并在经典力学的范围内解决这五个问题。第一个问题钱学森同志提到过, (见[1]第95页)并且他本人还发表了一些极为重要的看法。我们从理论上讨论了它,得到的结果是:对多级火箭论,随着级数的无限增加其载荷最终达到的速度也将趋向无限大。第二个问题是由第一个问题引起的,它在推进剂量和本文所称的余下质量为定量的条件下探讨对火箭进行分级时VN的变化情况,得到了这时的VN是一有界量的结论,并在推进剂量和余下质量之比为常数的假定下证明了VN的收敛性算出了VN的极限值。第三个问题仅供火箭的设计工作者参考,它在允许调换多级火箭各级次序的基础上给出了为使多级火箭的载荷在最终获得最大速度的各级排列法。第四个问题是对起飞前的多级火箭而言的,对于起飞前的多级火箭论,在总推进剂量为定量的情况下其各级的推进剂量如何分配才能使载荷在最终获得的速度为最大?本文详细地探讨了这一问题,包括考虑了那分配方案的唯一性和存在性等,并用初等函数简单地表达了这一在本文中被称为最大速度方案的分配方案。第五个问题是一</div>
          <div style="clear: both"></div>
        </div>

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

            }
        },
        mounted(){

        },
        created(){

        },
        methods: {

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
