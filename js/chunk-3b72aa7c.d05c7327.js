(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b72aa7c"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2113:function(t,e,r){"use strict";r("b0c0");var a=r("7a23"),n={class:"flex align-items-center justify-content-between"},o={class:"flex align-items-center",style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},c={class:"font-semibold"},l={class:"text-center"},i=["src","alt"];function s(t,e,r,s,u,d){var f;return Object(a["y"])(),Object(a["i"])("div",{class:"card m-3 border-1 surface-border",onClick:e[0]||(e[0]=function(t){return d.gotodetail(r.platform.data.id)})},[Object(a["j"])("div",n,[Object(a["j"])("div",o,[Object(a["j"])("p",c,Object(a["K"])(r.platform.data.name),1)])]),Object(a["j"])("div",l,[Object(a["j"])("img",{src:t.getImage(null===(f=r.platform.data)||void 0===f?void 0:f.image),alt:r.platform.data.title,width:"200",height:"140",style:{"object-fit":"scale-down"}},null,8,i)])])}var u=r("ac41"),d={props:["platform"],mixins:[u["a"]],data:function(){return{}},methods:{gotodetail:function(t){this.$router.push("/platformdetail/".concat(t))}}},f=r("6b0d"),j=r.n(f);const m=j()(d,[["render",s]]);e["a"]=m},"66b6":function(t,e,r){"use strict";r.r(e);r("b0c0");var a=r("7a23"),n={class:"grid"},o={class:"col-12"},c={class:"card"},l=Object(a["j"])("h5",null,"Games",-1),i={class:"grid grid-nogutter"},s={class:"col-6 text-center"},u={class:"col-5 text-right"},d={class:"p-input-icon-left"},f=Object(a["j"])("i",{class:"pi pi-search"},null,-1),j={class:"col-1 text-right"},m={class:"p-input-icon-left"},p=Object(a["j"])("i",{class:"pi pi-plus"},null,-1),v={class:"col-12"},b=["onClick"],h={class:"flex-1 text-center md:text-left"},O={class:"font-bold text-2xl"},g={class:"col-12 md:col-4"};function x(t,e,r,x,w,y){var S=Object(a["G"])("DataViewLayoutOptions"),V=Object(a["G"])("InputText"),C=Object(a["G"])("Button"),P=Object(a["G"])("PlatformCard"),k=Object(a["G"])("DataView");return Object(a["y"])(),Object(a["i"])("div",n,[Object(a["j"])("div",o,[Object(a["j"])("div",c,[l,Object(a["m"])(k,{value:w.dataviewValue,layout:w.layout,paginator:!0,rows:9,lazy:!0,onPage:e[2]||(e[2]=function(t){return y.onPage(t)}),totalRecords:w.platformscount,sortOrder:w.sortOrder,sortField:w.sortField},{header:Object(a["Q"])((function(){return[Object(a["j"])("div",i,[Object(a["j"])("div",s,[Object(a["m"])(S,{modelValue:w.layout,"onUpdate:modelValue":e[0]||(e[0]=function(t){return w.layout=t})},null,8,["modelValue"])]),Object(a["j"])("div",u,[Object(a["j"])("span",d,[f,Object(a["m"])(V,{type:"text",modelValue:w.textSearch,"onUpdate:modelValue":e[1]||(e[1]=function(t){return w.textSearch=t}),placeholder:"Search"},null,8,["modelValue"])])]),Object(a["j"])("div",j,[Object(a["j"])("span",m,["User"==y.getCurrentUserRole()||!y.getCurrentUserRole()||"local"!=y.getType()&&"my api"!=y.getType()?Object(a["h"])("",!0):(Object(a["y"])(),Object(a["g"])(C,{key:0,class:"p-button-sm",onClick:y.addplatform},{default:Object(a["Q"])((function(){return[p]})),_:1},8,["onClick"]))])])])]})),list:Object(a["Q"])((function(e){return[Object(a["j"])("div",v,[Object(a["j"])("div",{class:"flex flex-column md:flex-row align-items-center p-3 w-full",onClick:function(r){return t.gotodetail(e.data.id)}},[Object(a["j"])("div",h,[Object(a["j"])("div",O,Object(a["K"])(e.data.name),1)])],8,b)])]})),grid:Object(a["Q"])((function(t){return[Object(a["j"])("div",g,[Object(a["m"])(P,{platform:t},null,8,["platform"])])]})),_:1},8,["value","layout","totalRecords","sortOrder","sortField"])])])])}r("ac1f"),r("841c");var w=r("2113"),y={components:{PlatformCard:w["a"]},data:function(){return{dataviewValue:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,textSearch:null,platformscount:0}},platformsService:null,created:function(){this.platformsService=this.servicesFactory.getPlatformsService()},mounted:function(){var t=this;this.platformsService.getPlatformsCount().then((function(e){return t.platformscount=e})),this.platformsService.getPlatforms(9,0).then((function(e){return t.dataviewValue=e}))},watch:{textSearch:function(t,e){t!=e&&this.search()}},methods:{onSortChange:function(t){var e=t.value.value,r=t.value;0===e.indexOf("!")?(this.sortOrder=-1,this.sortField=e.substring(1,e.length),this.sortKey=r):(this.sortOrder=1,this.sortField=e,this.sortKey=r)},search:function(){var t,e=this;this.textSearch?null===(t=this.platformsService)||void 0===t||t.searchPlatforms(9,0,this.textSearch).then((function(t){return e.dataviewValue=t})):this.platformsService.getPlatforms(9,0).then((function(t){return e.dataviewValue=t}))},addplatform:function(){this.$router.push("/platformnew/")},onPage:function(t){var e=this;this.platformsService.getPlatforms(t.rows,t.first).then((function(t){return e.dataviewValue=t}))},getType:function(){return sessionStorage.getItem("type")},getCurrentUserRole:function(){var t;return null===(t=JSON.parse(sessionStorage.getItem("user")))||void 0===t?void 0:t.role}}},S=r("6b0d"),V=r.n(S);const C=V()(y,[["render",x]]);e["default"]=C},"841c":function(t,e,r){"use strict";var a=r("c65b"),n=r("d784"),o=r("825a"),c=r("1d80"),l=r("129f"),i=r("577e"),s=r("dc4a"),u=r("14c3");n("search",(function(t,e,r){return[function(e){var r=c(this),n=void 0==e?void 0:s(e,t);return n?a(n,e,r):new RegExp(e)[t](i(r))},function(t){var a=o(this),n=i(t),c=r(e,a,n);if(c.done)return c.value;var s=a.lastIndex;l(s,0)||(a.lastIndex=0);var d=u(a,n);return l(a.lastIndex,s)||(a.lastIndex=s),null===d?-1:d.index}]}))},ac41:function(t,e,r){"use strict";var a="images/unknown.jfif";e["a"]={methods:{getImage:function(t){return t||a}}}}}]);
//# sourceMappingURL=chunk-3b72aa7c.d05c7327.js.map