(function(e){function t(t){for(var a,i,u=t[0],c=t[1],o=t[2],m=0,p=[];m<u.length;m++)i=u[m],s[i]&&p.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var c=n[u];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"011a":function(e,t,n){},"01ba":function(e,t,n){},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"08b1":function(e,t,n){},"0a03":function(e,t,n){"use strict";var a=n("b448"),s=n.n(a);s.a},"1a52":function(e,t,n){},"22fb":function(e,t,n){"use strict";var a=n("1a52"),s=n.n(a);s.a},"3e04":function(e,t,n){},"445b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=n("59ca"),r=n.n(s),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},u=[],c={name:"app",components:{},data:function(){return{}},methods:{}},o=c,l=(n("034f"),n("2877")),m=Object(l["a"])(o,i,u,!1,null,null,null),p=m.exports,h=n("8c4f"),f=(n("ea7b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loginWrapper"},[n("form",[n("Logo"),n("div",{staticClass:"inputBox"},[n("UserIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.student.id,expression:"student.id"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.student.id},on:{input:function(t){t.target.composing||e.$set(e.student,"id",t.target.value)}}})],1),n("div",{staticClass:"inputBox"},[n("KeyIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.student.pass,expression:"student.pass"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.student.pass},on:{input:function(t){t.target.composing||e.$set(e.student,"pass",t.target.value)}}})],1),n("button",{staticClass:"login",on:{click:function(t){return t.preventDefault(),e.logIn(t)}}},[e._v("Submit")]),n("h2",[e._v("Forget Password ?")]),n("button",{on:{click:function(t){return t.preventDefault(),e.createAccount(t)}}},[e._v("Create Account")]),n("h2",[e._v("Fraincais")])],1)])}),v=[],d=(n("a481"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/favicon.ico",alt:""}}),n("br"),n("h4",[e._v("For Students")])])}],_={},g=_,w=(n("60b6"),Object(l["a"])(g,d,b,!1,null,"2cffe1ba",null)),x=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}})])},$=[],E={},j=E,q=Object(l["a"])(j,O,$,!1,null,null,null),C=q.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12c-2.29.46-4.15 2.29-4.63 4.58C.32 14.57 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}})])},z=[],I={},A=I,y=Object(l["a"])(A,M,z,!1,null,null,null),S=y.exports,L={props:{fill:String},components:{Logo:x,KeyIcon:S,UserIcon:C},data:function(){return{student:{id:"",pass:""}}},methods:{logIn:function(){var e=this;r.a.auth().signInWithEmailAndPassword(this.student.id,this.student.pass).then(function(){e.$router.replace("home"),e.student.id="",e.student.pass=""},function(e){return alert(e.message)})},createAccount:function(){var e=this;r.a.auth().createUserWithEmailAndPassword(this.student.id,this.student.pass).then(function(){e.$router.replace("home"),e.student.id="",e.student.pass=""},function(e){return alert(e.message)})}}},H=L,N=(n("5a7d"),Object(l["a"])(H,f,v,!1,null,"784385a1",null)),k=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homePageWrapper"},[n("transition",{attrs:{name:"fade"}},[e.$store.state.navOpened?n("div",{staticClass:"overlay",on:{click:function(t){e.$store.state.navOpened=!e.$store.state.navOpened}}}):e._e()]),n("SideNav"),n("Header"),n("SearchBar"),n("router-view"),n("NavBar")],1)},V=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("Logo")],1)},W=[],D={components:{Logo:x},methods:{}},T=D,F=(n("71c7"),Object(l["a"])(T,P,W,!1,null,"5c4415b8",null)),U=F.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("NavMenu")],1)},K=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu"},e._l(e.menu,function(e){return n("router-link",{key:e,attrs:{"active-class":"menu-active",to:{name:e}}},[n("MenuItem",{attrs:{itemName:e}})],1)}),1)},R=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},["Mio"===e.itemName?n("MioIcon"):"News"===e.itemName?n("NewsIcon"):"Lea"===e.itemName?n("LeaIcon"):n("ServiceIcon"),n("span",[e._v(e._s(e.itemName))])],1)},X=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"}})])])},Y=[],ee={},te=ee,ne=Object(l["a"])(te,Z,Y,!1,null,null,null),ae=ne.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M4 16h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zM4 20c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM4 12h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 0h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zM3 5v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])])},re=[],ie={},ue=ie,ce=Object(l["a"])(ue,se,re,!1,null,null,null),oe=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"}})])])},me=[],pe={},he=pe,fe=Object(l["a"])(he,le,me,!1,null,null,null),ve=fe.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}})])])},be=[],_e={},ge=_e,we=Object(l["a"])(ge,de,be,!1,null,null,null),xe=we.exports,Oe={props:{itemName:String},components:{MioIcon:ae,NewsIcon:oe,LeaIcon:ve,ServiceIcon:xe},methods:{}},$e=Oe,Ee=(n("907e"),Object(l["a"])($e,Q,X,!1,null,"0b3ddf5c",null)),je=Ee.exports,qe={components:{MenuItem:je},data:function(){return{menu:["News","Mio","Lea","Services"]}},methods:{}},Ce=qe,Me=(n("58fc"),Object(l["a"])(Ce,J,R,!1,null,"316aae46",null)),ze=Me.exports,Ie={components:{NavMenu:ze},methods:{}},Ae=Ie,ye=(n("7544"),Object(l["a"])(Ae,G,K,!1,null,"f3c1b0d8",null)),Se=ye.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"}},[e.$store.state.navOpened?n("div",{staticClass:"side-bar-wrapper"},[n("div",{staticClass:"header"},[n("div",{staticClass:"nav-pic"},[n("img",{staticClass:"product-logo",attrs:{src:"assets/head_paper.png",alt:""}})]),n("div",{staticClass:"nav-heading"},[n("h1",{staticClass:"title"}),n("a",{attrs:{href:""}},[n("h1",{staticClass:"email"})])])]),n("ul",{staticClass:"nav-menu"},[n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item",on:{click:e.logOut}},[n("LogoutIcon"),n("h1",[e._v("Logout")])],1)])]):e._e()])},He=[],Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})])},ke=[],Be={},Ve=Be,Pe=Object(l["a"])(Ve,Ne,ke,!1,null,null,null),We=Pe.exports,De={components:{LogoutIcon:We},data:function(){return{}},methods:{logOut:function(){var e=this;r.a.auth().signOut().then(function(){return e.$router.replace("login")})}}},Te=De,Fe=(n("808f"),Object(l["a"])(Te,Le,He,!1,null,"bae92296",null)),Ue=Fe.exports,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"searchWrapper"},[n("div",{staticClass:"searchBar"},[n("MenuIcon",{nativeOn:{click:function(t){e.$store.state.navOpened=!e.$store.state.navOpened}}}),n("input",{attrs:{type:"text",placeholder:"Search"}}),n("SearchIcon")],1)])},Ke=[],Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})])},Re=[],Qe={},Xe=Qe,Ze=(n("6361"),Object(l["a"])(Xe,Je,Re,!1,null,"d2613868",null)),Ye=Ze.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])},tt=[],nt={},at=nt,st=(n("22fb"),Object(l["a"])(at,et,tt,!1,null,"60d90fb5",null)),rt=st.exports,it={components:{SearchIcon:Ye,MenuIcon:rt}},ut=it,ct=(n("b911"),Object(l["a"])(ut,Ge,Ke,!1,null,"43cd7f3a",null)),ot=ct.exports,lt={components:{Header:U,NavBar:Se,SearchBar:ot,SideNav:Ue}},mt=lt,pt=(n("c900"),Object(l["a"])(mt,B,V,!1,null,"abcc91a8",null)),ht=pt.exports,ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("LeaMenu",{attrs:{menuItems:e.menuItems}}),n("router-view")],1)},vt=[],dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[n("ul",{staticClass:"menu-list"},e._l(e.menuItems,function(e){return n("router-link",{key:e,attrs:{to:{name:e}}},[n("LeaMenuItem",{attrs:{itemName:e}})],1)}),1)])},bt=[],_t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(e._s(e.itemName))])},gt=[],wt={props:{itemName:String}},xt=wt,Ot=(n("f49a"),Object(l["a"])(xt,_t,gt,!1,null,"596f6f44",null)),$t=Ot.exports,Et={components:{LeaMenuItem:$t},props:{menuItems:Array},data:function(){return{}}},jt=Et,qt=(n("a55e"),Object(l["a"])(jt,dt,bt,!1,null,"64b29994",null)),Ct=qt.exports,Mt={components:{LeaMenu:Ct},data:function(){return{menuItems:["Announcements","Documents","Assignments","Grades","Events","Teachers","Websites","Absences","Forum"]}},methods:{}},zt=Mt,It=(n("7ffa"),Object(l["a"])(zt,ft,vt,!1,null,"618d4526",null)),At=It.exports,yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("MioMenu",{attrs:{menuItems:e.menuItems}}),n("router-view")],1)},St=[],Lt={components:{MioMenu:Ct},data:function(){return{menuItems:["Inbox","Outbox","Sent","Saved","Draft","Trash"]}}},Ht=Lt,Nt=(n("eee1"),Object(l["a"])(Ht,yt,St,!1,null,null,null)),kt=Nt.exports,Bt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Vt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",{staticClass:"heading"},[e._v("news")])])}],Pt={components:{}},Wt=Pt,Dt=Object(l["a"])(Wt,Bt,Vt,!1,null,null,null),Tt=Dt.exports,Ft=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ut=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",{staticClass:"heading"},[e._v("service")])])}],Gt={components:{}},Kt=Gt,Jt=Object(l["a"])(Kt,Ft,Ut,!1,null,null,null),Rt=Jt.exports,Qt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Xt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("announcements")]),n("p",[e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore similique consectetur cum recusandae! Similique corrupti assumenda culpa, aspernatur facere nemo beatae veniam natus quo dolor necessitatibus vero commodi fugiat asperiores temporibus aliquid delectus eveniet sint. Dolores explicabo recusandae, deleniti, perferendis hic vitae obcaecati accusamus, vel quia deserunt quae. Ad quisquam voluptatem, quod delectus itaque consectetur pariatur, nulla praesentium temporibus facere assumenda eius enim quia quas sunt. Pariatur velit ullam voluptas, iure atque facilis officiis eos a? Culpa nesciunt explicabo nobis nemo, veritatis, maxime architecto odit, amet eaque nam dolore illo est! Voluptates totam iste vitae consequatur deserunt tempora odio unde culpa. Illum deserunt unde impedit commodi, eaque, labore natus, animi adipisci eos officiis saepe. Vel placeat repellendus iusto doloribus tenetur eos reiciendis perferendis quibusdam ullam ab repellat consectetur, nihil impedit possimus sequi praesentium sed rem dicta modi quaerat dolores! Deserunt, praesentium quasi illo expedita veniam eius consectetur numquam tenetur assumenda doloremque magni eos nulla mollitia possimus, itaque nostrum ipsa hic error nesciunt tempora? Obcaecati reprehenderit voluptatem accusamus quam id sunt quos omnis earum, repellat laboriosam perspiciatis nemo officiis nulla voluptatibus eius ab officia. Optio, eveniet amet magni, rem voluptatibus, doloremque ullam repellat ipsam incidunt odio vitae explicabo consequuntur nesciunt nisi?")])])}],Zt={},Yt=Zt,en=(n("0a03"),Object(l["a"])(Yt,Qt,Xt,!1,null,"11fcf84c",null)),tn=en.exports,nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Documents")])},an=[],sn={},rn=sn,un=Object(l["a"])(rn,nn,an,!1,null,"a8be4db8",null),cn=un.exports,on=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("assignments")])},ln=[],mn={},pn=mn,hn=Object(l["a"])(pn,on,ln,!1,null,null,null),fn=hn.exports,vn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("grades")])},dn=[],bn={},_n=bn,gn=Object(l["a"])(_n,vn,dn,!1,null,null,null),wn=gn.exports,xn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Events")])},On=[],$n={},En=$n,jn=Object(l["a"])(En,xn,On,!1,null,null,null),qn=jn.exports,Cn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Teachers")])},Mn=[],zn={},In=zn,An=Object(l["a"])(In,Cn,Mn,!1,null,null,null),yn=An.exports,Sn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("websites")])},Ln=[],Hn={},Nn=Hn,kn=Object(l["a"])(Nn,Sn,Ln,!1,null,null,null),Bn=kn.exports,Vn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("absences")])},Pn=[],Wn={},Dn=Wn,Tn=Object(l["a"])(Dn,Vn,Pn,!1,null,null,null),Fn=Tn.exports,Un=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("forum")])},Gn=[],Kn={name:"Forum"},Jn=Kn,Rn=Object(l["a"])(Jn,Un,Gn,!1,null,null,null),Qn=Rn.exports,Xn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",{staticClass:"heading"},[e._v("mio")]),n("ul",e._l(40,function(e){return n("li",{key:e})}),0)])},Zn=[],Yn={},ea=Yn,ta=Object(l["a"])(ea,Xn,Zn,!1,null,"3be10d78",null),na=ta.exports,aa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("outbox")]),n("ul",e._l(40,function(e){return n("li",{key:e})}),0)])},sa=[],ra={},ia=ra,ua=Object(l["a"])(ia,aa,sa,!1,null,null,null),ca=ua.exports,oa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("sent")]),n("ul",e._l(40,function(e){return n("li",{key:e})}),0)])},la=[],ma={},pa=ma,ha=Object(l["a"])(pa,oa,la,!1,null,null,null),fa=ha.exports,va=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("saved")]),n("ul",e._l(40,function(e){return n("li",{key:e})}),0)])},da=[],ba={},_a=ba,ga=Object(l["a"])(_a,va,da,!1,null,null,null),wa=ga.exports,xa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("draft")]),n("ul",e._l(40,function(e){return n("li",{key:e})}),0)])},Oa=[],$a={},Ea=$a,ja=Object(l["a"])(Ea,xa,Oa,!1,null,null,null),qa=ja.exports,Ca=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("trash")]),n("ul",e._l(40,function(e){return n("li",{key:e})}),0)])},Ma=[],za={},Ia=za,Aa=Object(l["a"])(Ia,Ca,Ma,!1,null,null,null),ya=Aa.exports;a["a"].use(h["a"]);var Sa=new h["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:k},{path:"/home",name:"Home",redirect:"/home/lea",component:ht,meta:{requiresAuth:!0},children:[{path:"lea",name:"Lea",component:At,redirect:"/home/lea/announcements",meta:{requiresAuth:!0},children:[{path:"announcements",name:"Announcements",component:tn,meta:{requiresAuth:!0}},{path:"documents",name:"Documents",component:cn,meta:{requiresAuth:!0}},{path:"assignments",name:"Assignments",component:fn,meta:{requiresAuth:!0}},{path:"grades",name:"Grades",component:wn,meta:{requiresAuth:!0}},{path:"events",name:"Events",component:qn,meta:{requiresAuth:!0}},{path:"teachers",name:"Teachers",component:yn,meta:{requiresAuth:!0}},{path:"websites",name:"Websites",component:Bn,meta:{requiresAuth:!0}},{path:"absences",name:"Absences",component:Fn,meta:{requiresAuth:!0}},{path:"forum",name:"Forum",component:Qn,meta:{requiresAuth:!0}}]},{path:"mio",name:"Mio",component:kt,meta:{requiresAuth:!0},redirect:"/home/mio/inbox",children:[{path:"inbox",name:"Inbox",component:na,meta:{requiresAuth:!0}},{path:"outbox",name:"Outbox",component:ca,meta:{requiresAuth:!0}},{path:"sent",name:"Sent",component:fa,meta:{requiresAuth:!0}},{path:"saved",name:"Saved",component:wa,meta:{requiresAuth:!0}},{path:"draft",name:"Draft",component:qa,meta:{requiresAuth:!0}},{path:"trash",name:"Trash",component:ya,meta:{requiresAuth:!0}}]},{path:"news",name:"News",component:Tt,meta:{requiresAuth:!0}},{path:"service",name:"Services",component:Rt,meta:{requiresAuth:!0}}]}]});Sa.beforeEach(function(e,t,n){var a=r.a.auth().currentUser,s=e.matched.some(function(e){return e.meta.requiresAuth});s&&!a?n("login"):!s&&a?n("home"):n()});var La=Sa,Ha=n("2f62");a["a"].use(Ha["a"]);var Na=new Ha["a"].Store({state:{navOpened:!1}});a["a"].config.productionTip=!1;var ka="",Ba={apiKey:"AIzaSyCaz2oF2wLxARhmBsw9XQh1OGZT3sUwVLI",authDomain:"myomnivox.firebaseapp.com",databaseURL:"https://myomnivox.firebaseio.com",projectId:"myomnivox",storageBucket:"",messagingSenderId:"535661388551",appId:"1:535661388551:web:b8416dead5e5b9ea"};r.a.initializeApp(Ba),r.a.auth().onAuthStateChanged(function(){ka||(ka=new a["a"]({render:function(e){return e(p)},router:La,store:Na}).$mount("#app"))})},"58fc":function(e,t,n){"use strict";var a=n("968b"),s=n.n(a);s.a},"5a7d":function(e,t,n){"use strict";var a=n("7653"),s=n.n(a);s.a},"60b6":function(e,t,n){"use strict";var a=n("01ba"),s=n.n(a);s.a},6361:function(e,t,n){"use strict";var a=n("08b1"),s=n.n(a);s.a},"64a9":function(e,t,n){},"71c7":function(e,t,n){"use strict";var a=n("eb52"),s=n.n(a);s.a},7544:function(e,t,n){"use strict";var a=n("011a"),s=n.n(a);s.a},7653:function(e,t,n){},"7d74":function(e,t,n){},"7ffa":function(e,t,n){"use strict";var a=n("3e04"),s=n.n(a);s.a},"808f":function(e,t,n){"use strict";var a=n("445b"),s=n.n(a);s.a},"854b":function(e,t,n){},"8f6d":function(e,t,n){},"907e":function(e,t,n){"use strict";var a=n("854b"),s=n.n(a);s.a},"968b":function(e,t,n){},a55e:function(e,t,n){"use strict";var a=n("7d74"),s=n.n(a);s.a},b448:function(e,t,n){},b911:function(e,t,n){"use strict";var a=n("ba91"),s=n.n(a);s.a},ba91:function(e,t,n){},c900:function(e,t,n){"use strict";var a=n("f65a"),s=n.n(a);s.a},eb52:function(e,t,n){},eee1:function(e,t,n){"use strict";var a=n("8f6d"),s=n.n(a);s.a},f004:function(e,t,n){},f49a:function(e,t,n){"use strict";var a=n("f004"),s=n.n(a);s.a},f65a:function(e,t,n){}});
//# sourceMappingURL=app.d8d3a0e4.js.map