(this["webpackJsonppage-builder"]=this["webpackJsonppage-builder"]||[]).push([[0],{29:function(e,t,n){e.exports=n(70)},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"Hero",(function(){return j})),n.d(a,"Video",(function(){return L})),n.d(a,"MenuItem",(function(){return x})),n.d(a,"MenuContainer",(function(){return P})),n.d(a,"TitleSubheading",(function(){return B})),n.d(a,"AboutDescription",(function(){return H}));var o=n(0),i=n.n(o),l=n(5),r=n.n(l),c=(n(34),n(35),n(36),n(37),n(7)),s=n(3),p=n(9),u=n(24),m=n(25),d=n(6),g=n(27),f=n(26),h=n(10),b=n.n(h),y=n(71),v=(n(55),"https://image.uniqlo.com//UQ/ST3/us/imagesother/featurepages/20ss-sportsutility/sportutility-pc-m_21.jpg"),E="https://image.uniqlo.com/UQ/ST3/us/imagesother/home/200527-theory-en.mp4",O="Hello There!",w="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ",k="Hello There! This is a caption",S="Menu Item Label",T=function(e){var t=e.className,n=e.style,a=e.title,o=e.show,l=e.src,r=e.i,c=e.data;return console.log(e.data.options,"props"),void 0===c.options&&e.getOptions(r,{title:"",src:""}),i.a.createElement("div",{className:"hero "+(t||""),style:n},i.a.createElement("img",{src:l,alt:a+" Hero"}),o?i.a.createElement("h1",{className:"Header-2"},a):"")};T.defaultProps={title:O,show:!0,src:"https://image.uniqlo.com//UQ/ST3/us/imagesother/featurepages/20ss-sportsutility/sportutility-pc-m_01.jpg"};var j=T,C=(n(56),function(e){var t=e.className,n=e.style,a=e.title,o=e.show,l=e.src;return i.a.createElement("div",{className:"video video-sm"+(t||""),style:n},i.a.createElement("video",{controls:!0,src:l,alt:a+" Video"}),o?i.a.createElement("p",{className:"Body 1 Caption"},a):"")});C.defaultProps={title:w,show:!0,src:E};var L=C,N=(n(57),function(e){var t=e.item,n=e.type;return console.log(n,"menu item"),i.a.createElement("li",{className:"menu-item"},i.a.createElement("a",{href:t.href},3==n||4==n?null:i.a.createElement("img",{src:t.src,alt:t.label+" image"}),i.a.createElement("div",null,i.a.createElement("p",{className:{1:"Body-1-Bold",2:"Header-1",3:"Body-1-Medium",4:"Body-1-Medium"}[n]},t.label),t.description&&1===n?i.a.createElement("p",{className:"Body-1-Regular menu-caption"},t.description):"")))});N.defaultProps={item:{href:"/",description:"this is a description",src:v,label:S},type:1};var x=N,_=(n(58),function(e){var t=e.title,n=e.description,a=e.caption,o=e.type,l=e.src;return i.a.createElement("div",{className:"description-container description-type-"+o},4===o?i.a.createElement("img",{src:l,alt:t+" about"}):null,i.a.createElement("div",null,i.a.createElement("h3",{className:{1:"Body-1-Bold",2:"Header-2",3:"Title-2",4:"Header-2"}[o]},t),i.a.createElement("p",null,n),i.a.createElement("p",{className:"Body-1-Caption"},a)))});_.defaultProps={title:O,description:w,type:"1",caption:k,src:v};var H=_,I=(n(59),function(e){var t=e.title,n=e.label;return i.a.createElement("div",{className:"title-subheading"},i.a.createElement("h2",{className:"Header-2"},t),i.a.createElement("p",{className:"Body-1-Regular"},n))});I.defaultProps={title:O,label:w};var B=I,V=(n(60),function(e){return i.a.createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"button "+e.type+" transp-bg"},e.children)}),M={types:{1:{item:{href:"/",src:v,label:S,description:!1}},2:{item:{href:"/",src:v,label:S}},3:{item:{href:"/",src:v,label:S}},4:{item:{href:"/",src:v,label:S}}},items:[{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S}],type:1},R=function(e){var t=e.data,n=e.options,a=e.i;return void 0===t.options&&e.getOptions(a,M),i.a.createElement("div",{className:"menu-container menu-container-"+n.type},n.items?n.items.map((function(e,t){return i.a.createElement(x,{item:e,type:n.type,key:t})})):"",4==n.type?i.a.createElement("a",{href:n.btnLink},i.a.createElement(V,null,"Shop Now")):null)};R.defaultProps={options:{type:1,items:[{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S},{href:"/",src:v,label:S}],types:{1:{item:{href:"/",src:"",label:"",description:!1}},2:{item:{href:"/",src:"",label:""}},3:{item:{href:"/",src:"",label:""}},4:{item:{href:"/",src:"",label:"",btnLink:"/",btnText:""}}}}};var P=R,W=function(e){return console.log(e,"page list"),i.a.createElement("div",{className:"feature-page"},e.pageLog.map((function(t,n){var o=a[t.el];return i.a.createElement("div",{style:{position:"relative"},key:n},t.options?i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{getOptions:e.getOptions,data:t,options:t.options,i:n,key:n})):i.a.createElement(o,{getOptions:e.getOptions,data:t,i:n,key:n}))})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<script>var hello = true<\/script>"}}))},q=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getHtml=function(){navigator.clipboard.writeText(a.container.current.innerHTML),a.setState({htmlEL:a.container.current.innerHTML}),a.toggle()},a.toggle=function(){a.setState({toggle:!a.state.toggle})},a.toggle2=function(){a.setState({toggle2:!a.state.toggle2})},a.pageType=function(e){console.log(e),a.setState({pageLog:[].concat(Object(p.a)(a.state.pageLog),[{el:e}])},(function(){a.container&&a.container.current.scrollIntoView({behavior:"smooth",block:"end"})}))},a.onItemRemove=function(e){var t=a.state.pageLog;0===e?t.shift():t.splice(e,1),a.setState({pageLog:t})},a.getOptions=function(e,t){var n=Object(p.a)(a.state.pageLog);n[e]=Object(s.a)(Object(s.a)({},n[e]),{},{options:t}),a.setState({pageLog:n}),console.log("set options")},a.updateOptions=function(e,t,n){var o=Object(p.a)(a.state.pageLog);if(console.log(o,"updating",n,o[n]),o[n]=Object(s.a)(Object(s.a)({},o[n]),{},{options:Object(s.a)(Object(s.a)({},o[n].options),{},Object(c.a)({},e,t))}),o[n].options.items){for(var i=[],l=0;l<=4;l++)console.log(o[n].options.types,"OPTIONS"),console.log(o[n].options.type,"OPTIONS"),console.log(o[n].options.types[o[n].options.type],"OPTIONS"),i.push(o[n].options.types[o[n].options.type].item);o[n]=Object(s.a)(Object(s.a)({},o[n]),{},{options:Object(s.a)(Object(s.a)({},o[n].options),{},{items:i})})}a.setState({pageLog:o}),console.log("update options")},a.menuView=function(e){a.setState({menuView:e})},a.authZeplin=function(){var e={response_type:"code",client_id:"5f0b36015341df7e1af78346",redirect_uri:"https://tiffanymarroq.github.io"};window.location="https://api.zeplin.dev/v1/oauth/authorize?client_id=".concat(e.client_id,"&redirect_uri=").concat(e.redirect_uri,"&response_type=code")},a.getZeplin=function(){console.log("post");var e=window.location.search.split("=")[1];b.a.post("https://api.zeplin.dev/v1/oauth/token",{grant_type:"authorization_code",code:e,redirect_uri:"https://tiffanymarroq.github.io",client_id:"5f0b36015341df7e1af78346",client_secret:"9d64785a16e02b78e40ab63373a17711b549337e1284df5d2eaa1d6de1801b18"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},a.getScreens=function(){console.log("get screen"),b.a.get("https://api.zeplin.dev/v1/projects/5e0785acd852e81aeecd8eef/screens/5f0b3568daf4947e91bd2df1/versions/latest").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},a.state={htmlEL:"",toggle:!1,toggle2:!1,pageLog:[],view:"pc",menuView:"Select"},a.container=i.a.createRef(),a.onItemRemove=a.onItemRemove.bind(Object(d.a)(a)),a.getOptions=a.getOptions.bind(Object(d.a)(a)),a.menuView=a.menuView.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.view,a=t.pageLog;return console.log(a,"loggggg"),i.a.createElement("div",{style:{paddingTop:80,paddingBottom:50,maxWidth:1280,margin:"0 auto"}},i.a.createElement("div",{ref:this.container,className:"page page-"+n},i.a.createElement(W,{pageLog:this.state.pageLog,onItemRemove:this.onItemRemove,getOptions:this.getOptions,updateOptions:this.updateOptions})),i.a.createElement("div",null,i.a.createElement("div",{style:{width:"calc(100% - 80px)",position:"fixed",top:20,left:50,display:"flex",justifyContent:"space-between"}},i.a.createElement("button",{style:{padding:"10px 25px",border:0,borderRadius:"4px",backgroundColor:"#1b1b1b",color:"white",fontSize:"16px",fontWeight:"bold"},onClick:this.toggle2},"Menu"),i.a.createElement("button",{style:{padding:"10px 25px",border:0,borderRadius:"4px",backgroundColor:"#1b1b1b",color:"white",fontSize:"16px",fontWeight:"bold"},onClick:this.getHtml},"Get Code")),i.a.createElement("div",{className:"custom-slide slide-"+(this.state.toggle2?"show":"")},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("p",{onClick:function(){return e.menuView("Select")}},"Select ")," /",i.a.createElement("p",{onClick:function(){return e.menuView("Outline")}},"Outline")),"Select"===this.state.menuView?i.a.createElement("ul",{style:{padding:"20px"}},i.a.createElement("p",{style:{fontWeight:"bold"},onClick:this.toggle2},"CLOSE"),i.a.createElement("br",null),i.a.createElement("li",{onClick:function(){return e.pageType("Hero")}},"Hero"),i.a.createElement("li",{onClick:function(){return e.pageType("MenuContainer")}},"Menu"),i.a.createElement("li",{onClick:function(){return e.pageType("Video")}},"Video"),i.a.createElement("li",{onClick:function(){return e.pageType("TitleSubheading")}},"TitleSubheading"),i.a.createElement("li",{onClick:function(){return e.pageType("AboutDescription")}},"About")):i.a.createElement("ul",{style:{padding:"20px"}},i.a.createElement("p",{style:{fontWeight:"bold"},onClick:this.toggle2},"CLOSE"),this.state.pageLog.map((function(t,n){return i.a.createElement("li",null,t.el,i.a.createElement("p",null,"Select Type"),t.options&&t.options.types?Object.keys(t.options.types).map((function(t,a){return console.log(t,n,"loop"),i.a.createElement("p",{key:a,onClick:function(){return e.updateOptions("type",t,n)}},t)})):null,i.a.createElement("br",null),i.a.createElement("p",{onClick:function(){return e.onItemRemove(n)}},"Delete"))})))),i.a.createElement(y.a,{toggle:this.toggle,isOpen:this.state.toggle,style:{maxWidth:"800px",padding:"20px"}},i.a.createElement("h1",null,"This is what gets copied"),i.a.createElement("br",null),i.a.createElement("div",{style:{padding:"10px"}},this.state.htmlEL))))}}]),n}(o.Component);var z=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1eafc87e.chunk.js.map