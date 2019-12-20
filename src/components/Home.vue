<template>
  <div class = "homebody">
    <div class = "homecontainer">
      <div class = "topbar">
      </div>
<!--      测试用？-->
      <div >
        <router-link :to="{name: 'Approval', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Approval</div></router-link>
        <router-link :to="{name: 'Professor', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">professor</div></router-link>
        <router-link :to="{name: 'Certificate', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificate</div></router-link>
        <router-link :to="{name: 'Certificateinfo', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Certificateinfo</div></router-link>
        <router-link :to="{name: 'Manageuser', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Manageuser</div></router-link>
        <router-link :to="{name: 'Preview', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Preview</div></router-link>
        <router-link :to="{name: 'Release', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Release</div></router-link>
        <router-link :to="{name: 'Resource', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Resource</div></router-link>
        <router-link :to="{name: 'Result', params:{type:'blog', keyword: 'all'}}"><div class="searchbuttom">Result</div></router-link>

      </div>
<!--      测试用-->
      <div style="padding: 20px 40px 70px">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本搜索" name="first">
            <div style="margin-bottom: 20px">
              <input class="searchbox" type="text" name="fname" v-model="formInline.keyword"/>
              <select class="searchoption" type="text" name="fname" v-model="formInline.type" >

                <option value=1 v-model="formInline.type" id="篇名">篇名</option>
                <option value=2 v-model="formInline.type" id="作者">作者</option>
              </select>
<!--              <router-link :to="{name: 'Result', params:{type:'blog', keyword: 'all'}}"><div class = "searchbuttom "><div>搜索</div></div></router-link>-->
             <div class = "searchbuttom " ><div @click="searchSth()">搜索</div></div>
            </div>
          </el-tab-pane>
<!--          <el-tab-pane label="高级搜索" name="second">-->
<!--            <div style="margin-bottom: 20px">-->
<!--              <input class="searchbox" type="text" name="fname" />-->
<!--              <router-link :to="{name: 'Result', params:{type:'blog', keyword: 'all'}}"><div class = "searchbuttom "><div>搜索</div></div></router-link>-->
<!--            </div>-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>-->
<!--          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
        </el-tabs>
        <div style="width: 100%">


          <div v-for="blog in tuijianlist" class="resultcard">
            <div>
              <div class="item">
                <!--          <div style="height: 5px;width: 100%;background: #6aa0b2"></div>-->
                <div class="posttitle" @click="gotoBlog(blog.username, blog.id)">{{blog.title}}</div>
                <div class="status">发布于： {{blog.time}}| 作者：{{blog.authorName.toString()}}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div style="clear:both;"></div>
    </div>
    <div style="background: black;height:100px;width: 100%"  >
    </div>

  </div>
</template>

<script>

    export default{
        data(){
            return {
               activeName: 'first',
               formInline:{
                   keyword: '',
                   type:'',
               },
                blogList: [],
                tuijianlist:[],
            }
        },
        mounted(){
            this.formInline.type=1;
        },
        created(){
            this.$root.Bus.$emit('changeStatus', '');
            // this.getBlogList(this.$route.params.keyword);
            this.getBlogList('all');
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            gotoBlog(uname, _id)
            {
              this.$router.push({name: 'Resource', params: {resourceId: _id}});
              /*
                if(localStorage.getItem('user') == null)
                {
                    var r="点赞";
                    this.$router.push({name: 'Resource', params: {resourceId: addr, ret: r}});
                }
                else {
                    // this.$router.push({name: 'SingleBlog', params:{username: uname, blogId: addr}});
                    //console.log(Global.sso_flag);
                    //console.log(addr);
                    this.$axios({
                        url: '/rest/chadianzan',
                        method: 'post',
                        data: {
                            dianzan: localStorage.getItem('user'), dianzaned: addr,
                        }
                    }).then(res => {
                            console.log(res);
                            var r;
                            if (res.data == false) r = "取消点赞";
                            else if (res.data == true) r = "点赞";
                            else r = uname;
                            this.$router.push({name: 'SingleBlog', params: {username: uname, blogId: addr, ret: r}});
                        }
                    )
                         
                }*/
            },
            getBlogList(keyword)
            {
                if(keyword == 'all')
                {
                    this.$axios({
                        url: '/rest/getallBlog',//请求的地址
                        method: 'post',//请求的方式
                        data: {},//请求的表单数据
                    }).then(res => {
                        if (res.data != null) {
                            this.blogList = res.data;
                        }
                    });
                }
                else {
                    this.$axios({
                        url: '/rest/getBlogByBlog',//请求的地址
                        method: 'post',//请求的方式
                        data: {
                            title: keyword,
                            username: '',
                            date: '',
                            blogMd: '',
                            blogHtml: '',
                            id: '',
                        },//请求的表单数据
                    }).then(res => {
                        if (res.data != null) {
                            this.blogList = res.data;
                        }
                    });
                }
            },
            gettuijian()
            {
              this.$axios({
                url: '/rest/resources/recommand',//请求的地址
                method: 'get',//请求的方式
              }).then(res => {
                if (res.data != null) {
                  console.log(res.data);
                  this.tuijianlist = res.data;
                }
              });
            },
          searchUser() {
            this.$router.push({name: 'Result', params: {type:'user', keyword: this.formInline.keyword}});
          },
          searchBlog()
          {
            this.$router.push({name: 'Result', params: {type:'blog', keyword: this.formInline.keyword}});
          },
          searchSth()
          {

            if (this.formInline.keyword.trim().length == 0)
            {
              this.$Message.error('请输入检索关键词');
            }
            else {
              // var selectBox = document.getElementById('searchType');
              // blog mode
              if (this.formInline.type == 1) {
                console.log("篇名");
                console.log(this.formInline.keyword);
                this.searchBlog();
                window.location.reload();
              }
              // user mode
              else {
                console.log("作者");
                console.log(this.formInline.keyword);
                this.searchUser();
                window.location.reload();
              }
            }

          }
        },
        created()
        {
            this.gettuijian();
        }
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
  .cardtitle{
    color: rgba(0, 0, 0,0.8);
    font-size: 20px;font-weight: bold;
    display: inline-block;
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
  .homebody{
    /*display: flex;*/
    font-family: "Source Han Sans CN";
    height: 100%;
    text-align: left;
    background: #f1f1f1;
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

  .article-list, .article {
    margin-right: 30%;
    margin-bottom: 25px;
    margin-top: 20px;
    background: #fff;
    /*padding: 20px 30px;*/
    transition: height 5s ease;
    -webkit-box-shadow: 0 0 10px 0px rgba(0,0,0,.1);
    /*box-shadow: 0 0 3px 2px rgba(0,0,0,.2);*/
  }

  .article-list .item  {
    margin-bottom: 25px;
    width: 100%;
  }

  .article-list .item .title,
  .article .title {
    color: #454545;
    font-size: 22px;
    font-weight: 700;
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

  }
  .bordertype{
    border-top:5px solid #000000;
    padding-top: 8px;
    transition: border-top-color 0.1s ease,border-top-width 0.3s;
  }
  .bordertype:hover{
    border-top:8px solid #a6dadd;
    padding-top: 8px;
  }

</style>
