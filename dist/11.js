(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{428:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPage",(function(){return g})),n.d(t,"states",(function(){return w}));var r=n(49),a=n(0),o=n.n(a),l=n(455),i=n(450),c=n(458),u=n(448),s=n(451),f=n(81),p=n(44),m=n(561),y=n(562),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},b=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l};function g(){var e=this,t=b(Object(a.useState)(!1),2),n=t[0],g=t[1],w=b(Object(a.useState)(!1),2),O=w[0],E=w[1],x=b(Object(a.useState)({email:"",password:""}),2),j=x[0],k=x[1],S=function(e,t){k((function(n){var r;return d(d({},n),((r={})[e]=t,r))}))};return o.a.createElement(l.a,{item:!0,xs:!0,container:!0,alignItems:"center",justifyContent:"center",className:"p-2 p-2-all bg-white"},o.a.createElement(l.a,{item:!0,xs:12,sm:6,lg:4},o.a.createElement(l.a,{container:!0,direction:"column",wrap:"nowrap",className:"p-2 p-2-all"},o.a.createElement(i.a,{component:l.a,variant:"h4",className:"mb-3 font-weight-bold"},"PDF Sign Login"),o.a.createElement(l.a,null,o.a.createElement(c.a,{fullWidth:!0,size:"small",variant:"outlined",label:"Email",value:j.email,onChange:function(e){return S("email",e.target.value)}})),o.a.createElement(l.a,null,o.a.createElement(c.a,{fullWidth:!0,size:"small",type:n?"text":"password",variant:"outlined",label:"Password",value:j.password,onChange:function(e){return S("password",e.target.value)},InputProps:{endAdornment:o.a.createElement(u.a,{onClick:function(){return g(!n)}},n?o.a.createElement(y.a,{size:18}):o.a.createElement(m.a,{size:18}))}})),o.a.createElement(l.a,{container:!0,alignItems:"center"},o.a.createElement(l.a,{item:!0,xs:!0},o.a.createElement(i.a,{style:{fontSize:12},className:"text-uppercase"},"You already have a account?",o.a.createElement(r.d,{to:"signupUser"},o.a.createElement("span",{className:"d-inline-block ml-1 pointer text-primary"},"Sign Up")))),o.a.createElement(l.a,null,o.a.createElement(s.a,{color:"primary",size:"small",disabled:O,variant:"contained",onClick:function(){return v(e,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return E(!0),[4,f.a.login(j)];case 1:return e.sent(),E(!1),p.a.reload(),[2]}}))}))}},O?"Logging...":"Login"))))))}var w=[{url:"/",name:"login",data:{title:"Login",loggedOut:!0},component:g}]},561:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),l=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,u=c(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="Eye",t.a=u},562:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),l=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,u=c(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),a.a.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="EyeOff",t.a=u}}]);