webpackJsonp([5],{Cpgk:function(t,e){},Xt6H:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mOB5"),a=n("SKcX"),c=n("OUyv"),r={name:"articles",data:function(){return{articles:[]}},components:{"nav-e":i.a,"footer-e":a.a},methods:{getArticleList:function(){var t=this;this.$http({method:"post",url:this.HOST+"/api/getArticleList",params:{}}).then(function(e){e&&200==e.status&&(t.articles=e.data.data)}).catch(function(t){alert(t)})},detail:function(t){this.$router.push("/articleDetail?id="+t._id)}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getArticleList()})},filters:{formatDate:function(t){return Object(c.a)(Number(t),"yyyy-MM-dd hh:mm")}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[n("nav-e"),t._v(" "),n("section",{staticClass:"wrap article min-box"},[n("h2",[t._v("文章列表")]),t._v(" "),n("ul",t._l(t.articles,function(e,i){return n("li",{on:{click:function(n){t.detail(e)}}},[n("span",[t._v(t._s(i+1)+".")]),t._v(" "),n("span",[t._v(t._s(e.title)+"...")]),t._v(" "),n("span",{staticClass:"time"},[t._v("发布时间："+t._s(t._f("formatDate")(e.createTime)))])])}))]),t._v(" "),n("footer-e")],1)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("Cpgk")},null,null);e.default=o.exports}});
//# sourceMappingURL=5.6589e8c0311ab4a7067a.js.map