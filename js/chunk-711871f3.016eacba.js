(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711871f3"],{"02f4":function(t,e,n){var i=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var s,o,r=String(a(e)),c=i(n),l=r.length;return c<0||c>=l?t?"":void 0:(s=r.charCodeAt(c),s<55296||s>56319||c+1===l||(o=r.charCodeAt(c+1))<56320||o>57343?t?r.charAt(c):s:t?r.slice(c,c+2):o-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0a49":function(t,e,n){var i=n("9b43"),a=n("626a"),s=n("4bf8"),o=n("9def"),r=n("cd1c");t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,d=6==t,h=5==t||d,f=e||r;return function(e,r,p){for(var v,m,g=s(e),y=a(g),M=i(r,p,3),b=o(y.length),D=0,x=n?f(e,b):c?f(e,0):void 0;b>D;D++)if((h||D in y)&&(v=y[D],m=M(v,D,g),t))if(n)x[D]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return D;case 2:x.push(v)}else if(u)return!1;return d?-1:l||u?u:x}}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var i=n("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"20d6":function(t,e,n){"use strict";var i=n("5ca1"),a=n("0a49")(6),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(s)},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),a=n("32e9"),s=n("79e5"),o=n("be13"),r=n("2b4c"),c=n("520a"),l=r("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=r(t),f=!s((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),p=f?!s((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e})):void 0;if(!f||!p||"replace"===t&&!u||"split"===t&&!d){var v=/./[h],m=n(o,h,""[t],(function(t,e,n,i,a){return e.exec===c?f&&!a?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}})),g=m[0],y=m[1];i(String.prototype,t,g),a(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),s=n("ebd6"),o=n("0390"),r=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,h=[].push,f="split",p="length",v="lastIndex",m=4294967295,g=!u((function(){RegExp(m,"y")}));n("214f")("split",2,(function(t,e,n,u){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var s,o,r,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?m:e>>>0,g=new RegExp(t.source,u+"g");while(s=l.call(g,a)){if(o=g[v],o>d&&(c.push(a.slice(d,s.index)),s[p]>1&&s.index<a[p]&&h.apply(c,s.slice(1)),r=s[0][p],d=o,c[p]>=f))break;g[v]===s.index&&g[v]++}return d===a[p]?!r&&g.test("")||c.push(""):c.push(a.slice(d)),c[p]>f?c.slice(0,f):c}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,a,i):y.call(String(a),n,i)},function(t,e){var i=u(y,t,this,e,y!==n);if(i.done)return i.value;var l=a(t),h=String(this),f=s(l,RegExp),p=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),M=new f(g?l:"^(?:"+l.source+")",v),b=void 0===e?m:e>>>0;if(0===b)return[];if(0===h.length)return null===c(M,h)?[h]:[];var D=0,x=0,w=[];while(x<h.length){M.lastIndex=g?x:0;var C,_=c(M,g?h:h.slice(x));if(null===_||(C=d(r(M.lastIndex+(g?0:x)),h.length))===D)x=o(h,x,p);else{if(w.push(h.slice(D,x)),w.length===b)return w;for(var E=1;E<=_.length-1;E++)if(w.push(_[E]),w.length===b)return w;x=D=C}}return w.push(h.slice(D)),w}]}))},"3ce7":function(t,e,n){t.exports=n.p+"img/love.2a048b43.jpg"},"3fed":function(t,e,n){t.exports=n.p+"img/avatar-yin.7cae4253.jpeg"},4515:function(t,e,n){t.exports=n.p+"img/love-avatar.072f2b7a.jpg"},4917:function(t,e,n){"use strict";var i=n("cb7c"),a=n("9def"),s=n("0390"),o=n("5f1b");n("214f")("match",1,(function(t,e,n,r){return[function(n){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=r(n,t,this);if(e.done)return e.value;var c=i(t),l=String(this);if(!c.global)return o(c,l);var u=c.unicode;c.lastIndex=0;var d,h=[],f=0;while(null!==(d=o(c,l))){var p=String(d[0]);h[f]=p,""===p&&(c.lastIndex=s(l,a(c.lastIndex),u)),f++}return 0===f?null:h}]}))},"520a":function(t,e,n){"use strict";var i=n("0bfb"),a=RegExp.prototype.exec,s=String.prototype.replace,o=a,r="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(o=function(t){var e,n,o,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),c&&(e=d[r]),o=a.call(d,t),c&&o&&(d[r]=d.global?o.index+o[0].length:e),l&&o&&o.length>1&&s.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"836c":function(t,e,n){"use strict";var i=n("b7c2"),a=n.n(i);a.a},"8aa7":function(t){t.exports=JSON.parse('[{"date":"2020/6/26","isDate":true,"isMemorable":false,"content":"端午假期\\n与你遇见","location":"封浜","wechat":[{"content":"我是黄洁","isMine":false},{"content":"印韩春","isMine":true}]},{"date":"2020/6/29","isDate":true,"isMemorable":true,"content":"临时约你\\n第一次一起吃饭","location":"虹桥天地","wechat":[{"content":"我死了","isMine":false},{"content":"小弱鸡","isMine":true},{"content":"你才是猪猪","isMine":false},{"content":"捧在手心里的掌上明猪","isMine":true}]},{"date":"2020/7/1","isDate":true,"isMemorable":false,"content":"约你散步\\n被你气得对“闺蜜”过敏","location":"封浜","wechat":[{"content":"想（和）你（荡马路）了","isMine":true},{"content":"你这个人","isMine":false},{"content":"怎么套路很多的","isMine":false},{"content":"套路都是学的 心是真的","isMine":true}]},{"date":"2020/7/4","isDate":true,"isMemorable":false,"content":"马路是越荡越“气”哦","location":"封浜","wechat":[{"content":"不能摸鱼不能叫我宝宝","isMine":false},{"content":"太苦了","isMine":false},{"content":"太苦了","isMine":true}]},{"date":"2020/7/7","isDate":true,"isMemorable":true,"content":"小土鳖带着臭宝宝进城\\n第一次牵宝宝的手","location":"虹泉路","wechat":[{"content":"我真的载你手里了","isMine":false},{"content":"踏马的","isMine":false},{"content":"烦死我了","isMine":false},{"content":"那就载呀","isMine":true},{"content":"以后回首 载得值得","isMine":true}]},{"date":"2020/7/8","isDate":true,"isMemorable":false,"content":"出来吃披萨\\n哄臭宝宝的晚上","location":"华泰","wechat":[{"content":"不但好听 也太他妈可爱了吧","isMine":true},{"content":"小兔崽子","isMine":false},{"content":"戳爆屏幕","isMine":true},{"content":"是啊老娘这么可爱","isMine":false},{"content":"怎么能让你这头猪拱了","isMine":false}]},{"date":"2020/7/10","isDate":true,"isMemorable":true,"content":"和张健夫妇一起吃饭\\n故意不理我的白天\\n第一次亲了你\\n你也坐我腿上亲我，耳语说喜欢","location":"江桥老街"},{"date":"2020/7/11","isDate":true,"isMemorable":false,"content":"去大华接打桌球的你\\n喜欢抱着你这个小冰箱","location":"封浜","wechat":[{"content":"为什么亲亲要伸舌头","isMine":false},{"content":"我去知乎下？","isMine":true},{"content":"亲亲就亲亲","isMine":false},{"content":"我还喜欢咬你的小舌头","isMine":true},{"content":"怎么还伸舌头","isMine":false},{"content":"莫名其妙","isMine":false}]},{"date":"2020/7/12","isDate":false,"isMemorable":false,"content":"第一次和你打了很久的电话\\n但最终还是搞我的一个夜晚"},{"date":"2020/7/13","isDate":true,"isMemorable":true,"content":"给我发了“临时”男友证\\n还给我唱了live，惊为天人！","location":"南翔唱吧","wechat":[{"content":"你","isMine":false},{"content":"踏马","isMine":false},{"content":"是个","isMine":false},{"content":"磨人的","isMine":false},{"content":"橘子皮","isMine":false},{"content":"你","isMine":true},{"content":"踏马","isMine":true},{"content":"是个","isMine":true},{"content":"勾人的","isMine":true},{"content":"臭妹妹","isMine":true}]}]')},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},b024:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("audio",{attrs:{id:"audio",autoplay:"autoplay",src:"http://qd8fjjvkt.bkt.clouddn.com/The%20climb.m4a"}}),t.isMobile?t._e():i("div",{staticClass:"summary"},[i("img",{attrs:{src:n("3ce7")}}),t._v("\n    臭可爱\n    "),i("p",[t._v(t._s(t.totalDay)+"days")])]),i("div",{staticClass:"main"},[i("v-touch",{attrs:{tag:"div",enabled:t.isMobile,"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.nextMonth,swiperight:t.prevMonth}},[i("div",{staticClass:"calendar",attrs:{id:"calendar"}},[i("div",{class:["cal-head",{"is-date":t.selectedDate.isDate},{"is-memorable":t.selectedDate.isMemorable}]},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile&&t.isPrevMonthEnabled,expression:"!isMobile && isPrevMonthEnabled"}],staticClass:"iconfont icon-prev",attrs:{title:"上月："+t.prevMonthStr},on:{click:t.prevMonth}}),i("i",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile&&t.isNextMonthEnabled,expression:"!isMobile && isNextMonthEnabled"}],staticClass:"iconfont icon-next",attrs:{title:"下月："+t.nextMonthStr},on:{click:t.nextMonth}}),i("div",{staticClass:"cal-border"}),i("span",[t._v("日")]),i("span",[t._v("一")]),i("span",[t._v("二")]),i("span",[t._v("三")]),i("span",[t._v("四")]),i("span",[t._v("五")]),i("span",[t._v("六")])]),i("div",{staticClass:"cal-body"},t._l(t.dateList,(function(e,n){return i("div",{key:n,class:["date-item",{"not-current":"CURRENT_MONTH"!==e.month},{"is-special":e.detail.content},{"is-date":e.detail.isDate},{"is-memorable":e.detail.isMemorable},{"is-chosen":e.detail.date===t.selectedDate.date}]},[i("div",{staticClass:"date-content",on:{click:function(n){return t.selectDate(e)}}},[i("span",{staticClass:"date-num"},[t._v(t._s(e.date))]),e.detail.isDate||e.detail.content?i("div",{class:["memory-wrap",{"memory-wrap-right":n%7>4}]},[i("i",{staticClass:"arrow"}),i("div",{staticClass:"memory-content"},[i("div",{staticClass:"memory-info"},[i("p",[i("i",{staticClass:"iconfont icon-calendar"}),t._v(t._s(t._f("formatTime")(e.timestamp)))]),e.detail.location?i("p",[i("i",{staticClass:"iconfont icon-location"}),t._v(t._s(e.detail.location))]):t._e()]),i("div",{staticClass:"memory-detail",domProps:{innerHTML:t._s(e.detail.content)}})])]):t._e()])])})),0)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isMobile&&t.selectedDate.content,expression:"isMobile && selectedDate.content"}],class:["memory-wrap","memory-wrap-sm",{"is-date":t.selectedDate.isDate},{"is-memorable":t.selectedDate.isMemorable}]},[i("div",{staticClass:"memory-content"},[i("div",{staticClass:"memory-info"},[i("p",[i("i",{staticClass:"iconfont icon-calendar"}),t._v(t._s(t.selectedDate.date))]),t.selectedDate.location?i("p",[i("i",{staticClass:"iconfont icon-location"}),t._v(t._s(t.selectedDate.location))]):t._e()]),i("div",{staticClass:"memory-detail",attrs:{id:"type-memory-detail"}})])]),t.selectedDate.wechat?i("div",{staticClass:"wechat"},[i("p",{staticClass:"wechat-date"},[t._v(t._s(t.selectedDate.date))]),t._l(t.selectedDate.wechat,(function(e,a){return i("div",{key:a,class:["wechat-item",{"wechat-item-mine":t.isGF^e.isMine}]},[e.isMine?i("img",{staticClass:"wechat-avatar",attrs:{src:n("3fed")}}):i("img",{staticClass:"wechat-avatar",attrs:{src:n("4515")}}),i("p",{staticClass:"wechat-content"},[i("i",{staticClass:"arrow"}),i("span",[t._v(t._s(e.content))])])])}))],2):t._e()],1)])},a=[],s=(n("4917"),n("20d6"),n("28a5"),n("8aa7"));const o=({strings:t=["Put your strings here...","and Enjoy!"],typeSpeed:e=100,backSpeed:n=50,backDelay:i=500,startDelay:a=500,cursorChar:s="|",placeholder:o=!1,showCursor:r=!0,disableBackTyping:c=!1,onFinished:l=function(){},loop:u=!0})=>({strings:t,typeSpeed:e,backSpeed:n,cursorChar:s,backDelay:i,placeholder:o,startDelay:a,showCursor:r,loop:u,disableBackTyping:c,onFinished:l}),r=(t,e)=>{let n,i,a=0;const s=(t,e)=>{a===n&&e.loop&&(a=0),setTimeout(()=>{r(t[a],e)},e.startDelay)},r=(e,n)=>{let i=0,a=e.length,s=setInterval(()=>{if(n.placeholder?t.placeholder+=e[i]:t.textContent+=e[i],++i===a)return c(s,n)},n.typeSpeed)},c=(t,e)=>(clearInterval(t),e.disableBackTyping&&a===n-1?e.onFinished():e.loop||a!==n-1?void setTimeout(()=>l(e),e.backDelay):e.onFinished()),l=e=>{let n=e.placeholder?t.placeholder:t.textContent,i=n.length,a=setInterval(()=>{if(e.placeholder?t.placeholder=t.placeholder.substr(0,--i):t.textContent=n.substr(0,--i),0===i)return u(a,e)},e.backSpeed)},u=(t,e)=>{clearInterval(t),++a,s(i,e)},d=(t,e)=>{let n=document.createElement("span");n.classList.add("ityped-cursor"),n.textContent="|",n.textContent=e.cursorChar,t.insertAdjacentElement("afterend",n)},h=e=>{let a=o(e||{}),r=a.strings;i=r,n=r.length,"string"===typeof t&&(t=document.querySelector(t)),a.showCursor&&d(t,a),s(r,a)};return h(e)};var c={name:"loveCalendar",data:function(){return{startDate:"",year:"",month:"",dateList:[],selectedDate:{},minYear:"",minMonth:"",maxYear:(new Date).getFullYear(),maxMonth:(new Date).getMonth()+1,typeElement:null,isTyping:!1,isGF:!1}},mounted:function(){this.initDate(),window.document.body.style.backgroundColor="#fff",document.title="".concat(this.totalDay," days since ").concat(this.startDate),this.isGF="gf"===this.$route.query.role,this.getDateArray(),this.typeElement=this.isMobile?document.querySelector("#type-memory-detail"):null,this.isGF?_hmt.push(["_trackEvent","she","visited"]):_hmt.push(["_trackEvent","other","visited"])},methods:{initDate:function(){this.startDate=s[0].date,this.year=this.minYear=parseInt(this.startDate.split("/")[0]),this.month=this.minMonth=parseInt(this.startDate.split("/")[1])},getDateArray:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.year,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.month,n=new Date([t,e,"1"].join("/")),i=12===e?new Date([t+1,1,"1"].join("/")):new Date([t,e+1,"1"].join("/")),a=864e5,s=n.getDay(),o=[],r=0;r<s;r++){var c=new Date(n-a*(r+1)),l=c.getTime(),u=this.getDateInfo(l),d={month:"LAST_MONTH",date:c.getDate(),timestamp:l,detail:u};o.unshift(d)}for(var h=[],f=new Date(i-a).getDate(),p=0;p<f;p++){var v=n.getTime()+a*p,m=new Date(v).getDate(),g=this.getDateInfo(v),y={month:"CURRENT_MONTH",date:m,timestamp:v,detail:g};h.push(y),!this.selectedDate.date&&g.date&&(this.selectedDate=g)}var M=i.getDay(),b=[];if(0!==M)for(var D=0;D<7-M;D++){var x=i.getTime()+a*D,w=new Date(x).getDate(),C=this.getDateInfo(x),_={month:"NEXT_MONTH",date:w,timestamp:x,detail:C};b.push(_)}this.dateList=o.concat(h).concat(b)},getDateInfo:function(t){var e=new Date(t),n="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate()),i=s.findIndex((function(t){return t.date===n}));return-1===i?{}:s[i]},selectDate:function(t){t.detail.content&&(this.checkIsTyping()||("NEXT_MONTH"!==t.month?"LAST_MONTH"!==t.month?this.selectedDate=t.detail:this.prevMonth(t.detail):this.nextMonth(t.detail)))},nextMonth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.checkIsTyping()||(this.isNextMonthEnabled?(12===this.month?(this.month=1,this.year+=1):this.month+=1,this.selectedDate=t,this.getDateArray()):this.$toast("以后我们慢慢过日子~"))},prevMonth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.checkIsTyping()||(this.isPrevMonthEnabled?(1===this.month?(this.month=12,this.year-=1):this.month-=1,this.selectedDate=t,this.getDateArray()):this.$toast("以前我们还不认识~"))},checkIsTyping:function(){return!!this.isTyping&&(this.$toast("流水账还没报完呢~"),!0)}},computed:{isMobile:function(){return!!navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)},isPrevMonthEnabled:function(){return this.month!==this.minMonth||this.year!==this.minYear},isNextMonthEnabled:function(){return this.month!==this.maxMonth||this.year!==this.maxYear},totalDay:function(){var t=(new Date).getTime(),e=new Date(this.startDate).getTime();return Math.floor((t-e)/864e5)+1},nextMonthStr:function(){var t=this.year,e=this.month;return 12===e?(e=1,t+=1):e+=1,"".concat(t,"/").concat(e)},prevMonthStr:function(){var t=this.year,e=this.month;return 1===e?(e=12,t-=1):e-=1,"".concat(t,"/").concat(e)}},destroyed:function(){window.document.body.style.backgroundColor=this.bgColor},watch:{selectedDate:function(t){var e=this;this.isMobile&&t.content&&(this.typeElement.innerHTML="",this.isTyping=!0,r(this.typeElement,{typeSpeed:150,startDelay:0,showCursor:!1,strings:[t.content],loop:!1,onFinished:function(){e.isTyping=!1}}))}}},l=c,u=(n("836c"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"a0c9831a",null);e["default"]=d.exports},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b7c2:function(t,e,n){},cd1c:function(t,e,n){var i=n("e853");t.exports=function(t,e){return new(i(t))(e)}},e853:function(t,e,n){var i=n("d3f4"),a=n("1169"),s=n("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}}}]);