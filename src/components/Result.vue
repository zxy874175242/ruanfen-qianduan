<template>
  <div class = "homebody">
    <div class = "homecontainer">

<!--      <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>-->

      <div style="padding: 10px 40px 70px">
        <div>
          <div style="color: #454545;font-size: 20px;margin-bottom: 5px;" >检索结果</div>
          <div style="width: 100px;height: 3px;background: black"></div>
          <div class ="isline2"></div>
  <!--
          <div class="fiterline">
            <div class="inline2">文献主题:</div>
            <div class="inline2">语音合成</div>
            <div class="inline2">卷积神经网络</div>

          </div>
          <div class="fiterline">
            <div class="inline2">文献类型:</div>
            <div class="inline2">语音合成</div>
            <div class="inline2">卷积神经网络</div>
          </div>

          <div class="fiterline">
            <div class="inline2">发表时间:</div>
            <div class="inline2">语音合成</div>
            <div class="inline2">卷积神经网络</div>
          </div>
-->

        </div>

        <div>
          <div class ="isline"style="margin-top: 15px"></div>
          <div style="margin-top: 15px;margin-left: 15px">关键词{{this.$route.params.keyword}}的检索结果，共{{this.listLen}}条</div>
          <!--这下面怪怪的，注意一下 -->
          <div style="margin-bottom: 20px">
            <input class="searchbox" type="text" name="fname" v-model="keyword2"/>
            <div class = "searchbuttom " @click="searchInResult"><div >结果中搜索</div></div>
          </div>
        </div>

        <div>
          <div v-for="blog in blogList">
          <div>
            <div class="resultcard">
            <div style="vertical-align: bottom;margin-bottom: 5px">
              <div class="cardtitle" @click="gotoBlog(blog.username, blog.id)">{{blog.title}}</div>
              <div class="inline" v-for="au in blog.authorName[0]"><div class="cardauthor" >{{au}}</div></div>
              <div class="cardyear" >{{blog.time}}</div>
            </div>
              <!-- 这是啥 -->
            <!--<div style="color: rgba(0,0,0,0.6)">层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记…</div>-->
          </div>
          </div>
          </div>

          <div v-for="u in userList">
            <div>
              <div class="resultcard">
                <div style="vertical-align: bottom;margin-bottom: 5px">
                  <div class="cardtitle" @click="gotoExpert(u.id)">{{u.realName}}</div>
                  <div class="cardauthor" >{{u.company}}</div>
                  <div class="cardyear" >{{u.phoneNumber}}</div>
                </div>
                <!--<div style="color: rgba(0,0,0,0.6)">层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记…</div>-->
              </div>
            </div>
          </div>
        </div>
    </div>
    <!--    Footer-->
    <div style="background: black;height:100px;width: 100%"  >
    </div>

  </div>
  </div>
</template>

<script>

    export default{
        data(){
            return {
              blogList: [],
              userList: [],
              listLen: 0,
              keyword2:'',
            }
        },
        mounted(){

        },
        created(){
            this.$root.Bus.$emit('changeStatus', '');
            this.blogList = [];
            this.userList = [];
            if (this.$route.params.type == 'blog')
            {
              this.getBlogList(this.$route.params.keyword);
            }
            else
            {
              this.getUserList(this.$route.params.keyword);
            }
        },
        methods: {

          searchInResult(keyword)
          {
            this.blogList = [];
            var par = new URLSearchParams();
            par.append('name', keyword);
            this.$axios({
              url:'/rest/resources/findinresult',
              method:'post',
              data:par
            }).then(res=>
            {
              console.log(res.data);
              blogList = res.data;

            });
          },


          gotoBlog(uname, id)
          {
            this.$router.push({name: 'Resource', params: {resourceId: id}});
            /*
            if(localStorage.getItem('user') == null)
            {
              var r="点赞";
              this.$router.push({name: 'Resource', params: {resourceId: id, ret: r}});
            }
            else {
              var par = new URLSearchParams();
              par.append('name', uname);
              this.$axios({
                url: '/rest/follow/isfollow',
                method: 'post',
                data: par
              }).then(res => {
                  console.log(res);
                  var r;
                  if (res.data == false) r = "取消点赞";
                  else if (res.data == true) r = "点赞";
                  else r = uname;
                  this.$router.push({name: 'SingleBlog', params: {username: uname, blogId: addr, ret: r}});
                }
              )
            }
            */

          },
          gotoExpert(_id)
          {
            console.log(_id);
            //
            if(localStorage.getItem('user') == null)
            {
              var r="关注";
              this.$router.push({name: 'Professor', params: {pid: _id}});
            }
            else
            {
              //console.log(Global.sso_flag);
              //console.log(uname);
              var par = new URLSearchParams();
              par.append('follow', _id);
              this.$axios({
                    url:'/rest/expert/isfollow',
                    method:'post',
                    data:par
                  }).then(res=>
                  {
                    //console.log(res);
                    var r;
                    if(localStorage.getItem('user') == null)
                      r="关注";
                    else
                    {
                      if(res.data==false) r="取消关注";
                  else if(res.data==true) r="关注";
                  else r='error';
                }
                this.$router.push({name: 'Professor', params: {pid: _id,ret:r}});
              });
            }
            //
          },

          getUserList(keyword)
          {
            var par = new URLSearchParams();
            par.append('name', keyword);
            this.$axios({
              url: '/rest/expert/find',//请求的地址
              method: 'post',//请求的方式
              data: par,//请求的表单数据
            }).then(res => {
              if (res.data != null)
              {
                this.userList = res.data;
                this.listLen = res.data.length;
              }
            });
          },

          getBlogList(keyword)
          {
            // 获取推荐的
            if(keyword == 'all')
            {
              this.$axios({
                url: '/rest/resources/recommand',//请求的地址
                method: 'get',//请求的方式
                data: {},//请求的表单数据
              }).then(res => {
                if (res.data != null) {
                  this.blogList = res.data;
                  this.listLen = res.data.length;
                }
              });
            }
            // 获取关键词的
            else {
              var par = new URLSearchParams();
              par.append('name', keyword)
              this.$axios({
                url: '/rest/resources/find',//请求的地址
                method: 'post',//请求的方式
                data: par,//请求的表单数据
              }).then(res => {
                if (res.data != null) {
                  this.blogList = res.data;
                  this.listLen = res.data.length;
                }
              });
            }
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
