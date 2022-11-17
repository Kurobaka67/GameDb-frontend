(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8c7ace0"],{"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:f,h:a,m:s,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},O="en",b={};b[O]=$;var j=function(t){return t instanceof D},y=function t(e,n,i){var r;if(!e)return O;if("string"==typeof e){var s=e.toLowerCase();b[s]&&(r=s),n&&(b[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,r=o}return!i&&r&&(O=r),r||!i&&O},M=function(t,e){if(j(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=g;w.l=y,w.i=j,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function $(t){this.$L=y(t.locale,null,!0),this.parse(t)}var v=$.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,i=!!w.u(e)||e,l=w.p(t),h=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,$=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return i?h(1,0):h(31,11);case c:return i?h(1,$):h(0,$+1);case u:var O=this.$locale().weekStart||0,b=(p<O?p+7:p)-O;return h(i?v-b:v+(6-b),$);case o:case f:return m(g+"Hours",0);case a:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case r:return m(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,u=w.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[o]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var p=this.clone().set(f,1);p.$d[h](m),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(i,l){var f,h=this;i=Number(i);var m=w.p(l),p=function(t){var e=M(h);return w.w(e.date(e.date()+Math.round(t*i)),h)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return p(1);if(m===u)return p(7);var $=(f={},f[s]=e,f[a]=n,f[r]=t,f)[m]||1,v=this.$d.getTime()+i*$;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return w.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:w.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||m[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,f,h){var m,p=w.p(f),$=M(i),v=($.utcOffset()-this.utcOffset())*e,g=this-$,O=w.m(this,$);return O=(m={},m[d]=O/12,m[c]=O,m[l]=O/3,m[u]=(g-v)/6048e5,m[o]=(g-v)/864e5,m[a]=g/n,m[s]=g/e,m[r]=g/t,m)[p]||g,h?O:w.a(O)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return b[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=y(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},$}(),S=D.prototype;return M.prototype=S,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",f]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=y,M.isDayjs=j,M.unix=function(t){return M(1e3*t)},M.en=b[O],M.Ls=b,M.p={},M}))},6220:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a");var i=n("7a23"),r={class:"grid"},s={class:"col-12"},a={class:"card"},o={class:"grid formgrid"},u={class:"col-12"},c={class:"col-12 lg:col-4"},l=["src"],d={class:"col-12 lg:col-8"},f={class:"field grid"},h=Object(i["j"])("label",{for:"name",class:"col-fixed",style:{width:"100px"}},"Name : ",-1),m={class:"field grid"},p=Object(i["j"])("label",{for:"urlImage",class:"col-fixed",style:{width:"100px"}},"Url image : ",-1),$={class:"field grid"},v=Object(i["j"])("label",{for:"release",class:"col-fixed",style:{width:"100px"}},"Release : ",-1),g={class:"field grid"},O=Object(i["j"])("label",{for:"description",class:"col-fixed",style:{width:"100px"}},"Description : ",-1),b={class:"col-3 lg:col-11 text-right"},j=Object(i["l"])("Save"),y={class:"col-3 lg:col-1"},M=Object(i["l"])("Cancel");function w(t,e,n,w,D,S){var x=Object(i["G"])("ConfirmPopup"),Y=Object(i["G"])("InputText"),_=Object(i["G"])("Calendar"),I=Object(i["G"])("Textarea"),C=Object(i["G"])("Button");return Object(i["y"])(),Object(i["i"])("div",r,[Object(i["m"])(x),Object(i["j"])("div",s,[Object(i["j"])("div",a,[Object(i["j"])("div",o,[Object(i["j"])("h5",u,Object(i["K"])(D.name),1),Object(i["j"])("div",c,[Object(i["j"])("img",{src:t.getImage(D.urlImage),width:"300"},null,8,l)]),Object(i["j"])("div",d,[Object(i["j"])("div",f,[h,Object(i["m"])(Y,{class:"w-11 lg:w-8",type:"text",modelValue:D.name,"onUpdate:modelValue":e[0]||(e[0]=function(t){return D.name=t})},null,8,["modelValue"])]),Object(i["j"])("div",m,[p,Object(i["m"])(Y,{class:"w-11 lg:w-8",type:"text",modelValue:D.urlImage,"onUpdate:modelValue":e[1]||(e[1]=function(t){return D.urlImage=t})},null,8,["modelValue"])]),Object(i["j"])("div",$,[v,Object(i["m"])(_,{modelValue:D.release,"onUpdate:modelValue":e[2]||(e[2]=function(t){return D.release=t}),dateFormat:"yy-mm-dd"},null,8,["modelValue"])]),Object(i["j"])("div",g,[O,Object(i["m"])(I,{modelValue:D.description,"onUpdate:modelValue":e[3]||(e[3]=function(t){return D.description=t}),autoResize:!0,rows:"10",cols:"80"},null,8,["modelValue"])])]),Object(i["j"])("div",b,[Object(i["m"])(C,{class:"p-button-sm",onClick:S.save},{default:Object(i["Q"])((function(){return[j]})),_:1},8,["onClick"])]),Object(i["j"])("div",y,[Object(i["m"])(C,{class:"p-button-sm",onClick:S.cancel},{default:Object(i["Q"])((function(){return[M]})),_:1},8,["onClick"])])])])])])}var D=n("5a0c"),S=n.n(D),x=n("ac41"),Y={props:["id"],mixins:[x["a"]],platformService:null,data:function(){return{platform:null,urlImage:null,description:null,name:null,release:null}},created:function(){this.platformService=this.servicesFactory.getPlatformsService()},mounted:function(){var t=this;this.platformService.getPlatformById(this.id).then((function(e){var n,i,r,s;t.platform=e,t.urlImage=null===(n=t.platform)||void 0===n?void 0:n.image,t.description=null===(i=t.platform)||void 0===i?void 0:i.description,t.name=null===(r=t.platform)||void 0===r?void 0:r.name,t.release=null===(s=t.platform)||void 0===s?void 0:s.date}))},computed:{ratingColor:function(){return this.rating>50?"green":"orange"}},methods:{save:function(){this.platform.description=this.description,this.platform.image=this.urlImage,this.platform.name=this.name,this.platform.date=S()(this.release).format("YYYY-MM-DD"),this.platformService.savePlatform(this.platform),this.$router.push("/platformdetail/".concat(this.id))},cancel:function(){this.$router.push("/platformdetail/".concat(this.id))}},beforeRouteLeave:function(t,e,n){if(this.platform.description!=this.description||this.platform.image!=this.urlImage||this.platform.name!=this.name||this.platform.date!=S()(null===this||void 0===this?void 0:this.release).format("YYYY-MM-DD")){var i=window.confirm("Do you really want to leave? you have unsaved changes!");i?n():n(!1)}else n()}},_=n("6b0d"),I=n.n(_);const C=I()(Y,[["render",w]]);e["default"]=C},ac41:function(t,e,n){"use strict";var i="images/unknown.jfif";e["a"]={methods:{getImage:function(t){return t||i}}}}}]);
//# sourceMappingURL=chunk-c8c7ace0.ff1f3f95.js.map