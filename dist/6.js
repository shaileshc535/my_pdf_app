(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{433:function(e,t,n){"use strict";n.r(t),n.d(t,"ReviewFiles",(function(){return g})),n.d(t,"states",(function(){return E}));var r=n(0),a=n.n(r),o=n(49),i=n(455),l=n(450),c=n(140),s=n(454),u=n(448),f=n(459),p=n(496),m=n(497),d=n(56),v=n(471),b=n(465),h=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},y=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},w=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i};function g(){var e=this,t=w(Object(r.useState)([]),2),n=t[0],g=t[1],E=w(Object(r.useState)(!1),2),O=E[0],x=E[1];return Object(r.useEffect)((function(){h(e,void 0,void 0,(function(){var e;return y(this,(function(t){switch(t.label){case 0:return t.trys.push([0,,2,3]),x(!0),[4,d.a.post("files/review-files-list",{paginate:!0,limit:"10",page:"1"})];case 1:return e=t.sent().data,g(e),[3,3];case 2:return x(!1),[7];case 3:return[2]}}))}))}),[]),a.a.createElement(i.a,{className:"p-2 p-2-all"},a.a.createElement(i.a,{container:!0,alignItems:"center",className:"p-2-all"},a.a.createElement(l.a,{component:i.a,item:!0,xs:!0,variant:"h5",className:"font-weight-bold"},"Reviewed PDF Files")),O?a.a.createElement(b.a,null):0!==n.length?a.a.createElement(i.a,{container:!0,alignItems:"center",className:"p-2-all"},n.map((function(e,t){return a.a.createElement(i.a,{item:!0,xs:6,md:4,lg:3,key:t},a.a.createElement(c.a,{elevation:1},a.a.createElement(i.a,{container:!0,alignItems:"center"},a.a.createElement(i.a,{item:!0,xs:12,className:"p-3 text-center position-relative"},a.a.createElement(p.a,{size:180,className:"text-success"})),a.a.createElement(i.a,{item:!0,xs:12},a.a.createElement(s.a,null)),a.a.createElement(i.a,{item:!0,xs:12,container:!0,wrap:"nowrap",alignItems:"center",className:"p-2"},a.a.createElement(i.a,{container:!0,direction:"column"},a.a.createElement(l.a,{variant:"body2",className:"p-1"},e.fileId.docname),a.a.createElement(l.a,{className:"p-1 font-weight-bold text-primary",style:{fontSize:11}},"Signed By ",e.receiverId.fullname),e.reviewFailReason?a.a.createElement(l.a,{className:"p-1 font-weight-bold",style:{fontSize:11,color:"red"}},"Reason for fail - ",e.reviewFailReason):""),a.a.createElement(o.d,{to:"reviewFileViewer",params:{fileId:e._id}},a.a.createElement(u.a,null,a.a.createElement(f.a,{title:"View PDF file"},a.a.createElement(m.a,{size:16}))))))))}))):a.a.createElement(i.a,{className:"p-md-5"},a.a.createElement(v.a,{content:"You don't have any reviewed file."})))}var E=[{url:"/reviewed-files",name:"reviewFiles",data:{title:"Signed Document",loggedIn:!0},component:g}]},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(360),i=n(455),l=n(86),c=n.n(l),s=Object(o.a)((function(){return{loadingWrapper:{top:0,left:0,right:0,bottom:0,zIndex:9999,position:"fixed",background:"rgba(0,0,0,0.25)"},loadingSpinner:{width:65,height:65,borderStyle:"solid",borderWidth:4,borderColor:"#50d3bb #fff #fff",borderRadius:"50%"}}}));function u(){var e=s();return a.a.createElement(i.a,{container:!0,alignItems:"center",justifyContent:"center",className:c()(e.loadingWrapper)},a.a.createElement(i.a,{className:c()(e.loadingSpinner,"loading")}))}},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(455),i=n(450);function l(e){return a.a.createElement(o.a,{direction:"column",wrap:"nowrap",container:!0,alignItems:"center",justifyContent:"center",className:"text-center p-5 border border-danger"},a.a.createElement(i.a,{className:"p-3 text-uppercase text-danger font-weight-bold"},e.content),e.button&&e.button)}},496:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),i=n.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,s=c(e,["color","size"]);return a.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),a.a.createElement("polyline",{points:"13 2 13 9 20 9"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="File",t.a=s},497:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),i=n.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,s=c(e,["color","size"]);return a.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),a.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Edit",t.a=s}}]);