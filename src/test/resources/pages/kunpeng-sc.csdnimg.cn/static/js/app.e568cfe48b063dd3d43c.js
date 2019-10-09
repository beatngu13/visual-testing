webpackJsonp([2],{"8uvu":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"view"})],1)};r._withStripped=!0;var o={render:r,staticRenderFns:[]},i=o;var u=n("VU/8")({name:"App",data:function(){return{}},mounted:function(){},methods:{}},i,!1,null,null,null);u.options.__file="src/pages/preview/App.vue";var c=u.exports,s=n("/ocq");a.default.use(s.a);var d=new s.a({routes:[{path:"/preview/:id",components:{default:function(t){return n.e(0).then(function(){return t(n("vT+3"))}.bind(null,n)).catch(n.oe)}},props:{default:!0}}]}),p=(n("nO5U"),n("VqY/")),f=n("LTzH");a.default.config.productionTip=!1,a.default.prototype.CFG=p.a,a.default.prototype.http=f.a,new a.default({el:"#app",router:d,http:f.a,components:{App:c},template:"<App/>",created:function(){}})},LTzH:function(t,e,n){"use strict";var a,r=n("//Fk"),o=n.n(r),i=n("mtWM"),u=n.n(i),c=n("7+uW"),s=n("NYxO"),d=n("bOdI"),p=n.n(d),f=n("K/Lq"),m=n.n(f),l=n("VqY/"),L={findByType:function(t){var e=Array.isArray(t)?t.join(","):t;return w.get(l.a.API_URL+"resourceManage/config?configData="+e).then(function(e){return Array.isArray(t)?e.data.data:e.data.data[t]})},findArticleType:function(){return this.findByType("articleType")}},h={getUserInfo:function(){return w.get(l.a.API_URL+"user/present").then(function(t){return t.data})},getRelatedAccount:function(){return w.get(l.a.API_URL+"account/list").then(function(t){return t.data})},getCurrentAccount:function(){return w.get(l.a.API_URL+"account/present").then(function(t){return t.data})},switchAccount:function(t){return w.put(l.a.API_URL+"account/present/shift",{accountId:t}).then(function(t){return t.data})}},g={state:{fetchLoading:!1,title:"",user:{userName:null},adShapeList:[],accountList:[],resourcePlatformList:[],productList:[],editTemplateData:{},currentAccount:"",isAdmin:!1},getters:{fetchLoading:function(t){return t.fetchLoading},userCookie:function(t){return t.user},resourcePlatformList:function(t){return t.resourcePlatformList},productList:function(t){return t.productList},adShapeList:function(t){return t.adShapeList},accountList:function(t){return t.accountList},currentAccount:function(t){return t.currentAccount},user:function(t){return t.user},editTemplateData:function(t){return t.editTemplateData},isAdmin:function(t){return t.isAdmin}},actions:{FETCH_LOADING:function(t,e){(0,t.commit)("loading",e)},dicInit:function(t){var e=t.commit;L.findByType(["resourcePlatform","product","adShape"]).then(function(t){e("dicInit",{resourcePlatformList:t.resourcePlatform,productList:t.product,adShapeList:t.adShape})})},getRelatedAccount:function(t,e){var n=t.commit;h.getRelatedAccount().then(function(t){n("accountList",t.data)})},editTemplate:function(t,e){(0,t.commit)("editTemplate",e)},userLogin:function(t){var e=t.commit;h.getUserInfo().then(function(t){200===t.status&&(m.a.set("UserName",t.data.name,{expires:"30m"}),e("userLogin",{userName:t.data.name}),e("isAdmin",1===t.data.role))})},getCurrentAccount:function(t){var e=t.commit;h.getCurrentAccount().then(function(t){e("currentAccount",t.data.accountName)})}},mutations:(a={},p()(a,"loading",function(t,e){t.fetchLoading=e}),p()(a,"userLogin",function(t,e){t.user=e}),p()(a,"userLogout",function(t,e){t.user=e}),p()(a,"accountList",function(t,e){t.accountList=e}),p()(a,"editTemplate",function(t,e){t.editTemplateData=e}),p()(a,"dicInit",function(t,e){t.adShapeList=e.adShapeList,t.resourcePlatformList=e.resourcePlatformList,t.productList=e.productList}),p()(a,"currentAccount",function(t,e){t.currentAccount=e}),p()(a,"isAdmin",function(t,e){t.isAdmin=e}),a)},A=n("jJhY").Promise;window.Promise||(window.Promise=A),c.default.use(s.a);var _=new s.a.Store({modules:{app:g}}),v=n("zL8q");u.a.defaults.timeout=5e3;var T=void 0;u.a.interceptors.request.use(function(t){return t.withCredentials=!0,_.state.token&&(t.headers.Authorization="token "+_.state.token),t.data&&"false"===t.data.loading||t.params&&"false"===t.params.loading||(T=new Date,_.dispatch("FETCH_LOADING",!0)),t},function(t){return o.a.reject(t)}),u.a.interceptors.response.use(function(t){var e=(new Date).getTime()-T.getTime();return e<500&&(e=500),setTimeout(function(){_.dispatch("FETCH_LOADING",!1)},e),t},function(t){_.dispatch("FETCH_LOADING",!1),T=new Date;var e="";if(t.response){switch(t.response.status){case 401:case 403:window.location.href=l.a.API_SSO_URL}if(t.response.data&&t.response.data.code&&t.response.data.message)return e=t.response.data&&t.response.data.code&&t.response.data.message,o.a.reject(t.response.data);e=t.response.status+" "+t.response.statusText||"系统异常,请稍后再试"}else e="服务超时,请稍后重试";-1===window.location.href.indexOf("preview")&&Object(v.Message)({type:"error",message:e,showClose:!0,center:!0,customClass:"common_tip"});var n={code:0,message:e};return o.a.reject(n)});var w=e.a=u.a},"VqY/":function(t,e,n){"use strict";e.a={NODE_ENV:"production",ENV:"prod",API_URL:"http://mp-admin.csdn.net/kp/api/",API_PREVIEW_URL:"https://kunpeng.csdn.net/",STATIC_URL:"http://mp-admin.csdn.net/ad/",STATIC_PREVIEW_URL:"https://kunpeng-sc.csdnimg.cn/",ROOT_URL:"http://mp-admin.csdn.net/ad/",UPLOAD_URL:"http://kunpeng-manager.csdn.net/api/",API_SSO_URL:"https://mp-sso.csdn.net/login.html?rolePath:cn=manage_ad_admin,ou=csdn_manage,ou=csdn_production,ou=csdn_permission"}},nO5U:function(t,e){}},["8uvu"]);
//# sourceMappingURL=app.e568cfe48b063dd3d43c.js.map