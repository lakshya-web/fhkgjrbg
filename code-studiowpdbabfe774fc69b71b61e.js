(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{2310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(0,o.getStore)();window.addEventListener("resize",(0,a.default)(function(){e.dispatch((0,i.setResponsiveSize)((0,i.getResponsiveBreakpoint)(window.innerWidth)))},100))};var r,a=(r=n(539))&&r.__esModule?r:{default:r},o=n(434),i=n(865);e.exports=t.default},2929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initHamburger=void 0;var r=i(n(9)),a=i(n(62)),o=n(633);function i(e){return e&&e.__esModule?e:{default:e}}t.initHamburger=function(){(0,r.default)(function(){(0,r.default)("#hamburger-icon").click(function(e){(0,r.default)(this).toggleClass("active"),(0,r.default)("#hamburger #hamburger-contents").slideToggle(),e.preventDefault()}),(0,r.default)(document).on("click",function(e){var t=(0,r.default)("#hamburger");t.is(e.target)||0!==t.has(e.target).length||(t.children("#hamburger-contents").slideUp(),(0,r.default)("#hamburger-icon").removeClass("active"));var n=(0,r.default)("#help-button");n.is(e.target)||0!==n.has(e.target).length||(n.children("#help-contents").slideUp(),(0,r.default)("#help-icon").removeClass("active"))}),(0,r.default)(".hamburger-expandable-item").each(function(){(0,r.default)(this).click(function(e){(0,r.default)("#"+(0,r.default)(this).attr("id")+"-items").slideToggle(),(0,r.default)(this).find(".arrow-down").toggle(),(0,r.default)(this).find(".arrow-up").toggle(),e.preventDefault()})}),(0,r.default)("#help-icon").click(function(e){(0,r.default)(this).toggleClass("active"),(0,r.default)("#help-button #help-contents").slideToggle(),e.preventDefault()}),(0,r.default)("#help-icon #report-bug").click(function(){(0,a.default)("help_ui","report-bug","hamburger")}),(0,r.default)("#help-icon #support").click(function(){(0,a.default)("help_ui","support","hamburger")}),(0,r.default)(".footer #support").click(function(){(0,a.default)("help_ui","support","studio_footer")}),(0,r.default)("#pagefooter #support").each(function(){(0,r.default)(this).click(function(){(0,a.default)("help_ui","support","studio_footer")})});var e=(0,o.getChannelIdFromUrl)(location.href);if((0,o.userAlreadyReportedAbuse)(e)){var t=(0,r.default)("#report-abuse");t&&t.hide()}})}},2930:function(e,t){e.exports=function(e){for(var t,n=e.console=e.console||{},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],a=0;a<r.length;a++)n[t=r[a]]||(n[t]=function(){})}},2931:function(e,t,n){"use strict";var r,a=(r=n(0))&&r.__esModule?r:{default:r};var o=a.default.arrayOf(a.default.shape({id:a.default.number,name:a.default.string}));e.exports.studentsShape=o},3295:function(e,t,n){"use strict";var r=m(n(9)),a=m(n(1)),o=m(n(8)),i=n(434),l=n(933),u=m(n(2981)),s=m(n(2310)),d=m(n(2928)),c=m(n(3297)),f=m(n(330)),p=n(3298),h=n(2929),g=n(336);function m(e){return e&&e.__esModule?e:{default:e}}(0,i.getStore)().dispatch((0,l.setRtlFromDOM)()),n(2930)(window);var b=n(232),v=n(3299);window.React=n(1),window.ReactDOM=n(8),window.Radium=n(13),r.default.fn.modal&&(r.default.fn.modal.Constructor.prototype.enforceFocus=function(){}),window.dashboard=window.dashboard||{},window.dashboard.clientState=n(211),window.dashboard.createCallouts=n(537).default,window.dashboard.hashEmail=d.default,window.dashboard.levelCompletions=n(3300),window.dashboard.popupWindow=n(1057),window.dashboard.reporting=n(1849),window.dashboard.header=n(1005),window.dashboard.videos=n(1454),window.dashboard.assets=n(919),window.dashboard.pairing=n(3301),window.dashboard.project=n(87),window.dashboard.codeStudioLevels={registerGetResult:g.registerGetResult,registerLevel:g.registerLevel,onAnswerChanged:g.onAnswerChanged},window.Dialog=n(343),window.FreeResponse=n(3306),window.Multi=n(2729),window.TextMatch=n(2932);var y=window.onerror;window.onerror=function(e,t,n){if(/^Script error/.test(e)&&t&&(arguments[0]="Script Error: "+t),y)return y.apply(this,arguments)};(0,r.default)(document).keydown(function(e){27===e.keyCode&&(e.stopPropagation(),e.preventDefault())}),setTimeout(function(){(0,r.default)("#codeApp .slow_load").show()},1e4),(0,r.default)(document).ready(function(){if(document.querySelector("script[data-gdpr]")){var e=(0,f.default)("gdpr");e.show_gdpr_dialog&&e.current_user_id&&o.default.render(a.default.createElement(c.default,{isDialogOpen:e.show_gdpr_dialog,currentUserId:e.current_user_id}),document.getElementById("gdpr-dialog"))}}),v(),window.CDOSounds=b.getSingleton();var w=document.querySelector("script[data-usertype]")?(0,f.default)("usertype"):null;(0,p.checkForUnsupportedBrowsersOnLoad)(),(0,h.initHamburger)(),(0,u.default)(w),(0,s.default)()},3297:function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(1)),l=a(n(18)),u=a(n(3)),s=a(n(35)),d=a(n(127)),c=n(326);function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={dialog:{paddingLeft:20,paddingRight:20,paddingBottom:20},instructions:{marginTop:20}},m=function(a){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(p(e=a.call.apply(a,[this].concat(n))||this),"state",{isDialogOpen:e.props.isDialogOpen}),h(p(e),"handleYesClick",function(){e.setState({isDialogOpen:!1}),$.post("/dashboardapi/v1/users/accept_data_transfer_agreement",{user_id:e.props.currentUserId})}),e}return function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(e,a),e.prototype.render=function(){var e=this.props.studioUrlPrefix,t=e?"".concat(e,"/users/sign_out"):"/users/sign_out";return o.default.createElement(s.default,{useUpdatedStyles:!0,isOpen:this.state.isDialogOpen,style:g.dialog,uncloseable:!0},o.default.createElement("h2",{className:"ui-test-gdpr-dialog"},u.default.gdprDialogHeaderUpdated()),o.default.createElement("div",null,u.default.gdprDialogDetailsUpdated()),o.default.createElement("div",{style:g.instructions},o.default.createElement("a",{href:(0,c.pegasus)("/privacy"),className:"ui-test-gdpr-dialog-privacy-link",target:"_blank",rel:"noopener noreferrer"},u.default.gdprDialogVisitPrivacyPolicy())),o.default.createElement(d.default,null,o.default.createElement(l.default,{__useDeprecatedTag:!0,text:u.default.gdprDialogLogout(),href:t,color:l.default.ButtonColor.gray,className:"ui-test-gdpr-dialog-logout"}),o.default.createElement(l.default,{__useDeprecatedTag:!0,text:u.default.gdprDialogYes(),onClick:this.handleYesClick,color:l.default.ButtonColor.orange,className:"ui-test-gdpr-dialog-accept"})))},e}(o.Component);h(t.default=m,"propTypes",{isDialogOpen:r.default.bool.isRequired,currentUserId:r.default.number.isRequired,studioUrlPrefix:r.default.string}),e.exports=t.default},3298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkForUnsupportedBrowsersOnLoad=void 0;var r,a=n(809),o=(r=n(9))&&r.__esModule?r:{default:r};t.checkForUnsupportedBrowsersOnLoad=function(){(0,o.default)(document).ready(function(){var e=null;(0,a.isUnsupportedBrowser)()?e="#unsupported-browser":"undefined"!=typeof appOptions&&((0,a.isMobileDevice)()?"applab"===appOptions.app?e="#applab-unsupported-tablet":"gamelab"===appOptions.app&&(e="#gamelab-unsupported-tablet"):(0,a.isIE11)()&&"fish"===appOptions.app?e="#oceans-unsupported-browser":(0,a.isIE11)()&&"weblab"===appOptions.app?e="#weblab-unsupported-browser":"weblab"!==appOptions.app||(0,a.isStorageAvailable)("localStorage")||(e="#weblab-unsupported-local-storage")),e&&((0,o.default)(e).show(),(0,o.default)("#warning-icon").show(),(0,o.default)("#dismiss-icon").show(),(0,o.default)("#warning-banner").show())})}},3299:function(e,t,n){"use strict";var r,a=(r=n(9))&&r.__esModule?r:{default:r};var o=n(1454).showVideoDialog;e.exports=function(){(0,a.default)(window).load(function(){0!==(0,a.default)("#reference_area").length&&((0,a.default)(".video_link").each(function(){!function(e,t){var n=function(e){t(e),e.preventDefault()};e.on({touchstart:n,click:n})}((0,a.default)(this),a.default.proxy(function(){o({src:(0,a.default)(this).attr("data-src"),name:(0,a.default)(this).attr("data-name"),key:(0,a.default)(this).attr("data-key"),download:(0,a.default)(this).attr("data-download"),thumbnail:(0,a.default)(this).attr("data-thumbnail"),enable_fallback:!0,autoplay:!0},!0)},this))}),(0,a.default)("#reference_area_target").append((0,a.default)("#reference_area")),(0,a.default)("#reference_area_target").data("minimal")&&(0,a.default)("#reference_area .video_thumbnail").hide())})}},3300:function(e,t,n){"use strict";var r,a=(r=n(9))&&r.__esModule?r:{default:r};function o(e,t,n,r,a,o,i){var l=[[.7,"#00FF00"],[.5,"#b4ff00"],[.45,"#ccff00"],[.4,"#ffff00"],[.3,"#ffdf00"],[.2,"#ff8100"],[.15,"#ff9900"],[.1,"#ff0000"],[.05,"#a61c00"],[0,"#5b0f00"]];Handsontable.renderers.NumericRenderer.apply(this,arguments);for(var u=parseFloat(o),s=0;s<l.length;s++)if(u>=l[s][0])return void(t.style.background=l[s][1])}function i(e,t,n,r,a,o,i){var l=[[.98,"#00FF00"],[.95,"#94ff20"],[.92,"#b5ff04"],[.9,"#d7ff00"],[.85,"#efff00"],[.82,"#ffdf00"],[.8,"#ff9900"],[.75,"#ff6900"],[.7,"#ff3a00"],[0,"#ff0000"]];Handsontable.renderers.NumericRenderer.apply(this,arguments);for(var u=parseFloat(o),s=0;s<l.length;s++)if(u>=l[s][0])return void(t.style.background=l[s][1])}function l(e,t,n,r,a,o,i){var l=0;if(o){var u=parseFloat(o),s=Math.floor(u/60),d=u-60*s;o=("0"+s).substr(-2)+":"+("0"+d).substr(-2),l=Math.min(1,u/600)}Handsontable.renderers.TextRenderer.apply(this,arguments),t.style["font-family"]="monospace",t.style.background="linear-gradient(90deg, silver "+100*l+"%, white 0%)"}t.hideAndShowDomElements=function(e,t){e&&(0,a.default)("#samplingMessage").show(),t&&(0,a.default)("#completionTable").show()},t.populateTable=function(e,t){(0,a.default)("#completionTable").handsontable({data:t,startRows:10,startCols:9,colHeaders:e,colWidths:[200,100,100,100,100,100,100,100,100,100],stretchH:"none",columnSorting:!0,manualColumnResize:!0,columns:[{data:"Puzzle"},{data:"TotalAttempt",type:"numeric"},{data:"TotalSuccess",type:"numeric"},{data:"Avg Success Rate",type:"numeric",format:"0.00%"},{data:"Avg attempts per completion",type:"numeric",format:"0.00"},{data:"UniqueAttempt",type:"numeric"},{data:"UniqueSuccess",type:"numeric"},{data:"Perceived Dropout",type:"numeric"},{data:"Avg Unique Success Rate",type:"numeric",format:"0.00%"},{data:"timeOnSite"}],cells:function(e,t,n){return 3===t?{renderer:o}:8===t?{renderer:i}:9===t?{renderer:l}:{}}})}},3301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(9)),i=r(n(1)),l=r(n(8)),u=r(n(3302));function r(e){return e&&e.__esModule?e:{default:e}}var a={init:function(t,e,n){var r;function a(){if(!r){var e=document.createElement("div");e.id="pairing",document.body.appendChild(e),r=l.default.render(i.default.createElement(u.default,{source:t}),e)}r.open()}n&&a(),(0,o.default)("#pairing_link").show().click(function(){return a(),e(),!1})}};t.default=a,e.exports=t.default},3302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1)),i=a(n(3303)),l=a(n(35));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(a){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return s(u(e=a.call.apply(a,[this].concat(n))||this),"state",{isOpen:!1}),s(u(e),"close",function(){return e.setState({isOpen:!1})}),s(u(e),"open",function(){return e.setState({isOpen:!0})}),e}return function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(e,a),e.prototype.render=function(){return o.default.createElement(l.default,{isOpen:this.state.isOpen,handleClose:this.close},o.default.createElement(i.default,{source:this.props.source,handleClose:this.close}))},e}(o.default.Component);s(t.default=d,"propTypes",{source:r.default.string}),e.exports=t.default},3303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(9)),r=f(n(0)),i=f(n(1)),l=f(n(3304)),u=f(n(3305)),s=f(n(3)),d=f(n(28)),a=f(n(4)),c=f(n(289));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={pairingSelector:{maxHeight:.8*window.innerHeight-100,overflowY:"auto"},spinner:{marginTop:"10px"},leftButton:{marginLeft:0},errorMessage:{color:a.default.red}},m=function(a){function e(){for(var r,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(p(r=a.call.apply(a,[this].concat(t))||this),"state",{pairings:[],sections:[],hasError:!1,loading:!0}),h(p(r),"handleSectionChange",function(e){r.setState({pairings:[],sections:r.state.sections,selectedSectionId:+e.target.value})}),h(p(r),"refreshUserMenu",function(){o.default.ajax({type:"GET",url:"/dashboardapi/user_menu",success:function(e){return(0,o.default)("#sign_in_or_user").html(e)}})}),h(p(r),"handleAddPartners",function(t){r.setState({hasError:!1,loading:!0});var e=r.selectedSection().students.filter(function(e){return-1!==t.indexOf(e.id)});d.default.putRecord({study:"pairing",study_group:"pairing",event:"initiating-pairing",data_json:JSON.stringify({location:window.location.href,number_partners:e.length,section_id:r.selectedSection().id})},{includeUserId:!0,useProgressScriptId:!0}),o.default.ajax({url:r.props.source,data:JSON.stringify({pairings:e,sectionId:r.selectedSection().id}),contentType:"application/json; charset=utf-8",method:"PUT",dataType:"json",context:p(r)}).done(function(){r.props.handleClose&&r.props.handleClose(),r.refreshUserMenu()}).fail(function(e,t,n){r.setState({hasError:!0,loading:!1})})}),h(p(r),"handleStop",function(e){r.setState({hasError:!1,loading:!0}),o.default.ajax({url:r.props.source,data:JSON.stringify({pairings:[]}),contentType:"application/json; charset=utf-8",method:"PUT",dataType:"json"}).done(function(){r.setState({pairings:[]}),r.refreshUserMenu(),r.props.handleClose&&r.props.handleClose()}).fail(function(e,t,n){r.setState({hasError:!0,loading:!1})}),e.preventDefault()}),h(p(r),"renderError",function(){return r.state.hasError?i.default.createElement("p",{style:g.errorMessage},s.default.unexpectedError()):null}),r}!function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(e,a);var t=e.prototype;return t.componentWillMount=function(){var t=this;o.default.ajax({url:this.props.source,method:"GET",dataType:"json"}).done(function(e){t.setState({pairings:e.pairings,sections:e.sections,loading:!1})}).fail(function(e){t.setState({loading:!1,hasError:!0})})},t.selectedSectionId=function(){return 1===this.state.sections.length?+this.state.sections[0].id:this.state.selectedSectionId},t.selectedSection=function(){var t=this.selectedSectionId();return t&&this.state.sections.find(function(e){return e.id===t})||null},t.studentsInSection=function(){var e=this.selectedSection();return e?e.students:null},t.renderPairingSelector=function(){return i.default.createElement("div",{style:g.pairingSelector},i.default.createElement("h1",null,s.default.pairProgramming()),i.default.createElement("h2",null,s.default.pairProgrammingChosePartners()),i.default.createElement("br",null),i.default.createElement("form",null,i.default.createElement(l.default,{sections:this.state.sections,selectedSectionId:this.selectedSectionId(),handleChange:this.handleSectionChange}),i.default.createElement("div",{className:"clear"}),i.default.createElement(u.default,{students:this.studentsInSection(),handleSubmit:this.handleAddPartners}),this.state.loading&&i.default.createElement(c.default,{size:"medium",style:g.spinner}),this.renderError()))},t.renderPairingState=function(){return i.default.createElement("div",null,i.default.createElement("h1",null,s.default.pairProgramming()),i.default.createElement("h2",null,s.default.pairProgrammingWith()),this.state.pairings.map(function(e){return i.default.createElement("div",{key:e.id,"data-id":e.id,className:"student"},e.name)}),i.default.createElement("div",{className:"clear"}),i.default.createElement("button",{type:"button",className:"stop",onClick:this.handleStop,style:g.leftButton},s.default.pairProgrammingStop()),i.default.createElement("button",{type:"button",className:"ok",onClick:this.props.handleClose},s.default.dialogOK()),this.state.loading&&i.default.createElement(c.default,{size:"medium"}),this.renderError())},t.render=function(){return 0===this.state.pairings.length?this.renderPairingSelector():this.renderPairingState()},e}(i.default.Component);h(t.default=m,"propTypes",{source:r.default.string,handleClose:r.default.func}),e.exports=t.default},3304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(1)),o=n(2931),i=u(n(3)),l=n(61);function u(e){return e&&e.__esModule?e:{default:e}}var s,d,c,f=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(t,e),t.prototype.render=function(){if(0===this.props.sections.length||1===this.props.sections.length)return null;var e=(0,l.sortSectionsList)(this.props.sections);return a.default.createElement("select",{name:"sectionId",value:this.props.selectedSectionId,onChange:this.props.handleChange},a.default.createElement("option",{key:"blank",value:""},i.default.chooseSection()),e.map(function(e){return a.default.createElement("option",{key:e.id,value:e.id},e.name)}))},t}(a.default.Component);t.default=f,s=f,d="propTypes",c={sections:r.default.arrayOf(r.default.shape({id:r.default.number,name:r.default.string,students:o.studentsShape})),selectedSectionId:r.default.number,handleChange:r.default.func.isRequired},d in s?Object.defineProperty(s,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[d]=c,e.exports=t.default},3305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),l=o(n(1)),a=n(2931),u=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(Object(n));"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={buttonLeft:{marginLeft:0},enabled:{backgroundColor:"white",fontSize:"13px"},warning:{color:"red",fontFamily:"'Gotham 4r', sans-serif",fontSize:"12px",paddingTop:"5px"},disabled:{opacity:.5},selected:{backgroundColor:o(n(4)).default.cyan,color:"white"}},p=function(r){function e(){for(var a,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(d(a=r.call.apply(r,[this].concat(t))||this),"state",{selectedStudentIds:[]}),c(d(a),"handleStudentClicked",function(e){var t=i(a.state.selectedStudentIds),n=+e.target.getAttribute("data-id"),r=t.indexOf(n);-1===r?t.push(n):t.splice(r,1),a.setState({selectedStudentIds:t})}),c(d(a),"handleSubmit",function(e){a.props.handleSubmit(a.state.selectedStudentIds),e.preventDefault()}),a}return function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(e,r),e.prototype.render=function(){var a=this;if(!this.props.students)return null;if(0===this.props.students.length)return l.default.createElement("span",null,u.default.noStudentsInSection());var e=this.props.students,o=this.state.selectedStudentIds,i=4<=o.length,t=e.map(function(e){var t="student selected",n=!1;-1===o.indexOf(e.id)&&(t="student selectable",n=i);var r=f.enabled;return n?r=s({},r,f.disabled):t.includes("selected")&&(r=s({},r,f.selected)),l.default.createElement("button",{type:"button",key:e.id,"data-id":e.id,className:t,onClick:a.handleStudentClicked,style:r,disabled:n},e.name)});return l.default.createElement("div",null,t,l.default.createElement("div",{className:"clear"}),i&&l.default.createElement("p",{style:f.warning},u.default.exceededPairProgrammingMax()),0!==o.length&&l.default.createElement("button",{style:f.buttonLeft,type:"button",onClick:this.handleSubmit,className:"addPartners"},u.default.addPartners()))},e}(l.default.Component);c(t.default=p,"propTypes",{students:a.studentsShape,handleSubmit:r.default.func.isRequired}),e.exports=t.default},3306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(9))&&r.__esModule?r:{default:r},o=n(33),i=n(336),l=n(211);var u=function(){function e(n,e){this.levelId=n,this.optional=[!0,"true"].includes(e),(0,a.default)(document).ready(function(){var e=(0,a.default)("textarea#level_".concat(n,".response"));if(!e.val()){var t=(0,l.sourceForLevel)(window.appOptions.scriptName,n);t&&e.val(t)}e.blur(function(){(0,i.onAnswerChanged)(n,!0)}),e.on("input",null,null,function(){(0,i.onAnswerChanged)(n,!1)})})}var t=e.prototype;return t.getOptional=function(){return this.optional},t.getResult=function(){var e=(0,a.default)("#level_".concat(this.levelId)).val();return{response:e,valid:0<e.length,result:!0,testResult:o.TestResults.FREE_PLAY}},t.getAppName=function(){return"free_response"},t.lockAnswers=function(){(0,a.default)("textarea#level_".concat(this.levelId,".response")).prop("disabled",!0)},t.getCurrentAnswerFeedback=function(){},e}();t.default=u,e.exports=t.default},3873:function(e,t,n){n(114),n(48),e.exports=n(3295)},9:function(e,t){e.exports=$}},[[3873,0,1,2]]]);
