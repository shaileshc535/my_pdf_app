(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{434:function(e,t,n){"use strict";n.r(t),n.d(t,"FileViewer",(function(){return Se})),n.d(t,"states",(function(){return De}));var r,a,o,i,c=n(44),l=n(0),u=n.n(l),s=n(600),f=n(594),d=function(e){var t=e.title,n=e.addDrawing,r=e.isPdfLoaded,a=e.savingPdfStatus,o=e.savePdf,i=e.downloadPdf,l=e.isPdfSaved;return u.a.createElement(f.a,{pointing:!0,className:"custom-menubar"},u.a.createElement(f.a.Item,{header:!0},t||"PDF Editor"),u.a.createElement(f.a.Menu,{position:"right"},r&&u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a.Item,{name:"Add Signature",onClick:n}),u.a.createElement(f.a.Item,{name:a?"Saving...":"Save",disabled:a,onClick:o}),u.a.createElement(f.a.Item,{name:"Download PDF",disabled:!l,onClick:i}),u.a.createElement(f.a.Item,{name:"Close",onClick:function(){return c.a.go("files")}}))))},h=n(595),p=n(596);!function(e){e.MOVE="MOVE",e.SCALE="SCALE",e.NO_MOVEMENT="NO_MOVEMENT"}(r||(r={})),function(e){e.RED="red",e.ORANGE="orange",e.YELLOW="yellow",e.OLIVE="olive",e.GREEN="green",e.TEAL="teal",e.BLUE="blue",e.VIOLOET="violet",e.PURPLE="purple",e.BROWN="brown",e.GREY="grey",e.BLACK="black"}(a||(a={})),function(e){e.IMAGE="image",e.DRAWING="drawing",e.TEXT="text",e.IMAGEDATA="imageData"}(o||(o={})),function(e){e.INSERT="insert",e.COMMAND="command"}(i||(i={}));var m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},A=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e},g=function(e){var t=e.open,n=e.dismiss,r=e.confirm,o=e.drawing,i=Object(l.createRef)(),c=m(Object(l.useState)([]),2),s=c[0],f=c[1],d=m(Object(l.useState)(o&&o.path||""),2),g=d[0],v=d[1],b=m(Object(l.useState)(0),2),y=b[0],E=b[1],w=m(Object(l.useState)(0),2),O=w[0],M=w[1],S=m(Object(l.useState)(1/0),2),D=S[0],C=S[1],x=m(Object(l.useState)(0),2),k=x[0],j=x[1],I=m(Object(l.useState)(1/0),2),T=I[0],P=I[1],N=m(Object(l.useState)(0),2),R=N[0],L=N[1],B=m(Object(l.useState)(!1),2),F=B[0],U=B[1],Q=m(Object(l.useState)(5),2),G=Q[0],V=Q[1],X=m(Object(l.useState)(a.BLACK),2),_=X[0],J=X[1];Object(l.useEffect)((function(){var e=i.current;if(e){var t=e.getBoundingClientRect(),n=t.x,r=t.y;E(n),M(r)}}),[i]);var W=function(){f([]),v(""),C(1/0),j(0),P(1/0),L(0),V(3),J(a.BLACK),n()};return u.a.createElement(h.a,{size:"small",centered:!0,dimmer:"blurring",open:t,onClose:W},u.a.createElement(h.a.Header,null,"Add your Drawing"),u.a.createElement(h.a.Content,null,u.a.createElement("div",{onMouseDown:function(e){e.preventDefault(),U(!0);var t=e.clientX-y,n=e.clientY-O;C(Math.min(D,t)),j(Math.max(k,t)),P(Math.min(T,n)),L(Math.max(R,n)),v(g+"M"+t+","+n),f(A(s,[["M",t,n]]))},onMouseMove:function(e){if(e.preventDefault(),F){var t=e.clientX-y,n=e.clientY-O;C(Math.min(D,t)),j(Math.max(k,t)),P(Math.min(T,n)),L(Math.max(R,n)),v(g+"L"+t+","+n),f(A(s,[["L",t,n]]))}},onMouseUp:function(e){e.preventDefault(),U(!1)}},u.a.createElement("svg",{ref:i,style:{width:"100%",height:"50vh"}},u.a.createElement("path",{strokeWidth:G,strokeLinejoin:"round",strokeLinecap:"round",stroke:_,fill:"none",d:g})))),u.a.createElement(h.a.Actions,null,u.a.createElement(p.a,{color:"black",content:"Cancel",onClick:W}),u.a.createElement(p.a,{content:"Done",labelPosition:"right",icon:"checkmark",onClick:function(){if(s.length){var e=-(D-10),t=-(T-10);r({stroke:_,strokeWidth:G,width:k-D+20,height:R-T+20,path:s.reduce((function(n,r){return""+n+r[0]+(r[1]+e)+", "+(r[2]+t)}),"")}),W()}else r()},positive:!0})))},v=n(143),b=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},y=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},E=function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){return t(r.result)},r.onerror=n,r.readAsArrayBuffer(e)}))},w=function(e){return b(void 0,void 0,Promise,(function(){var t;return y(this,(function(n){switch(n.label){case 0:return[4,Object(v.a)("PDFLib")];case 1:return n.sent(),[4,Object(v.a)("pdfjsLib")];case 2:return(t=n.sent()).getDocument(e).promise.then((function(t){t.getAttachments(e).then((function(e){return console.log(e)}))})),[2,t.getDocument(e).promise]}}))}))};var O,M=function(e,t,n,r,a,o,i,c){var l=t+r,u=e+n;return{top:l<0?0:l+o>c-50?c-50-o:l,left:u<0?0:u+a>i?i-a:u}},S=function(e){return parseFloat((e/255).toFixed(1))},D=n(56),C=n(495),x=n(7),k=n.n(x),j=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},I=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function T(e,t,n,r,a,o){return j(this,void 0,void 0,(function(){var n,i,c,l,u,s,f,d,h,p,m,A,g,b,y,w,M,x,j,T,P,N,R,L,B,F,U,Q,G,V,X,_,J,W,H,Y,z,Z,K,q,$,ee,te;return I(this,(function(I){switch(I.label){case 0:return[4,Object(v.a)("PDFLib")];case 1:i=I.sent(),I.label=2;case 2:return I.trys.push([2,6,,7]),[4,fetch(e).then((function(e){return e.blob()})).then((function(e){return n=e}))];case 3:return I.sent(),u=(l=i.PDFDocument).load,[4,E(n)];case 4:return[4,u.apply(l,[I.sent()])];case 5:return c=I.sent(),console.warn(c),[3,7];case 6:throw s=I.sent(),console.log("Failed to load PDF."),s;case 7:f=c.getPages(),d=i.pushGraphicsState,h=i.setLineCap,p=i.setLineJoin,m=i.LineCapStyle,A=i.LineJoinStyle,g=i.rgb,b=0,I.label=8;case 8:if(!(b<f.length))return[3,24];if(y=f[b],w=t[b],M=y.getHeight(),x=y.getWidth(),y.pushOperators(d(),h(m.Round),p(A.Round)),!(null==w?void 0:w.length))return[3,21];j=0,I.label=9;case 9:if(!(j<w.length))return[3,21];if("image"!==(T=w[j]).type)return[3,19];N=(P=T).file,W=P.x,H=P.y,X=P.width,_=P.height,R=void 0,I.label=10;case 10:return I.trys.push([10,17,,18]),"image/jpeg"!==N.type?[3,13]:(B=(L=c).embedJpg,[4,E(N)]);case 11:return[4,B.apply(L,[I.sent()])];case 12:return R=I.sent(),[3,16];case 13:return U=(F=c).embedPng,[4,E(N)];case 14:return[4,U.apply(F,[I.sent()])];case 15:R=I.sent(),I.label=16;case 16:return y.drawImage(R,{x:W,y:M-H-_,width:X,height:_}),[3,18];case 17:throw Q=I.sent(),console.log("Failed to embed image.",Q),Q;case 18:return[3,20];case 19:if("imageData"===T.type){V=(G=T).dataUri,W=G.x,H=G.y,X=G.width,_=G.height;try{y.drawImage(V,{x:W,y:H,width:X,height:_})}catch(e){throw console.log("Failed to embed image.",e),e}}else"drawing"===T.type&&(W=(J=T).x,H=J.y,Y=J.path,z=J.scale,Z=J.stroke,K=J.strokeWidth,q=window.w3color(Z).toRgb(),y.drawSvgPath(Y,{borderColor:g(S(q.r),S(q.g),S(q.b)),borderWidth:K,scale:z,x:W,y:M-H}));I.label=20;case 20:return j++,[3,9];case 21:return[4,c.embedPng("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApcAAABkCAYAAADT9RsPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHoSURBVHgB7dZBAQAgDAChaf/OuhD3hBSctwYAAAJ3AAAgIpcAAGTkEgCAjFwCAJCRSwAAMnIJAEBGLgEAyMglAAAZuQQAICOXAABk5BIAgIxcAgCQkUsAADJyCQBARi4BAMjIJQAAGbkEACAjlwAAZOQSAICMXAIAkJFLAAAycgkAQEYuAQDIyCUAABm5BAAgI5cAAGTkEgCAjFwCAJCRSwAAMnIJAEBGLgEAyMglAAAZuQQAICOXAABk5BIAgIxcAgCQkUsAADJyCQBARi4BAMjIJQAAGbkEACAjlwAAZOQSAICMXAIAkJFLAAAycgkAQEYuAQDIyCUAABm5BAAgI5cAAGTkEgCAjFwCAJCRSwAAMnIJAEBGLgEAyMglAAAZuQQAICOXAABk5BIAgIxcAgCQkUsAADJyCQBARi4BAMjIJQAAGbkEACAjlwAAZOQSAICMXAIAkJFLAAAycgkAQEYuAQDIyCUAABm5BAAgI5cAAGTkEgCAjFwCAJCRSwAAMnIJAEBGLgEAyMglAAAZuQQAICOXAABk5BIAgIxcAgCQkUsAADJyCQBARi4BAMjIJQAAGbkEACAjlwAAZOQSAICMXAIAkJFLAAAycgkAQEYuAQDIyCUAABm5BAAgI5cAAGTkEgCAzAf7xATEyEUOBAAAAABJRU5ErkJggg==")];case 22:$=I.sent(),y.drawImage($,{x:0,y:0,width:x,height:50}),y.drawText(o.owner.id+" / "+k()().format("llll"),{x:20,y:20,size:15,color:g(S(164),S(153),S(153))}),I.label=23;case 23:return b++,[3,8];case 24:return I.trys.push([24,27,,28]),[4,c.save()];case 25:return O=I.sent(),ee=new Blob([new Uint8Array(O.buffer,O.byteOffset,O.length)],{type:"application/pdf"}),[4,D.a.put("file/update-file",Object(C.a)({filename:ee,docname:r,fileId:a}))];case 26:return I.sent(),[3,28];case 27:throw te=I.sent(),console.log("Failed to save PDF."),te;case 28:return[2]}}))}))}function P(){return j(this,void 0,void 0,(function(){return I(this,(function(e){switch(e.label){case 0:return[4,Object(v.a)("download")];case 1:return e.sent()(O,name,"application/pdf"),[2]}}))}))}var N,R=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},B=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},U=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},Q=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(U(arguments[t]));return e};!function(e){e.RESET="RESET",e.ADD_ATTACHMENT="ADD_ATTACHMENT",e.REMOVE_ATTACHMENT="REMOVE_ATTACHMENT",e.UPDATE_ATTACHMENT="UPDATE_ATTACHMENT",e.UPDATE_PAGE_INDEX="UPDATE_PAGE_INDEX"}(N||(N={}));var G,V={pageIndex:-1,allPageAttachments:[],pageAttachments:[]},X=function(e,t){var n=e.pageIndex,r=e.allPageAttachments,a=e.pageAttachments;switch(t.type){case N.ADD_ATTACHMENT:var o=r.map((function(e,r){return n===r?Q(e,[t.attachment]):e}));return F(F({},e),{allPageAttachments:o,pageAttachments:o[n]});case N.REMOVE_ATTACHMENT:var i=r.map((function(e,r){return n===r?a.filter((function(e,n){return n!==t.attachmentIndex})):e}));return F(F({},e),{allPageAttachments:i,pageAttachments:i[n]});case N.UPDATE_ATTACHMENT:if(-1===n)return e;var c=r.map((function(e,r){return n===r?a.map((function(e,n){return n===t.attachmentIndex?F(F({},e),t.attachment):e})):e}));return F(F({},e),{allPageAttachments:c,pageAttachments:c[n]});case N.UPDATE_PAGE_INDEX:return F(F({},e),{pageIndex:t.pageIndex,pageAttachments:r[t.pageIndex]});case N.RESET:return{pageIndex:0,pageAttachments:[],allPageAttachments:Array(t.numberOfPages).fill([])};default:return e}},_=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},J=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};!function(e){e.PDF="pdf",e.IMAGE="image"}(G||(G={}));var W,H={pdf:function(e){return _(void 0,void 0,void 0,(function(){var t,n;return J(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,w(e)];case 1:return t=r.sent(),[2,{file:e,name:e.name,pages:Array(t.numPages).fill(0).map((function(e,n){return t.getPage(n+1)}))}];case 2:throw n=r.sent(),console.log("Failed to load pdf",n),new Error("Failed to load PDF");case 3:return[2]}}))}))}},Y=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},Z=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},K=function(e){var t=e.page,n=e.dimensions,r=e.updateDimensions,a=e.url,o=Object(l.useRef)(null),i=Z(Object(l.useState)(n&&n.width||0),2),c=i[0],s=i[1],f=Z(Object(l.useState)(n&&n.height||0),2),d=f[0],h=f[1],p=Z(Object(l.useState)(1),2);p[0],p[1];return Object(l.useEffect)((function(){var e;e=t,Y(void 0,void 0,void 0,(function(){var t,n,a,i,c,l;return z(this,(function(u){switch(u.label){case 0:return[4,e];case 1:return(t=u.sent())?(n=null===(c=o.current)||void 0===c?void 0:c.getContext("2d"),a=t.getViewport({scale:1}),s(a.width),h(a.height),n?[4,t.render({canvasContext:null===(l=o.current)||void 0===l?void 0:l.getContext("2d"),viewport:a}).promise]:[3,3]):[3,3];case 2:u.sent(),i={width:a.width,height:a.height},r(i),u.label=3;case 3:return[2]}}))}))}),[t,r,a]),u.a.createElement("div",null,u.a.createElement("canvas",{ref:o,width:c,height:d}))},q=n(598),$=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ee=n(511).a.div(W||(W=$(["\n    position: relative\n"],["\n    position: relative\n"]))),te=n(599),ne=function(e){var t=e.title,n=e.onConfirm,r=e.onDismiss;return u.a.createElement("div",null,u.a.createElement(te.a,{as:"h4",inverted:!0},t),u.a.createElement(p.a,{onClick:r},"No"),u.a.createElement(p.a,{negative:!0,onClick:n},"Yes"))},re=function(e){var t=e.canvasRef,n=e.positionTop,r=e.positionLeft,a=e.width,o=e.height,i=e.handleMouseOut,c=e.handleMouseDown,l=e.handleMouseMove,s=e.handleMouseUp,f=e.handleImageScale,d=e.dimmerActive,h=e.cancelDelete,p=e.deleteImage,m=e.onClick;return u.a.createElement("div",{onMouseDown:c,onMouseMove:l,onMouseUp:s,onMouseOut:i,onDoubleClick:m,style:{position:"absolute",top:n,left:r,borderStyle:"dashed",borderWidth:1,borderColor:"grey",width:a+2,height:o+2,cursor:"move"}},u.a.createElement(q.a.Dimmable,{as:ee,size:"medium",dimmed:d},u.a.createElement("canvas",{ref:t,style:{width:"100%",height:"100%"}}),u.a.createElement(q.a,{active:d,onClickOutside:h},u.a.createElement(ne,{title:"Delete?",onConfirm:p,onDismiss:h}))),u.a.createElement("div",{"data-direction":"top-left",onMouseDown:c,onMouseUp:s,onMouseMove:f,style:{position:"absolute",cursor:"nwse-resize",top:-5,left:-5,width:20,height:20}}))},ae=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},oe=function(e){var t=e.x,n=e.y,a=e.img,o=e.width,i=e.height,c=e.pageWidth,s=e.removeImage,f=e.pageHeight,d=e.updateImageAttachment,h=Object(l.useRef)(null),p=ae(Object(l.useState)(o),2),m=p[0],A=p[1],g=ae(Object(l.useState)(i),2),v=g[0],b=g[1],y=ae(Object(l.useState)(!1),2),E=y[0],w=y[1],O=ae(Object(l.useState)(n),2),S=O[0],D=O[1],C=ae(Object(l.useState)(t),2),x=C[0],k=C[1],j=ae(Object(l.useState)([]),2),I=j[0],T=j[1],P=ae(Object(l.useState)(r.NO_MOVEMENT),2),N=P[0],R=P[1],L=ae(Object(l.useState)(!1),2),B=L[0],F=L[1],U=function(e){if(e.preventDefault(),w(!1),N===r.MOVE){var t=M(x,S,e.movementX,e.movementY,m,v,c,f),n=t.top,a=t.left;d({x:a,y:n})}N===r.SCALE&&d({x:x,y:S}),R(r.NO_MOVEMENT)};Object(l.useEffect)((function(){!function(e){var t=h.current;if(t){var n=t.getContext("2d");if(n){var r=1;m>300&&(r=300/m),v>300&&(r=Math.min(r,300/v));var a=m*r,o=v*r;A(a),b(o),t.width=a,t.height=o,n.drawImage(e,0,0,a,o),t.toBlob((function(e){d({file:e,width:a,height:o})}))}}}(a)}),[a,m,v,d]);var Q=function(){return F(!1)};return u.a.createElement(re,{onClick:function(){return F(!0)},dimmerActive:B,cancelDelete:Q,deleteImage:function(){Q(),s()},positionLeft:x,positionTop:S,canvasRef:h,width:m,height:v,handleImageScale:function(e){e.preventDefault(),E&&(I.includes("left")&&(k(x+e.movementX),A(m-e.movementX)),I.includes("top")&&(D(S+e.movementY),b(v-e.movementY)),I.includes("right")&&A(m+e.movementX),I.includes("bottom")&&b(v+e.movementY))},handleMouseDown:function(e){e.preventDefault(),w(!0),R(r.MOVE);var t=e.currentTarget.dataset.direction;t&&(T(t.split("-")),R(r.SCALE))},handleMouseUp:U,handleMouseMove:function(e){if(e.preventDefault(),E){var t=M(x,S,e.movementX,e.movementY,m,v,c,f),n=t.top,r=t.left;D(n),k(r)}},handleMouseOut:function(e){N===r.MOVE&&U(e)}})},ie=n(448),ce=n(591),le=n(570),ue=function(e){var t=e.dimmerActive,n=e.cancelDelete,r=e.deleteDrawing,a=e.positionTop,o=e.positionLeft,i=e.width,c=e.height,l=e.svgRef,s=e.path,f=e.stroke,d=e.scale,h=e.strokeWidth,p=e.handleMouseDown,m=e.handleMouseMove,A=e.handleMouseOut,g=e.handleMouseUp,v=e.handleDrawingScale,b=e.onClick;return u.a.createElement("div",null,u.a.createElement("div",{onMouseDown:p,onMouseMove:m,onMouseUp:g,onMouseOut:A,style:{position:"absolute",top:a,left:o,width:i,height:c,borderStyle:"dashed",borderWidth:1,borderColor:"grey",cursor:"move"}},u.a.createElement("div",{style:{position:"absolute",top:-12,left:-8}},u.a.createElement(ce.a,{size:15})),u.a.createElement("div",{style:{position:"absolute",top:0,right:0,background:"whitesmoke",zIndex:9,borderRadius:"50%"}},u.a.createElement(ie.a,{onClick:b},u.a.createElement(le.a,{size:15}))),u.a.createElement(q.a.Dimmable,{as:ee,dimmed:t},u.a.createElement("svg",{ref:l},u.a.createElement("path",{strokeWidth:h,strokeLinecap:"round",strokeLinejoin:"round",stroke:f,fill:"none",d:s,scale:d})),u.a.createElement(q.a,{active:t,onClickOutside:n},u.a.createElement(ne,{title:"Delete?",onConfirm:r,onDismiss:n}))),u.a.createElement("div",{"data-direction":"top-left",onMouseDown:p,onMouseUp:g,onMouseMove:v,style:{position:"absolute",cursor:"nwse-resize",top:-12,left:-8,width:20,height:20}})))},se=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},fe=function(e){var t=e.x,n=e.y,a=e.width,o=e.height,i=e.stroke,c=e.strokeWidth,s=e.path,f=e.pageWidth,d=e.pageHeight,h=e.removeDrawing,p=e.updateDrawingAttachment,m=Object(l.createRef)(),A=se(Object(l.useState)(!1),2),g=A[0],v=A[1],b=se(Object(l.useState)(n),2),y=b[0],E=b[1],w=se(Object(l.useState)(t),2),O=w[0],S=w[1],D=se(Object(l.useState)(1),2),C=D[0],x=(D[1],se(Object(l.useState)(a),2)),k=x[0],j=x[1],I=se(Object(l.useState)([]),2),T=I[0],P=I[1],N=se(Object(l.useState)(o),2),R=N[0],L=N[1],B=se(Object(l.useState)(r.NO_MOVEMENT),2),F=B[0],U=B[1],Q=se(Object(l.useState)(!1),2),G=Q[0],V=Q[1];Object(l.useEffect)((function(){var e=m.current;e&&e.setAttribute("viewBox","0 0 "+a+" "+o)}),[m,a,o]);var X=function(e){if(e.preventDefault(),v(!1),F===r.MOVE){var t=M(O,y,e.movementX,e.movementY,a,o,f,d),n=t.top,i=t.left;p({x:i,y:n})}F===r.SCALE&&p({x:O,y:y}),U(r.NO_MOVEMENT)},_=function(){return V(!1)};return Object(l.useEffect)((function(){var e=1;k>300&&(e=300/k),R>300&&(e=Math.min(e,300/R)),console.log(e)}),[R,k]),u.a.createElement(ue,{stroke:i,scale:C,strokeWidth:c,path:s,width:k,svgRef:m,height:R,onClick:function(){return V(!0)},cancelDelete:_,dimmerActive:G,deleteDrawing:function(){_(),h()},handleMouseDown:function(e){e.preventDefault(),v(!0),U(r.MOVE);var t=e.currentTarget.dataset.direction;t&&(P(t.split("-")),U(r.SCALE))},handleMouseMove:function(e){if(e.preventDefault(),g){var t=M(O,y,e.movementX,e.movementY,a,o,f,d),n=t.top,r=t.left;E(n),S(r)}},handleMouseOut:function(e){F===r.MOVE&&X(e)},handleMouseUp:X,positionLeft:O,positionTop:y,handleDrawingScale:function(e){e.preventDefault(),g&&(T.includes("left")&&(S(O+e.movementX),j(k-e.movementX)),T.includes("top")&&(E(y+e.movementY),L(R-e.movementY)),T.includes("right")&&j(k+e.movementX),T.includes("bottom")&&L(R+e.movementY))}})},de=function(e){var t=e.text,n=e.width,r=e.height,a=e.inputRef,o=e.mode,c=e.size,l=e.fontFamily,s=e.positionTop,f=e.positionLeft,d=e.onChangeText,h=e.toggleEditMode,p=e.handleMouseDown,m=e.handleMouseMove,A=e.handleMouseOut,g=e.handleMouseUp,v=e.lineHeight;return u.a.createElement("div",{onMouseDown:p,onMouseMove:m,onMouseUp:g,onMouseOut:A,onDoubleClick:h,style:{width:n,border:1,height:r,fontFamily:l,fontSize:c,lineHeight:v,cursor:o===i.COMMAND?"move":"default",top:s,left:f,borderColor:"gray",borderStyle:"solid",wordWrap:"break-word",padding:0,position:"absolute"}},u.a.createElement("input",{type:"text",ref:a,onChange:d,readOnly:o===i.COMMAND,style:{width:"100%",borderStyle:"none",borderWidth:0,fontFamily:l,fontSize:c,outline:"none",padding:0,boxSizing:"border-box",lineHeight:v,height:r,margin:0,backgroundColor:"transparent",cursor:o===i.COMMAND?"move":"text"},value:t}))},he=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},pe=function(e){var t=e.x,n=e.y,a=e.text,o=e.width,c=e.height,s=e.lineHeight,f=e.size,d=e.fontFamily,h=e.pageHeight,p=e.pageWidth,m=e.updateTextAttachment,A=Object(l.useRef)(null),g=he(Object(l.useState)(a||""),2),v=g[0],b=g[1],y=he(Object(l.useState)(!1),2),E=y[0],w=y[1],O=he(Object(l.useState)(n),2),S=O[0],D=O[1],C=he(Object(l.useState)(t),2),x=C[0],k=C[1],j=he(Object(l.useState)(r.NO_MOVEMENT),2),I=j[0],T=j[1],P=he(Object(l.useState)(i.COMMAND),2),N=P[0],R=P[1],L=function(e){if(e.preventDefault(),N===i.COMMAND){if(w(!1),I===r.MOVE){var t=M(x,S,e.movementX,e.movementY,o,c,p,h),n=t.top,a=t.left;m({x:a,y:n})}T(r.NO_MOVEMENT)}},B=function(){var e;null===(e=document.getSelection())||void 0===e||e.removeAllRanges(),m({lines:[v],text:v})};return u.a.createElement(de,{text:v,width:o,height:c,mode:N,size:f,lineHeight:s,inputRef:A,fontFamily:d,positionTop:S,onChangeText:function(e){var t=e.currentTarget.value;b(t)},positionLeft:x,handleMouseUp:L,toggleEditMode:function(){var e=A.current,t=N===i.COMMAND?i.INSERT:i.COMMAND;R(t),e&&t===i.INSERT?(e.focus(),e.select()):B()},handleMouseOut:function(e){I===r.MOVE&&L(e),N===i.INSERT&&(R(i.COMMAND),B())},handleMouseDown:function(e){N===i.COMMAND&&(w(!0),T(r.MOVE))},handleMouseMove:function(e){if(e.preventDefault(),E){var t=M(x,S,e.movementX,e.movementY,o,c,p,h),n=t.top,r=t.left;D(n),k(r)}}})},me=function(){return(me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Ae=function(e){var t=e.attachments,n=e.pdfName,r=e.pageDimensions,a=e.removeAttachment,i=e.updateAttachment,c=function(e){return function(t){return i(e,t)}};return t?u.a.createElement(u.a.Fragment,null,t.length?t.map((function(e,t){var i=n+"-"+t;return e.type===o.IMAGE?u.a.createElement(oe,me({key:i,pageWidth:r.width,pageHeight:r.height,removeImage:function(){return a(t)},updateImageAttachment:c(t)},e)):e.type===o.DRAWING?u.a.createElement(fe,me({key:i,pageWidth:r.width,pageHeight:r.height,removeDrawing:function(){return a(t)},updateDrawingAttachment:c(t)},e)):e.type===o.TEXT?u.a.createElement(pe,me({key:i,pageWidth:r.width,pageHeight:r.height,updateTextAttachment:c(t)},e)):null})):null):null},ge=n(455),ve=n(592),be=n(593),ye=n(465),Ee=function(){return(Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},we=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},Oe=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},Me=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i};function Se(){var e,t=this,n=c.a.params.fileId,r=Me(Object(l.useState)(!1),2),a=r[0],i=r[1],f=Me(Object(l.useState)(null),2),h=f[0],p=f[1],m=Me(Object(l.useState)(!1),2),A=m[0],v=m[1],b=function(){var e=B(Object(l.useState)(""),2),t=e[0],n=e[1],r=B(Object(l.useState)(-1),2),a=r[0],o=r[1],i=B(Object(l.useState)(),2),u=i[0],s=i[1],f=B(Object(l.useState)(),2),d=f[0],h=f[1],p=B(Object(l.useState)([]),2),m=p[0],A=p[1],g=B(Object(l.useState)(!1),2),v=g[0],b=g[1],y=B(Object(l.useState)(!1),2),E=y[0],w=y[1],O=B(Object(l.useState)(!1),2),M=O[0],S=O[1],D=B(Object(l.useState)(!1),2),C=D[0],x=D[1];return{currentPage:m[a],dimensions:u,setDimensions:Object(l.useCallback)(s,[s]),name:t,setName:n,pageIndex:a,setPageIndex:o,file:d,setFile:h,nextPage:function(){var e=a+1;o(a+1),w(0===e),S(e===m.length-1)},pages:m,savePdf:function(e,t,n,r){return R(void 0,void 0,void 0,(function(){var a;return L(this,(function(o){switch(o.label){case 0:if(C||!d)return[2];x(!0),o.label=1;case 1:return o.trys.push([1,3,4,5]),[4,T(d,e,0,t,n,r)];case 2:return o.sent(),[3,5];case 3:return a=o.sent(),console.log(a),[3,5];case 4:return x(!1),c.a.reload(),[7];case 5:return[2]}}))}))},initialize:function(e){var t=e.name,r=e.file,a=e.pages,i=a.length>1;n(t),h(r),A(a),o(0),b(i),w(!0),S(1===a.length)},isMultiPage:v,previousPage:function(){var e=a-1;o(e),w(0===e),S(e===m.length-1)},isFirstPage:E,isLastPage:M,isSaving:C}}(),y=b.file,E=b.initialize,w=b.pageIndex,O=b.isMultiPage,M=b.isFirstPage,S=b.isLastPage,C=b.currentPage,x=b.isSaving,k=b.savePdf,j=b.previousPage,I=b.nextPage,F=b.setDimensions,Q=b.name,W=b.dimensions,Y=function(){var e=U(Object(l.useReducer)(X,V),2),t=e[0],n=e[1],r=t.allPageAttachments,a=t.pageAttachments;return{add:function(e){return n({type:N.ADD_ATTACHMENT,attachment:e})},reset:function(e){return n({type:N.RESET,numberOfPages:e})},remove:function(e){return n({type:N.REMOVE_ATTACHMENT,attachmentIndex:e})},update:function(e,t){return n({type:N.UPDATE_ATTACHMENT,attachmentIndex:e,attachment:t})},setPageIndex:Object(l.useCallback)((function(e){return n({type:N.UPDATE_PAGE_INDEX,pageIndex:e})}),[n]),pageAttachments:a,allPageAttachments:r}}(),z=Y.add,Z=Y.allPageAttachments,q=Y.pageAttachments,$=Y.reset,ee=Y.update,te=Y.remove,ne=Y.setPageIndex,re=function(e){var t=e.use,n=e.afterUploadPdf;return{upload:function(e){return _(void 0,void 0,void 0,(function(){var r;return J(this,(function(a){switch(a.label){case 0:return[4,H[t](e)];case 1:return r=a.sent(),t===G.PDF&&n&&n(r),[2]}}))}))}}}({use:G.PDF,afterUploadPdf:function(e){E(e);var t=e.pages.length;$(t)}}).upload;Object(l.useLayoutEffect)((function(){return ne(w)}),[w,ne]);return Object(l.useEffect)((function(){we(t,void 0,void 0,(function(){var e;return Oe(this,(function(t){switch(t.label){case 0:return[4,D.a.get("file/get-file/"+n)];case 1:return e=t.sent().data,p(e),[2]}}))}))}),[]),Object(l.useEffect)((function(){h&&re(h[0].file_url)}),[h]),u.a.createElement(ge.a,{style:{width:"100%"}},u.a.createElement(d,{title:h&&(null===(e=h[0])||void 0===e?void 0:e.docname),savePdf:function(){i(!1);try{k(Z,h[0].docname,h[0]._id,h[0])}finally{i(!0)}},downloadPdf:P,isPdfSaved:a,addDrawing:function(){return v(!0)},savingPdfStatus:x,isPdfLoaded:!!y}),y?u.a.createElement(ge.a,{container:!0,alignItems:"center",className:"p-2 p-2-all"},u.a.createElement(ge.a,null,O&&!M&&u.a.createElement(ie.a,{color:"primary",onClick:j},u.a.createElement(ve.a,null))),u.a.createElement(ge.a,{item:!0,xs:!0,container:!0,justifyContent:"center"},C&&u.a.createElement(s.a,{compact:!0,stacked:O&&!S},u.a.createElement("div",{style:{position:"relative"}},u.a.createElement(K,{dimensions:W,updateDimensions:F,page:C,url:y}),W&&u.a.createElement(Ae,{pdfName:Q,removeAttachment:te,updateAttachment:ee,pageDimensions:W,attachments:q})))),u.a.createElement(ge.a,null,O&&!S&&u.a.createElement(ie.a,{color:"primary",onClick:I},u.a.createElement(be.a,null)))):u.a.createElement(ye.a,null),u.a.createElement(g,{open:A,dismiss:function(){return v(!1)},confirm:function(e){if(e){var t,n=Ee(Ee({id:(t=0,function(){return t++}),type:o.DRAWING},e),{x:0,y:0,scale:1});z(n)}}}))}var De=[{url:"/file-viewer?:fileId",name:"fileViewer",data:{title:"File Viewer",loggedIn:!0},component:Se}]},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),o=n(360),i=n(455),c=n(86),l=n.n(c),u=Object(o.a)((function(){return{loadingWrapper:{top:0,left:0,right:0,bottom:0,zIndex:9999,position:"fixed",background:"rgba(0,0,0,0.25)"},loadingSpinner:{width:65,height:65,borderStyle:"solid",borderWidth:4,borderColor:"#50d3bb #fff #fff",borderRadius:"50%"}}}));function s(){var e=u();return a.a.createElement(i.a,{container:!0,alignItems:"center",justifyContent:"center",className:l()(e.loadingWrapper)},a.a.createElement(i.a,{className:l()(e.loadingSpinner,"loading")}))}},495:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(142);function a(e,t){var n=void 0===t?{}:t,o=n.formData,i=void 0===o?new FormData:o,c=n.insideKey,l=void 0===c?"":c;return Object(r.isPlainObject)(e)?Object.keys(e).forEach((function(t){a(e[t],{formData:i,insideKey:l?l+"["+t+"]":t})})):Object(r.isArray)(e)?e.forEach((function(e,t){a(e,{formData:i,insideKey:l?l+"["+t+"]":String(t)})})):null!=e&&i.append(l,e),i}}}]);