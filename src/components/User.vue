<template>
  <div class="userbody">
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
          <div class="userheadcontent">

            <div style="position: relative;width: 90px;overflow: hidden;height: 90px;margin-right: 15px;margin-left: 5px">
              <img id="userImg" style="position: absolute;height: 90px" v-model="image">
            </div>

            <div class="userheadleft">
              <div class="title">{{this.userInfo.username}}</div>
              <div class ="usercontent">性别：{{this.userInfo.sex}}</div>
              <div class ="usercontent">邮箱：{{this.userInfo.Email}}</div>
              <div class="usercontent">年龄：{{this.userInfo.age}}</div>
              <div class="usercontent">个人简介：{{this.userInfo.content}}</div>
              <!--              关注量：{{userInfo.guanzhucount}}-->
            </div>



        </div>
          <div class="isline"></div>
          <div  style="display: table;line-height: 50px">
            <div style="display:table-cell;vertical-align: center" v-if = "this.userInfo.expertId==null">
              <div class="headtext" @click="shenqing" id="shenqing" >申请认证</div>
            </div>
            <div style="display:table-cell;vertical-align: center;width: 15px"></div>
            <div style="display:table-cell;vertical-align: center">
              <div class="headtext" @click="modifyUser" id="edit" >编辑个人信息</div>
            </div>
            <div style="display:table-cell;vertical-align: center;width: 15px"></div>
            <div style="display:table-cell;vertical-align: center" id="upImg">
              <div class="file"><input type="file" @change="uploadImg($event)" >上传头像</div>
            </div>
            <div style="display:table-cell;vertical-align: center;width: 15px" ></div>
            <div style="display:table-cell;vertical-align: center" id="gotoprofessor" v-if = "this.userInfo.expertId!=null">
              <div class="headtext" @click="gotoprofessor"  >查看专家详情</div>
            </div>
            <div style="display:table-cell;vertical-align: center;width: 15px" ></div>
            <div style="display:table-cell;vertical-align: center" id="release" v-if = "this.userInfo.expertId!=null">
              <div class="headtext" @click="release"  >上传资源</div>
            </div>
          </div>

          <div class="isline"></div>

          <div style="display: flex">
            <div style="margin-top:15px;display:none;vertical-align: center;" id="AgeInput" >
              <Input ype="text" placeholder="年龄" v-model="edittedInfo.age"></Input>
            </div>
            <div style="margin-top:15px;display:none;vertical-align: center;" id="ContentInput" >
              <Input type="text" placeholder="个人简介" v-model="edittedInfo.content"></Input>
            </div>
            <div style="margin-top:15px;display:none;vertical-align: center;" id="SexInput" >
              <Input type="text" placeholder="性别" v-model="edittedInfo.sex"></Input>
            </div>
            <div style="margin-top:15px;margin-left:15px;display:none;vertical-align: center" id="EmailInput">
              <Input type="text" placeholder="邮箱" v-model="edittedInfo.email"></Input>
            </div>
            <div style="margin-top:15px;margin-left:15px;display:none;vertical-align: center" id="InfoButton">
              <Button  style="border-radius: 15px" @click="editInfo">提交修改</Button>
            </div>
          </div>

<!--
          <div class="usercontent">
            <div class="userleft">
              <div class="userposttext" style = "width: 100px;">我的钱包</div>
              <div style="width: 100%;height: 1px;background: darkgray"></div>
              <div class="userintro">账户余额：{{this.userInfo.account}}</div>

              <div class="userposttext" style = "width: 100px;">购买文献</div>
              <div style="width: 100%;height: 1px;background: darkgray"></div>
              <router-link :to="{name: 'Resource', params:{type:'blog', keyword: 'all'}}">
                <div style="margin-top: 20px" class="resultcard">
                  <div style="vertical-align: bottom;margin-bottom: 5px">
                    <div class="cardtitle" >是文章的题目</div>
                    <div class="cardauthor" >是个作者</div>
                    <div class="cardyear" >2019</div>
                  </div>
                  <div style="color: rgba(0,0,0,0.6)">层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记…</div>
                </div>
              </router-link>
              -->
              <!--              <div class="content" v-for="blog in blogList">-->
              <!--                <div class="itemis">-->
              <!--                  <a>-->
              <!--                    <div class="posttitle" @click="gotoBlog(blog.id)">{{blog.title}}</div>-->
              <!--                  </a>-->
              <!--                  <div class="status">发布于：{{blog.date}} | 作者：{{blog.username}} </div>-->
              <!--                </div>-->
              <!--              </div>-->

          <!--  </div>-->


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
          <!--</div>-->


          <!--          <div class="isline"></div>-->



        </div>


      </div>


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
</template>

<script>
  import Global from '../tool/Global';
  export default {
    data(){
      return {
        userInfo: {
          username: '',
          sex: '',
          age:'',
          content:'',
          Email: '',
          Id:'',
          expertId:'',
        },
        edittedInfo:{
          sex:'',
          email:'',
          age:'',
          content:'',
        },
        image:[],
      }
    },

    methods: {
      modifyUser(){
        document.getElementById("AgeInput").style.display ='table-cell';
        document.getElementById("ContentInput").style.display ='table-cell';
        document.getElementById("EmailInput").style.display ='table-cell';
        document.getElementById("SexInput").style.display = 'table-cell';
        document.getElementById("InfoButton").style.display = 'table-cell';
      },
      editInfo()
      {
        if (this.edittedInfo.sex.trim().length == 0 || this.edittedInfo.email.trim().length == 0||this.edittedInfo.age.trim().length ==0||this.edittedInfo.content.trim().length==0)
        {
          alert('请填完表单');
        }
        else
        {
          this.$axios({
            url: '/rest/user/modify',
            method: 'post',
            data: {
              username:localStorage.getItem('user'),
              age:this.edittedInfo.age,
              email:this.edittedInfo.email,
              content:this.edittedInfo.content,
              sex:this.edittedInfo.sex,
              id:this.userInfo.Id
            }
          }).then(res => {
            console.log('updateUser返回的数据' + res.data);
            alert('修改成功');
            window.location.reload();
          });
        }
      },
      getUserInfo() {
        var _this = this;
        var _username = localStorage.getItem("user");
        var params=new URLSearchParams();
        params.append("name",_username);
        this.$axios({
          url: '/rest/user/findbyname',//请求的地址
          method: 'post',//请求的方式
          data: params,
        }).then(res => {
          console.log(res.data);
          if (res.data != null) {
            this.userInfo.username = res.data.username;
            this.userInfo.Email = res.data.email;
            this.userInfo.age=res.data.age;
            this.userInfo.sex=res.data.sex;
            this.userInfo.content=res.data.content;
            this.userInfo.Id=res.data.id;
            this.userInfo.expertId=res.data.expertId;
            localStorage.setItem("id",this.userInfo.Id);
          }
        });
      },
      shenqing() {
          this.$router.push({path:'/Certificate'})

      },
        //
        // console.log(Global.sso_flag);
        // console.log("查询点赞");
        // console.log(addr);
        // this.$router.push({name: 'SingleBlog', params:{username: uname, blogId: addr,ret:"点赞"}});
        //


      uploadImg: function (event) {

        this.file = event.target.files[0];
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("certificateId",this.userInfo.Id);
        this.$axios.post('rest/user/upload', formData)
          .then((response) => {
            alert('上传成功');
            window.location.reload();
          })
          .catch((error)=> {
            alert("上传失败");
            console.log(error);

          });

      },

      sendUserImg()
      {
        console.log("url: "+this.tmpUrl);
        // 存入数据库
        this.$axios({
          url: '/rest/uploadPicture',
          method: 'post',
          data: {
            username: localStorage.getItem('user'),
            resourcename: 'userImg',
            url: this.tmpUrl,
            timestamp: new Date().getTime(),

          }
        }).then(res => {
          console.log('uploadPic返回的数据' + res.data);
        });
        window.location.reload();
      },

      loadUserImg()
      {
        this.$nextTick(()=>{
          // 获取头像
          //document.getElementById('userImg').src = '/rest/files/微信图片_20190517123003.jpg';
          this.$axios({
            url: '/rest/user/getImage',
            method: 'get',
            data: {
              id:"5dfba9ad6d9ff8e6dc8a342b",

            }
          }).then(res => {
            console.log('userImgSrc: ' + res.data);
            if(res.data) {
              this.image=res.data;
            }
          });
        });
      },
      gotoprofessor(){
        this.$router.push({name:'Professor', params:{pid:this.userInfo.expertId}});
      },
      release(){

        this.$router.push({name:'Release',params:{pid:this.userInfo.expertId}});
      }






    },

    created() {
      var _this = this;
      _this.getUserInfo();
      _this.loadUserImg();



    }
  }
</script>

<style scoped>
  .userheadcontent{
    display: flex;
  }
  .inline{
    display: inline-block;
    vertical-align:middle;

  }
  .commitline{
    margin-top: 25px;

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
  }
  .userheadright{
    /*display: flex;*/
    width: 50%;
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
