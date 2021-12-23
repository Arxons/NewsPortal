(()=>{"use strict";var n,e={669:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".sources {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    height: 120px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n",""]);const i=o},767:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\nfooter .github,\r\n .rss {\r\n    text-decoration: none;\r\n    color: #555;\r\n    transition: .1s ease;\r\n}\r\n\r\nfooter .github:hover,\r\n .rss:hover {\r\n    color: white;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},242:(n,e,r)=>{r.r(e),r.d(e,{default:()=>s});var t=r(379),o=r.n(t),i=r(669);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},595:(n,e,r)=>{r.r(e),r.d(e,{default:()=>s});var t=r(379),o=r.n(t),i=r(501);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},427:(n,e,r)=>{r.r(e),r.d(e,{default:()=>s});var t=r(379),o=r.n(t),i=r(767);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function s(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function a(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],u=r[c]||0,l="".concat(c," ").concat(u);r[c]=u+1;var d=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:m(f,e),references:1}),t.push(l)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,_=0;function m(n,e){var r,t,o;if(e.singleton){var i=_++;r=p||(p=c(e)),t=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=c(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=s(r[t]);i[o].references--}for(var c=a(n,e),u=0;u<r.length;u++){var l=s(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}},57:(n,e,r)=>{e.__esModule=!0;var t=r(871),o=r(527),i=function(){function n(){this.controller=new t.default,this.view=new o.AppView,this.sources=document.querySelector(".sources")}return n.prototype.start=function(){var n=this;this.sources.addEventListener("click",(function(e){n.controller.getNews(e,(function(e){return n.view.drawNews(e)}))})),this.controller.getSources((function(e){return n.view.drawSources(e)}))},n}();e.default=i},871:function(n,e,r){var t,o=this&&this.__extends||(t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])},t(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var i=r(790),s=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o(e,n),e.prototype.getSources=function(e){n.prototype.getResp.call(this,{endpoint:i.OptionsConfigValues.sources},e)},e.prototype.getNews=function(e,r){for(var t=e.target,o=e.currentTarget;t!==o;){if(!t.classList.contains("source_item")){var s=t.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==s&&null!==s&&(o.setAttribute("data-source",s),n.prototype.getResp.call(this,{endpoint:i.OptionsConfigValues.everything,options:{sources:s}},r)))}t=t.parentNode}},e}(r(853).default);e.default=s},853:function(n,e,r){var t,o=this&&this.__extends||(t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])},t(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var i=r(790),s=function(n){function e(){return n.call(this,i.OptionsConfigValues.baseLink,{apiKey:i.OptionsConfigValues.apiKey})||this}return o(e,n),e}(r(24).default);e.default=s},24:function(n,e){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},r.apply(this,arguments)};e.__esModule=!0;var t=function(){function n(n,e){this.baseLink=n,this.options=e}return n.prototype.getResp=function(n,e){var r=n.endpoint,t=n.options,o=void 0===t?{}:t;void 0===e&&(e=function(){console.error("No callback for GET response")}),this.load("GET",r,e,o)},n.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.warn("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,e){var t=r(r({},this.options),n),o="".concat(this.baseLink).concat(e,"?");return Object.keys(t).forEach((function(n){o+="".concat(n,"=").concat(t[n],"&")})),o.slice(0,-1)},n.prototype.load=function(n,e,r,t){void 0===t&&(t={}),fetch(this.makeUrl(t,e),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return r(n)})).catch((function(n){return console.error(n)}))},n}();e.default=t},790:(n,e)=>{var r;e.__esModule=!0,e.OptionsConfigValues=void 0,(r=e.OptionsConfigValues||(e.OptionsConfigValues={})).sources="sources",r.everything="everything",r.apiKey="c7269a97bfc94b9884bb8e305ed67763",r.baseLink="https://newsapi.org/v2/"},527:(n,e,r)=>{e.__esModule=!0,e.AppView=void 0;var t=r(798),o=r(331),i=function(){function n(){this.news=new t.default,this.sources=new o.default}return n.prototype.drawNews=function(n){var e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)},n.prototype.drawSources=function(n){var e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)},n}();e.AppView=i,e.default=i},798:(n,e,r)=>{e.__esModule=!0,r(242);var t=function(){function n(){}return n.prototype.draw=function(n){var e=n.length>=10?n.filter((function(n,e){return e<10})):n,r=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");e.forEach((function(n,e){var o=t.content.cloneNode(!0),i=o;e%2&&i.querySelector(".news__item").classList.add("alt"),i.querySelector(".news__meta-photo").style.backgroundImage="url(".concat(n.urlToImage||"img/news_placeholder.jpg",")"),i.querySelector(".news__meta-author").textContent=n.author||n.source.name,i.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),i.querySelector(".news__description-title").textContent=n.title,i.querySelector(".news__description-source").textContent=n.source.name,i.querySelector(".news__description-content").textContent=n.description,i.querySelector(".news__read-more a").setAttribute("href",n.url),r.append(o)}));var o=document.querySelector(".news");o.innerHTML="",o.appendChild(r)},n}();e.default=t},331:(n,e,r)=>{e.__esModule=!0,r(595);var t=function(){function n(){}return n.prototype.draw=function(n){var e=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp"),t=document.querySelector(".sources");n.forEach((function(n){var t=r.content.cloneNode(!0),o=t;o.querySelector(".source__item-name").textContent=n.name,o.querySelector(".source__item").setAttribute("data-source-id",n.id),e.append(t)})),t.append(e)},n}();e.default=t}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},n=t(57),t(427),(new n.default).start()})();