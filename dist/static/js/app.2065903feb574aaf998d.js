webpackJsonp([1],{"9oHi":function(t,o,e){t.exports=e.p+"static/img/book-863418_1920.fb15ded.jpg"},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("7+uW"),c=e("n6Cl"),n=(e("Viya"),{render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]});var r=e("VU/8")({name:"app"},n,!1,function(t){e("d/c6")},null,null).exports,s=e("/ocq"),d={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"HowThisBook mdc-typography"},[e("mdc-layout-app",[e("mdc-toolbar",{attrs:{slot:"toolbar",fixed:""},slot:"toolbar"},[e("mdc-toolbar-row",[e("mdc-toolbar-section",{attrs:{"align-start":""}},[e("mdc-toolbar-menu-icon",{attrs:{event:"toggle-drawer"}}),t._v(" "),e("router-link",{attrs:{to:{name:"Home"},tag:"mdc-toolbar-title"}},[t._v("好書客")])],1),t._v(" "),e("mdc-toolbar-section",{attrs:{"align-end":""}},[e("mdc-toolbar-icon",{attrs:{event:"show-help",icon:"help"}})],1)],1)],1),t._v(" "),e("mdc-drawer",{attrs:{slot:"drawer","toggle-on":"toggle-drawer"},slot:"drawer"},[e("mdc-drawer-list",[e("router-link",{attrs:{to:{name:"Home"},tag:"mdc-drawer-item","start-icon":"inbox"}},[e("span",{staticClass:"mdc-list-item__graphic"},[e("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("inbox")])]),t._v("\n            支持者名單\n          ")]),t._v(" "),e("mdc-drawer-item",{attrs:{"start-icon":"send"}},[t._v("FAQ")]),t._v(" "),e("mdc-drawer-item",{attrs:{"start-icon":"drafts"}},[t._v("粉絲專頁")]),t._v(" "),e("mdc-drawer-item",{attrs:{"start-icon":"drafts"}},[t._v("關於我們")]),t._v(" "),e("mdc-drawer-item",{attrs:{"start-icon":"drafts"}},[t._v("發言規則")])],1)],1),t._v(" "),e("main",{staticClass:"content"},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var i=e("VU/8")({name:"HowThisBook",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){e("cHxM")},"data-v-6be44bc4",null).exports,m=e("Dd8w"),l=e.n(m),_=e("NYxO"),u={name:"Home",data:function(){return{searchBookName:"",currentInput:"book",currentTab:"experience",comments:[{id:1,book_id:1,ISBN:"",comment:"",create_at:"建立時間"}]}},computed:l()({},Object(_.b)({books:"getBooks"})),methods:{hotTabsOnChange:function(t){this.currentTab=["experience","Q&A","gossip"][t]}}},v={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"home mdc-typography"},[a("mdc-layout-grid",{staticClass:"home__search-container",style:{backgroundImage:"url("+e("9oHi")+")"}},[a("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}}),t._v(" "),a("mdc-layout-cell",{staticClass:"home__search-container__search-component",attrs:{phone:"4",tablet:"6",desktop:"8"}},[a("div",{staticClass:"home__search-container__search-component__container"},[a("mdc-display",[t._v("好書客")]),t._v(" "),a("mdc-headline",[t._v("好書客，一個分享讀書心得的平台。")]),t._v(" "),a("div",[a("mdc-button",{attrs:{raised:""},on:{click:function(o){t.currentInput="book"}}},[t._v("找好書")]),t._v(" "),a("mdc-button",{attrs:{raised:""},on:{click:function(o){t.currentInput="author"}}},[t._v("找作者")])],1),t._v(" "),a("div",["book"===t.currentInput?a("mdc-textfield",{attrs:{label:"找一本好書",box:"","leading-icon":"search"},model:{value:t.searchBookName,callback:function(o){t.searchBookName=o},expression:"searchBookName"}}):t._e(),t._v(" "),"author"===t.currentInput?a("mdc-textfield",{attrs:{label:"找一個作者",box:"","leading-icon":"search"},model:{value:t.searchBookName,callback:function(o){t.searchBookName=o},expression:"searchBookName"}}):t._e()],1)],1)]),t._v(" "),a("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}})],1),t._v(" "),a("mdc-layout-grid",{staticClass:"home__book-container"},[a("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}}),t._v(" "),a("mdc-layout-cell",{staticClass:"home__book-container__messages-component",attrs:{phone:"4",tablet:"6",desktop:"8"}},[a("mdc-headline",[t._v("熱門書籍")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"experience"===t.currentTab,expression:"currentTab === 'experience'"}]},t._l(t.books,function(o){return a("router-link",{key:o.id,attrs:{to:{name:"Book",params:{ISBN:o.ISBN}},tag:"div"}},[a("mdc-card",{staticClass:"home__book-container__messages-component__card"},[a("mdc-card-primary-action",[a("mdc-card-text",[a("mdc-layout-grid",[a("mdc-layout-cell",{attrs:{phone:"4",tablet:"3",desktop:"3"}},[a("img",{attrs:{src:o.imgSrc}})]),t._v(" "),a("mdc-layout-cell",{attrs:{phone:"4",tablet:"5",desktop:"6"}},[a("mdc-body",[t._v(t._s(o.bookName))]),t._v(" "),a("mdc-body",[t._v("ISBN: "+t._s(o.ISBN))])],1),t._v(" "),a("mdc-layout-cell",{attrs:{phone:"4",tablet:"8",desktop:"3"}},[a("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),a("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),a("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),a("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),a("mdc-icon",{attrs:{icon:"star_border"}})],1),t._v(" "),a("mdc-layout-cell",{attrs:{phone:"4",tablet:"8",desktop:"12"}},[a("mdc-body",[t._v("作者: "+t._s(o.author))]),t._v(" "),a("mdc-body",[t._v("譯者: "+t._s(o.translator))]),t._v(" "),a("mdc-body",[t._v("出版社: "+t._s(o.publishing_house))]),t._v(" "),a("mdc-body",[t._v("出版日期: "+t._s(o.publish_date))])],1)],1)],1),t._v(" "),a("mdc-card-actions",[a("mdc-card-action-icons",{staticClass:"home__book-container__messages-component__card__action-icons"},[a("mdc-card-action-icon",{attrs:{icon:"thumb_up"}})],1),t._v(" "),a("mdc-card-action-icons",{staticClass:"home__book-container__messages-component__card__action-icons"},[a("mdc-card-action-icon",{attrs:{icon:"thumb_down"}})],1),t._v(" "),a("mdc-card-action-icons",{staticClass:"home__book-container__messages-component__card__action-icons"},[a("mdc-card-action-icon",{attrs:{icon:"comment"}})],1)],1)],1)],1)],1)}))],1),t._v(" "),a("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}})],1),t._v(" "),a("mdc-layout-grid",{staticClass:"home__footer-container"},[a("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}}),t._v(" "),a("mdc-layout-cell",{staticClass:"home__footer-container__footer-component",attrs:{phone:"4",tablet:"6",desktop:"8"}},[a("div",{staticClass:"home__footer-container__footer-component__container"},[a("div",[a("mdc-button",{attrs:{raised:""},on:{click:function(o){t.currentInput="book"}}},[t._v("找好書")]),t._v(" "),a("mdc-button",{attrs:{raised:""},on:{click:function(o){t.currentInput="author"}}},[t._v("找作者")])],1),t._v(" "),a("div",["book"===t.currentInput?a("mdc-textfield",{attrs:{label:"找一本好書",box:"","leading-icon":"search"},model:{value:t.searchBookName,callback:function(o){t.searchBookName=o},expression:"searchBookName"}}):t._e(),t._v(" "),"author"===t.currentInput?a("mdc-textfield",{attrs:{label:"找一個作者",box:"","leading-icon":"search"},model:{value:t.searchBookName,callback:function(o){t.searchBookName=o},expression:"searchBookName"}}):t._e()],1),t._v(" "),a("mdc-body",[a("mdc-button",{attrs:{raised:""}},[t._v("關於我們")]),t._v(" "),a("mdc-button",{attrs:{raised:""}},[t._v("聯絡我們")]),t._v(" "),a("mdc-button",{attrs:{raised:""}},[t._v("FAQ")]),t._v(" "),a("mdc-button",{attrs:{raised:""}},[t._v("服務條款&隱私權政策")])],1),t._v(" "),a("mdc-body",[t._v("© 2018 好書客 All Rights Reserved.")])],1)]),t._v(" "),a("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}})],1)],1)},staticRenderFns:[]};var b=e("VU/8")(u,v,!1,function(t){e("Se2+")},"data-v-3f3b0d78",null).exports,p={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"book mdc-typography"},[e("mdc-layout-grid",[e("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}}),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"6",desktop:"8"}},[e("mdc-card",{staticClass:"mdc-elevation--z16"},[e("mdc-card-text",[e("mdc-layout-grid",[e("mdc-layout-cell",{attrs:{phone:"4",tablet:"3",desktop:"3"}},[e("img",{attrs:{src:t.book.imgSrc}})]),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"5",desktop:"9"}},[e("mdc-display",[t._v(t._s(t.book.bookName))]),t._v(" "),e("mdc-body",[t._v("ISBN: "+t._s(t.book.ISBN))]),t._v(" "),e("mdc-body",[e("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),e("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),e("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),e("mdc-icon",{attrs:{icon:"star"}}),t._v(" "),e("mdc-icon",{attrs:{icon:"star_border"}})],1)],1),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"8",desktop:"12"}},[e("mdc-body",[t._v("作者: "+t._s(t.book.author))]),t._v(" "),e("mdc-body",[t._v("譯者: "+t._s(t.book.translator))]),t._v(" "),e("mdc-body",[t._v("出版社: "+t._s(t.book.publishing_house))]),t._v(" "),e("mdc-body",[t._v("出版日期: "+t._s(t.book.publish_date))])],1)],1)],1),t._v(" "),e("mdc-card-actions",[e("mdc-card-action-icons",[e("mdc-button",{attrs:{raised:""},on:{click:function(o){t.create_comment_div=!0}}},[e("i",{staticClass:"material-icons mdc-button__icon"},[t._v("add")]),t._v("\n              評論\n            ")])],1)],1)],1)],1),t._v(" "),e("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}})],1),t._v(" "),t.create_comment_div?e("mdc-layout-grid",[e("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}}),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"6",desktop:"8"}},[e("mdc-card",[e("mdc-button",{attrs:{raised:""},on:{click:function(o){t.create_comment_div=!1}}},[e("i",{staticClass:"material-icons mdc-button__icon"},[t._v("add")]),t._v("\n          收起\n        ")]),t._v(" "),e("mdc-card-text",[e("mdc-layout-grid",[e("mdc-layout-cell",{attrs:{phone:"4",tablet:"8",desktop:"12"}},[e("mdc-body",[t._v("你要發表的是：")]),t._v(" "),e("mdc-body",[e("mdc-button",{attrs:{raised:""}},[t._v("讀書心得")]),t._v(" "),e("mdc-button",{attrs:{raised:""}},[t._v("問答")]),t._v(" "),e("mdc-button",{attrs:{raised:""}},[t._v("閒聊")])],1),t._v(" "),e("mdc-body",[t._v("優點： 目前還可以輸入 5000 字")]),t._v(" "),e("mdc-body",[e("mdc-textfield",{attrs:{fullwidth:"",multiline:"",rows:"2",label:"想想這本書最令你印象深刻的地方"},model:{value:t.advantage,callback:function(o){t.advantage=o},expression:"advantage"}})],1),t._v(" "),e("mdc-body",[t._v("缺點： 目前還可以輸入 5000 字")]),t._v(" "),e("mdc-body",[e("mdc-textfield",{attrs:{fullwidth:"",multiline:"",rows:"2",label:"想想這本書讓你不知所云的地方"},model:{value:t.advantage,callback:function(o){t.advantage=o},expression:"advantage"}})],1),t._v(" "),e("mdc-body",[t._v("整體而言，你覺得這本書：")]),t._v(" "),e("mdc-body",[e("mdc-button",{attrs:{raised:""}},[t._v("好")]),t._v(" "),e("mdc-button",{attrs:{raised:""}},[t._v("普")]),t._v(" "),e("mdc-button",{attrs:{raised:""}},[t._v("差")])],1),t._v(" "),e("mdc-body",[e("mdc-switch",{model:{value:t.checked,callback:function(o){t.checked=o},expression:"checked"}},[t._v(t._s(t.Label))])],1),t._v(" "),e("mdc-body",[e("mdc-button",{attrs:{raised:""}},[t._v("送出")])],1)],1)],1)],1),t._v(" "),e("mdc-card-actions",[e("mdc-card-action-icons",[e("mdc-button",{attrs:{raised:""},on:{click:function(o){t.create_comment_div=!0}}},[e("i",{staticClass:"material-icons mdc-button__icon"},[t._v("add")]),t._v("\n              評論\n            ")])],1)],1)],1)],1),t._v(" "),e("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}})],1):t._e(),t._v(" "),e("mdc-layout-grid",[e("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}}),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"6",desktop:"8"}},t._l(t.comments,function(o,a){return e("div",{key:o.id,staticClass:"book__comment-container"},[e("mdc-card",{staticClass:"book__comment-container__card"},[e("mdc-card-text",[e("mdc-layout-grid",[e("mdc-layout-cell",{staticClass:"book__comment-container__card__people",attrs:{phone:"4",tablet:"1",desktop:"3"}},[e("img",{attrs:{src:"https://source.unsplash.com/80x80/?face&sig="+a}}),t._v(" "),e("div",[e("mdc-body",{attrs:{typo:"body2"}},[t._v(t._s(o.name))]),t._v(" "),e("mdc-body",{attrs:{typo:"body2"}},[t._v("2周前")])],1)]),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"6",desktop:"7"}},[e("mdc-body",[t._v(t._s(t.book.bookName))])],1),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"1",desktop:"2"}},[e("mdc-icon",{attrs:{icon:"star_border"}})],1),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"8",desktop:"12"}},[e("mdc-body",{domProps:{innerHTML:t._s(o.comment.replace(/\n/g,"<br>"))}}),t._v(" "),e("mdc-body",{attrs:{typo:"body2"}},[t._v("來自: 127.0.0.1")])],1),t._v(" "),e("mdc-layout-cell",{attrs:{phone:"4",tablet:"8",desktop:"12"}},[e("mdc-caption",[e("mdc-icon",{attrs:{icon:"star_border"}})],1),t._v(" "),e("mdc-caption",[t._v("回覆")]),t._v(" "),e("mdc-caption",[t._v("0")]),t._v(" "),e("mdc-caption",[e("mdc-icon",{attrs:{icon:"star_border"}})],1),t._v(" "),e("mdc-caption",[t._v("同意")]),t._v(" "),e("mdc-caption",[t._v("0")]),t._v(" "),e("mdc-caption",[e("mdc-icon",{attrs:{icon:"star_border"}})],1),t._v(" "),e("mdc-caption",[t._v("反對")]),t._v(" "),e("mdc-caption",[t._v("0")])],1)],1)],1)],1)],1)})),t._v(" "),e("mdc-layout-cell",{attrs:{tablet:"1",desktop:"2"}})],1)],1)},staticRenderFns:[]};var h=e("VU/8")({name:"Home",data:function(){return{create_comment_div:!1,advantage:""}},computed:{book:function(){return this.$store.getters.getBook(this.$route.params.ISBN)},comments:function(){return this.$store.getters.getComments(this.$route.params.ISBN)}},methods:{}},p,!1,function(t){e("rWA+")},null,null).exports;a.a.use(s.a);var k=new s.a({routes:[{path:"/",name:"HowThisBook",component:i,children:[{path:"/",component:b,name:"Home"},{path:"/book/:ISBN",component:h,name:"Book"}]}],scrollBehavior:function(t,o,e){return e||{x:0,y:0}}}),y=e("bOdI"),g=e.n(y),f=e("//Fk"),w=e.n(f),B="step/UPDATE_STEP",N={books:[{id:1,ISBN:"9789864766826",bookName:"重構 JavaScript",imgSrc:"https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/078/94/0010789427.jpg&v=5b1522bd&w=150&h=150",author:"Evan Burchard",translator:"蔡存哲",desc:"描述, 簡介",publishing_house:"歐萊禮",publish_date:"2018/06/14",create_at:"建立時間"},{id:2,ISBN:"9789863796725",bookName:"JavaScript再上一層樓：用新一代Node.js把後端也搞定",imgSrc:"https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/19/0010791908.jpg&w=150&h=150",author:"李鍇",translator:"",desc:"描述, 簡介",publishing_house:"佳魁資訊",publish_date:"2018/07/05",create_at:"建立時間"}]},x={getBooks:function(){return N.books},getBook:function(t){return function(o){return t.books.find(function(t){return t.ISBN===o})}}},I={updateStep:function(t,o){var e=t.commit;return new w.a(function(t,a){setTimeout(function(){o?(e(B,o),t()):a()},0)})}},S=g()({},B,function(t,o){t.step=o}),C={state:N,getters:x,actions:I,mutations:S},T="step/UPDATE_STEP",H={state:{comments:[{id:1,book_id:1,ISBN:"9789864766826",name:"匿名",comment:"評論在此\n      評論在此\n      評論在此",create_at:"建立時間"},{id:2,book_id:1,ISBN:"9789864766826",name:"匿名",comment:"評論在此\n      評論在此\n      評論在此",create_at:"建立時間"},{id:3,book_id:2,ISBN:"9789863796725",name:"匿名",comment:"評論在此\n      評論在此\n      評論在此",create_at:"建立時間"}]},getters:{getComments:function(t){return function(o){return t.comments.filter(function(t){return t.ISBN===o})}}},actions:{updateStep:function(t,o){var e=t.commit;return new w.a(function(t,a){setTimeout(function(){o?(e(T,o),t()):a()},0)})}},mutations:g()({},T,function(t,o){t.step=o})};a.a.use(_.a);var A=new _.a.Store({modules:{books:C,comments:H},strict:!0});a.a.config.productionTip=!1,a.a.use(c.a),new a.a({el:"#app",router:k,store:A,template:"<App/>",components:{App:r}})},"Se2+":function(t,o){},Viya:function(t,o){},cHxM:function(t,o){},"d/c6":function(t,o){},"rWA+":function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.2065903feb574aaf998d.js.map