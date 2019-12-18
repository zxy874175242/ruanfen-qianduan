import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from "../components/Home";
import Login from "../components/Login";
import MdEditor from "../components/MdEditor";
import Signup from "../components/Signup";
import Post from "../components/Post";
import User from "../components/User";
import Approval from "../components/Approval";
import Certificate from "../components/Certificate";
import Certificateinfo from "../components/Certificateinfo";
import Manageuser from "../components/Manageuser";
import Preview from "../components/Preview";
import Professor from "../components/Professor";
import Release from "../components/Release";
import Resource from "../components/Resource";
import Result from "../components/Result";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Post',
      component: Post
    },

    {
      path:'/User/:id',
      component: User
    },
    {
      path:'/Professor',
      component: Professor
    },
    { path: '/Login',
      component: Login
    },
    {
      path: '/MdEditor',
      component: MdEditor
    },
    {
      path: '/Signup',
      component:Signup
    },
    {
      path: '/Signup',
      component:Signup
    },
    {
      path: '/Certificate',
      component:Certificate
    },
    {
      path: '/Approval',
      component:Approval
    },
    {
      path: '/Certificateinfo',
      component:Certificateinfo
    },
    {
      path: '/Manageuser',
      component:Manageuser
    },
    {
      path: '/Preview',
      component:Preview
    },
    {
      path: '/Release',
      component:Release
    },
    {
      path: '/Resource',
      component:Resource
    },
    {
      path: '/Result',
      component:Result
    },
  ],
  mode:"history"
})
