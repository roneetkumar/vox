(function(t){function e(e){for(var a,c,o=e[0],i=e[1],u=e[2],h=0,f=[];h<o.length;h++)c=o[h],r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"09e7":function(t,e,n){"use strict";var a=n("6aa1"),r=n.n(a);r.a},"0fe4":function(t,e,n){"use strict";var a=n("277e"),r=n.n(a);r.a},"1f03":function(t,e,n){},"22e1":function(t,e,n){},"25a3":function(t,e,n){"use strict";var a=n("947e"),r=n.n(a);r.a},"277e":function(t,e,n){},"2bdc":function(t,e,n){"use strict";var a=n("d474"),r=n.n(a);r.a},"390e":function(t,e,n){"use strict";var a=n("d9d2"),r=n.n(a);r.a},"43cd":function(t,e,n){"use strict";var a=n("4994"),r=n.n(a);r.a},4994:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("59ca"),s=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},o=[],i={name:"app",components:{},data:function(){return{}},methods:{}},u=i,l=(n("034f"),n("2877")),h=Object(l["a"])(u,c,o,!1,null,null,null),f=h.exports,v=n("8c4f"),m=(n("ea7b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loginWrapper"},[n("form",[n("Logo",{attrs:{fill:"#33e4ef"}}),n("h1",[t._v("Vox")]),n("div",{staticClass:"inputLogin"},[n("UserIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.id,expression:"student.id"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.student.id},on:{input:function(e){e.target.composing||t.$set(t.student,"id",e.target.value)}}})],1),n("div",{staticClass:"inputLogin"},[n("KeyIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.pass,expression:"student.pass"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.student.pass},on:{input:function(e){e.target.composing||t.$set(t.student,"pass",e.target.value)}}})],1),n("button",{staticClass:"login",on:{click:function(e){return e.preventDefault(),t.logIn(e)}}},[t._v("Submit")]),n("h2",[t._v("Forget Password ?")]),n("button",{on:{click:function(e){return e.preventDefault(),t.createAccount(e)}}},[t._v("Create Account")]),n("h2",[t._v("Fraincais")])],1)])}),d=[],p=(n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"logo",attrs:{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29.4579 12H25.3188C24.6559 10.83 23.7426 9.825 22.6379 9.06L25.0389 6.615L22.962 4.5L19.7656 7.755C19.088 7.59 18.3957 7.5 17.6739 7.5C16.9521 7.5 16.2598 7.59 15.597 7.755L12.3859 4.5L10.3089 6.615L12.6952 9.06C11.6052 9.825 10.6919 10.83 10.0291 12H5.88995V15H8.96851C8.89486 15.495 8.83594 15.99 8.83594 16.5V18H5.88995V21H8.83594V22.5C8.83594 23.01 8.89486 23.505 8.96851 24H5.88995V27H10.0291C11.561 29.685 14.4039 31.5 17.6739 31.5C20.944 31.5 23.7868 29.685 25.3188 27H29.4579V24H26.3793C26.453 23.505 26.5119 23.01 26.5119 22.5V21H29.4579V18H26.5119V16.5C26.5119 15.99 26.453 15.495 26.3793 15H29.4579V12V12ZM20.6208 24H14.7288V21H20.6208V24V24ZM20.6208 18H14.7288V15H20.6208V18V18Z",fill:t.fill}})])}),g=[],_={props:{fill:String}},w=_,b=(n("f5cc"),Object(l["a"])(w,p,g,!1,null,"69d84df4",null)),x=b.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}})])},C=[],z={},M=z,$=Object(l["a"])(M,O,C,!1,null,null,null),N=$.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12c-2.29.46-4.15 2.29-4.63 4.58C.32 14.57 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}})])},j=[],E={},I=E,V=Object(l["a"])(I,H,j,!1,null,null,null),y=V.exports,S={props:{fill:String},components:{Logo:x,KeyIcon:y,UserIcon:N},data:function(){return{userFound:!1,student:{id:"",pass:""}}},methods:{logIn:function(){var t=this;s.a.auth().signInWithEmailAndPassword(this.student.id,this.student.pass).then(function(){return t.$router.replace("home")},function(t){return alert(t.message)}),this.student.id="",this.student.pass=""},createAccount:function(){var t=this;s.a.auth().createUserWithEmailAndPassword(this.student.id,this.student.pass).then(function(){return t.$router.replace("home")},function(t){return alert(t.message)}),this.student.id="",this.student.pass=""}}},L=S,A=(n("a87a"),Object(l["a"])(L,m,d,!1,null,"87f9dcba",null)),B=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homePageWrapper"},[t.$store.state.navOpened?n("div",{staticClass:"overlay",on:{click:function(e){t.$store.state.navOpened=!1}}}):t._e(),n("SideNav",{attrs:{navOpen:t.$store.state.navOpened}}),n("Header"),n("router-view"),n("NavBar")],1)},k=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("Logo",{attrs:{fill:"#fff"}}),n("h1",[t._v("Vox")]),n("br"),n("button",{on:{click:t.logOut}},[t._v("Logout")])],1)},q=[],U={components:{Logo:x},methods:{logOut:function(){var t=this;s.a.auth().signOut().then(function(){return t.$router.replace("login")})}}},W=U,F=(n("8f55"),Object(l["a"])(W,D,q,!1,null,"4844c27a",null)),T=F.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("SearchBar",{on:{menuClicked:function(e){return t.$emit("menuClicked")}}}),n("NavMenu")],1)},K=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchBar"},[n("MenuIcon",{nativeOn:{click:function(e){t.$store.state.navOpened=!0}}}),n("input",{attrs:{type:"text",placeholder:"Search"}}),n("SearchIcon")],1)},R=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})])},Q=[],X={},Y=X,tt=(n("697c"),Object(l["a"])(Y,G,Q,!1,null,"6f509dac",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])},at=[],rt={},st=rt,ct=(n("0fe4"),Object(l["a"])(st,nt,at,!1,null,"4a8e9c13",null)),ot=ct.exports,it={components:{SearchIcon:et,MenuIcon:ot}},ut=it,lt=(n("43cd"),Object(l["a"])(ut,J,R,!1,null,"2381bc54",null)),ht=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-menu"},t._l(t.menu,function(t){return n("router-link",{key:t,attrs:{"active-class":"menu-active",to:{name:t}}},[n("MenuItem",{attrs:{itemName:t}})],1)}),1)},vt=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},["Mio"===t.itemName?n("MioIcon"):"News"===t.itemName?n("NewsIcon"):"About"===t.itemName?n("AboutIcon"):"Lea"===t.itemName?n("LeaIcon"):n("ServiceIcon"),n("span",[t._v(t._s(t.itemName))])],1)},dt=[],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"}})])])},gt=[],_t={},wt=_t,bt=Object(l["a"])(wt,pt,gt,!1,null,null,null),xt=bt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M4 16h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zM4 20c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM4 12h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 0h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zM3 5v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])])},Ct=[],zt={},Mt=zt,$t=Object(l["a"])(Mt,Ot,Ct,!1,null,null,null),Nt=$t.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}})])])},jt=[],Et={},It=Et,Vt=Object(l["a"])(It,Ht,jt,!1,null,null,null),yt=Vt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"}})])])},Lt=[],At={},Bt=At,Pt=Object(l["a"])(Bt,St,Lt,!1,null,null,null),kt=Pt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}})])])},qt=[],Ut={},Wt=Ut,Ft=Object(l["a"])(Wt,Dt,qt,!1,null,null,null),Tt=Ft.exports,Zt={props:{itemName:String},components:{MioIcon:xt,NewsIcon:Nt,AboutIcon:yt,LeaIcon:kt,ServiceIcon:Tt},methods:{}},Kt=Zt,Jt=(n("d281"),Object(l["a"])(Kt,mt,dt,!1,null,"219caff8",null)),Rt=Jt.exports,Gt={components:{MenuItem:Rt},data:function(){return{menu:["News","Mio","Lea","Services","About"]}},methods:{}},Qt=Gt,Xt=(n("25a3"),Object(l["a"])(Qt,ft,vt,!1,null,"a577db70",null)),Yt=Xt.exports,te={components:{SearchBar:ht,NavMenu:Yt},methods:{}},ee=te,ne=(n("09e7"),Object(l["a"])(ee,Z,K,!1,null,"07b56f34",null)),ae=ne.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-bar-wrapper",class:{navOpened:1==t.$store.state.navOpened}},[n("h1",[t._v("sidebar")])])},se=[],ce={props:{navOpen:Boolean},data:function(){return{}}},oe=ce,ie=(n("e8ce"),Object(l["a"])(oe,re,se,!1,null,"6e587bf7",null)),ue=ie.exports,le={components:{Header:T,NavBar:ae,SideNav:ue},data:function(){return{}},methods:{}},he=le,fe=(n("2bdc"),Object(l["a"])(he,P,k,!1,null,"1c46a280",null)),ve=fe.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"lea-grid"},[n("h1",{staticClass:"heading"},[t._v("Lea")]),t._l(t.courseData,function(t){return n("LeaCard",{key:t.courseNo,attrs:{card:t}})})],2)},de=[],pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h3",[t._v(t._s(t.card.courseNo))]),n("h2",[t._v(t._s(t.card.courseName))]),n("br"),n("h4",[t._v("Courses:-")]),n("br"),t._m(0)])},ge=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Documents")]),n("li",[t._v("Assignments")]),n("li",[t._v("Class Forums")]),n("li",[t._v("Announcements")])])}],_e={props:{card:Object}},we=_e,be=(n("e57e"),Object(l["a"])(we,pe,ge,!1,null,"da4f71c6",null)),xe=be.exports,Oe=n("d93e"),Ce={components:{LeaCard:xe},data:function(){return{courseData:Oe}}},ze=Ce,Me=(n("390e"),Object(l["a"])(ze,me,de,!1,null,"6e733832",null)),$e=Me.exports,Ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},He=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("mio page")])])}],je={components:{}},Ee=je,Ie=Object(l["a"])(Ee,Ne,He,!1,null,null,null),Ve=Ie.exports,ye=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Se=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("news")])])}],Le={components:{}},Ae=Le,Be=Object(l["a"])(Ae,ye,Se,!1,null,null,null),Pe=Be.exports,ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},De=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("service")])])}],qe={components:{}},Ue=qe,We=Object(l["a"])(Ue,ke,De,!1,null,null,null),Fe=We.exports,Te=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ze=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("about")])])}],Ke={components:{}},Je=Ke,Re=Object(l["a"])(Je,Te,Ze,!1,null,null,null),Ge=Re.exports;a["a"].use(v["a"]);var Qe=new v["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:B},{path:"/home",name:"Home",redirect:"/home/lea",component:ve,meta:{requiresAuth:!0},children:[{path:"lea",name:"Lea",component:$e,meta:{requiresAuth:!0}},{path:"mio",name:"Mio",component:Ve,meta:{requiresAuth:!0}},{path:"news",name:"News",component:Pe,meta:{requiresAuth:!0}},{path:"service",name:"Services",component:Fe,meta:{requiresAuth:!0}},{path:"about",name:"About",component:Ge,meta:{requiresAuth:!0}}]}]});Qe.beforeEach(function(t,e,n){var a=s.a.auth().currentUser,r=t.matched.some(function(t){return t.meta.requiresAuth});r&&!a?n("login"):!r&&a?n("home"):n()});var Xe=Qe,Ye=n("2f62");a["a"].use(Ye["a"]);var tn=new Ye["a"].Store({state:{navOpened:!1}});a["a"].config.productionTip=!1;var en="",nn={apiKey:"AIzaSyCaz2oF2wLxARhmBsw9XQh1OGZT3sUwVLI",authDomain:"myomnivox.firebaseapp.com",databaseURL:"https://myomnivox.firebaseio.com",projectId:"myomnivox",storageBucket:"",messagingSenderId:"535661388551",appId:"1:535661388551:web:b8416dead5e5b9ea"};s.a.initializeApp(nn),s.a.auth().onAuthStateChanged(function(){en||(en=new a["a"]({render:function(t){return t(f)},router:Xe,store:tn}).$mount("#app"))})},"64a9":function(t,e,n){},"676f":function(t,e,n){},"697c":function(t,e,n){"use strict";var a=n("1f03"),r=n.n(a);r.a},"6aa1":function(t,e,n){},"6cb7":function(t,e,n){},"89df":function(t,e,n){},"8f55":function(t,e,n){"use strict";var a=n("a127"),r=n.n(a);r.a},"947e":function(t,e,n){},a127:function(t,e,n){},a87a:function(t,e,n){"use strict";var a=n("676f"),r=n.n(a);r.a},ce47:function(t,e,n){},d281:function(t,e,n){"use strict";var a=n("6cb7"),r=n.n(a);r.a},d474:function(t,e,n){},d93e:function(t){t.exports=[{courseNo:"1",courseName:"Object Oriented"},{courseNo:"2",courseName:"Database - II"},{courseNo:"3",courseName:"Python"},{courseNo:"4",courseName:"EcmaScript"},{courseNo:"5",courseName:"Web Development"},{courseNo:"6",courseName:"Python - II"},{courseNo:"7",courseName:"EcmaScript - II"},{courseNo:"8",courseName:"Web Development - II"}]},d9d2:function(t,e,n){},e57e:function(t,e,n){"use strict";var a=n("22e1"),r=n.n(a);r.a},e8ce:function(t,e,n){"use strict";var a=n("89df"),r=n.n(a);r.a},f5cc:function(t,e,n){"use strict";var a=n("ce47"),r=n.n(a);r.a}});
//# sourceMappingURL=app.613feb42.js.map