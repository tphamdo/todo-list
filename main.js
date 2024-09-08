(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,'/*\n * Css Reset\n */\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n#root, #__next {\n  isolation: isolate;\n}\n\n\n/*\n * Custom Styling\n */\n\n:root {\n  --light-grey: #F7F7F7;\n  --black: #000000;\n  --navbar-width: 350px;\n  --header-height: 90px;\n}\n\nbody {\n  font-family: \'Roboto\', sans-serif, serif;\n  font-size: 24px;\n  height: 100vh;\n  width: 100vw;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n}\n\nheader {\n  padding: 0px 24px;\n  height: var(--header-height);\n  background-color: var(--black);\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\nnav {\n  padding: 32px 24px;\n  background-color: var(--light-grey);\n  position: fixed;\n  top: var(--header-height);\n  height: 100%;\n  width: var(--navbar-width);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background-color: red; */\n}\n\n.icon svg {\n  height: 30px;\n  width: 30px;\n}\n\n#projects-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n#main-nav-items {\n  margin-bottom: 24px;\n}\n\n.nav-item {\n  background-color: inherit;\n  border: none;\n  width: 100%;\n  text-align: left;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  padding: 0 4px;\n}\n\n.nav-item:hover {\n  font-weight: 500;\n}\n\n.deleteContainer {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.project-item:hover .deleteContainer {\n  visibility: visible;\n}\n\n.project-item .deleteContainer:hover {\n  font-weight: 1000;\n  color: red;\n}\n\n.nav-item:hover::before {\n  content: "> ";\n  /* preserve whitespace from removal due to flexbox */\n  white-space: pre-wrap;\n}\n\n.nav-header {\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n  padding: 4px 0;\n}\n\nform.new-project {\n  position: relative;\n  z-index: 3;\n}\n\ninput.new-project {\n  background-color: transparent;\n  width: 100%;\n}\n\ninput.new-project:focus {\n}\n\n.overlay {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n}\n\n.overlay.todo {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay.active {\n  display: block;\n}\n\n.content {\n  margin-left: var(--navbar-width);\n  padding: 24px 36px;\n  height: 100%;\n}\n\ndiv.add-todo {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  height: 60px;\n  width: 60px;\n}\n\nbutton.add-todo {\n  height: 100%;\n  width: 100%;\n  font-size: 2.5rem;\n  font-weight: 1000;\n  background-color: black;\n  color: white;\n  border-radius: 9999px;\n}\n\n.todo-dialog {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  border-radius: 8px;\n  border: 2px solid black;\n  padding: 16px;\n  background-color: var(--light-grey);\n  transform: translate(-50%, -50%) scale(0);\n  transition: 2s ease-in-out;\n\n  & form {\n    display: flex;\n    flex-direction: column;\n\n    & .header, input, select {\n      margin-bottom: 12px;\n    }\n  }\n}\n\n.todo-dialog.active {\n  display: block;\n  transform: translate(-50%, -50%) scale(1);\n  transition: 0.2s ease-in-out;\n}\n\ninput, select {\n  box-shadow: none;\n  border-style: solid;\n  outline: 0;\n  border: 2px solid transparent;\n  padding: 2px 4px;\n  border-radius: 8px;\n  background-color: white;\n}\n\nselect {\n  height: 46px;\n}\n\ninput:focus, select:focus {\n  border: 2px solid black;\n}\n\ninput[type="submit"] {\n  background-color: black;\n  color: white;\n}\n\ninput[type=checkbox] {\n    transform: scale(1.5);\n}\n\n.todo-item {\n  display: flex;\n  gap: 16px;\n  padding: 0 4px;\n  align-items: center;\n  margin-bottom: 4px;\n  max-width: 1000px;\n\n  & .due-date {\n    margin-left: auto;\n  }\n\n  & button svg{\n    height: 30px;\n    width: 30px;\n  }\n}\n\n.todo-item.done .title {\n  text-decoration: line-through;\n}\n',""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),s=n(659),c=n.n(s),d=n(56),u=n.n(d),l=n(540),m=n.n(l),h=n(113),f=n.n(h),p=n(365),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),o()(p.A,g),p.A&&p.A.locals&&p.A.locals;class b{#e=[];#t=0;constructor(e){this.name=e}addTodo(e){if(!e)return;let t=Object.assign(e,{id:this.#t++});this.#e.push(t)}deleteTodo(e){if(!e&&0!==e)return;let t=this.#e.findIndex((t=>t.id==e));-1!==t&&this.#e.splice(t,1)}getTodo(e){if(!e&&0!==e)return null;let t=this.#e.findIndex((t=>t.id==e));return-1===t?null:this.#e[t]}get todos(){return this.#e}}class w{constructor(e){this.title=e.title,this.descr=e.descr,this.dueDate=new Date(e.dueDate),this.priority=e.priority,this.done=e.done,this.projectName=e.projectName,this.dateAdded=e.dateAdded?new Date(e.dateAdded):new Date}edit(e){"title"in e&&(this.title=e.title),"descr"in e&&(this.descr=e.descr),"dueDate"in e&&(this.dueDate=e.dueDate),"priority"in e&&(this.priority=e.priority),"done"in e&&(this.done=e.done),"projectName"in e&&(this.projectName=e.projectName)}}function v(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function y(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function x(e){const t=y(e);return t.setHours(0,0,0,0),t}function M(e){return t=e,n=function(e){return v(e,Date.now())}(e),+x(t)==+x(n);var t,n}function k(e,t){const n=y(e);return isNaN(t)?v(e,NaN):t?(n.setDate(n.getDate()+t),n):n}const T=Object.freeze({HIGH:Symbol("high"),MEDIUM:Symbol("medium"),LOW:Symbol("low")}),D=new Date,E=k(new Date,3),C=k(new Date,7),L=k(new Date,14),S=k(new Date,28),j=[{title:"Meditate for 10 minutes",description:"",dueDate:D,priority:T.HIGH,done:!0,projectName:"Habits"},{title:"Go to the gym",description:"",dueDate:D,priority:T.HIGH,done:!1,projectName:"Habits"},{title:"Take out the trash",description:"",dueDate:E,priority:T.MEDIUM,done:!1,projectName:"Chores"},{title:"Go on a walk",description:"",dueDate:D,priority:T.HIGH,done:!0,projectName:"Habits"},{title:"Do the dishes",description:"",dueDate:D,priority:T.MEDIUM,done:!1,projectName:"Chores"},{title:"Replace the air filter",description:"",dueDate:C,priority:T.HIGH,done:!1,projectName:"Chores"},{title:"Finish Javascript Course",description:"",dueDate:L,priority:T.HIGH,done:!1,projectName:"The Odin Project"},{title:"Finish React Course",description:"",dueDate:S,priority:T.HIGH,done:!1,projectName:"The Odin Project"},{title:"Video Call Jules",description:"",dueDate:D,priority:T.HIGH,done:!0,projectName:"Habits"}];function P(){const e=[],t=function(t){if(-1!==e.findIndex((e=>e.name==t)))return;let n=new b(t);return e.push(n),i(),n},n=function(n){if(!n)return;let r=e.findIndex((e=>e.name==n.projectName));-1!==r?(e[r].addTodo(new w(n)),i()):t(n.projectName).addTodo(new w(n))},r=function(t,n){if(!t||!n)return null;let r=e.findIndex((e=>e.name==t));return-1===r?null:e[r].getTodo(n)},o=function(t){if(!t)return null;let n=e.findIndex((e=>e.name==t));return-1===n?null:e[n]},a=()=>{let t=[];return e.forEach((e=>{t.push(...e.todos)})),t},i=()=>{const t=a(),n=e.map((e=>e.name));localStorage.setItem("todos",JSON.stringify(t)),localStorage.setItem("projectNames",JSON.stringify(n))};return{addProject:t,deleteProject:function(t){if(!t)return;let n=e.findIndex((e=>e.name==t));-1!==n&&e.splice(n,1)},getProjects:()=>e,addTodo:n,deleteTodo:function(t,n){if(!t||!n)return;let r=e.findIndex((e=>e.name==t));-1!==r&&(e[r].deleteTodo(n),i())},getProject:o,getAllTodos:a,getTodo:r,editTodo:function(e,t,n){const a=r(e,t);if(!a)return;const s=n.projectName;if(s&&a.projectName!==s){console.log("here");const e=o(s),r=o(a.projectName);if(!e||!r)return;r.deleteTodo(t),a.edit(n),e.addTodo(a)}else a.edit(n);i()},getTodaysTodos:()=>{let e=a();return e=e.filter((e=>M(e.dueDate))),e},getWeeksTodos:()=>{let e=a(),t=x(new Date),n=function(e){const t=y(e);return t.setHours(23,59,59,999),t}(k(t,7*1));return e=e.filter((e=>function(e,t){const n=+y(e),[r,o]=[+y(t.start),+y(t.end)].sort(((e,t)=>e-t));return n>=r&&n<=o}(e.dueDate,{start:t,end:n}))),e},getCompletedTodos:()=>{let e=a();return e=e.filter((e=>e.done)),e},init:function(){if(function(){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&"QuotaExceededError"===t.name&&e&&0!==e.length}}()){let e=localStorage.getItem("projectNames"),r=localStorage.getItem("todos");if(r&&e)return e=JSON.parse(e),e.forEach((e=>t(e))),r=JSON.parse(r),void r.forEach((e=>n(e)))}j.forEach((e=>{n(e)}))}}}const N=Object.freeze({ALL:Symbol.for("All"),TODAY:Symbol.for("Today"),WEEK:Symbol.for("Week"),COMPLETED:Symbol.for("Completed"),PROJECT:Symbol.for("Project")}),O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function A(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const W={date:A({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:A({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:A({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},H={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function q(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=n?.width?String(n.width):t;r=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=n?.width?String(n.width):e.defaultWidth;r=e.values[o]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const I={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function F(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;const i=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(s):function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(s);let d;return d=e.valueCallback?e.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:t.slice(i.length)}}}const Y={ordinalNumber:(z={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(z.matchPattern);if(!n)return null;const r=n[0],o=e.match(z.parsePattern);if(!o)return null;let a=z.valueCallback?z.valueCallback(o[0]):o[0];return a=t.valueCallback?t.valueCallback(a):a,{value:a,rest:e.slice(r.length)}}),era:F({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:F({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:F({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var z;const G={code:"en-US",formatDistance:(e,t,n)=>{let r;const o=O[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:(e,t,n,r)=>H[e],localize:I,match:Y,options:{weekStartsOn:0,firstWeekContainsDate:1}};let J={};function Q(){return J}Math.pow(10,8);const B=6048e5,R=864e5;function X(e){const t=y(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function U(e){const t=y(e);return function(e,t){const n=x(e),r=x(t),o=+n-X(n),a=+r-X(r);return Math.round((o-a)/R)}(t,function(e){const t=y(e),n=v(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t))+1}function $(e,t){const n=Q(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=y(e),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function _(e){return $(e,{weekStartsOn:1})}function K(e){const t=y(e),n=t.getFullYear(),r=v(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=_(r),a=v(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=_(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function V(e){const t=y(e),n=+_(t)-+function(e){const t=K(e),n=v(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),_(n)}(t);return Math.round(n/B)+1}function Z(e,t){const n=y(e),r=n.getFullYear(),o=Q(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=v(e,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=$(i,t),c=v(e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const d=$(c,t);return n.getTime()>=s.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function ee(e,t){const n=y(e),r=+$(n,t)-+function(e,t){const n=Q(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=Z(e,t),a=v(e,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),$(a,t)}(n,t);return Math.round(r/B)+1}function te(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const ne={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return te("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):te(n+1,2)},d:(e,t)=>te(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>te(e.getHours()%12||12,t.length),H:(e,t)=>te(e.getHours(),t.length),m:(e,t)=>te(e.getMinutes(),t.length),s:(e,t)=>te(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return te(Math.trunc(r*Math.pow(10,n-3)),t.length)}},re={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return ne.y(e,t)},Y:function(e,t,n,r){const o=Z(e,r),a=o>0?o:1-o;return"YY"===t?te(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):te(a,t.length)},R:function(e,t){return te(K(e),t.length)},u:function(e,t){return te(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return te(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return te(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ne.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return te(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=ee(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):te(o,t.length)},I:function(e,t,n){const r=V(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):te(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):ne.d(e,t)},D:function(e,t,n){const r=U(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):te(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return te(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return te(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return te(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return ne.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):ne.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):te(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):te(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ne.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ne.s(e,t)},S:function(e,t){return ne.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return ae(r);case"XXXX":case"XX":return ie(r);default:return ie(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ae(r);case"xxxx":case"xx":return ie(r);default:return ie(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+oe(r,":");default:return"GMT"+ie(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+oe(r,":");default:return"GMT"+ie(r,":")}},t:function(e,t,n){return te(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return te(e.getTime(),t.length)}};function oe(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+t+te(a,2)}function ae(e,t){return e%60==0?(e>0?"-":"+")+te(Math.abs(e)/60,2):ie(e,t)}function ie(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+te(Math.trunc(r/60),2)+t+te(r%60,2)}const se=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ce=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},de={p:ce,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return se(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",se(r,t)).replace("{{time}}",ce(o,t))}},ue=/^D+$/,le=/^Y+$/,me=["D","DD","YY","YYYY"];function he(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=y(e);return!isNaN(Number(n))}const fe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ge=/^'([^]*?)'?$/,be=/''/g,we=/[a-zA-Z]/;function ve(e){const t=e.match(ge);return t?t[1].replace(be,"'"):e}!function(){const e=P(),t=document.querySelector("#projects-container"),n=document.querySelector("#todo-container"),r=document.querySelector("#title-container"),o=document.querySelector("#allTodos"),a=document.querySelector("#today"),i=document.querySelector("#week"),s=document.querySelector("#completed"),c=document.querySelector(".add-todo"),d=document.querySelector(".add-project"),u=document.querySelector("#todo-form"),l=document.querySelector(".todo-dialog"),m=document.querySelector(".overlay"),h=document.querySelector("#todo-form .header"),f=document.querySelector("#todo-form #title"),p=document.querySelector("#todo-form #due-date"),g=document.querySelector("#todo-form #project");let b=new Date,w=N.ALL,v=null;function x(){t.textContent="",n.textContent="",g.textContent="",e.getProjects().forEach((e=>{t.appendChild(function(e){const t=document.createElement("button");t.textContent=e.name,t.dataset.name=e.name,t.classList.add("nav-item"),t.classList.add("project-item");const n=document.createElement("button");return n.classList.add("deleteContainer"),n.innerHTML='\n            <div class="right-button-panel icon">\n                <i class="delete">&times;</i>\n            </div>\n        ',n.addEventListener("click",S),t.appendChild(n),t}(e)),g.appendChild(function(e){const t=document.createElement("option");return t.setAttribute("value",e),t.textContent=e,t}(e.name))})),t.addEventListener("click",L),function(){var e;switch(r.textContent="",w){case N.ALL:case N.TODAY:case N.WEEK:case N.COMPLETED:e=Symbol.keyFor(w);break;case N.PROJECT:e=v||"";break;default:return}r.appendChild(function(e){const t=document.createElement("h3");return t.textContent=e,t}(e))}(),function(){var t;switch(w){case N.ALL:t=e.getAllTodos();break;case N.TODAY:t=e.getTodaysTodos();break;case N.WEEK:t=e.getWeeksTodos();break;case N.COMPLETED:t=e.getCompletedTodos();break;case N.PROJECT:t=e.getProject(v).todos;break;default:return}t.sort(((e,t)=>e.dateAdded-t.dateAdded)),t.forEach((e=>{n.appendChild(function(e){const t=document.createElement("div"),n=document.createElement("input"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("button"),i=document.createElement("button");return t.classList.add("todo-item"),e.done&&t.classList.add("done"),t.dataset.projectName=e.projectName,t.dataset.id=e.id,n.setAttribute("type","checkbox"),n.checked=e.done,n.addEventListener("change",C),r.textContent=e.title,r.classList.add("title"),o.textContent=function(e,t,n){const r=Q(),o=n?.locale??r.locale??G,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=y(e);if(!he(s))throw new RangeError("Invalid time value");let c=t.match(pe).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,de[t])(e,o.formatLong):e})).join("").match(fe).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:ve(e)};if(re[t])return{isToken:!0,value:e};if(t.match(we))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const d={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return c.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return le.test(e)}(a)||!n?.useAdditionalDayOfYearTokens&&function(e){return ue.test(e)}(a))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),me.includes(e))throw new RangeError(r)}(a,t,String(e)),(0,re[a[0]])(s,a,o.localize,d)})).join("")}(e.dueDate,"MM/dd/yyyy"),o.classList.add("due-date"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>',i.addEventListener("click",k),i.classList.add("edit"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>',a.addEventListener("click",E),a.classList.add("remove"),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a),t}(e))}))}(),p.valueAsDate=b}function M(t){t.preventDefault();const n=t.target.elements.title.value,r=t.target.elements["due-date"].value,o=t.target.elements.project.value,a={title:n,description:"temp description",dueDate:new Date(r),priority:T.MEDIUM,done:!1,projectName:o};e.addTodo(a),m.classList.remove("active"),l.classList.remove("active"),b=new Date(r),x()}function k(t){u.removeEventListener("submit",M),u.addEventListener("submit",D);const n=t.currentTarget.parentElement,r=n.dataset.projectName,o=n.dataset.id,a=e.getTodo(r,o);h.textContent="Edit ToDo",f.value=a.title,p.valueAsDate=a.dueDate,g.value=a.projectName,m.classList.add("active"),l.classList.add("active"),l.dataset.projectName=r,l.dataset.id=o}function D(t){t.preventDefault();const n=t.target.elements.title.value,r=t.target.elements["due-date"].value,o=t.target.elements.project.value,a={title:n,description:"temp description",dueDate:new Date(r),priority:T.MEDIUM,done:!1,projectName:o};e.editTodo(l.dataset.projectName,l.dataset.id,a),m.classList.remove("active"),l.classList.remove("active"),l.removeAttribute("data-projectName"),l.removeAttribute("data-id"),b=new Date(r),x()}function E(t){const n=t.currentTarget.parentElement.dataset.projectName,r=t.currentTarget.parentElement.dataset.id;e.deleteTodo(n,r),x()}function C(t){const n=t.currentTarget.parentElement.dataset.projectName,r=t.currentTarget.parentElement.dataset.id;e.editTodo(n,r,{done:this.checked}),x()}function L(e){const t=e.target.dataset.name;t&&(w=N.PROJECT,v=t,x())}function S(t){let n=t.currentTarget.parentElement.dataset.name;e.deleteProject(n),w===N.PROJECT&&n===v&&(w=N.ALL),x()}e.init(),c.addEventListener("click",(function(t){if(u.addEventListener("submit",M),u.removeEventListener("submit",D),m.classList.add("active"),l.classList.add("active"),h.textContent="New ToDo",f.value="",w===N.PROJECT)g.value=v;else{g.value="";const t=e.getProjects();t.length&&(g.value=t[0].name)}})),m.addEventListener("click",(function(e){m.classList.remove("active"),l.classList.remove("active"),l.removeAttribute("data-projectName"),l.removeAttribute("data-id")})),d.addEventListener("click",(function(n){let r=document.createElement("form"),o=document.createElement("input"),a=document.createElement("div");r.classList.add("new-project"),o.setAttribute("type","text"),o.setAttribute("name","projectName"),o.required=!0,o.setAttribute("minlength","3"),o.setAttribute("maxlength","20"),o.classList.add("new-project"),a.classList.add("overlay"),r.appendChild(o),t.append(a),t.append(r),o.focus(),a.classList.add("active"),r.addEventListener("submit",(function(n){n.preventDefault(),t.removeChild(t.lastChild),t.removeChild(t.lastChild);let r=n.target.elements.projectName.value;e.addProject(r),x()})),a.addEventListener("click",(function(e){t.removeChild(t.lastChild),t.removeChild(t.lastChild)}))})),o.addEventListener("click",(function(){w=N.ALL,x()})),a.addEventListener("click",(function(){w=N.TODAY,x()})),i.addEventListener("click",(function(){w=N.WEEK,x()})),s.addEventListener("click",(function(){w=N.COMPLETED,x()})),x()}()})();