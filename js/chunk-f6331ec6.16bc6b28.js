(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6331ec6"],{"069f":function(t,e,n){"use strict";var i=n("31d5"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,r="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],d=c||l;d&&(s=function(t){var e,n,s,d,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),c&&(e=u[r]),s=a.call(u,t),c&&s&&(u[r]=u.global?s.index+s[0].length:e),l&&s&&s.length>1&&o.call(s[0],n,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(s[d]=void 0)}),s}),t.exports=s},"0ee1":function(t,e,n){"use strict";var i=n("4d2c"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},2100:function(t,e,n){"use strict";var i=n("eb54")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"26d3":function(t,e,n){var i=n("9724"),a=n("e4a6"),o=n("aee7")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),i(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},"31d5":function(t,e,n){"use strict";var i=n("30b0");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"36dc":function(t,e,n){"use strict";var i=n("4518"),a=n.n(i);a.a},"3efe":function(t,e,n){"use strict";var i=n("df2c"),a=n("929d")(6),o="findIndex",s=!0;o in[]&&Array(1)[o](function(){s=!1}),i(i.P+i.F*s,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("f66a")(o)},"3fed":function(t,e,n){t.exports=n.p+"img/avatar-yin.7cae4253.jpeg"},4518:function(t,e,n){},"48d8":function(t,e,n){"use strict";n("6a63");var i=n("9408"),a=n("1a1b"),o=n("bd6f"),s=n("2ce9"),r=n("aee7"),c=n("069f"),l=r("species"),d=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=r(t),p=!o(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),f=p?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e}):void 0;if(!p||!f||"replace"===t&&!d||"split"===t&&!u){var v=/./[h],m=n(s,h,""[t],function(t,e,n,i,a){return e.exec===c?p&&!a?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),g=m[0],y=m[1];i(String.prototype,t,g),a(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"6a63":function(t,e,n){"use strict";var i=n("069f");n("df2c")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},"8aa7":function(t){t.exports=[{date:"2019/2/3",isDate:!0,isMemorable:!0,content:"年廿九一早和你相亲\n绕小区健步走了N圈\n无视了地上的人民币",location:"华漕",wechat:[{content:"年夜饭吃好了吗",isMine:!0},{content:"吃好啦",isMine:!1},{content:"哈哈哈新年好啊",isMine:!0},{content:"新年好",isMine:!1},{content:"五福都有了吗？",isMine:!0},{content:"对哒٩(๑^o^๑)۶",isMine:!1}]},{date:"2019/2/5",isDate:!0,content:"第一次约你看电影《新喜剧之王》\n你的笑声比电影更有感染力",location:"万达"},{date:"2019/2/9",isDate:!0,content:"新年第二场电影《飞驰人生》\n你说之前166现在又长高了\n以后就当你166吧给我4cm空间",location:"万达",wechat:[{content:"对了，迟到的生日祝福 生日快乐",isMine:!1}]},{date:"2019/2/14",isDate:!0,isMemorable:!0,content:"第一个情人节，第一次去同济\n不让我接你回家，说要付我车费\n我笑了，你还说要记在小本子上",location:"同济",wechat:[{content:"今天谢谢，有生以来第一个不是单身的情人节",isMine:!1},{content:"也谢谢你，今天是第一个有你的情人节",isMine:!0}]},{date:"2019/2/19",isDate:!1,content:"由于媒人的搅合\n你的反应有些“过激”\n多少让我意外、失落"},{date:"2019/2/20",isDate:!1,content:"第一次感受到你的“撒娇”\n也是唯一一次\n以后可以多点",wechat:[{content:"说今天为什么那么晚",isMine:!1},{content:"[我生气了！！哄不好的那种！！！]",isMine:!1},{content:"[眼巴巴]",isMine:!1}]},{date:"2019/2/23",isDate:!0,content:"好久不见\n你压力山大\n吃完饭就走了",location:"同济"},{date:"2019/3/9",isDate:!0,content:"又是好久不见\n第一次接你回家",location:"同济"},{date:"2019/3/14",isDate:!0,isMemorable:!0,content:"白色情人节\n你说预感我会去",location:"同济",wechat:[{content:"白色情人节请不起巧克力，青团还是请得起，你什么时候来我给你买",isMine:!1},{content:"你现在还在忙吗？",isMine:!0},{content:"对，飞起来",isMine:!1},{content:"那我就不去骚扰你了",isMine:!0},{content:"你在家要好好的",isMine:!1},{content:"我第六感太准了，几天没洗头洗澡了赶紧去收拾自己",isMine:!1}]},{date:"2019/3/16",isDate:!0,isMemorable:!0,content:"在篮球场边牵你手\n还被你直击灵魂地一问",location:"同济"},{date:"2019/3/23",isDate:!0,content:"第一次在实验室看电影\n《蜘蛛侠·平行宇宙》\n看完就被你赶走了",location:"同济",wechat:[{content:"果然你每次来我运气都特别好，刚刚又发现了一个有意思的数据",isMine:!1},{content:"哈哈哈 那我要申请以后多来啊",isMine:!0}]},{date:"2019/3/30",isDate:!0,content:"实验室看了会儿电影\n回家后半夜看完",location:"同济"},{date:"2019/4/6",isDate:!0,content:"第一次在杨浦非校园约会\n看了《波西米亚狂想曲》\n就像听了场音乐会",location:"合生汇"},{date:"2019/4/13",isDate:!0,content:"后天要汇报\n吃饭都在想思路\n还准备通宵",location:"同济",wechat:[{content:"到家了早点睡哦(´-ω-`)",isMine:!1},{content:"来自不眠者的祝福",isMine:!1},{content:"尽量在我醒之前睡哦",isMine:!0},{content:"来自老年人的祝福",isMine:!0}]},{date:"2019/4/19",isDate:!0,content:"第一次周五回家\n先斩后奏去接你",location:"同济",wechat:[{content:"在学校等我哦",isMine:!0},{content:"我来接你",isMine:!0},{content:"差不多七点",isMine:!0},{content:"我和我妈说好了，她来接我",isMine:!1},{content:"你别太累了",isMine:!1}]},{date:"2019/4/20",isDate:!0,content:"第一次连着两天见面\n两个月没在江桥约会了\n吃到念了很久的肉蟹煲",location:"万达"}]},"929d":function(t,e,n){var i=n("ed9c"),a=n("6bac"),o=n("cb2e"),s=n("ef77"),r=n("d5fa");t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,d=4==t,u=6==t,h=5==t||u,p=e||r;return function(e,r,f){for(var v,m,g=o(e),y=a(g),M=i(r,f,3),D=s(y.length),b=0,w=n?p(e,D):c?p(e,0):void 0;D>b;b++)if((h||b in y)&&(v=y[b],m=M(v,b,g),t))if(n)w[b]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:w.push(v)}else if(d)return!1;return u?-1:l||d?d:w}}},a0d1:function(t,e,n){"use strict";var i=n("30b0"),a=n("ef77"),o=n("2100"),s=n("0ee1");n("48d8")("match",1,function(t,e,n,r){return[function(n){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=r(n,t,this);if(e.done)return e.value;var c=i(t),l=String(this);if(!c.global)return s(c,l);var d=c.unicode;c.lastIndex=0;var u,h=[],p=0;while(null!==(u=s(c,l))){var f=String(u[0]);h[p]=f,""===f&&(c.lastIndex=o(l,a(c.lastIndex),d)),p++}return 0===p?null:h}]})},be48:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t.isMobile?t._e():i("div",{staticClass:"summary"},[i("img",{attrs:{src:n("f3f5")}}),t._v("\n    莹好可爱\n    "),i("p",[t._v(t._s(t.totalDay)+"days")])]),i("div",{staticClass:"main"},[i("v-touch",{attrs:{tag:"div",enabled:t.isMobile,"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.nextMonth,swiperight:t.prevMonth}},[i("div",{staticClass:"calendar",attrs:{id:"calendar"}},[i("div",{class:["cal-head",{"is-date":t.selectedDate.isDate},{"is-memorable":t.selectedDate.isMemorable}]},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile&&t.isPrevMonthEnabled,expression:"!isMobile && isPrevMonthEnabled"}],staticClass:"iconfont icon-prev",attrs:{title:"上月："+t.prevMonthStr},on:{click:t.prevMonth}}),i("i",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile&&t.isNextMonthEnabled,expression:"!isMobile && isNextMonthEnabled"}],staticClass:"iconfont icon-next",attrs:{title:"下月："+t.nextMonthStr},on:{click:t.nextMonth}}),i("div",{staticClass:"cal-border"}),i("span",[t._v("日")]),i("span",[t._v("一")]),i("span",[t._v("二")]),i("span",[t._v("三")]),i("span",[t._v("四")]),i("span",[t._v("五")]),i("span",[t._v("六")])]),i("div",{staticClass:"cal-body"},t._l(t.dateList,function(e,n){return i("div",{key:n,class:["date-item",{"not-current":"CURRENT_MONTH"!==e.month},{"is-special":e.detail.content},{"is-date":e.detail.isDate},{"is-memorable":e.detail.isMemorable},{"is-chosen":e.detail.date===t.selectedDate.date}]},[i("div",{staticClass:"date-content",on:{click:function(n){return t.selectDate(e)}}},[i("span",{staticClass:"date-num"},[t._v(t._s(e.date))]),e.detail.isDate||e.detail.content?i("div",{class:["memory-wrap",{"memory-wrap-right":n%7>4}]},[i("i",{staticClass:"arrow"}),i("div",{staticClass:"memory-content"},[i("div",{staticClass:"memory-info"},[i("p",[i("i",{staticClass:"iconfont icon-calendar"}),t._v(t._s(t._f("formatTime")(e.timestamp)))]),e.detail.location?i("p",[i("i",{staticClass:"iconfont icon-location"}),t._v(t._s(e.detail.location))]):t._e()]),i("div",{staticClass:"memory-detail",domProps:{innerHTML:t._s(e.detail.content)}})])]):t._e()])])}),0)])]),t.isMobile?i("div",{class:["memory-wrap","memory-wrap-sm",{"is-date":t.selectedDate.isDate},{"is-memorable":t.selectedDate.isMemorable}]},[i("div",{staticClass:"memory-content"},[i("div",{staticClass:"memory-info"},[i("p",[i("i",{staticClass:"iconfont icon-calendar"}),t._v(t._s(t.selectedDate.date))]),t.selectedDate.location?i("p",[i("i",{staticClass:"iconfont icon-location"}),t._v(t._s(t.selectedDate.location))]):t._e()]),i("div",{staticClass:"memory-detail",attrs:{id:"type-memory-detail"}})])]):t._e(),t.selectedDate.wechat?i("div",{staticClass:"wechat"},[i("p",{staticClass:"wechat-date"},[t._v(t._s(t.selectedDate.date))]),t._l(t.selectedDate.wechat,function(e,a){return i("div",{key:a,class:["wechat-item",{"wechat-item-mine":t.isGF^e.isMine}]},[e.isMine?i("img",{staticClass:"wechat-avatar",attrs:{src:n("3fed")}}):i("img",{staticClass:"wechat-avatar",attrs:{src:n("cc89")}}),i("p",{staticClass:"wechat-content"},[i("i",{staticClass:"arrow"}),i("span",[t._v(t._s(e.content))])])])})],2):t._e()],1)])},a=[],o=(n("a0d1"),n("3efe"),n("8aa7"));const s=({strings:t=["Put your strings here...","and Enjoy!"],typeSpeed:e=100,backSpeed:n=50,backDelay:i=500,startDelay:a=500,cursorChar:o="|",placeholder:s=!1,showCursor:r=!0,disableBackTyping:c=!1,onFinished:l=function(){},loop:d=!0})=>({strings:t,typeSpeed:e,backSpeed:n,cursorChar:o,backDelay:i,placeholder:s,startDelay:a,showCursor:r,loop:d,disableBackTyping:c,onFinished:l}),r=(t,e)=>{let n,i,a=0;const o=(t,e)=>{a===n&&e.loop&&(a=0),setTimeout(()=>{r(t[a],e)},e.startDelay)},r=(e,n)=>{let i=0,a=e.length,o=setInterval(()=>{if(n.placeholder?t.placeholder+=e[i]:t.textContent+=e[i],++i===a)return c(o,n)},n.typeSpeed)},c=(t,e)=>{return clearInterval(t),e.disableBackTyping&&a===n-1?e.onFinished():e.loop||a!==n-1?void setTimeout(()=>l(e),e.backDelay):e.onFinished()},l=e=>{let n=e.placeholder?t.placeholder:t.textContent,i=n.length,a=setInterval(()=>{if(e.placeholder?t.placeholder=t.placeholder.substr(0,--i):t.textContent=n.substr(0,--i),0===i)return d(a,e)},e.backSpeed)},d=(t,e)=>{clearInterval(t),++a,o(i,e)},u=(t,e)=>{let n=document.createElement("span");n.classList.add("ityped-cursor"),n.textContent="|",n.textContent=e.cursorChar,t.insertAdjacentElement("afterend",n)},h=e=>{let a=s(e||{}),r=a.strings;i=r,n=r.length,"string"===typeof t&&(t=document.querySelector(t)),a.showCursor&&u(t,a),o(r,a)};return h(e)};var c={name:"loveCalendar",data:function(){return{startDate:"2019/2/3",year:2019,month:2,dateList:[],selectedDate:{},minYear:2019,minMonth:2,maxYear:(new Date).getFullYear(),maxMonth:(new Date).getMonth()+1,typeElement:null,isTyping:!1,isGF:!1}},mounted:function(){window.document.body.style.backgroundColor="#fff",document.title="".concat(this.totalDay," days since ").concat(this.startDate),this.isGF="gf"===this.$route.query.role,this.getDateArray(),this.typeElement=this.isMobile?document.querySelector("#type-memory-detail"):null},methods:{getDateArray:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.year,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.month,n=new Date([t,e,"1"].join("/")),i=12===e?new Date([t+1,1,"1"].join("/")):new Date([t,e+1,"1"].join("/")),a=864e5,o=n.getDay(),s=[],r=0;r<o;r++){var c=new Date(n-a*(r+1)),l=c.getTime(),d=this.getDateInfo(l),u={month:"LAST_MONTH",date:c.getDate(),timestamp:l,detail:d};s.unshift(u)}for(var h=[],p=new Date(i-a).getDate(),f=0;f<p;f++){var v=n.getTime()+a*f,m=new Date(v).getDate(),g=this.getDateInfo(v),y={month:"CURRENT_MONTH",date:m,timestamp:v,detail:g};h.push(y),!this.selectedDate.date&&g.date&&(this.selectedDate=g)}var M=i.getDay(),D=[];if(0!==M)for(var b=0;b<7-M;b++){var w=i.getTime()+a*b,x=new Date(w).getDate(),C=this.getDateInfo(w),_={month:"NEXT_MONTH",date:x,timestamp:w,detail:C};D.push(_)}this.dateList=s.concat(h).concat(D)},getDateInfo:function(t){var e=new Date(t),n="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate()),i=o.findIndex(function(t){return t.date===n});return-1===i?{}:o[i]},selectDate:function(t){t.detail.content&&(this.checkIsTyping()||("NEXT_MONTH"!==t.month?"LAST_MONTH"!==t.month?this.selectedDate=t.detail:this.prevMonth(t.detail):this.nextMonth(t.detail)))},nextMonth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.checkIsTyping()||(this.isNextMonthEnabled?(12===this.month?(this.month=1,this.year+=1):this.month+=1,this.selectedDate=t,this.getDateArray()):this.$toast("以后我们慢慢过日子~"))},prevMonth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.checkIsTyping()||(this.isPrevMonthEnabled?(1===this.month?(this.month=12,this.year-=1):this.month-=1,this.selectedDate=t,this.getDateArray()):this.$toast("以前我们还不认识~"))},checkIsTyping:function(){return!!this.isTyping&&(this.$toast("流水账还没报完呢~"),!0)}},computed:{isMobile:function(){return!!navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)},isPrevMonthEnabled:function(){return this.month!==this.minMonth||this.year!==this.minYear},isNextMonthEnabled:function(){return this.month!==this.maxMonth||this.year!==this.maxYear},totalDay:function(){var t=(new Date).getTime(),e=new Date(this.startDate).getTime();return Math.floor((t-e)/864e5)},nextMonthStr:function(){var t=this.year,e=this.month;return 12===e?(e=1,t+=1):e+=1,"".concat(t,"/").concat(e)},prevMonthStr:function(){var t=this.year,e=this.month;return 1===e?(e=12,t-=1):e-=1,"".concat(t,"/").concat(e)}},destroyed:function(){window.document.body.style.backgroundColor=this.bgColor},watch:{selectedDate:function(t){var e=this;this.isMobile&&t.content&&(this.typeElement.innerHTML="",this.isTyping=!0,r(this.typeElement,{typeSpeed:150,startDelay:0,showCursor:!1,strings:[t.content],loop:!1,onFinished:function(){e.isTyping=!1}}))}}},l=c,d=(n("36dc"),n("305e")),u=Object(d["a"])(l,i,a,!1,null,"11dd1d65",null);e["default"]=u.exports},cc89:function(t,e,n){t.exports=n.p+"img/avatar-ying.c7d1c45b.jpeg"},d5fa:function(t,e,n){var i=n("26d3");t.exports=function(t,e){return new(i(t))(e)}},e4a6:function(t,e,n){var i=n("120b");t.exports=Array.isArray||function(t){return"Array"==i(t)}},eb54:function(t,e,n){var i=n("bae5"),a=n("2ce9");t.exports=function(t){return function(e,n){var o,s,r=String(a(e)),c=i(n),l=r.length;return c<0||c>=l?t?"":void 0:(o=r.charCodeAt(c),o<55296||o>56319||c+1===l||(s=r.charCodeAt(c+1))<56320||s>57343?t?r.charAt(c):o:t?r.slice(c,c+2):s-56320+(o-55296<<10)+65536)}}},f3f5:function(t,e,n){t.exports=n.p+"img/ying.8fc42737.jpg"}}]);