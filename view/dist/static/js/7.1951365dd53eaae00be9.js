webpackJsonp([7],{"+Nj0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"login",data:function(){return{userName:"",password:"",centerDialogVisible:!1,msg:""}},components:{},methods:{login:function(){var e=this;this.$http({method:"post",url:this.HOST+"/api/login",params:{userName:e.userName,password:e.password},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){var a=t.data;console.log(a),200==a.code&&e.$router.push("/admin")}).catch(function(t){e.centerDialogVisible=!0})}},created:function(){},mounted:function(){this.$nextTick(function(){})}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"login"},[a("div",{staticClass:"box"},[a("span",[e._v("Username")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",name:"userName",placeholder:"登录名"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),a("span",[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",name:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("button",{attrs:{disabled:!e.userName||!e.password},on:{click:e.login}},[e._v("登录")])])])},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(e){a("d1Je")},null,null);t.default=o.exports},d1Je:function(e,t){}});
//# sourceMappingURL=7.1951365dd53eaae00be9.js.map