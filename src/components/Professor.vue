<template>
  <div class="userbody">
    <div class="side-bar">
      <div class="header">
        <!--        <a href="index.html" class="logo">BLOG</a>-->
        <div class="intro" style="margin-top: 15px">软件分析</div>
      </div>
      <div class="nav">
        <a href="#" class="item">关于我们</a>
        <a href="#" class="item">联系我们</a>
        <a href="#" class="item">赞助我们</a>
      </div>
    </div>
    <div class="main">
      <div class="article" style="width: 75%;text-align: left;border-top:5px solid #343434;">
        <!--        <div style="height: 5px;width: 100%;background: #6aa0b2"></div>-->
        <div style="height: 100%;width: 100%;padding: 20px 30px">
<!--          <div class="userheadcontent">-->

<!--            <div style="position: relative;width: 90px;overflow: hidden;height: 90px;margin-right: 15px;margin-left: 5x">-->
<!--                <img id="userImg" style="position: absolute;height: 90px">-->
<!--            </div>-->

<!--            <div class="userheadleft">-->
<!--              <div class="title">{{userInfo.username}}</div>-->
<!--              <div class="status">性别：{{userInfo.sex}},年龄：{{userInfo.age}}</div>-->
<!--              <div class="status"> 关注了{{userInfo.guanzhucount}}人，被{{userInfo.guanzhuedcount}}人关注</div>-->
<!--              &lt;!&ndash;              关注量：{{userInfo.guanzhucount}}&ndash;&gt;-->
<!--            </div>-->
<!--          <div class="userheadright">-->
<!--            <div class="headtext" @click="toGuanzhu" id="guanzhuButton" >{{this.followText}}</div>-->
<!--          </div>-->
<!--        </div>-->

<!--          先随便写一点了-->
          <div class="userheadcontent" style="margin-bottom: 30px">

            <div style="position: relative;width: 90px;overflow: hidden;height: 90px;margin-right: 15px;margin-left: 5px">
                <img id="userImg" style="position: absolute;height: 90px" src="../assets/logo.png">
            </div>

            <div class="userheadleft">
              <div class="title">{{this.expertInfo.RealName}}</div>
              <div class="status">粉 丝 数:{{this.expertInfo.FollowNumber}}</div>
              <div class="status">发表文献:{{this.expertInfo.ResourecesNumber}}</div>
              <div class="status">所属单位:{{this.expertInfo.Company}}</div>
              <!--              关注量：{{userInfo.guanzhucount}}-->
            </div>
          <div class="userheadright">
            <div class="headtext" @click="toGuanzhu" id="guanzhuButton" >{{this.followText}}</div>
          </div>
        </div>



          <div class="usercontent">
            <div class="userleft">
              <div class="userposttext" style = "width: 100px;">个人简介</div>
              <div style="width: 100%;height: 1px;background: darkgray"></div>

              <div class="userintro">{{expertInfo.Profile}}</div>

              <div class="userposttext" style = "width: 100px;">研究方向</div>
              <div style="width: 100%;height: 1px;background: darkgray"></div>
              <div class="userintro">{{expertInfo.Education}}</div>

              <div class="userleft">
                <div class="userposttext">发表文献</div>
                <div class="isline1"></div>
                <div class="isline"></div>
                <div class="content" v-for="resource in resourceList">
                  <div class="article1" style="width: 100%;text-align: left;border-top:0px solid #faeae8;">
                    <div class="itemis">
                      <a>
                        <div class="cardtitle" @click="gotoResource(resource.id)">{{resource.title}}</div>
                        <div class="status1"> 摘要如下：</div>
                      </a>
                      <div style="color: rgba(0,0,0,0.6)">{{resource.abstract}}  </div>
                    </div>
                  </div>
                </div>
              </div>


<!--              <div class="content" v-for="blog in blogList">-->
<!--                <div class="itemis">-->
<!--                  <a>-->
<!--                    <div class="posttitle" @click="gotoBlog(blog.id)">{{blog.title}}</div>-->
<!--                  </a>-->
<!--                  <div class="status">发布于：{{blog.date}} | 作者：{{blog.username}} </div>-->
<!--                </div>-->
<!--              </div>-->
            </div>

          <!--            <div class="isline-2"></div>-->

          <!--            <div class="userright">-->
          <!--              <div class="userposttext">用户资源列表</div>-->
          <!--              <div class="content-2" v-for="blog in blogList">-->
          <!--                <div class="itemis">-->
          <!--                  <a>-->
          <!--                    <div class="posttitle" @click="gotoBlog(blog.id)">{{blog.title}}</div>-->
          <!--                  </a>-->
          <!--                  <div class="status">发布于：{{blog.date}}</div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
        </div>

        <!--          <div class="isline"></div>-->



      </div>

    </div>

  </div>
    <div>
      <div>
      </div>
    </div>
  <!--    <div class="side-bar-right">-->
  <!--      <div class="header">-->
  <!--        &lt;!&ndash;        <a href="index.html" class="logo">BLOG</a>&ndash;&gt;-->
  <!--        <div class="intro">软工小学期.第一轮迭代~~~</div>-->
  <!--      </div>-->
  <!--      <div class="nav">-->
  <!--        <a href="#" class="item">关于我们</a>-->
  <!--        <a href="#" class="item">联系我们</a>-->
  <!--        <a href="#" class="item">赞助我们</a>-->
  <!--      </div>-->
  <!--    </div>-->
  </div>
</template>

<script>
  import Global from '../tool/Global';
  export default {
    data() {
      return {
        expertInfo: {
          id: '',
          RealName: '',
          Company: '',
          PhoneNumber: '',
          Profile: '',
          Education: '',
          FollowNumber:'',
          ResourecesNumber: '',
          Skills: [],
        },
        resourceList: [],
        // file: '',
        followText: '+关注',
        ImageName: '',
      }
    },

    methods: {
      getExpertInfo() {
        var _this = this;
        var params=new URLSearchParams();
        params.append('id',this.$route.params.pid);
        this.$axios({
          url: '/rest/expert/info',//请求的地址
          method: 'post',//请求的方式
          data:params,
        }).then(res => {
          console.log(res.data);
          if (res.data != null) {
            this.expertInfo.id = res.data.id;
            this.expertInfo.RealName = res.data.realName;
            this.expertInfo.Company = res.data.company;
            this.expertInfo.PhoneNumber = res.data.phoneNumber;
            this.expertInfo.Profile = res.data.profile;
            this.expertInfo.Education = res.data.education;
            this.expertInfo.FollowNumber=res.data.followNumber;
            this.expertInfo.ResourecesNumber = res.data.resourecesNumber;
            this.expertInfo.Skills = res.data.Skills;
          }
        });
      },
      getResourceInfo() {
        var _this = this;
        var params=new URLSearchParams();
        params.append('id',this.$route.params.pid);
        this.$axios({
          url: '/rest/expert/resources',//请求的地址
          method: 'post',//请求的方式
          data: params
        }).then(res => {
          if (res.data != null) {
            this.resourceList = res.data;
            console.log(res.data);
          }
        });
      },
      toGuanzhu() {
        var params=new URLSearchParams();
        params.append("follow",this.expertInfo.id);
        params.append("certificateId",localStorage.getItem("id"));
        if (localStorage.getItem('id') == null) {
          this.$router.push({path: '/Login'});
        } else if (localStorage.getItem('id') == this.$route.params.id) {
          this.$Message.warning('不能关注自己');
        } else {
          if (this.followText == "+关注") {
            //console.log(Global.sso_flag);
            //console.log(this.$route.params.username);
            this.$axios({
              url: '/rest/follow/add',
              method: 'post',
              data: params
            }).then(res => {
              if (res.data==="success") {
                //console.log(Global.sso_flag);
                //console.log(this.$route.params.username);
                this.$Message.success('关注成功');
                this.followText="-取消关注"
              } else {
                this.$Message.warning('关注失败');
              }

            });
            //
            // console.log(Global.sso_flag);
            //     console.log(this.$route.params.username);
            //     this.$Message.success('关注成功');
            //     document.getElementById('guanzhuButton').innerHTML="取消关注";
          } else if (this.followText == '-取消关注') {


            this.$axios({
              url: '/rest/follow/delete',
              method: 'post',
              data: params
            }).then(res => {
              console.log(res.data);
              if (res.data==="success") {
                this.$Message.success('取消成功');
                this.followText="+关注";
              } else {
                this.$Message.warning('取消失败');
              }

            });

            //
            // console.log(Global.sso_flag);
            //     console.log(this.$route.params.username);
            //     this.$Message.success('取消成功');
            //     document.getElementById('guanzhuButton').innerHTML="关注";
          }

        }
        this.$router.push({name: 'Professor', params: {pid: this.expertInfo.id,ret:this.followText}})
      },
      chaGuanzhu()
      {
        //
        if(localStorage.getItem('user') == null)
        {
          this.followText="+关注";
        }
        else
        {
          //console.log(Global.sso_flag);
          //console.log(uname);
          var par = new URLSearchParams();
          par.append("follow", this.expertInfo.id);
          par.append("certificateId", localStorage.getItem('id'));
          this.$axios({
            url:'/rest/expert/isfollow',
            method:'post',
            data:par
          }).then(res=>
          {
            //console.log(res);
            if(localStorage.getItem('user') == null)
              this.followText="+关注";
            else
            {
              if(res.data==false) this.followText="+关注";
              else if(res.data==true) this.followText="-取消关注";
              else this.followText='error';
            }
          });
        }
        //
      },

      gotoResource(addr) {
        this.$router.push({name: 'Resource',params:{resourceId: addr}});
      },


      loadUserImg() {
        this.$nextTick(() => {
          // 获取头像
          //document.getElementById('userImg').src = '/rest/files/微信图片_20190517123003.jpg';
          this.$axios({
            url: '/user/getImage',
            method: 'post',
            data: {
              userName: this.$route.params.username,
              password: '',

            }
          }).then(res => {
            console.log('userImgSrc: ' + res.data);
            if (res.data) {
              document.getElementById('userImg').src = res.data;
            }
          });
        });
      },
    },
    created() {

      var _this = this;
      _this.getExpertInfo();
      _this.getResourceInfo();
      this.$root.Bus.$emit('changeStatus', '');
      if (this.$route.params.ret)
      {
        this.followText = this.$route.params.ret;
      }
      else
        this.chaGuanzhu();
    }
  }
</script>

<style scoped>
  .userheadcontent{
    display: flex;
  }
  .userheadleftleft{
    /*background: #a6dadd;*/
    width: 90px;
    height: 90px;
    margin-right: 20px;
    background-size: 100% 100% ;
    background-image: url("../assets/logo-circle-title-b.png");

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
    font-size: 20px;
    font-weight: bold;
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
  .userheadleft{
    flex: 1;
    height: 100%;
    margin-right: 20px;
  }
  .userheadright{
    /*display: flex;*/
    width: 30%;
    height: 100%;
    text-align:left;
    float: right;
    vertical-align: center;
  }

  .usercontent{
    display: flex;
  }
  .userintro{
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 25px;
  }
  .userleft{
    /*width: 65%;*/
    flex: 1;
    height: 100%;

    margin-right: 20px;
  }
  .userright{
    /*display: flex;*/
    width: 35%;
    height: 100%;
  }
  .headtext{
    outline:none;
    font-family: "Yu Gothic UI";
    font-size: 15px;
    height: 35px;
    width:100px;
    border-radius: 30px;
    background: rgba(0,0,0,0);
    text-align: center;
    vertical-align:middle;
    line-height: 35px;
    color: #343434;
    border: 1px solid #343434;
    transition: background-color 0.2s ease,border-width 0.2s ease,border-radius 0.2s ease;
  }
  .headtext:hover{


    background: #a6dadd;
    color: white;
    border: 1px solid #a6dadd;
  }
  .headtext:active{

    border-radius: 35px;
    background: #343434;
    color: white;
    border: 1px solid #343434;
    /*border: 0px solid white;*/
  }
  .userposttext{
    color: #343434;
    font-size: 15px;
    font-weight: bold;
    border-bottom: black solid 3px;
  }
  .content{
    border-left: 2px solid rgb(99, 178, 195);
    transition: border-left-color 0.5s;
    transition: border-left-width 0.5s;

  }
  .content:hover{
    border-left: 5px solid rgb(166, 218, 221);

  }
  .userstatus{
    font-size: 12px;
    color: darkgray;
  }
  .content-2{
    vertical-align: center;
    text-align: center;
    /*border-radius: 10px;*/
    height: 35px;
    background: whitesmoke;
    border-left: 2px solid rgb(166, 218, 221);

    transition: border-left-color 0.5s,border-left-width 0.5s,border-right-color 0.5s,border-right-width 0.5s;

  }
  .content-2:hover{
    border-left: 5px solid rgb(166, 218, 221);
  }
  .itemis{
    margin-left: 10px;
    margin-top: 30px;

  }
  .isline{
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0,0.3);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /*.isline-2 {*/
  /*  !*flex: 1;*!*/
  /*  height: 100%;*/
  /*  width: 5px;*/
  /*  background: rgba(64, 86, 57, 1);*/
  /*  !*margin-top: 20px;*!*/
  /*  !*margin-bottom: 20px;*!*/
  /*}*/
  .userbody {
    background:#f1f1f1;
    /*line-height: 1.7;*/
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  a, body {
    color: #9fc6dc;
  }

  .side-bar {
    float: left;
    width: 20%;
    height: 100%;
    position: fixed;
  }

  .side-bar > * {
    padding: 10px 15px;
  }

  .side-bar .nav a,
  .side-bar .tag-list a {
    display: block;
    padding: 5px;
    color: #888;
    -webkit-transition: color 200ms;
    -o-transition: color 200ms;
    transition: color 200ms;
  }

  .side-bar .nav a:hover,
  .side-bar .tag-list a:hover {
    color: #9fc6dc;
  }

  .side-bar .nav a {
    font-weight: 700;
  }
  .side-bar-right{
    /*float: right;*/
    width: 20%;
    position: fixed;
  }
  .main {
    float: right;
    width: 80%;
    color: #454545;
  }

  .header .logo {
    line-height: 1;
    border: 5px solid #eee;
    padding: 10px 20px;
    font-size: 30px;
    display: inline-block;
    margin-bottom: 10px;
  }

  .article-list, .article {
    margin-right: 20px;
    background: #fff;
    /*padding: 20px 30px;*/

    box-shadow: 0 0 3px 2px rgba(0,0,0,.2);
    margin-bottom: 25px;
    margin-top: 20px;

    -webkit-box-shadow: 0 0 10px 0px rgba(0,0,0,.1);
  }

  .article-list .item  {
    margin-bottom: 25px;
  }

  .article-list .item .title,
  .article .title {
    color: #454545;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .article-list .item .status,
  .article .status {
    font-size: 13px;
    color: #ccc;
  }

  .article-list .item > *,
  .article > * {
    margin: 10px 0;
  }
  .content{
    margin-top: 10px;
    font-size: 15px;
    text-align: left;

  }
  .posttitle{
    color: gray;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    /*text-align: left;*/
  }
  .file {
     position: relative;
     /*padding: 4px 12px;*/
     overflow: hidden;
     color: #343434;
     text-decoration: none;
     text-indent: 0;
    height: 35px;
    width:100px;
    border-radius: 30px;
    background: rgba(0,0,0,0);
    font-family: "Yu Gothic UI";
    font-size: 15px;
    border: 1px solid #343434;
    text-align: center;
    vertical-align:middle;
    line-height: 35px;

    outline:none;


  }
  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;

  }
  .file:hover {
    background: #a6dadd;
    border-color: #a6dadd;
    color: white;
    text-decoration: none;
  }

</style>
