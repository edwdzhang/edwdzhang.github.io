(function(n){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var n,e=0;e<s.length;e++){for(var t=s[e],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"1bec":function(n,e,t){},"202d":function(n,e,t){},2169:function(n,e,t){var r={"./style0.css":"30ac","./style1.css":"2497","./style2.css":"aed5"};function o(n){var e=s(n);return t(e)}function s(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=s,n.exports=o,o.id="2169"},2497:function(n,e,t){"use strict";t.r(e),e["default"]="/**\n * 左侧的 markdown 看起来并不美观。\n *\n * 我们稍作修饰。\n */\n\n#work-text {\n  max-height: 94.5%;\n}\n\n#work-text.flipped {\n  transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);\n}\n\n#work-text .md {\n  transform: rotateY(190deg) rotateZ(180deg);\n  margin-top: 1200px;\n}\n\n/**\n * 下面就是见证奇迹的时刻：\n *\n * 3。\n * 2。\n * 1。\n *\n * 。\n * 骗你啦，啥也没有~\n *\n * 好吧，其实是有的，来了。\n *\n */\n"},"30ac":function(n,e,t){"use strict";t.r(e),e["default"]="/**\n *\n * 你好。我叫张成欣。一枚前端攻城师。\n *\n * 我喜欢研究一些前端有趣的交互。\n *\n * 要不来一场直播写代码？\n */\n\n/**\n * 那么开始吧，首先让一切都动起来~\n */\n\n* {\n  transition: all 1s;\n}\n\n/**\n * 这看似没用呀，别急，一会儿你就会看到效果了。\n *\n * 黑白配色太无聊了，我们来做一些变化。\n */\n\nhtml {\n  background: rgb(63, 82, 99);\n}\n\n/***\n * 等等。\n */\n\npre, a {\n  color: white;\n}\n\n/**\n * 看上去好多了。但是有点刺眼了。\n *\n * 而且在整个屏幕上写代码有点浪费空间了。\n *\n * 我来做一些优化。\n */\n\npre:not(:empty) {\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  border: 1px solid #ccc;\n  max-height: 44.6%;\n  width: 49%;\n  font-size: 14px;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n/**\n * 接下来我们在把它移到屏幕右侧。\n */\n\n#style-text {\n  transform: translateX(95%);\n  position: absolute;\n}\n\n/**\n * 看上去还不错喔, 但是所有的字体颜色是白色的！\n *\n * 那么，我们来把代码变的更加可读吧~\n */\n\n.comment       { color: #857F6B; font-style: italic; }\n.selector      { color: #E69F0F; }\n.selector .key { color: #64D5EA; }\n.key           { color: #64D5EA; }\n.value         { color: #BE84F2; }\n.value.px      { color: #F92772; }\n\n/**\n * 现在我们有了一些进展。\n *\n * 再把它变得更立体一些。\n */\n\nbody {\n  perspective: 1000px;\n}\n\n#style-text {\n  transform: translateX(98.5%) rotateY(-10deg);\n  transform-origin: right;\n  max-height: 94.5%;\n}\n\n/**\n * 好吧差不多了，接下来就聊聊我吧。\n *\n * 我相信你应该不是来只看我炫技的吧？\n */\n\npre:not(#style-text) {\n  transform: rotateY(10deg);\n  transform-origin: left;\n}\n\n"},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("style-text",{ref:"style"}),e("work-text",{ref:"work"}),e("page-footer",{ref:"footer"})],1)},s=[],i=t("c7eb"),a=t("1da1"),c=function(){var n=this,e=n._self._c;return e("pre",{attrs:{id:"style-text",contenteditable:""},domProps:{innerHTML:n._s(n.text)}})},l=[],u=(t("d81d"),t("a15b"),t("d9e2"),t("fb6a"),t("ac1f"),t("00b4"),t("f684")),p=t.n(u),d=(t("5319"),!1),f=/(\/\*(?:[^](?!\/\*))*\*)$/,h=/([a-zA-Z- ^\n]*)$/,m=/([^:]*)$/,x=/(.*)$/,w=/\dp/,v=/p$/;function b(n,e){return d&&"/"!==e?n+=e:"/"===e&&!1===d?(d=!0,n+=e):"/"===e&&"*"===n.slice(-1)&&!0===d?(d=!1,n=n.replace(f,'<span class="comment">$1/</span>')):":"===e?n=n.replace(h,'<span class="key">$1</span>:'):""===e?n=n.replace(m,'<span class="value">$1</span>'):"{"===e?n=n.replace(x,'<span class="selector">$1</span>{'):"x"===e&&w.test(n.slice(-2))?n=n.replace(v,'<span class="value px">px</span>'):n+=e,n}var y=/[？！。~：]$/,g=/\D[，；、]$/,k=/[^/]\n\n$/,$=!1,O={data:function(){return{text:"",speed:$?0:16}},created:function(){this.styleBuffer=""},methods:{writeTo:function(n,e,t,r,o,s){var c=this;return Object(a["a"])(Object(i["a"])().mark((function a(){var l,u,d;return Object(i["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!c.$root.animationSkipped){i.next=2;break}throw new Error("SKIP IT");case 2:if(l=e.slice(t,t+s),t+=s,n.scrollTop=n.scrollHeight,o?c.writeChar(l):c.writeSimpleChar(l),!(t<e.length)){i.next=17;break}u=r,d=e.slice(t-2,t),g.test(d)&&(u=30*r),y.test(d)&&(u=70*r),d=e.slice(t-2,t+1),k.test(d)&&(u=50*r);case 13:return i.next=15,p.a.delay(u);case 15:if(c.$root.paused){i.next=13;break}case 16:return i.abrupt("return",c.writeTo(n,e,t,r,o,s));case 17:case"end":return i.stop()}}),a)})))()},writeChar:function(n){this.text=b(this.text,n),this.styleBuffer+=n,";"===n&&(this.$root.$emit("styleAppend",this.styleBuffer),this.styleBuffer="")},writeSimpleChar:function(n){this.text+=n}}},T=[0,1,2].map((function(n){return t("2169")("./style"+n+".css").default})),S={name:"StyleText",mixins:[O],methods:{write:function(n){var e=this;return Object(a["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.writeTo(e.$el,T[n],0,e.speed,!0,1);case 2:case"end":return t.stop()}}),t)})))()},writeToEnd:function(){for(var n=T.join("\n"),e="",t=0;t<n.length;t++)e=b(e,n[t]);this.text=e,this.$root.$emit("styleOverwrite","#work-text * {transition: none; }"+n)}}},j=S,_=t("2877"),E=Object(_["a"])(j,c,l,!1,null,null,null),P=E.exports,C=function(){var n=this,e=n._self._c;return e("pre",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],class:n.workCls,attrs:{id:"work-text"}},[n._v("  "),n.preview?e("div",{domProps:{innerHTML:n._s(n.text)}}):e("div",[n._v("\n    "),e("div",{staticClass:"text",domProps:{innerHTML:n._s(n.workText)}}),n._v("\n    "),e("div",{staticClass:"md",domProps:{innerHTML:n._s(n.mdText)}}),n._v("\n  ")]),n._v("\n")])},H=[],I="基本资料\n=========\n\n* 姓名：张成欣。\n* Email：1193055507@qq.com。\n* GitHub：https://github.com/edwdzhang。\n\n\n个人概况\n-------\n\n* 熟练掌握 HTML5、CSS3、ES6。\n* 熟练掌握 Vue 全家桶并了解源码；了解并轻度使用 React；了解 Node。\n* 熟练使用 ElementUI、Ant Design等组件库；熟练使用 Webpack、Rollup等构建工具；熟练使用 Git。\n* 热爱开源。\n\n\n教育背景\n--------\n\n - 2008/09 - 2011/09，大专：中原工学院信息商务学院 - 计算机科学与技术\n\n\n工作经历\n--------\n\n* 2022/01 – 2022/07 | 白龙马云行 | 移动前端开发工程师\n\n  - 乐高：可视化搭建H5页面的低代码平台\n  背景：快速响应活动页需求，提升运营营销效率。\n  职责：\n    - 前期调研、论证 mall-cook、imooc-lego等开源项目，以及核心技术文档的编写。\n    - 后台页面：\n      - 业务组件库：文本、图片、轮播图、倒计时、公告等。\n      - 属性操作组件：数字/文本输入框、颜色、对齐、背景、下拉菜单、时间、图片上传等。\n      - 核心功能：拖拽业务组件实时预览、配置业务组件数据实时预览、模拟手机预览、发布、下线。\n    - 移动端页面：根据配置数据显示对应页面。\n\n  - 移动端H5页面的开发和维护。\n\n* 2020/06 – 2021/12 | 寺库网 | 前端开发工程师\n\n  - 中后台系统的开发/维护\n    - 基于 Vue+ElementUI：用户运营系统、会员管理系统等。\n    - 基于 vue-element-admin：直播管理后台系统-商家端、直播管理后台系统-运营端、鉴定师sass系统等。\n\n  - APP端/微信端H5页面开发/维护\n    - 基于 Vue 开发移动端常用组件，包括 Form、FormItem、Input、Button、Confirm、Drawer、Loading、Overlay等。\n    - 基于 Rollup 和 TS 开发优惠券弹窗库。\n    - 基于 Vue、Zepto、Swiper 结合 JSBridge 开发和维护各活动页面。\n\n\n* 2018/06 – 2019/12 | 美菜网 | 前端开发工程师\n\n  - RAD模板库\n  背景：公司大量中后台项目类似，每个项目都需要从零开始创建，导致开发效率低、复用性难、UI设计不统一等问题。\n  职责：\n    - 依据公司技术人员技术栈及开发成本选择 Vue+ElementUI的技术方案。\n    - 和设计人员协调UI。\n    - 制定组件开发规范。\n\n  - 中后台系统的开发和维护\n    - 基于RAD的：数据投放平台、销售管理平台、美菜到家平台等。\n    - 非RAD的：CMS内容管理、资源审核平台等。\n\n\n* 2016/06 – 2018/05 | 新东方海威时代 | 前端开发工程师\n\n  - 选课系统重构\n  背景：原项目代码功能混乱，导致开发/管理/维护困难等问题。。\n  职责：\n    - 考虑开发及后期维护/管理/学习成本等问题，选择Vue + ElementUI + vue-resource的方案。\n    - 在文件层面对代码和资源进行模块化，如对JS使用ES Module，对CSS使用 SASS等；\n    - 在设计层面对UI进行组件化，拆分为基础组件、复合组件等。\n    - 使用 Webpack 进行自动化的构建、测试、Lint、打包等。\n\n  - 移动端/微信端H5 页面的开发\n    基于 Vue 和 Zepto，开发和维护包括官方首页及其子页面、活动页等项目。\n\n\n* 2013/05 – 2016/05 | 龙图游戏 | 前端开发工程师\n\n  - 整合前端工程化流程\n  背景：方便开发前端人员本地开发、联调、测试等环节。\n  职责：基于Gulp及其生态插件，包括基于browser-sync的页面自动刷新和代理、JS uglify及压缩、Less预处理、图片压缩和基于mocha 的测试等环节的集成。\n\n  - jQuery插件库\n  背景：为避免重复开发，提升开发效率，基于 jQuery 开发出一套能满足公司业务需求的插件库。\n  职责：包括轮播图、倒计时、弹窗、滚动条、回顶、Tab标签页等插件。\n\n  - 移动端/PC端H5页面的开发\n  基于JQuery 和 Zepto，开发和维护包括官方首页及其子页面、活动页、中后台等项目。\n\n\n开源项目\n--------\n\n- create-cool-app：模板库 CLI。\n- vue-element-dialog/vue-element-popup：基于 ElementUI 的 el-dialog 开发的命令式弹窗插件。\n- @cany/rem：基于 Rollup 和 TS，用于移动端将px 转成 rem。\n- @cany/lazyload：基于 Rollup 和 TS，图片懒加载。\n- @cany/react-echarts：基于 ECharts 开发的 React组件。\n\n\n",A=t("8ddc"),M=t.n(A),B=t("a5dd"),D=t.n(B),L=M.a.markdown.toHTML,U={name:"WorkText",mixins:[O],data:function(){return{flipped:!1,preview:!0,show:!1,workText:I,mdText:L(I)}},computed:{workCls:function(){return this.flipped?"flipped":""}},methods:{write:function(){var n=this;return Object(a["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.show=!0,e.next=3,n.writeTo(n.$el,I,0,n.speed,!1,1);case 3:case"end":return e.stop()}}),e)})))()},showWorkBox:function(){var n=this;this.show=!0,this.preview=!1,this.flipped=!0,this.$nextTick((function(){n.$el.scrollTop=9999;var e=!1;D()(n.$el,function(){var n=Object(a["a"])(Object(i["a"])().mark((function n(t,r){var o,s;return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return");case 2:if(o=(this.$el.scrollHeight-this.$el.clientHeight)/2,s=this.flipped?this.$el.scrollTop<o:this.$el.scrollTop>o,!s){n.next=11;break}return this.flipped=!this.flipped,e=!0,n.next=9,p.a.delay(500);case 9:this.$el.scrollTop=this.flipped?9999:0,e=!1;case 11:this.$el.scrollTop+=r*(this.flipped?-1:1);case 12:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}().bind(n),!0)}))}}},F=U,R=Object(_["a"])(F,C,H,!1,null,null,null),V=R.exports,N=function(){var n=this,e=n._self._c;return e("footer",[e("a",{directives:[{name:"show",rawName:"v-show",value:!n.isEnd,expression:"!isEnd"}],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),n.togglePause.apply(null,arguments)}}},[n._v(n._s(n.text))]),e("a",{directives:[{name:"show",rawName:"v-show",value:!n.isEnd,expression:"!isEnd"}],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),n.skip.apply(null,arguments)}}},[n._v("跳过动画")]),e("span",[e("svg",{staticClass:"icon",attrs:{width:"26",height:"28",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),e("a",{attrs:{href:"https://github.com/edwdzhang/"}},[n._v("Github")])])])},W=[],z=0,J=1,Z=["暂停","继续"],G={name:"page-footer",data:function(){return{state:z,isEnd:!1}},computed:{text:function(){return Z[this.state]}},methods:{togglePause:function(){this.state=this.state===z?J:z,this.$root.$emit("togglePause",this.state)},skip:function(){this.$root.$emit("skip")},end:function(){this.isEnd=!0}}},Y=G,Q=(t("cb16"),Object(_["a"])(Y,N,W,!1,null,"3dcd6b34",null)),X=Q.exports,q={name:"App",components:{StyleText:P,WorkText:V,PageFooter:X},mounted:function(){this.start()},methods:{start:function(){var n=this;return Object(a["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$refs.style.write(0);case 3:return e.next=5,n.$refs.work.write();case 5:return e.next=7,n.$refs.style.write(1);case 7:return n.$refs.work.showWorkBox(),e.next=10,p.a.delay(2e3);case 10:return e.next=12,n.$refs.style.write(2);case 12:n.$refs.footer.end(),e.next=22;break;case 15:if(e.prev=15,e.t0=e["catch"](0),"SKIP IT"!==e.t0.message){e.next=21;break}n.surprisinglyShortAttentionSpan(),e.next=22;break;case 21:throw e.t0;case 22:case"end":return e.stop()}}),e,null,[[0,15]])})))()},surprisinglyShortAttentionSpan:function(){this.$refs.style.writeToEnd(),this.$refs.work.showWorkBox(),this.$refs.footer.end()}}},K=q,nn=(t("e797"),Object(_["a"])(K,o,s,!1,null,null,null)),en=nn.exports;t("202d");r["a"].config.productionTip=!1;var tn=new r["a"]({el:"#app",created:function(){this.paused=!1,this.animationSkipped=!1},render:function(n){return n(en)}}),rn=document.getElementById("style-tag");tn.$on("styleAppend",(function(n){rn.textContent+=n})),tn.$on("styleOverwrite",(function(n){rn.textContent=n})),tn.$on("togglePause",(function(n){this.paused=1===n})),tn.$on("skip",(function(){this.animationSkipped=!0}))},aed5:function(n,e,t){"use strict";t.r(e),e["default"]='\n/**\n * 文本可以做一些适当调整。\n */\n\n.md {\n  font-family: "Helvetica Neue", Helvetica, sans-serif;\n}\n\n.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {\n  display: inline-block;\n  color: #ddd;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n\n.md li {\n  margin: 5px 0;\n  line-height: 1.5;\n}\n\n.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {\n  margin: 0px;\n}\n\n\n/**\n * 还差最后一点就结束了。\n */\n\npre:hover{\n  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);\n}\n\n/**\n * 希望你能喜欢，这个创意是参考国外一个牛人的，\n * 我觉得很有趣，就用 Vue.js 重构了一遍。\n *\n * 如果你觉得我还不错，可以与我联系~\n */\n\n\n'},cb16:function(n,e,t){"use strict";t("f873")},e797:function(n,e,t){"use strict";t("1bec")},f873:function(n,e,t){}});