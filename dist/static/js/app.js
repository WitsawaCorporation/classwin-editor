webpackJsonp([1],{381:function(t,e,n){function i(t){n(461)}var l=n(113)(n(388),n(931),i,null,null);t.exports=l.exports},382:function(t,e,n){"use strict";function i(t,e){return t.tagName===e?t:null}var l=n(76),s=n.n(l),o=n(90),r=n.n(o),a=n(91),u=n.n(a),c=n(75),h=n.n(c),d=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()(this,t);var i=this;this.quill=e,this.quill.root.addEventListener("click",this.handleClick.bind(this),!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.handler=n.handler,this.quill.theme.modules.toolbar.handlers.image=function(){i.prompt()}}return u()(t,[{key:"prompt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;return this.handler(t).then(function(t){var n=e.quill.getSelection(!0);if(null!=n){var i=n.index+n.length;return e.quill.insertEmbed(i,"image",t,"user"),e.quill.insertText(i+1," ","user"),e.quill.setSelection(i+2,"user"),s.a.resolve(t)}}).catch(function(t){return console.log(t),s.a.reject(t)})}},{key:"handleClick",value:function(t){var e=this,n=i(t.target,"IMG"),l=null!==n;t.target&&l&&e.quill.isEnabled()?(this.imageObj&&this.hide(),this.show(n)):this.imageObj&&this.hide()}},{key:"show",value:function(t){var e=this;this.imageObj=t;var n=e.quill.getIndex(h.a.find(e.imageObj))+1;e.quill.setSelection(n,0),this.prompt(t.getAttribute("data-value")).then(function(){e.quill.deleteText(n-1,1),e.quill.deleteText(n+1,1)}).catch(function(t){console.log(t)})}},{key:"hide",value:function(t){delete this.imageObj}}]),t}();e.a=d,window.Quill&&window.Quill.register("modules/ImagePicker",d)},383:function(t,e,n){"use strict";function i(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}var l=n(76),s=n.n(l),o=n(90),r=n.n(o),a=n(91),u=n.n(a),c=n(75),h=n.n(c),d=function(){function t(e,n){r()(this,t),n=n||{};var i=this;this.quill=e,this.quill.root.addEventListener("click",this.handleClick.bind(this),!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.handler=n.handler,this.quill.theme.modules.toolbar.handlers.formula=function(){i.prompt()}}return u()(t,[{key:"prompt",value:function(t){t=t||"";var e=this;return this.handler(t).then(function(t){var n=e.quill.getSelection(!0);if(null!=n){var i=n.index+n.length;return e.quill.insertEmbed(i,"formula",t,"user"),e.quill.insertText(i+1," ","user"),e.quill.setSelection(i+2,"user"),s.a.resolve(t)}}).catch(function(t){return console.log(t),s.a.reject(t)})}},{key:"handleClick",value:function(t){var e=this,n=i(t.target,"ql-formula"),l=null!==n;t.target&&l&&e.quill.isEnabled()?(this.formularObj&&this.hide(),this.show(n)):this.formularObj&&this.hide()}},{key:"show",value:function(t){var e=this;this.formularObj=t;var n=e.quill.getIndex(h.a.find(e.formularObj))+1;e.quill.setSelection(n,0),this.prompt(t.getAttribute("data-value")).then(function(){e.quill.deleteText(n-1,1),e.quill.deleteText(n+1,1)}).catch(function(t){console.log(t)})}},{key:"hide",value:function(t){delete this.formularObj}}]),t}();e.a=d,window.Quill&&window.Quill.register("modules/EquationEditor",d)},384:function(t,e,n){"use strict";function i(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}var l=n(76),s=n.n(l),o=n(156),r=n.n(o),a=n(90),u=n.n(a),c=n(91),h=n.n(c),d=n(400),f=n.n(d),p=n(398),g=n.n(p),v=n(399),m=n.n(v),b=n(75),j=n.n(b),k=n(480),y=n.n(k),I=j.a.import("blots/embed"),x=j.a.import("core/module");j.a.import("ui/icons").graph='<i class="fa fa-line-chart" aria-hidden="true"></i>';var E=function(t){function e(){return u()(this,e),f()(this,(e.__proto__||r()(e)).apply(this,arguments))}return m()(e,t),h()(e,[{key:"index",value:function(){return 1}},{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=this.domNode,i=this.domNode.getAttribute("data-value");console.log(n),console.log(i);try{y()({target:n,data:[{fn:i,sampler:"builtIn",graphType:"polyline",width:t,height:e}]})}catch(t){console.log(t)}}}],[{key:"create",value:function(t){var n=g()(e.__proto__||r()(e),"create",this).call(this,t);if(n.style.display="inline-block","string"==typeof t){try{y()({target:n,width:300,height:300,data:[{fn:t,sampler:"builtIn",graphType:"polyline"}]})}catch(t){console.log(t)}n.setAttribute("data-value",t)}return n.setAttribute("contenteditable",!1),n}},{key:"value",value:function(t){return t.getAttribute("data-value")}}]),e}(I);E.blotName="graph",E.className="ql-graph",E.tagName="SPAN";var w=function(t){function e(t,n){u()(this,e),n=n||{};var i=f()(this,(e.__proto__||r()(e)).call(this,t,n)),l=i;return i.quill=t,i.options=n,i.quill.root.addEventListener("click",i.handleClick.bind(i),!1),i.handler=n.handler,i.quill.theme.modules.toolbar.handlers.graph=function(){l.prompt()},i}return m()(e,t),h()(e,[{key:"show",value:function(t){var e=this;this.graphObj=t;var n=e.quill.getIndex(j.a.find(e.graphObj))+1;e.quill.setSelection(n,0),this.prompt(t.getAttribute("data-value")).then(function(){e.quill.deleteText(n-1,1),e.quill.deleteText(n+1,1)}).catch(function(t){console.log(t)})}},{key:"hide",value:function(t){}},{key:"prompt",value:function(t){t=t||"";var e=this;return this.handler(t).then(function(t){var n=e.quill.getSelection(!0);if(null!=n){var i=n.index+n.length;return e.quill.insertEmbed(i,"graph",t,"user"),e.quill.insertText(i+1," ","user"),e.quill.setSelection(i+2,"user"),s.a.resolve(t)}}).catch(function(t){return console.log(t),s.a.reject(t)})}},{key:"handleClick",value:function(t){var e=this,n=i(t.target,"ql-graph"),l=null!==n;if(t.target&&l&&e.quill.isEnabled()){if(this.graphObj===l)return;this.graphObj&&this.hide(),this.show(n)}else this.graphObj&&this.hide()}}],[{key:"register",value:function(){console.log("Registering blot"),j.a.register(E,!0)}}]),e}(x);e.a=w,window.Quill&&window.Quill.register("modules/Graph",w)},385:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(155),l=n(381),s=n.n(l);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:s.a}})},386:function(t,e,n){"use strict";var i=n(76),l=n.n(i),s=n(90),o=n.n(s),r=n(91),a=n.n(r),u=n(155),c=n(935),h=n(0),d=n.n(h);u.a.use(c.a);var f=["https://www.googleapis.com/auth/drive"],p=!1,g=function(t){p=!0,t.resolve(!0)},v=function(t,e){if(d()().unix()<localStorage.getItem("googleOauthTokenExpires"))return console.log("is signed in"),e.resolve(!0),!0;window.gapi.auth.authorize({client_id:t,scope:f,immediate:!1},function(t){if(console.log("result",t),t&&!t.error){var n=t.access_token,i=t.expires_at;localStorage.setItem("googleOauthToken",n),localStorage.setItem("googleOauthTokenExpires",i),e.resolve(t)}e.reject({error:t.error})})},m=function(){function t(){o()(this,t),this.APP_ID="",this.CLIENT_ID="",this.API_KEY=""}return a()(t,[{key:"init",value:function(t){return console.log("configs",t),this.APP_ID=t.APP_ID,this.CLIENT_ID=t.CLIENT_ID,this.API_KEY=t.API_KEY,!0}},{key:"handleClientLoad",value:function(){var t=this,e=new l.a(function(e,n){gapi.load("auth",{callback:function(){return v(t.CLIENT_ID,{resolve:e,reject:n})}})}),n=new l.a(function(t,e){gapi.load("picker",{callback:function(){return g({resolve:t,reject:e})}})});return l.a.all([e,n])}},{key:"createPicker",value:function(t){var e=localStorage.getItem("googleOauthToken");console.log(e);if(p&&e){var n=(new google.picker.DocsView).setOwnedByMe(!0).setMimeTypes("image/png,image/jpeg,image/jpg"),i=new google.picker.DocsUploadView;(new google.picker.PickerBuilder).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).setAppId(this.APP_ID).setOAuthToken(e).addView(n).addView(i).setDeveloperKey(this.API_KEY).setCallback(t).setSize(500,500).build().setVisible(!0)}}},{key:"createPermission",value:function(t){var e="https://www.googleapis.com/drive/v3/files/"+t+"/permissions";return u.a.http.post(e,{role:"reader",type:"anyone"},{headers:{Authorization:"Bearer "+localStorage.getItem("googleOauthToken")}}).then(function(t){return console.log("res",t.body),!0},function(t){return l.a.reject(t)})}}]),t}();e.a=m},387:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(459),n(457),n(458),window.Quill||(window.Quill=n(75)),e.default={name:"quill-editor",data:function(){return{_content:"",defaultModules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]}}},props:{content:String,value:String,disabled:Boolean,options:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null},methods:{initialize:function(){if(this.$el){var t=this;t.options.theme=t.options.theme||"snow",t.options.boundary=t.options.boundary||document.body,t.options.modules=t.options.modules||t.defaultModules,t.options.modules.toolbar=void 0!==t.options.modules.toolbar?t.options.modules.toolbar:t.defaultModules.toolbar,t.options.placeholder=t.options.placeholder||"Insert text here ...",t.options.readOnly=void 0!==t.options.readOnly&&t.options.readOnly,t.quill=new Quill(t.$refs.editor,t.options),(t.value||t.content)&&t.quill.pasteHTML(t.value||t.content),t.quill.on("selection-change",function(e){e?t.$emit("focus",t.quill):t.$emit("blur",t.quill)}),t.quill.on("text-change",function(e,n,i){var l=t.$refs.editor.children[0].innerHTML,s=t.quill.getText();"<p><br></p>"===l&&(l=""),t._content=l,t.$emit("input",t._content),t.$emit("change",{editor:t.quill,html:l,text:s})}),this.disabled&&this.quill.enable(!1),t.$emit("ready",t.quill)}}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}}},388:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(928),l=n.n(i),s=n(927),o=n.n(s);e.default={name:"app",components:{Hello:l.a,Editor:o.a},data:function(){return{data:"",config:{APP_ID:"<APP_ID>",CLIENT_ID:"<CLIENT_ID>",API_KEY:"<API_KEY>"}}},mounted:function(){setTimeout(function(){},1e3)}}},389:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(391),l=n.n(i),s=n(76),o=n.n(s),r=n(75),a=n.n(r),u=n(494),c=n.n(u),h=n(383),d=n(384),f=n(382),p=n(920),g=n(456),v=(n.n(g),n(455)),m=(n.n(v),n(934)),b=(n.n(m),n(386));window.katex=c.a,a.a.register("modules/EquationEditor",h.a),a.a.register("modules/imageDrop",p.a),a.a.register("modules/Graph",d.a),a.a.register("modules/ImagePicker",f.a);var j=new b.a;e.default={props:{value:{type:[String,Array,Object],default:{ops:[]}},readOnly:{type:Boolean},placeholder:{type:String},"gapp-config":{type:Object,required:!0}},data:function(){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)});return{uuid:t,options:{readOnly:this.readOnly||!1,placeholder:this.placeholder||" ",bounds:"#editor-"+t,modules:{EquationEditor:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=prompt("Enter latex formula",t);return e?o.a.resolve(e):o.a.reject("Cancel")}},ImagePicker:{handler:function(){var t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],new o.a(function(e,n){var i=function(i){var l=i.docs[0],s="https://drive.google.com/uc?id="+l.id;console.log(l,s),console.log(t),j.createPermission(l.id).then(function(){console.log(s),e(s)}).catch(function(){n("Cancel")})};j.handleClientLoad().then(function(t){return j.createPicker(i)})}));return t}},Graph:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=prompt("Enter function",t);return e?o.a.resolve(e):o.a.reject("Cancel")}},imageDrop:!0,formula:!0,toolbar:{container:"#toolbar-"+t}}}}},components:{quillEditor:m.quillEditor},mounted:function(){var t=this,e=this.$refs.editor.quill;this.updateEditor(),e.on("text-change",function(n){var i=e.getContents();t.$emit("input",l()(i))}),j.init(t.gappConfig)},watch:{value:function(t,e){e&&""!==e||this.updateEditor()}},methods:{updateEditor:function(){var t=this.$refs.editor.quill,e=this.value;if(e instanceof Array&&(e={ops:e}),"string"==typeof e)try{e=JSON.parse(this.value)}catch(t){e={ops:[]}}this.$emit("input",l()(e)),t.setContents(e)}}}},390:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},455:function(t,e){},456:function(t,e){},457:function(t,e){},458:function(t,e){},459:function(t,e){},460:function(t,e){},461:function(t,e){},462:function(t,e){},463:function(t,e){},916:function(t,e,n){function i(t){return n(l(t))}function l(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./af":247,"./af.js":247,"./ar":254,"./ar-dz":248,"./ar-dz.js":248,"./ar-kw":249,"./ar-kw.js":249,"./ar-ly":250,"./ar-ly.js":250,"./ar-ma":251,"./ar-ma.js":251,"./ar-sa":252,"./ar-sa.js":252,"./ar-tn":253,"./ar-tn.js":253,"./ar.js":254,"./az":255,"./az.js":255,"./be":256,"./be.js":256,"./bg":257,"./bg.js":257,"./bm":258,"./bm.js":258,"./bn":259,"./bn.js":259,"./bo":260,"./bo.js":260,"./br":261,"./br.js":261,"./bs":262,"./bs.js":262,"./ca":263,"./ca.js":263,"./cs":264,"./cs.js":264,"./cv":265,"./cv.js":265,"./cy":266,"./cy.js":266,"./da":267,"./da.js":267,"./de":270,"./de-at":268,"./de-at.js":268,"./de-ch":269,"./de-ch.js":269,"./de.js":270,"./dv":271,"./dv.js":271,"./el":272,"./el.js":272,"./en-au":273,"./en-au.js":273,"./en-ca":274,"./en-ca.js":274,"./en-gb":275,"./en-gb.js":275,"./en-ie":276,"./en-ie.js":276,"./en-nz":277,"./en-nz.js":277,"./eo":278,"./eo.js":278,"./es":281,"./es-do":279,"./es-do.js":279,"./es-us":280,"./es-us.js":280,"./es.js":281,"./et":282,"./et.js":282,"./eu":283,"./eu.js":283,"./fa":284,"./fa.js":284,"./fi":285,"./fi.js":285,"./fo":286,"./fo.js":286,"./fr":289,"./fr-ca":287,"./fr-ca.js":287,"./fr-ch":288,"./fr-ch.js":288,"./fr.js":289,"./fy":290,"./fy.js":290,"./gd":291,"./gd.js":291,"./gl":292,"./gl.js":292,"./gom-latn":293,"./gom-latn.js":293,"./gu":294,"./gu.js":294,"./he":295,"./he.js":295,"./hi":296,"./hi.js":296,"./hr":297,"./hr.js":297,"./hu":298,"./hu.js":298,"./hy-am":299,"./hy-am.js":299,"./id":300,"./id.js":300,"./is":301,"./is.js":301,"./it":302,"./it.js":302,"./ja":303,"./ja.js":303,"./jv":304,"./jv.js":304,"./ka":305,"./ka.js":305,"./kk":306,"./kk.js":306,"./km":307,"./km.js":307,"./kn":308,"./kn.js":308,"./ko":309,"./ko.js":309,"./ky":310,"./ky.js":310,"./lb":311,"./lb.js":311,"./lo":312,"./lo.js":312,"./lt":313,"./lt.js":313,"./lv":314,"./lv.js":314,"./me":315,"./me.js":315,"./mi":316,"./mi.js":316,"./mk":317,"./mk.js":317,"./ml":318,"./ml.js":318,"./mr":319,"./mr.js":319,"./ms":321,"./ms-my":320,"./ms-my.js":320,"./ms.js":321,"./mt":322,"./mt.js":322,"./my":323,"./my.js":323,"./nb":324,"./nb.js":324,"./ne":325,"./ne.js":325,"./nl":327,"./nl-be":326,"./nl-be.js":326,"./nl.js":327,"./nn":328,"./nn.js":328,"./pa-in":329,"./pa-in.js":329,"./pl":330,"./pl.js":330,"./pt":332,"./pt-br":331,"./pt-br.js":331,"./pt.js":332,"./ro":333,"./ro.js":333,"./ru":334,"./ru.js":334,"./sd":335,"./sd.js":335,"./se":336,"./se.js":336,"./si":337,"./si.js":337,"./sk":338,"./sk.js":338,"./sl":339,"./sl.js":339,"./sq":340,"./sq.js":340,"./sr":342,"./sr-cyrl":341,"./sr-cyrl.js":341,"./sr.js":342,"./ss":343,"./ss.js":343,"./sv":344,"./sv.js":344,"./sw":345,"./sw.js":345,"./ta":346,"./ta.js":346,"./te":347,"./te.js":347,"./tet":348,"./tet.js":348,"./th":349,"./th.js":349,"./tl-ph":350,"./tl-ph.js":350,"./tlh":351,"./tlh.js":351,"./tr":352,"./tr.js":352,"./tzl":353,"./tzl.js":353,"./tzm":355,"./tzm-latn":354,"./tzm-latn.js":354,"./tzm.js":355,"./uk":356,"./uk.js":356,"./ur":357,"./ur.js":357,"./uz":359,"./uz-latn":358,"./uz-latn.js":358,"./uz.js":359,"./vi":360,"./vi.js":360,"./x-pseudo":361,"./x-pseudo.js":361,"./yo":362,"./yo.js":362,"./zh-cn":363,"./zh-cn.js":363,"./zh-hk":364,"./zh-hk.js":364,"./zh-tw":365,"./zh-tw.js":365};i.keys=function(){return Object.keys(s)},i.resolve=l,t.exports=i,i.id=916},926:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd1XVe53XvvD2eGQ/lXQcKuDwc2eFlCAGnUn7kT6T86J/+aNTgsWPchJJYciEOCQ8hF+G0hFCIHRSEqAuJBCqRaUEIEbmBppAIBGnESwZje8COZ+y587j3PLq+ffadGJix53HvPevcuz60xPjec89ZZ+39nf04+9vLSZKEFArFzHA1BAqFEkShUIIoFEoQhUIJolAoQRQKJYhCoQRRKJQgCoUSRKFQKEEUCiWIQrFo+Gv/8/YH+f/nsMWSHHMChyhxqPTTdyncWyJ3ScD/ztipiB3wXSqu6P17avN+TyFC5ggv4tRnmoxWTP1+5F+Mz17GPvPl49EKBWd3UsfXllPiso8VcYtmPba3fNuKrBVXrGFCbrdPwXndFL49ltI367roOpSUI4pGypv9s7q+ltj6JxqOQ07Bo/DgxGb2/a8cX0CnAWXJ5etz2TqdHiXHKlKj9w6i9XX8Ic41DmI8FVHhmmXk85MmRhCzJoiTWnig9LfJRHihgydxzAxJhBr7Bh/hK3yu+p9568FliTJF2aKMZfVd/kQOcKP6OBmS9+Rjm4zJ6faoeN0gOUn61MncLX4CJ+MRhe+P/dRxhfew2Df4CF/hs4jWg8vQYUKYMuWyRRkLjeHQ8YP0Z9mekVjA8Qj3VVcuoeDiXu63lkUE0ym6FA5PXBaNVr7qtPumGyPR4Bt8hK/wWUR5chn6XJYoU5StUHL8l+XEx2axhkS6yk+chJuP4rXLyOkIKJkS0B67adcqfL/0Y4pixxSysK6V8Yl9Mz7i3272NRFlhzJsu24Z5l9E9Ahmwfrpoj7uw3fZtktsRZKjIXnndlLxin7+W8ZTBwPf6I+Tg9HwxK2Ob8citbCoBoaxBxMCvsFH+CqjHCtUvLzflKWUcpwB91gupG5f9/Rtx39ZZBtmWyJtphKzHTQW0diP36b4aJmcLj/zGaSkHJPb4SWFi/tOJd8bTqd9s48VBRh4RKeUX/vjgXg8cpyCmz05xkJylxSoa8M5RF0eJaVIIkGOsg2yTc3UgpD94psiWxEOqDNYoOIXuHnGwE5AXUTFi46FTnRw4l/dwEm7/pSxcYnCF/gE3zInh52RRJkVP7/MlKFQcgCbjifHTAQBfsb2qsgBO3e1Cpf3UXBej3nRJKKrxU/rcH/pKzz4vNIQuRJTEmZklbg6EL4SPsE3GQPzinmfhbJDGQolB+r8w58abs5y8DqRt4ABeptLRR7koY9NleybEYw/MPisvF/ayT1/SvDewcnIcG32wfiCAbEvoCZyGaGsitdyz6XdTctQJq6fcT5mloNfYvu5yFZkpEz+RT0UrFoqpxVBV+vQxIrkaPnrbqdvXs6hcjbU+Jq4Nvvwd/BFRNeq2npwWfkX95iyE9p6PM72P/MhCPANTBSKu5WITHcC074Y9CUTkYglKBgcV/aVtlM5Kpp/RHFjDdfka7MP/2wG6m72661QNigjlBXKTGBtsjWKNs5atCf44Uds3xc5YD8Wknd2BxWuGjCzIxLWQzlFj+IjU108OL7bafM5sm5DDdfka/8T+9AJXyTMpqFsUEYoK5SZ0NbjVlvX500Q4Ha2A+JuCcEvhVS8qp/8MzspHhMSfO7mVPaP35BMRp9JsCQldbX+hmvxNfnamzJfqVvtWnGZoGxQRigroYs6UbfvOGHn4ORVkTaIbEWwtqg3MNO+Zql0JGCdVuCayhDuG9uJB7vp+oR17FbZc+NauCauLWLmKkqXr6NsUEYoK6GtxwY6CXXnEs0n2faIHLCPhhR8bikFKwRN+xZddHWu5a7Ol9yCZ2ZwHKdOxufGNeKRqS/hmnLWW1VMmQSrl5oyEkqOPbZu02IJAsic9sU7B+5uF9cOmqUfeLOdOaAZYb/CA+M/Ic9NxUoYMNfD/PT84f7xB807EAnrrbgMUBZt1w1SEpCIqfjF1Om5EuQNth0iu1r8tPLP76LCpX2yWpHDk2dGH018p6brtD5hOHf04cR3okOTZ0lqPVAW3gVdlMhdrfsTW6drRhDgRrYJcbeKZQxTkenvegNt6YBQwrQvOxG+P3ZHEia9TuClS9Br1XKge8XnxLlxjelzZ/2w4tijDMxyoHIsVQg1zvYPcy7KeZx4jG2zyFakFJF7Whu1XT2QvhfJeryeVNdplYPo4Pi9hKd7VVxVC8O5cH4+N65hXgoKuGfEHmWAskjGxI49Ntu6XHOCAD9ie1PcLSepjDNY00fB8m6KpSyJx/jgg9LfJEfLK40818w+LXY5e5zKaMfKl+DcIlSCZp0cd3U59igDI4+WOa2LunvfvDoD9RrcNLqAjDy3yzfrtKqbAkggSDIZmSlYxzz9a8BaJ101zF2rh3BuSTJaCKGMDEGujHbedXch0X2ebbdEkkDC6a9cQoWVguS53P0JP5xcHY1W/tppD9KxgrdAw5QxnwPn4nOukrPeqkzBJb0m9oJltLtt3a07QYD1IkMAeS7/hw0BXMhzJwXJc/eV7kuiyIN8OOGuUhLP06JUeoxz4FxiZLRouTsDM9WO2OdBRtsIgrzHtk3kgH00JO+cTipc2S9jqyCaluf2xwcnfuB6LndHuEsSzdP4N/gtzoFzSZHRIsaQQiPmidyXgttsnW0YQYDvsh2ROGBPxkMqXjNA/qlCFsnZ8UdlX+kfk0pymlnMWH2JOBfz0sWI+C3OMS1dzPphhPVWHOPC5wdMzIUOzFFHb1lwB2ARF+ZOPt0gshWBPLe/wCRZlu6CIkSei/cE0fD4g2ZbVWceyxH5WPwGvzXrrSTJaDnG7oBoGS3qaCULggCPsv1W5IAd8tzLllJwvpx1WthMIfyg9OVotHy1WVQ4V37wsfgNfkuSZLQcW8Q4lruU/RVbRykrggDXiwwN3uQWnXTa1xMkz2W/on2lndNajpNtAGePw2/MOicBMlqs+8K7GBNbjrFgGe2iX0nUgiAvs+0S2YpgndaFPVRc3SdmVanZlfGjifOiw5PrT/oGvPpG/vDkEH4jZ70Vt86rl5rYimmdP41/s3Uzc4Isup9XNxwvz+0tyNAlONPrtO6hctR+QnluKqNt52O3pxvtClhvxTH0egtmEwbBMlrUxU21OFGtCHKYbavIATv3j90z26kIea4QZRtahfhIuT0anrjH7O3rpjNVHzPIaLG3Lh8Tj5TbRQihjlNyehxTwTLarbZOiiEIcBfbPnGhMtroChXW9JN/VqeYdyPEY4nwwPj6ZCL8C1T+T61JhDqRv8MxZgwlJG2BxzEsrBmgeEzseqt9ti6SNIIA8t6wm901eFDZ66d7M4UkQ56LVgTTvvtKaRqFqoTWymjxGb6LpUzrImYcuzaOIWKJmAptPWpaB2sd+V+yvSB1wB6s7qXgwiUyBpbJdBqFq6MjU18mKCKhRsTyEbx558/wnRmYJzLiV+DYBat6JQ/MX7B1UCxBAKHy3IQrH6W7MhY9MWkUMNAN948/8Mm35/jMDIKlpC3gmBWQtsAjifkE61b36kGQP7DdL7KrVZXnXiYpjYKZxj09Gh7f4kB4yIa/8ZmU1brIIYiYIXaJ3Nbjflv3xBME+DZbSVwIzfIIK89dJkSea18Ihu+XflD9yPztCJnW5Ri5VRntpNh8giVb5ygvBIHu9yaRrchYRO6fFU0CSTPQlDLte6zshx9O3g3D3yJajySd4EDaAsQMsRPaetxk61zty+YTCXRqjf9jO19cOLnyYV+p8QffpcreMXJ7BeRgh77Ds6SIYhGbMBgB2tld1DW0nGL4VxbZfKBbdUHdhol1dl7mOi0MOjttGgWT11lAwU9r1mMSsX0oxwSxgYyWOvKXtiAvBPkV239I7GqZdVqX9FDw2V5+UoYipn2nt/WRMK3LMQlW9poYCZ7WfcrWsdwSBNggMrRYdcLdhjas0+q28lzJOc8bOU7jWLh2AwzEyLxclYm6Z2ZuBEE+YLtTZEVA9tzPdBh5biJ3q5rGD8yRjXbNAPkcm0RuyjTUqf3NQBDge2yHJFaGeDyi4tUD5J3WIXmzs8Y9NDgG3un80OCYIDZCHxqHbJ2iZiEIGmnB8twgzYIkd7vMxiBON59GLJyBQLKMdiM1qOPXyMn2f2f7X5EDdshzkUbhAtED0oZMXCAGiIXgtAW/YXusURdr9NsoufLcgmP20zKy2ErrNSNGRuunMUAshL7zABq61q/RBPkd2yNSn57+X3ZTQZA8t7H3H5p7RwwEt6KP2DrUtAQBIIUsiwt99Kf+tydFntuocVhVRltNWyBTRlumGslopRNkhO1mkRVlLCT3jHYzqyU48WSN+1ZWRou0BZDRyp3Ju9nWnaYnCHA3216JlQWy0gKy557dJSaNQn0nKNL1VrhnwTLavbbOUKsQBBApzzVpFHqsPFdIGoW6AfeG7cMwrcv3TC0io80LQZ5me07kU3WkYqSlhYvkpFGoz8C8bO7RyGjlpi14ztaVliMIIFOeizQKbpI+WdsDGfLcWvcmsaK53b4gdUW3lENZXjxrgrzNdq/IAftohbzzOql4eV/zjUUcu96K7w33KFhGi7rxVisTBEBSxWPiiqYqz71mGfmDQuS5tSIHstHyPZnd7+XKaI+RgKSxEggySWmKaXkVaSwi5xSbRmGiSdZpxVZGy/eEexMso73R1o2WJwiwk+11kQNZrNO6oo+Cc7vz39Wy07q4l+CKfnNvQu/ndVsnSAkifcCOAXq7R8W1y9JdRvI87QvfnTRtgdPeujLavBLkv9meEPnUHS2Tf1EPFT67lOKRnE77munrsrkH/+IeydPXqAO/VoLMDMhz5T2irTzXpFHoKeRPnluV0XYX0mlduTLamIRJtKUR5CDbbSIrGPfX/eUdVFyTQ3luku6OaNIW/HmH5LQFt9k6oAQ5Ab7PNiyxkmGndUhRvTNyJM9F1wrZaM9IZbQmG63MocewxIejRIKg+DaKbEXGI3KWBtT2hUFKyonUZeEfB3xkX4vsM3wXvIx/IwmMqCu0WH/B9qLIpzG6Wp/rpWBFj/x1WnaCAb4G7LPgad0XbZmTEmTukDnti0yzgZvKcwNPtDzXyGjZR5ONFincVEbbVAR5je0hkU/lkTL5F3TZzQ2EvjysJr1hH/0LuiVPTz9ky1oJsgB8iwQsN5hplISns5Hn9hXl9eurMlr2zUzrVsQuk5m0ZUxKkIXhKNsWkQN2yHNPhzx3WbqQMRZGYCOjXWZ8FDzjtsWWsRJkEfgh2zvyOvhWnovsucu75GTPtdlo4RN8i+W+s3nHli0pQRaPIXEeVeW53V46YJciz2Uf4IvxiX0juW/9h/JQ8fJCkGfZnpE5YK9QsHIJBZcIkOdW141d3Gt8EiyjfcaWqRKk6Z84kOc6duODjmzluUZGyz4g6Q18UhltaxHkXbbtIgfsRyvknQt5bobZc6dltP3Gl0SudmW7LUslSJ1mPUbFeWVUepDnDpB3SgazRtW0BXxt+ABfhE7rypyVbCKCTLF9U2QrgjQKg3b7zskGv3eI0+XsuDZ8EJy2YJMtQyVIHfEztldFDtghz728j4LzGphGoZq2gK9ZMDuwiH3ngTJ7OG+VLY8EAeTKc9ts9lwk42zEOi2st+JrYZIA1xYso12Xx4qWV4K8xPZzka3ISCrPDVY1YJ1WtfVYZWW0ctdbPW7LTAnSQHyDJCoykEYhTNdpuUsK6YDZqQ85cG5cw6y3CsWmLYBXG/NayfJMkI8oVR/KG7AfC8k7u4MKVw2kM1r1eB2RpDNXuAauJVhGe6stKyVIBrid7YA4r6o5N5BG4cxOI3mtaeWtymj53LiG4FwmKJs78lzB8k4QVIsN4ryqynN7AzP1ShXIc2tYg3GuSpJO6/aKltHK3KWmhQgCPMm2R+SAfTSkANlzV9Rw2rc6MDcyWtHZaPfYsiElSPaQOYVYiSnxiIprB8kpeGn+v8U2mZD8FjxzTpybKjqtqwQ5Od5g2yGyq4Xsued3UeHSvsW3IlUZLZ8L5xSctmCHLRMliCBgN/AJcV7F6SpbjBe8gUWkUaimLeBzmOUsU2JltOMkcbd+JQiNkYB8ErNVbPe0Nmq72i4kXMiwNUnfe+AcOJfgfCWbbVkoQQTiR2xvivPKynODNX0ULF9AGoVq2gL+Lc4hWEaL2N/XTBWq2Qgic3BYled2+ekeVfOV51az0WKNF59DsIx2XbNVpmYkyPNsuyWSBBJYf+USKsxHnlvNRsu/8WXLaHfb2CtBcoD1Ir2CPJf/wxSt2xmkupGT9c6QtoCPNdO66FfJldGub8aK1KwEeY9tm8gB+2hI3jmdVLii/+RbBdktfHAsfpPIfSm4zcZcCZIjfJftiMQBO1IQQBrrn3qCRYZ20SOOMTLacbHrrRDjW5q1EjUzQbiTTzeIbEUgz+232XNne59RfX+CbLT9omW0iHFFCZJPPMr2W5EDdshzL1tKwfkzrNOqrrfi73CMYBntKzbGpATJL64X6RXWZRVtxlnP+VgaBZO2wEu/wzGatkAJUk+8zLZLZCuCdVoXciux+rhVuXYVMD7Dd7Hc9Va7bGyVIE0Amf3kaXnuIHm9qTwXhr/xmWAZbUXk+E4JsmAcZtsqcsAOee6Z7VS08lwY/sZngmW0W21MlSBNhLvY9onzCqtIxipUuKqf3L6iMfyNz4RO6+6zsWwJ+NRawNvep8S1IhMxucie+8VT0o+6PIqPiB17rG+lCtNqBPkl2wts14gbsCONwqVLzT8Fr7d6wcawZeBS60Hm1GSSTu+a6d5EY6cEyQ5/YLtf4oCd4iQ1ma3H/TZ2SpAWwLfZSqSYK0o2ZqQEaQ1AN32T1vs54yYbMyVIC+GBVuwyLLBL+kCr3rzb4oV/vdZ/jZESZHb8iqS9F5GFp2yMlCAtjCENgcZGCTI79rPdqWH4FO60sVGCKOh7bIc0DNM4ZGNCShAFEFKOsyDVARttTJQgGoJpPMb2Gw2DicFjGgYlyExYpyHQGChBZsfv2B5p4ft/xMZAoQSZFZso3TKo1VC2965QgpwQI2w3t+B932zvXaEEOSnuZtvbQve7196zQgkyZ6zXe1UoQWbH02zPtcB9PmfvVaEEmTeG9B6VIIrZ8RbbvU18f/fae1QoQRYMJKU81oT3dYwkJj1VguQOk9REaY2Pw4323hRKkEVjJ9vrTXQ/r9t7UihBaobr9V6UIIrZ8Wu2J5rgPp6w96JQgtQcG2jmhGl5QWzvQaEEqQsOst2WY/9vs/egUILUtZIN59Dv4ZyTWwmSEyDnUx7luRtJar4qJUjT4RdsL+bI3xetzwolSMOwTn1Vgihmx2tsD+XAz4esrwolSMPxLZK9XGPS+qhQgmSCo2xbBPu3xfqoUIJkhh+yvSPQr3esbwolSOYYUp+UIIrZ8SzbM4L8ecb6pFCC6BNbWw8lSB7wLtt2AX5st74olCDikPWskfRZNSVIi2OKst2+c5P1QaEEEYuH2V7N4Lqv2msrlCDisa5FrqkEUSwIL7E93sDrPW6vqVCC5AaN0l/kVZ+iBGlxfMR2awOuc6u9lkIJkjvcwXagjuc/YK+hUILkEgnVdxeRDfYaCiVIbvEk2546nHePPbdCCZJ7rMvJORVKkEzwBtuOGp5vhz2nQgnSNMBu6uM1OM84Nedu80qQFscY1SYfx2Z7LoUSpOlwH9ubi/j9m/YcCiWIDth1YK4EaUU8z7Z7Ab/bbX+rUII0PdY36DcKJUgu8R7btnkcv83+RqEEaRncwnZkDscdsccqlCAthQrbDXM47gZ7rEIJ0nJ4lO2VE3z/ij1GoQRpWaxb4HcKJUhL4GW2XTN8vst+p1CCtDw+Oc6Y6/hEoQRpCRxm23rcv7fazxRKEIXFXZRuwBDZvxUC4GsIREHflguDkyQqaVYotIulUChBFAoliEKhBFEolCAKhRJEoVCCKBRKEIVCCaJQKJQgCoUSRKFQgigUShCFIhP8vwADACog5YM65zugAAAAAElFTkSuQmCC"},927:function(t,e,n){function i(t){n(460)}var l=n(113)(n(389),n(930),i,null,null);t.exports=l.exports},928:function(t,e,n){function i(t){n(463)}var l=n(113)(n(390),n(933),i,"data-v-5280406a",null);t.exports=l.exports},929:function(t,e,n){function i(t){n(462)}var l=n(113)(n(387),n(932),i,null,null);t.exports=l.exports},930:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"editor-"+t.uuid}},[n("quill-editor",{ref:"editor",class:{"quill-readonly":t.readOnly},attrs:{options:t.options}},[n("div",{staticClass:"quill-toolbar",attrs:{slot:"toolbar",id:"toolbar-"+t.uuid},slot:"toolbar"},[n("span",[n("select",{staticClass:"ql-size",attrs:{title:"size"}})]),t._v(" "),n("span",[n("button",{staticClass:"ql-bold"}),t._v(" "),n("button",{staticClass:"ql-italic"}),t._v(" "),n("button",{staticClass:"ql-underline"})]),t._v(" "),n("span",[n("select",{staticClass:"ql-color",attrs:{title:"color"}}),t._v(" "),n("select",{staticClass:"ql-background",attrs:{title:"color"}})]),t._v(" "),n("span",[n("button",{staticClass:"ql-align",attrs:{value:""}}),t._v(" "),n("button",{staticClass:"ql-align",attrs:{value:"center"}}),t._v(" "),n("button",{staticClass:"ql-align",attrs:{value:"right"}}),t._v(" "),n("button",{staticClass:"ql-align",attrs:{value:"justify"}})]),t._v(" "),n("span",[n("button",{staticClass:"ql-script",attrs:{value:"sub"}}),t._v(" "),n("button",{staticClass:"ql-script",attrs:{value:"super"}})]),t._v(" "),n("span",[n("button",{staticClass:"ql-formula"}),t._v(" "),n("button",{staticClass:"ql-image"}),t._v(" "),n("button",{staticClass:"ql-video"}),t._v(" "),n("button",{staticClass:"ql-graph"},[t._v("graph")])])])])],1)},staticRenderFns:[]}},931:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{src:n(926)}}),t._v(" "),i("editor",{attrs:{placeholder:"place holder",readOnly:!1,"gapp-config":t.config},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}),t._v("\n  "+t._s(t.data)+"\n")],1)},staticRenderFns:[]}},932:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quill-editor"},[t._t("toolbar"),t._v(" "),n("div",{ref:"editor"})],2)},staticRenderFns:[]}},933:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},938:function(t,e){}},[385]);
//# sourceMappingURL=app.js.map