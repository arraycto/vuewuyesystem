(function(e){function t(t){for(var o,r,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2e86f7f4","chunk-0ba83fa2":"e0083ec5","chunk-79d16f82":"4a58880d","chunk-763f7b43":"a94632a0","chunk-62206159":"6fe768cb"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-0ba83fa2":1,"chunk-763f7b43":1,"chunk-62206159":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"1721ed84","chunk-0ba83fa2":"139e7def","chunk-79d16f82":"31d6cfe0","chunk-763f7b43":"7e5abebf","chunk-62206159":"a7d33fcc"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===o||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var f=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("div",{staticStyle:{height:"60px"}}),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",staticStyle:{position:"fixed","z-index":"11",width:"100%"},attrs:{mode:"horizontal","background-color":"#30373e","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{staticStyle:{width:"125px"},attrs:{index:""},on:{click:e.changeshowbar}},[e._v("HXF物业系统")]),n("el-submenu",{attrs:{index:""}},[n("template",{slot:"title"},[e._v("导航")]),n("el-menu-item",{attrs:{index:"/dashboard/show"}},[e._v("管理后台")]),n("el-menu-item",{attrs:{index:"/user"}},[e._v("用户中心")])],2),n("el-menu-item",{staticClass:"hidden-xs-only",attrs:{index:"about"}},[e._v("关于")]),n("el-menu-item",{staticClass:"block",staticStyle:{float:"right"}},[n("el-dropdown",[n("el-avatar",{attrs:{size:"medium",src:e.circleUrl}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/login"}},[n("el-dropdown-item",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.eid&&!e.userinfo.cno,expression:"!userinfo.eid && !userinfo.cno"}]},[e._v("登录")])],1),n("span",{on:{click:function(t){return e.logOut()}}},[n("el-dropdown-item",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.eid||e.userinfo.cno,expression:"userinfo.eid || userinfo.cno"}]},[e._v("注销")])],1)],1)],1)],1),n("el-menu-item",{staticClass:"hidden-xs-only",staticStyle:{float:"right",cursor:"default"},attrs:{disabled:""}},[null!=e.userinfo.eid?n("span",[e._v("员工："+e._s(e.userinfo.ename))]):null!=e.userinfo.cno?n("span",[e._v("住户："+e._s(e.userinfo.cname))]):n("span",[e._v("请先登录！")])])],1)},s=[],u=(n("d3b7"),n("dbb4")),l=n("bc3a"),c=n.n(l),f={name:"NavBar",data:function(){return{showbar:!0,userinfo:{cno:null,eid:null},circleUrl:"./static/imgs/user.png"}},methods:{logOut:function(){console.log("触发注销");var e=this;c.a.get(hxf_conf.BaseUrl+"/api/logout").catch((function(e){console.log("服务端错误改为本地强行注销：",e)})).finally((function(){window.localStorage.removeItem("Authorization"),console.log("服务器 token 和本地 cookie 注销成功"),e.$message({showClose:!0,message:"注销成功！请重新登录",offset:66,type:"success"}),e.userinfo={cno:null,eid:null},e.$router.push("/login")}))},handleSelect:function(e,t){if("about"==e){var n=this.$createElement;this.$notify({title:"作者信息：",message:n("i",{style:"color: teal"},"胡晓帆 2018010587")}),setTimeout((function(){window.open("https://git.huxiaofan.com/emptinessboy/vuewuyesystem")}),3e3)}else this.$router.push({path:e})},changeshowbar:function(){this.showbar=!this.showbar,console.log("是否显示侧边栏： "+this.showbar),u["a"].$emit("isshowbar",this.showbar)},getUserInfo:function(){try{console.log("导航栏更新用户信息"),null==this.$store.state.Authorization?this.userinfo={cno:null,eid:null}:this.userinfo=JSON.parse(this.$store.state.Authorization)}catch(e){console.log("未获取到 LocalStorage 中的存储信息！")}}},watch:{"$store.state.Authorization":function(){this.getUserInfo(),console.log("监听到用户信息变化")}},created:function(){this.getUserInfo()}},d=f,h=n("2877"),p=Object(h["a"])(d,i,s,!1,null,"7f268c76",null),m=p.exports,g={name:"app",components:{NavBar:m},created:function(){}},b=g,v=(n("034f"),Object(h["a"])(b,r,a,!1,null,null,null)),w=v.exports,y=n("8c4f");o["default"].use(y["a"]);var k=[{path:"/",redirect:function(e){return"/login"}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-79d16f82"),n.e("chunk-763f7b43")]).then(n.bind(null,"a55b"))}},{path:"/user",name:"User",meta:{needLogin:!0},component:function(){return n.e("chunk-0ba83fa2").then(n.bind(null,"1511"))}},{path:"/dashboard/:path",name:"DashBoard",meta:{needLogin:!0},component:function(){return n.e("about").then(n.bind(null,"7e48"))}}],S=new y["a"]({routes:k});S.beforeEach((function(e,t,n){if(1==e.meta.needLogin){var o=localStorage.getItem("Authorization"),r=null;null==o?n("/login"):(r=JSON.parse(o).token,console.log("router取得的token为："+r)),null==r||""==r?n("/login"):n()}else n()}));var x=S,_=n("2f62");o["default"].use(_["a"]);var O=new _["a"].Store({state:{Authorization:localStorage.getItem("Authorization")?localStorage.getItem("Authorization"):""},mutations:{changeLogin:function(e,t){e.Authorization=t,localStorage.setItem("Authorization",t)}},actions:{},modules:{}}),A=n("5c96"),j=n.n(A);n("0fae");o["default"].use(j.a);n("ac1f"),n("5319");var z=n("53ca"),P=n("bc3a");P.defaults.crossDomain=!0,P.interceptors.request.use((function(e){if(localStorage.getItem("Authorization")){var t=JSON.parse(localStorage.getItem("Authorization")).token;"post"===e.method?e.data="token="+t+"&"+e.data:"get"===e.method&&(void 0==Object(z["a"])(e.params)?e.url=e.url+"?token="+t:e.params=Object.assign({token:t},e.params)),console.log("拦截器设置token参数完毕："+t)}return e}),(function(e){return Promise.reject(e)})),P.interceptors.response.use((function(e){return e}),(function(e){return 405===e.response.status?(console.log("用户未登录：",e),O.commit("changeLogin",null),localStorage.removeItem("Authorization"),x.replace({path:"/login",query:{redirect:x.currentRoute.fullPath}}).catch((function(e){console.log(e)})),j.a.Message({showClose:!0,message:"您需要重新登录 或者 登录已经过期 ",offset:66,type:"warning"}),Promise.reject(e)):Promise.reject(e)}));var C=n("9ca8");o["default"].component("v-chart",C["a"]),o["default"].config.productionTip=!1,new o["default"]({router:x,store:O,render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){},dbb4:function(e,t,n){"use strict";var o=n("2b0e");t["a"]=new o["default"]}});
//# sourceMappingURL=app.67208973.js.map