webpackJsonp([6],{251:function(t,e,n){n(766);var a=n(1)(n(473),n(817),null,null);a.options.__file="C:\\Users\\kk\\Desktop\\ims.com\\src\\views\\my-components\\count-to\\count-to.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] count-to.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},336:function(t,e,n){var a,o;!function(s,i){a=i,void 0!==(o="function"==typeof a?a.call(e,n,e,t):a)&&(t.exports=o)}(0,function(t,e,n){return function(t,e,n,a,o,s){for(var i=0,l=["webkit","moz","ms","o"],r=0;r<l.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[l[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[r]+"CancelAnimationFrame"]||window[l[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-i)),o=window.setTimeout(function(){t(n+a)},a);return i=n+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var c in s)s.hasOwnProperty(c)&&(u.options[c]=s[c]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof t?document.getElementById(t):t,u.startVal=Number(e),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,a||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(o)||2e3,u.formatNumber=function(t){t=t.toFixed(u.decimals),t+="";var e,n,a,o;if(e=t.split("."),n=e[0],a=e.length>1?u.options.decimal+e[1]:"",o=/(\d+)(\d{3})/,u.options.useGrouping)for(;o.test(n);)n=n.replace(o,"$1"+u.options.separator+"$2");return u.options.prefix+n+a+u.options.suffix},u.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(t){var e=u.formattingFn(t);"INPUT"===u.d.tagName?this.d.value=e:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=e:this.d.innerHTML=e},u.count=function(t){u.startTime||(u.startTime=t),u.timestamp=t;var e=t-u.startTime;u.remaining=u.duration-e,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(e,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(e,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(e/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(e/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),e<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(t){return u.callback=t,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=e,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(t){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(t),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)}})},472:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(336),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"CountTo",data:function(){return{counter:{},unitText:"",countId:"count"+parseInt(1e6*Math.random())}},props:{mainClass:String,countClass:String,mainStyle:{type:Object,default:function(){return{fontSize:"16px",fontWeight:500,color:"gray"}}},countStyle:Object,initCount:{type:Number,default:0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},simplify:{type:Boolean,default:!1},duration:{type:Number,default:2},delay:{type:Number,default:200},uneasing:{type:Boolean,default:!1},ungroup:{type:Boolean,default:!1},separator:{type:String,default:","},decimals:{type:Number,default:0},decimal:{type:String,default:"."},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}}},methods:{transformValue:function(t){var e=0,n="",a=this.unit.length;if(t<Math.pow(10,this.unit[0][0]))e=t;else for(var o=1;o<a;o++)t>=Math.pow(10,this.unit[o-1][0])&&t<Math.pow(10,this.unit[o][0])&&(e=parseInt(t/Math.pow(10,this.unit[o-1][0])),n=this.unit[o-1][1]);return t>Math.pow(10,this.unit[a-1][0])&&(e=parseInt(t/Math.pow(10,this.unit[a-1][0])),n=this.unit[a-1][1]),{val:e,unit:n}}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var e=0,n={};t.simplify?(n=t.transformValue(t.endVal),e=n.val,t.unitText=n.unit):e=t.endVal;var a={};t.counter=a=new o.default(t.countId,t.startVal,e,t.decimals,t.duration,{useEasing:!t.uneasing,useGrouping:!t.ungroup,separator:t.separator,decimal:t.decimal}),a.error||a.start()},t.delay)})},watch:{endVal:function(t){var e=0;if(this.simplify){var n=this.transformValue(this.endVal);e=n.val,this.unitText=n.unit}else e=this.endVal;this.counter.update(e)}}}},473:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(811),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"count-to",components:{CountTo:o.default},data:function(){return{endVal:0,mainStyle:{fontSize:"30px"},countStyle:{fontSize:"50px",color:"#dc9387"},mainStyle2:{fontSize:"22px"},countStyle2:{fontSize:"30px",color:"#dc9387"},unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval(function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())},2e3)}},mounted:function(){this.init()}}},766:function(t,e){},811:function(t,e,n){var a=n(1)(n(472),n(847),null,null);a.options.__file="C:\\Users\\kk\\Desktop\\ims.com\\src\\views\\my-components\\count-to\\CountTo.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] CountTo.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},817:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"3"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"waterdrop"}}),t._v("\n                    CountTo组件基础用法\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{endVal:2534}})],1)])],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"5"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"code"}}),t._v("\n                    可添加左右文字\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{endVal:2534}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),n("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"paintbucket"}}),t._v("\n                    自定义样式\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),n("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"settings"}}),t._v("\n                    设置数据格式\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle,decimals:2}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),n("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-color-wand"}}),t._v("\n                    转换单位简化数据\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{simplify:!0,endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),n("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-shuffle-strong"}}),t._v("\n                    自定义单位\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:253,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：253 => ")])]),t._v(" "),n("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:2534,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：2534 => ")])]),t._v(" "),n("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:257678,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：257678 => ")])])],1)])],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"android-stopwatch"}}),t._v("\n                    可异步更新数据\n                ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{endVal:t.asynEndVal,mainStyle:t.mainStyle,countStyle:t.countStyle}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),n("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                综合实例\n            ")],1),t._v(" "),n("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{staticClass:"count-to-con"},[n("CountTo",{attrs:{delay:500,simplify:!0,unit:t.unit2,endVal:t.integratedEndVal,mainStyle:t.mainStyle,countStyle:t.countStyle}},[n("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据: "+t._s(t.integratedEndVal)+" => ")]),t._v(" "),n("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},847:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{class:t.mainClass,style:t.mainStyle},[t._t("leftText"),t._v(" "),n("span",{class:t.countClass,style:t.countStyle},[n("span",{attrs:{id:t.countId}},[t._v(t._s(t.initCount))]),n("span",[t._v(t._s(t.unitText))])]),t._v(" "),t._t("rightText")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}});