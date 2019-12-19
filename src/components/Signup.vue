<template>
  <div style="background: white;height: 100%;width: 100%">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <div>
      </div>
      <div class="outer_label">
        <img class="inner_label login_logo" src="../assets/logo-large-black.png" style="margin: 30px 30px" width="160">
      </div>
      <div class="login_form">
        <div>
          <!--        <h1> &#45;&#45;&#45;&#45;&#45;&#45;Sign Up&#45;&#45;&#45;&#45;&#45;&#45;</h1>-->
        </div>

        <!--      Email-->
        <FormItem prop="Email">
          <div>
            <Input placeholder="用户邮箱" v-model="formInline.Email">
              <!--            <Icon type="ios-person-outline" slot="prepend"></Icon>-->
            </Input>
          </div>
        </FormItem>
        <br>



        <FormItem prop="username">
          <div>
            <Input v-model="formInline.Username" placeholder="Username">
              <!--            <Icon type="ios-person-outline" slot="prepend"></Icon>-->
            </Input>

          </div>
        </FormItem>
        <br>
        <FormItem prop="Password">
          <!--        <div>-->
          <Input  type="password" v-model="formInline.Password" placeholder="Password">
            <!--          <Icon type="ios-lock-outline" slot="prepend"></Icon>-->
          </Input>
          <!--        </div>-->
        </FormItem>
        <br>



          <!--        </Input>-->
        <br>
        <FormItem>
          <div type="primary" @click="handleSubmitsignup('formInline')" class="headtext4" style="margin-bottom: 20px">注册</div>

          <FormItem>
            <span>已有账号？ 立即  </span><router-link   :to="{ path: '/Login' }"><span type="primary">登录</span></router-link>
          </FormItem>
        </FormItem>
      </div>
    </Form>
  </div>





</template>
<script>
    import crypto from 'crypto';
  export default {
    data() {
      return {
        formInline: {
            Username: '',
            Password: '',
            Email:'',
        },
          tmpCode: '',
        ruleInline: {
          userName: [
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {
              type: 'string',
              min: 6,
              message: 'The password length cannot be less than 6 bits',
              trigger: 'blur'
            }
          ],
          sex:[
            {required: true, message: 'Please fill in the user sex', trigger: 'blur'}
          ],
          age:[
            {required: true, message: 'Please fill in the user age', trigger: 'blur'}
          ],
            email: [
                {required: true, message: 'Please fill in your email address', trigger: 'blur'},
                {
                    pattern : /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    message: '错误的邮箱格式',
                    trigger: 'blur'
                }
        ],
            vertifyCode: [
                {required: true, message: 'Please fill in the vertify code', trigger: 'blur'},
            ],
        }
      }
    },
      methods: {
          handleSubmitsignup(name) {
              this.$refs[name].validate((valid) => {
                  if (valid) {
                          var md5 = crypto.createHash("md5");
                          md5.update(this.formInline.Password);
                          var hashed = md5.digest('hex');
                          console.log(this.formInline.Email);
                          this.$axios({
                              url: '/rest/user/register',//请求的地址
                              method: 'post',//请求的方式
                              data: {
                                  username: this.formInline.Username,
                                  password: hashed,
                                  email: this.formInline.Email,
                              }//请求的表单数据
                          }).then(res => {
                              console.info('后台返回的数据', res.data);
                              // 返回true的话就跳转到编辑器（暂时
                              if (res.data==="success") {
                                  this.$router.push({path: '/Login'});
                              } else {
                                  this.$Message.error('用户名已存在');
                              }

                          }).catch(err => {
                              console.info('报错的信息', err.response.message);
                          });

                  }
                  else {
                      this.$Message.error('表单校验失败!');
                  }

              })
          },



      },

      created() {
          this.$root.Bus.$emit('changeStatus', '');
      }
  }
</script>
<style>
  .userinput{
    border: #0D3349 5px;
    background: #0D3349;
  }
  .inline{
    display: inline;
    margin-left: 5px;
    margin-right: 5px;
  }
  .headtext4{
    outline:none;
    font-family: "Yu Gothic UI";
    font-size: 15px;
    height: 35px;
    width:100px;
    border-radius: 30px;
    background: rgb(52, 52, 52);
    text-align: center;
    vertical-align:middle;
    line-height: 35px;
    color: white;
    border: 2px solid #343434;
    transition: background-color 0.2s ease,border-width 0.2s ease,border-radius 0.2s ease;
  }
  .headtext4:hover{

    background: #a6dadd;
    color: #000000;
    border: 2px solid #a6dadd;

  }
  .headtext4:active{

    border-radius: 35px;
    background: white;
    color: #000000;
    border: 2px solid transparent;
    /*border: 0px solid white;*/
  }
  .headtext2{
    outline:none;
    font-family: "Yu Gothic UI";
    font-size: 12px;
    height: 33px;
    width:80px;
    border-radius: 30px;
    background: #343434;
    text-align: center;
    vertical-align:middle;
    line-height: 35px;
    color: white;
    /*border: 2px solid white;*/
    transition: border-radius 0.2s ease;
  }
  .headtext2:hover{

    background: #a6dadd;
    color: #000000;
    /*border: 2px solid #a6dadd;*/

  }
  .headtext2:active{

    border-radius: 35px;
    background: white;
    color: #000000;
    /*border: 2px solid transparent;*/
    /*border: 0px solid white;*/
  }
  .login_form {
    padding-top: 0%;
    padding-left: 10%;
    padding-right: 10%;
  }

  .login_logo {
    height: 50%;
  }
  .qxs-ic_user {
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }


  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
  input[type="password"]{
    padding-left: 10px;
    height: 33px;
    border-radius: 30px;
    outline: none;
    background: transparent;
    border: 2px solid #343434;
    /*border-radius: 15px;*/
    color: #343434;
    letter-spacing: 1px;
  }
  input[type="password"]:hover{
    border-color: #a6dadd;
    background: transparent;
    color: #343434;
  }
  input[type="text"]{
    padding-left: 10px;
    height: 33px;
    border-radius: 30px;
    outline: none;
    background: transparent;
    border: 2px solid #343434;
    /*border-radius: 15px;*/
    color: #343434;
    letter-spacing: 1px;
  }
  input[type="text"]:hover{
    border-color: #a6dadd;
    background: transparent;
    color: #343434;
  }

  .selectage{
    padding-left: 5px;
    width: 165px;
    height: 33px;
    background: transparent;
    border: 2px solid #343434;
    border-radius: 15px;
    color: #343434;
    letter-spacing: 1px;
  }
</style>
