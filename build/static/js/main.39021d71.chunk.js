(this.webpackJsonpreddit_cta=this.webpackJsonpreddit_cta||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/redditLogo.afe63cf7.png"},126:function(e,t,a){e.exports=a(169)},131:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},155:function(e,t,a){},158:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),s=(a(131),a(9)),l=a.n(s),u=a(20),i=a(12),m=a(15),d=a.n(m),p=(a(150),a(22)),f=(a(151),a(213)),b=a(220),h=function(e){var t=e.user,a=e.email,r=e.setEmail,o=e.password,s=e.setPassword,l=e.userName,u=e.setUserName,i=e.handleLogIn,m=e.handleSignUp,d=e.userExist,p=e.setUserExist,h=e.emailError,v=e.passwordError,E=e.userNameError;return Object(n.useEffect)((function(){t&&(window.location.href="./")}),[t]),c.a.createElement("div",{className:"loginContainer"},c.a.createElement("div",{className:"loginContent"},d?c.a.createElement("h2",{className:"logInTitle"},"Create an Account"):c.a.createElement("h2",{className:"logInTitle"},"Log In"),c.a.createElement(b.a,{id:"outlined-basic",color:"secondary",variant:"outlined",label:"Email",autoFocus:!0,required:!0,value:a,onChange:function(e){return r(e.target.value)}}),c.a.createElement("p",null,h),c.a.createElement(b.a,{id:"outlined-basic",color:"secondary",variant:"outlined",label:"Password",type:"password",autoFocus:!0,required:!0,value:o,onChange:function(e){return s(e.target.value)}}),c.a.createElement("p",null,v),c.a.createElement(c.a.Fragment,null,d?c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{id:"outlined-basic",color:"secondary",variant:"outlined",label:"Username",autoFocus:!0,required:!0,value:l,onChange:function(e){return u(e.target.value)}}),c.a.createElement("p",null,E),c.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:m},"Sign Up"),c.a.createElement("p",null,"Have an account?",c.a.createElement("br",null),c.a.createElement("span",{className:"logInClick",onClick:function(){return p(!d)}},"Login"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:i},"Log In"),c.a.createElement("p",null,"Don't have an account?",c.a.createElement("br",null),c.a.createElement("span",{className:"logInClick",onClick:function(){return p(!d)}},"Sign Up"))))))},v=a(53),E=a.n(v),g=(a(155),function(e){var t=e.allPost,a=Object(p.f)(),r=function(e,t){e.preventDefault(),function(e){a.push("/post/".concat(e))}(t)},o=t.map((function(e){return c.a.createElement("div",{className:"postCard",key:e.id,onClick:function(t){r(t,e.id)}},c.a.createElement("div",{className:"postPostedHeader"},c.a.createElement(E.a,{fontSize:"large",color:"secondary"}),c.a.createElement("p",{className:"postSubreddit"},c.a.createElement("b",null,"r/",e.subname)),c.a.createElement("p",{className:"postUser"}," Posted by u/",e.user_name)),c.a.createElement("div",{className:"postDetails"},c.a.createElement("h2",null,e.title),c.a.createElement("p",null,e.body),e.image?c.a.createElement("img",{className:"postImage",src:e.image,alt:"post_image"}):null))}));return Object(n.useEffect)((function(){}),[t]),c.a.createElement("div",null,o)}),j=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!0!==Number.isInteger(t)){e.next=8;break}return e.next=4,d.a.get("http://localhost:3001/posts/".concat(t));case 4:a=e.sent,o(a.data.payload),e.next=12;break;case 8:return e.next=10,d.a.get("http://localhost:3001/posts/");case 10:n=e.sent,o(n.data.payload);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s(e.choosen)}),[e]),c.a.createElement("div",{className:"postFeed"},c.a.createElement(g,{allPost:r}))},O=(a(158),a(74)),y=(a(162),O.a.initializeApp({apiKey:"AIzaSyCjYwVQi6fcraNbfaLTvLKtA5QFikDZqYc",authDomain:"cta-reddit.firebaseapp.com",projectId:"cta-reddit",storageBucket:"cta-reddit.appspot.com",messagingSenderId:"421801727139",appId:"1:421801727139:web:abf9eeeca88b53ee6a5b16",measurementId:"G-E4TVSH9EGV"})),x=O.a.storage();O.a.analytics();var k=a(102),w=a.n(k),N=a(103),C=a.n(N),S=function(){var e=y.auth().currentUser,t=Object(p.f)(),a=function(){return t.push("/addpost")};return c.a.createElement("div",{className:"homeContainer"},c.a.createElement("div",{className:"homeFeed"},e?c.a.createElement("div",{className:"homeCreatePost"},c.a.createElement(E.a,{className:"icon",fontSize:"large",color:"secondary",onClick:a}),c.a.createElement(b.a,{id:"outlined-basic",color:"secondary",label:"Create Post",variant:"outlined",style:{width:750},onClick:a}),c.a.createElement(w.a,{className:"icon",fontSize:"large",color:"secondary",onClick:a}),c.a.createElement(C.a,{className:"icon",fontSize:"large",color:"secondary",onClick:a})):null,c.a.createElement(j,{choosen:[]})))},_=(a(163),a(104)),I=a.n(_),F=a(214),D=a(211),P=a(215),U=a(216),L=a(100),H=a(217),z=a(105),A=a.n(z),q=a(115),T=a(222),B=a(108),R=a.n(B),V=a(107),W=a.n(V),G=Object(n.createContext)(),J=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(i.a)(a,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:3001/users/search/".concat(t));case 3:a=e.sent,s(a.data.payload[0].id),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();y.auth().onAuthStateChanged((function(t){null!==t&&e(t.email)}))}),[]),c.a.createElement(G.Provider,{value:{userID:o}},t)},K=a(221),M=Object(F.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Q=function(){var e=y.auth().currentUser,t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)([]),m=Object(i.a)(s,2),h=m[0],v=m[1],E=Object(n.useState)(""),g=Object(i.a)(E,2),j=g[0],O=g[1],x=Object(n.useState)(h[0]),k=Object(i.a)(x,2),w=k[0],N=k[1],C=Object(n.useState)(""),S=Object(i.a)(C,2),_=S[0],F=S[1],z=Object(p.f)(),B=function(){return z.push("/")},V=M(),J=c.a.useState(null),Q=Object(i.a)(J,2),Y=Q[0],Z=Q[1],$=Object(n.useContext)(G).userID,X=function(e){z.push({pathname:"/subreddit/".concat(e)})},ee=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""!==(a=t.target.value)&&(O(a),"Home"===a?B():X(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){Z(null)},ae=function(){te(),y.auth().signOut(),window.location.href="./"},ne=function(){te(),z.push("/addsubreddit")};return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===$){e.next=6;break}return e.next=4,d.a.get("http://localhost:3001/subscriptions/user/".concat($));case 4:t=e.sent,o(t.data.payload);case 6:return e.next=8,d.a.get("http://localhost:3001/subreddits/");case 8:a=e.sent,v(a.data.payload),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&null===t){e.next=11;break}return e.prev=1,e.next=4,d.a.get("http://localhost:3001/subreddits/".concat(t));case 4:e.sent.data.payload.subname&&X(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();!function(e){void 0===e&&null===e||X(e)}(w),t(_),e()}),[$,w]),c.a.createElement(P.a,{style:{height:60},position:"static"},c.a.createElement(U.a,null,c.a.createElement(H.a,{justify:"space-between",container:!0,spacing:24},c.a.createElement(H.a,{item:!0},c.a.createElement("img",{src:I.a,className:"Logo",alt:"",onClick:function(){O("Home"),B()}})),e?c.a.createElement(H.a,{item:!0},c.a.createElement(D.a,{className:V.formControl},c.a.createElement(L.a,{color:"secondary",value:j,onChange:ee,inputProps:{name:"subreddit",id:"subname"}},c.a.createElement("option",{value:"Home"},"Home"),r.map((function(e){return c.a.createElement("option",{key:e.id,value:e.subname},"/r",e.subname)}))))):null,c.a.createElement(H.a,{item:!0,className:"navBarSearch"},c.a.createElement(A.a,{fontSize:"large",color:"secondary"}),c.a.createElement(K.a,{id:"combo-box-subs",value:w,onChange:function(e,t){N(t)},inputValue:_,onInputChange:function(e,t){F(t)},clearOnEscape:!0,options:h,getOptionLabel:function(e){return e.subname},style:{width:300},autoHighlight:!0,renderInput:function(e){return c.a.createElement(b.a,Object.assign({},e,{value:e,label:"Search",variant:"outlined"}))}})),c.a.createElement(H.a,{item:!0},e?c.a.createElement("div",null,c.a.createElement(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){Z(e.currentTarget)}},e.displayName),c.a.createElement(q.a,{id:"simple-menu",anchorEl:Y,keepMounted:!0,open:Boolean(Y),onClose:te},c.a.createElement(T.a,{onClick:ne},c.a.createElement(W.a,{fontSize:"medium",color:"secondary",onClick:ne}),"Create Subreddit"),c.a.createElement(T.a,{onClick:ae},c.a.createElement(R.a,{fontSize:"medium",color:"secondary",onClick:ae}),"Logout"))):c.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){z.push("/login")}},"Log In")))))},Y=(a(164),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(p.g)().subname,s=Object(n.useContext)(G).userID,m=Object(n.useState)(!1),b=Object(i.a)(m,2),h=b[0],v=b[1],E=Object(n.useState)(),g=Object(i.a)(E,2),O=g[0],y=g[1],x=Object(n.useState)(""),k=Object(i.a)(x,2),w=k[0],N=k[1],C=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.post("http://localhost:3001/subscriptions/add",{user_id:s,sub_id:O});case 4:v(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.delete("http://localhost:3001/subscriptions/delete",{data:{user_id:s,sub_id:O}});case 4:v(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:3001/subscriptions/usersubbed/".concat(s,"/").concat(t));case 3:e.sent.data.payload&&v(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),v(!1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();(function(){var t=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("http://localhost:3001/subreddits/".concat(o));case 3:return a=t.sent,t.next=6,d.a.get("http://localhost:3001/subscriptions/subreddit/".concat(a.data.payload.id));case 6:n=t.sent,r(a.data.payload),e(a.data.payload.id),y(a.data.payload.id),N(n.data.payload.count),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}})()()}),[o,s,h]),c.a.createElement("div",{className:"subContainer"},c.a.createElement("div",{className:"subInfo"},c.a.createElement("div",{className:"subHeader"},c.a.createElement("h1",{className:"subTitle"},a.subname),c.a.createElement("p",{className:"subRoute"},"/r/",a.subname)),"1"===w?c.a.createElement("p",null,w," member"):c.a.createElement("p",null,w," members"),h?c.a.createElement(f.a,{variant:"contained",color:"secondary",type:"submit",style:{height:50,width:100},onClick:S},"Leave"):c.a.createElement(f.a,{variant:"contained",color:"secondary",type:"submit",style:{height:50,width:100},onClick:C},"Join")),c.a.createElement("div",{className:"subFeed"},c.a.createElement(j,{choosen:a.id})))}),Z=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],r=a[1];return{value:c,onChange:function(e){r(e.target.value)}}},$=(a(165),a(109)),X=a.n($),ee=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],h=s[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),g=E[0],j=E[1],O=Z(""),y=Z(""),k=Object(n.useState)([]),w=Object(i.a)(k,2),N=w[0],C=w[1],S=Object(n.useState)([]),_=Object(i.a)(S,2),I=_[0],F=_[1],P=Object(n.useContext)(G).userID,U=Object(p.f)(),H=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:3001/subreddits/");case 3:t=e.sent,r(t.data.payload),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.post("http://localhost:3001/posts/",{user_id:P,sub_id:m,title:O.value,context:y.value,image:g});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:U.push("/");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){H()}),[]),c.a.createElement("div",{className:"createPostContainer"},c.a.createElement("div",{className:"createPostSelectContainer"},c.a.createElement(X.a,{fontSize:"large",color:"secondary"}),c.a.createElement(D.a,null,c.a.createElement(L.a,{value:m,onChange:function(e){e.preventDefault(),h(e.target.value)}},c.a.createElement("option",{hidden:!0},"Choose a Community"),a.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},"/r",e.subname)}))))),c.a.createElement("form",{className:"createForm",onSubmit:z},c.a.createElement(b.a,Object.assign({id:"outlined-basic",color:"secondary",label:"Title",variant:"outlined",autoFocus:!0,required:!0},O)),c.a.createElement(b.a,Object.assign({id:"outlined-basic",color:"secondary",label:"Text(optional)",variant:"outlined",autoFocus:!0},y)),c.a.createElement("label",null,"Upload Image (optional)"),c.a.createElement("input",{className:"uploadFile",type:"file",onChange:function(e){e.preventDefault();var t=e.target.files[0];(F(t.name),C(URL.createObjectURL(t)),t)&&x.ref("images/".concat(t.name)).put(t).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){x.ref("images").child(t.name).getDownloadURL().then((function(e){j(e)}))}))}}),N.length>0?c.a.createElement("div",{className:"upPreviewDetails"},c.a.createElement("p",null,I),c.a.createElement("img",{className:"uploadPreview",src:N,alt:"preview_image"})):null,c.a.createElement(f.a,{variant:"contained",color:"secondary",type:"submit"},"Post")))},te=a(110),ae=(a(166),function(){var e=Z(""),t=Object(n.useContext)(G).userID,a=Object(p.f)(),r=function(){var n=Object(u.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,n.next=4,d.a.post("http://localhost:3001/subreddits/",{user_id:t,subname:e.value});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:a.push("/"),window.location.reload();case 11:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return c.a.createElement("div",{className:"createSubContainer"},c.a.createElement("form",{className:"createSubForm",onSubmit:r},c.a.createElement("h2",null,"Create Subreddit /r"),c.a.createElement(b.a,Object.assign(Object(te.a)({id:"outlined-basic",color:"secondary",label:"Subname",variant:"outlined",required:!0,autoFocus:!0},"required",!0),e)),c.a.createElement(f.a,{variant:"contained",color:"secondary",type:"submit"},"Post")))}),ne=(a(167),a(218)),ce=a(112),re=a.n(ce),oe=a(113),se=a.n(oe),le=a(111),ue=a.n(le),ie=function(){var e=Object(p.g)().id,t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)([]),m=Object(i.a)(s,2),h=m[0],v=m[1],g=Object(n.useState)([]),j=Object(i.a)(g,2),O=j[0],x=j[1],k=Object(n.useContext)(G).userID,w=Z(""),N=y.auth().currentUser,C=Object(p.f)(),S=function(){return C.push("/login")},_=function(){var t=Object(u.a)(l.a.mark((function t(){var a,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("http://localhost:3001/posts/post/".concat(e));case 3:return a=t.sent,t.next=6,d.a.post("http://localhost:3001/votes/count",{post_id:"".concat(e)});case 6:return n=t.sent,t.next=9,d.a.get("http://localhost:3001/comments/".concat(e));case 9:c=t.sent,o(a.data.payload),v(n.data.payload),x(c.data.payload),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}(),I=O.map((function(e){return c.a.createElement("div",{className:"commentCard",key:e.id},c.a.createElement("div",{className:"commentHeader"},c.a.createElement(E.a,{fontSize:"large",color:"secondary"}),c.a.createElement("p",{className:"commentInfo"},e.user_name),c.a.createElement("p",{className:"commentDate"},ue()(e.comment_date).fromNow())),c.a.createElement("div",{className:"commentDetails"},c.a.createElement("p",null,e.body)))})),F=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),null===N){t.next=13;break}return t.prev=2,t.next=5,d.a.post("http://localhost:3001/comments/",{user_id:k,post_id:e,context:w.value});case 5:_(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:t.next=14;break;case 13:S();case 14:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===N){t.next=26;break}return t.prev=1,t.next=4,d.a.post("http://localhost:3001/votes/check",{user_id:k,post_id:e});case 4:if(0!==(n=t.sent).data.payload.length){t.next=10;break}return t.next=8,d.a.post("http://localhost:3001/votes/add",{user_id:k,post_id:e,vote_type:a});case 8:t.next=18;break;case 10:if(n.data.payload[0].vote_type!==a){t.next=15;break}return t.next=13,d.a.delete("http://localhost:3001/votes/delete",{data:{user_id:k,post_id:e}});case 13:t.next=18;break;case 15:if(n.data.payload[0].vote_type===a){t.next=18;break}return t.next=18,d.a.patch("http://localhost:3001/votes/changevote",{user_id:k,post_id:e,vote_type:a});case 18:_(),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),console.log(t.t0);case 24:t.next=27;break;case 26:S();case 27:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){_()}),[e]),c.a.createElement("div",{className:"singlePostCard"},c.a.createElement("div",{className:"postVotes"},c.a.createElement(ne.a,{"aria-label":"up",onClick:function(){return D("up")}},c.a.createElement(re.a,{className:"icon",style:{color:"#F74202"}})),c.a.createElement("p",{className:"postCount"},h),c.a.createElement(ne.a,{"aria-label":"down",onClick:function(){return D("down")}},c.a.createElement(se.a,{className:"icon",style:{color:"#8D8FF7"}}))),c.a.createElement("div",{className:"postContent"},c.a.createElement("div",{className:"postHolder"},c.a.createElement("h2",{className:"postPostedHeader"},r.title),c.a.createElement("p",{className:"postDetails"},r.body),r.image?c.a.createElement("img",{className:"postImage",src:r.image,alt:"post_image"}):null),c.a.createElement("form",{className:"postForm",onSubmit:F},c.a.createElement(b.a,Object.assign({id:"outlined-basic",color:"secondary",variant:"outlined",label:"What are your thoughts?",autoFocus:!0,required:!0},w)),c.a.createElement("br",null),c.a.createElement(f.a,{variant:"contained",color:"secondary",type:"submit"},"Post")),c.a.createElement("div",{className:"postComments"},I)))},me=a(114),de=a(219),pe=Object(me.a)({palette:{primary:{main:"#FFFFFF"},secondary:{main:"#1072C4"}}});var fe=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],f=s[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),E=v[0],g=v[1],j=Object(n.useState)(""),O=Object(i.a)(j,2),x=O[0],k=O[1],w=Object(n.useState)(""),N=Object(i.a)(w,2),C=N[0],_=N[1],I=Object(n.useState)(""),F=Object(i.a)(I,2),D=F[0],P=F[1],U=Object(n.useState)(""),L=Object(i.a)(U,2),H=L[0],z=L[1],A=Object(n.useState)(!1),q=Object(i.a)(A,2),T=q[0],B=q[1],R=function(){_(""),P("")},V=function(){R(),y.auth().signInWithEmailAndPassword(m,E).catch((function(e){switch(e.code){default:case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":_(e.message);break;case"auth/wrong-password":P(e.message)}}))},W=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),y.auth().createUserWithEmailAndPassword(m,E).then((function(e){return y.auth().currentUser.updateProfile({displayName:x})})).catch((function(e){switch(e.code){default:case"auth/email-already-in-use":case"auth/invalid-email":_(e.message);break;case"auth/weak-password":P(e.message);break;case"auth/invalid-display-name":z(e.message)}})),e.prev=2,e.next=5,d.a.post("http://localhost:3001/users",{user_name:x,email:m});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y.auth().onAuthStateChanged((function(e){e?(f(""),g(""),r(e)):r("")}))}),[]),c.a.createElement(de.a,{theme:pe},c.a.createElement("div",{className:"App"},c.a.createElement(J,null,c.a.createElement(Q,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",render:function(){return c.a.createElement(S,{user:a})}}),c.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return c.a.createElement(h,{user:a,email:m,setEmail:f,password:E,userName:x,setUserName:k,setPassword:g,handleLogIn:V,handleSignUp:W,userExist:T,setUserExist:B,emailError:C,passwordError:D,userNameError:H})}}),c.a.createElement(p.a,{exact:!0,path:"/subreddit/:subname",component:Y}),c.a.createElement(p.a,{exact:!0,path:"/addpost",component:ee}),c.a.createElement(p.a,{exact:!0,path:"/addsubreddit",component:ae}),c.a.createElement(p.a,{exact:!0,path:"/post/:id",component:ie})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(34);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(be.a,null,c.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.39021d71.chunk.js.map