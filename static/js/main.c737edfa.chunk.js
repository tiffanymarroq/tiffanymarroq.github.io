(this["webpackJsonppage-builder"]=this["webpackJsonppage-builder"]||[]).push([[0],{22:function(e,t,a){},33:function(e,t,a){e.exports=a(72)},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Hero",(function(){return x})),a.d(n,"Video",(function(){return T})),a.d(n,"MenuItem",(function(){return S})),a.d(n,"MenuContainer",(function(){return O})),a.d(n,"TitleSubheading",(function(){return H}));var o=a(0),r=a.n(o),l=a(7),i=a.n(l),c=(a(38),a(39),a(40),a(41),a(29)),s=a(27),u=a(28),d=a(9),m=a(31),p=a(30),g=a(12),h=a.n(g),f=a(74),b=(a(59),"https://image.uniqlo.com//UQ/ST3/us/imagesother/featurepages/20ss-sportsutility/sportutility-pc-m_21.jpg"),v="https://image.uniqlo.com/UQ/ST3/us/imagesother/home/200527-theory-en.mp4",E="Hello There!",y="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ",w="Menu Item Label",N="Menu Item Description",k=function(e){var t=e.className,a=e.style,n=e.title,o=e.show,l=e.src;return r.a.createElement("div",{className:"hero "+(t||""),style:a},r.a.createElement("img",{src:l,alt:n+" Hero"}),o?r.a.createElement("h1",{className:"Header-2"},n):"")};k.defaultProps={title:E,show:!0,src:"https://image.uniqlo.com//UQ/ST3/us/imagesother/featurepages/20ss-sportsutility/sportutility-pc-m_01.jpg"};var x=k,C=(a(60),function(e){var t=e.className,a=e.style,n=e.title,o=e.show,l=e.src;return r.a.createElement("div",{className:"video video-sm"+(t||""),style:a},r.a.createElement("video",{controls:!0,src:l,alt:n+" Video"}),o?r.a.createElement("p",{className:"Body 1 Caption"},n):"")});C.defaultProps={title:y,show:!0,src:v};var T=C,L=(a(61),function(e){e.textOverlay;var t=e.label,a=e.src,n=e.href,o=e.description;return r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:n},r.a.createElement("img",{src:a,alt:t+" image"}),r.a.createElement("p",{className:"Body-1-Bold"},t),o?r.a.createElement("p",{className:"Body-1-Regular"},N):""))});L.defaultProps={border:0,textOverlay:!1,href:"/",src:b,label:w};var S=L,_=(a(62),function(e){var t=e.title,a=e.label;return r.a.createElement("div",{className:"title-subheading"},r.a.createElement("h2",{className:"Header-2"},t),r.a.createElement("p",{className:"Body-1-Regular"},a))});_.defaultProps={title:E,label:y};var H=_,I=function(e){var t=e.data;return console.log(t),r.a.createElement("div",{className:"menu-container"},t.items?t.items.map((function(t,a){return r.a.createElement(S,Object.assign({},e,{key:a}))})):"")};I.defaultProps={border:0,textOverlay:!1,href:"/",src:b,label:w,data:{items:[{href:"/",src:b,label:w},{href:"/",src:b,label:w},{href:"/",src:b,label:w},{href:"/",src:b,label:w},{href:"/",src:b,label:w},{href:"/",src:b,label:w},{href:"/",src:b,label:w}]}};var O=I,R=a(73),j=function(e){return r.a.createElement("div",{className:"feature-page"},e.pageLog.map((function(t,a){var o=n[t.el];return r.a.createElement("div",{style:{position:"relative"},key:a},r.a.createElement(o,{data:t.data,key:a}),r.a.createElement(R.a,{onClick:function(){return e.onItemRemove(a)},style:{position:"absolute",top:20,right:20},color:"danger"},"Remove"))})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<script>var hello = true<\/script>"}}))},M=function(e){var t=e.scale;console.log(t);var a={display:"inline-block",position:"relative",width:t,backgroundColor:"tomato"};return r.a.createElement("div",{className:"temp-img-container",style:a},r.a.createElement("div",{className:"temp-dummy",style:{height:0,paddingBottom:"100%"}},r.a.createElement("div",{className:"temp-image",style:{position:"absolute",top:0,left:0,bottom:0,right:0,height:0,background:"#d8d8d8"}},"\xa0"),";"))},B=(a(22),function(e){e.title,e.label;return r.a.createElement("div",{className:"products-1"},r.a.createElement(M,{scale:"50%"}),r.a.createElement("div",{className:"product-body product-body-right"},r.a.createElement(H,null)))});B.defaultProps={title:E,label:y};var q=function(e){e.title,e.label;return r.a.createElement("div",{className:"products-1"},r.a.createElement("div",{className:"product-body product-body-right"},r.a.createElement(H,null)),r.a.createElement(M,{scale:"640px"}))};q.defaultProps={title:E,label:y};var z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getHtml=function(){navigator.clipboard.writeText(n.container.current.innerHTML),n.setState({htmlEL:n.container.current.innerHTML}),n.toggle()},n.toggle=function(){n.setState({toggle:!n.state.toggle})},n.toggle2=function(){n.setState({toggle2:!n.state.toggle2})},n.pageType=function(e){console.log(e),n.setState({pageLog:[].concat(Object(c.a)(n.state.pageLog),[{el:e}])},(function(){n.container&&n.container.current.scrollIntoView({behavior:"smooth",block:"end"})}))},n.onItemRemove=function(e){var t=n.state.pageLog;console.log(e),0===e?t.shift():t.splice(e,1),n.setState({pageLog:t})},n.authZeplin=function(){var e={response_type:"code",client_id:"5f0b36015341df7e1af78346",redirect_uri:"https://tiffanymarroq.github.io"};window.location="https://api.zeplin.dev/v1/oauth/authorize?client_id=".concat(e.client_id,"&redirect_uri=").concat(e.redirect_uri,"&response_type=code")},n.getZeplin=function(){console.log("post");var e=window.location.search.split("=")[1];console.log(e),h.a.post("https://api.zeplin.dev/v1/oauth/token",{grant_type:"authorization_code",code:e,redirect_uri:"https://tiffanymarroq.github.io",client_id:"5f0b36015341df7e1af78346",client_secret:"9d64785a16e02b78e40ab63373a17711b549337e1284df5d2eaa1d6de1801b18"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},n.getScreens=function(){console.log("get screen"),h.a.get("https://api.zeplin.dev/v1/projects/5e0785acd852e81aeecd8eef/screens/5f0b3568daf4947e91bd2df1/versions/latest").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},n.state={htmlEL:"",toggle:!1,toggle2:!1,pageLog:[],view:"pc"},n.container=r.a.createRef(),n.onItemRemove=n.onItemRemove.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.view;return r.a.createElement("div",{style:{paddingTop:80,paddingBottom:50}},r.a.createElement("div",{ref:this.container,className:"page page-"+t},r.a.createElement(j,{pageLog:this.state.pageLog,onItemRemove:this.onItemRemove})),r.a.createElement("div",null,r.a.createElement("div",{style:{width:"calc(100% - 80px)",position:"fixed",top:20,left:50,display:"flex",justifyContent:"space-between"}},r.a.createElement("button",{style:{padding:"10px 25px",border:0,borderRadius:"4px",backgroundColor:"#1b1b1b",color:"white",fontSize:"16px",fontWeight:"bold"},onClick:this.toggle2},"Menu"),r.a.createElement("button",{style:{padding:"10px 25px",border:0,borderRadius:"4px",backgroundColor:"#1b1b1b",color:"white",fontSize:"16px",fontWeight:"bold"},onClick:this.getHtml},"Get Code")),r.a.createElement("div",{className:"custom-slide slide-"+(this.state.toggle2?"show":"")},r.a.createElement("ul",{style:{padding:"20px"}},r.a.createElement("p",{style:{fontWeight:"bold"},onClick:this.toggle2},"CLOSE"),r.a.createElement("br",null),r.a.createElement("li",{onClick:function(){return e.pageType("Hero")}},"Hero"),r.a.createElement("li",{onClick:function(){return e.pageType("MenuContainer")}},"Menu"),r.a.createElement("li",{onClick:function(){return e.pageType("Video")}},"Video"),r.a.createElement("li",{onClick:function(){return e.pageType("TitleSubheading")}},"TitleSubheading"))),r.a.createElement(f.a,{toggle:this.toggle,isOpen:this.state.toggle,style:{maxWidth:"800px",padding:"20px"}},r.a.createElement("h1",null,"This is what gets copied"),r.a.createElement("br",null),r.a.createElement("div",{style:{padding:"10px"}},this.state.htmlEL))))}}]),a}(o.Component);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c737edfa.chunk.js.map