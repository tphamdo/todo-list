(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([e.id,'/* \n * Css Reset\n */\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n#root, #__next {\n  isolation: isolate;\n}\n\n\n/* \n * Custom Styling\n */\n\n:root {\n  --light-grey: #F7F7F7;\n  --black: #000000;\n  --navbar-width: 250px;\n  --header-height: 70px;\n}\n\nbody {\n  font-family: \'Roboto\', sans-serif, serif;\n  height: 100vh;\n  width: 100vw;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n}\n\nheader {\n  padding: 0px 24px;\n  height: var(--header-height);\n  background-color: var(--black);\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\nnav {\n  padding: 32px 24px;\n  background-color: var(--light-grey);\n  position: fixed;\n  top: var(--header-height);\n  height: 100%;\n  width: var(--navbar-width);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.icon {\n  height: 24px;\n  width: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project:hover svg{\n  color: blue;\n}\n\n#projects-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n#main-nav-items {\n  margin-bottom: 24px;\n}\n\n.nav-item {\n  background-color: inherit;\n  border: none;\n  width: 100%;\n  text-align: left;\n  border-radius: 8px;\n  display: flex;\n  padding: 0 4px;\n  /* border: 1px solid black; */\n}\n\n.nav-item:hover {\n  font-weight: 500;\n}\n\n.deleteContainer {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.project-item:hover .deleteContainer {\n  visibility: visible;\n}\n\n.project-item .deleteContainer:hover {\n  font-weight: 1000;\n  color: red;\n}\n\n.nav-item:hover::before {\n  content: "> ";\n  /* preserve whitespace from removal due to flexbox */\n  white-space: pre-wrap;\n}\n\n.nav-header {\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n  padding: 4px 0;\n}\n\nform.new-project {\n  position: relative;\n  z-index: 3;\n}\n\ninput.new-project {\n  background-color: transparent;\n  /* font-size: 8px; */\n  /* outline: 1px; */\n  /* outline: 1px solid; */\n  /* border-radius: 8px; */\n  width: 100%;\n  /* padding: 0px 4px; */\n\n  /* border-bottom: 1px solid black; */\n}\n\ninput.new-project:focus {\n}\n\n/* input {border:0;outline:0;} */\n/* input:focus {outline:none!important;} */\n.overlay {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n}\n\n.overlay.todo {\n  background-color: rgba(250, 0, 0, 0.5);\n  /* background-color: rgba(0, 0, 0, 0.5); */\n}\n\n.overlay.active {\n  display: block;\n}\n\n.content {\n  margin-left: var(--navbar-width);\n  padding: 16px;\n  /* position: fixed; */\n  /* left: var(--navbar-width); */\n  height: 100%;\n  /* z-index: 0; */\n}\n\ndiv.add-todo {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  height: 40px;\n  width: 40px;\n}\n\nbutton.add-todo {\n  height: 100%;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 1000;\n  background-color: black;\n  color: white;\n  border-radius: 9999px;\n}\n\n.dialog {\n  /* display: none; */\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  transform: translate(-50%, -50%) scale(0);\n  border-radius: 8px;\n  /* display: none; */\n  /* position: fixed; */\n  /* z-index: 3; */\n  /* top: 50%; */\n  /* left: 50%; */\n  border: 2px solid black;\n  /* border-radius: 8px; */\n  padding: 8px;\n  background-color: var(--light-grey);\n  /* transform: translate(-50%, -50%) scale(0); */\n  /* transition: 2s ease-in-out;  */\n\n  & form {\n    display: flex;\n    flex-direction: column;\n    /* gap: 12px; */\n\n    & .title, input, select {\n      margin-bottom: 12px;\n    }\n  }\n}\n\n.dialog.active {\n  display: block;\n  transform: translate(-50%, -50%) scale(1);\n  transition: 0.2s ease-in-out;\n}\n\n\ninput, select {\n  box-shadow: none;\n  border-style: solid;\n  outline: 0;\n  border: 2px solid transparent;\n  padding: 2px 4px;\n  border-radius: 8px;\n  background-color: white;\n}\n\nselect {\n  height: 32px;\n}\n\ninput:focus, select:focus {\n  border: 2px solid black;\n}\n\ninput[type="submit"] {\n  background-color: black;\n  color: white;\n}\n',""]);const d=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=d,n.splice(d,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var c=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),d=t(659),c=t.n(d),s=t(56),l=t.n(s),u=t(540),p=t.n(u),f=t(113),m=t.n(f),h=t(365),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;class b{#e=[];#n=0;constructor(e){this.name=e}addTodo(e){if(!e)return;let n=Object.assign(e,{id:this.#n++});this.#e.push(n)}deleteTodo(e){if(!e)return;let n=this.#e.findIndex((n=>n.id===e));-1!==n&&this.#e.splice(n,1)}get todos(){return this.#e}}class g{constructor(e,n,t,o,r){this.title=e,this.descr=n,this.dueDate=t,this.priority=o,this.done=r}}const x=Object.freeze({HIGH:Symbol("high"),MEDIUM:Symbol("medium"),LOW:Symbol("low")}),y=[{title:"A",description:"A descr",dueDate:"9-23-2024",priority:x.MEDIUM,done:!1},{title:"B",description:"B desciprtion",dueDate:"9-24",priority:x.LOW,done:!1},{title:"C",description:"C description",dueDate:"9-25",priority:x.HIGH,done:!0}],w=Object.freeze({ALL:Symbol.for("All"),TODAY:Symbol.for("Today"),WEEK:Symbol.for("Week"),COMPLETED:Symbol.for("Completed"),PROJECT:Symbol.for("Project")});!function(){const e=function(){const e=[];return{addProject:function(n){if(-1!==e.findIndex((e=>e.name==n)))return;let t=new b(n);e.push(t)},deleteProject:function(n){if(!n)return;let t=e.findIndex((e=>e.name==n));-1!==t&&e.splice(t,1)},getProjects:()=>e,addTodo:function(n,t){if(!n||!t)return;let o=e.findIndex((e=>e.name==n));-1!==o&&e[o].addTodo(new g(...Object.values(t)))},deleteTodo:function(n,t){if(!n||!t)return;let o=e.findIndex((e=>e.name==n));-1!==o&&e[o].deleteTodo(t)},getProject:function(n){if(!n)return;let t=e.findIndex((e=>e.name==n));return-1!==t?e[t]:void 0},getAllTodos:()=>{let n=[];return e.forEach((e=>{n.push(...e.todos)})),n}}}(),n="Default",t=document.querySelector("#projects-container"),o=document.querySelector("#todo-container"),r=document.querySelector("#title-container"),i=document.querySelector(".add-todo"),a=document.querySelector("#newTodoForm"),d=document.querySelector(".add-project"),c=document.querySelector("#allTodos"),s=(document.querySelector("#today"),document.querySelector("#week"),document.querySelector("#completed"),document.querySelector(".dialog")),l=document.querySelector(".overlay"),u=document.querySelector("select#project"),p=document.querySelector(".dialog #due-date"),f=new Date;let m=new Date;m.setDate(f.getDate()+7);let h=w.ALL,v=null;function C(){t.textContent="",o.textContent="",u.textContent="",e.getProjects().forEach((e=>{t.appendChild(function(e){const n=document.createElement("button");n.textContent=e.name,n.dataset.name=e.name,n.classList.add("nav-item"),n.classList.add("project-item");const t=document.createElement("button");return t.classList.add("deleteContainer"),t.innerHTML='\n            <div class="right-button-panel icon">\n                <i class="delete">&times;</i>\n            </div>\n        ',t.addEventListener("click",T),n.appendChild(t),n}(e)),u.appendChild(function(e){const n=document.createElement("option");return n.setAttribute("value",e),n.textContent=e,n}(e.name))})),t.addEventListener("click",E),function(){var e;switch(r.textContent="",h){case w.ALL:case w.TODAY:case w.WEEK:case w.COMPLETED:e=Symbol.keyFor(h);break;case w.PROJECT:e=v||"";break;default:return}r.appendChild(function(e){const n=document.createElement("h3");return n.textContent=e,n}(e))}(),function(){var n;switch(h){case w.ALL:n=e.getAllTodos();break;case w.TODAY:case w.WEEK:case w.COMPLETED:break;case w.PROJECT:n=e.getProject(v).todos;break;default:return}n.forEach((e=>{o.appendChild(function(e){const n=document.createElement("div"),t=document.createElement("p");return t.textContent=e.title,n.appendChild(t),n}(e))}))}(),p.valueAsDate=m}function E(e){console.log("handle project click");const n=e.target.dataset.name;n&&(h=w.PROJECT,v=n,C())}function T(n){console.log("handleDeleteProject"),console.log(n.currentTarget);let t=n.currentTarget.parentElement.dataset.name;e.deleteProject(t),h===w.PROJECT&&t===v&&(h=w.ALL),C()}e.addProject(n),e.addTodo(n,y[0]),e.addTodo(n,y[1]),e.addTodo(n,y[2]),e.addTodo(n,y[0]),e.addTodo(n,y[1]),e.addTodo(n,y[2]),e.addProject("project 2"),e.addTodo("project 2",y[2]),console.log("yo"),i.addEventListener("click",(function(e){console.log("handle new todo"),l.classList.add("active"),s.classList.add("active")})),a.addEventListener("submit",(function(n){n.preventDefault();let t=n.target.elements.title.value,o=n.target.elements["due-date"].value,r=n.target.elements.project.value;e.addTodo(r,{title:t,description:"temp description",dueDate:o,priority:x.MEDIUM,done:!1}),l.classList.remove("active"),s.classList.remove("active"),m=new Date(o),C()})),l.addEventListener("click",(function(e){l.classList.remove("active"),s.classList.remove("active")})),d.addEventListener("click",(function(n){let o=document.createElement("form"),r=document.createElement("input"),i=document.createElement("div");o.classList.add("new-project"),r.setAttribute("type","text"),r.setAttribute("name","projectName"),r.required=!0,r.setAttribute("minlength","3"),r.setAttribute("maxlength","20"),r.classList.add("new-project"),i.classList.add("overlay"),o.appendChild(r),t.append(i),t.append(o),r.focus(),i.classList.add("active"),o.addEventListener("submit",(function(n){n.preventDefault(),t.removeChild(t.lastChild),t.removeChild(t.lastChild);let o=n.target.elements.projectName.value;e.addProject(o),C()})),i.addEventListener("click",(function(e){console.log("cancelNewProject"),t.removeChild(t.lastChild),t.removeChild(t.lastChild)}))})),c.addEventListener("click",(function(){h=w.ALL,C()})),C()}()})();