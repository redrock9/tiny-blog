webpackJsonp([0],[,,function(e,t,n){"use strict";var o=n(1),s=n(16),a=n(12),r=n.n(a);o.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Welcome",component:r.a}]})},function(e,t,n){function o(e){n(9)}var s=n(0)(n(5),n(14),o,"data-v-4866abf7",null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(3),a=n.n(s),r=n(2);o.a.config.productionTip=!1,document.documentElement.style="margin: 0; padding: 0; height: 100%; width: 100%",document.body.style="margin: 0; padding: 0; height: 100%; width: 100%",function(e,t,n,o){var s=new XMLHttpRequest;s.open(e,t,!0),s.onreadystatechange=function(){if(4===this.readyState)return 200!==this.status?void console.log("response geeft errorcode"+this.status):void o(this.responseText)},s.send(n)}("GET","/api/posts",null,function(e){console.log(e);var t=JSON.parse(e);for(var n in t.posts)console.log(t.posts[n].title+"\n"+t.posts[n].content)}),new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{title:"$~Welcome_"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"posts",data:function(){return{}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),s=n.n(o);t.default={name:"Welcome",components:{posts:s.a},data:function(){return{message:{title:"welcome",text:"Welcome to my humble blog"}}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function o(e){n(10)}var s=n(0)(n(6),n(15),o,null,null);e.exports=s.exports},function(e,t,n){function o(e){n(8)}var s=n(0)(n(7),n(13),o,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"welcome"}},[n("section",{attrs:{id:"welcome-message"}},[n("header",[n("h2",[e._v(e._s(e.message.title))])]),e._v(" "),n("p",[e._v(e._s(e.message.text))])]),e._v(" "),n("posts")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("h1",[e._v(e._s(e.title))])]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"posts"}},[n("ul",[n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")]),e._v(" "),n("li",[e._v("Post naam hier")])])])}]}}],[4]);
//# sourceMappingURL=app.377b84dfaef8409e0907.js.map