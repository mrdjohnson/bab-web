(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{836:function(n,i,t){"use strict";t.r(i),t.d(i,"ion_infinite_scroll",function(){return s}),t.d(i,"ion_infinite_scroll_content",function(){return l});var e=t(6),r=t(9),o=t(893),s=function(){function n(n){var i=this;Object(r.r)(this,n),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=i.scrollEl;if(!n||!i.canStart())return 1;var t=i.el.offsetHeight;if(0===t)return 2;var e=n.scrollTop,r=n.scrollHeight,o=n.offsetHeight,s=0!==i.thrPc?o*i.thrPc:i.thrPx;if(("bottom"===i.position?r-t-e-s-o:e-t-s)<0){if(!i.didFire)return i.isLoading=!0,i.didFire=!0,i.ionInfinite.emit(),3}else i.didFire=!1;return 4},this.ionInfinite=Object(r.g)(this,"ionInfinite",7)}return n.prototype.thresholdChanged=function(n){n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(){this.disabled&&(this.isLoading=!1,this.isBusy=!1)},n.prototype.componentDidLoad=function(){return e.__awaiter(this,void 0,void 0,function(){var n,i,t=this;return e.__generator(this,function(e){switch(e.label){case 0:return(n=this.el.closest("ion-content"))?[4,n.componentOnReady()]:[3,3];case 1:return e.sent(),i=this,[4,n.getScrollElement()];case 2:i.scrollEl=e.sent(),e.label=3;case 3:return this.thresholdChanged(this.threshold),"top"===this.position&&Object(r.u)(function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)}),[2]}})})},n.prototype.componentDidUnload=function(){this.scrollEl=void 0},n.prototype.complete=function(){return e.__awaiter(this,void 0,void 0,function(){var n,i,t=this;return e.__generator(this,function(e){return n=this.scrollEl,this.isLoading&&n?(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,i=n.scrollHeight-n.scrollTop,requestAnimationFrame(function(){Object(r.m)(function(){var e=n.scrollHeight-i;requestAnimationFrame(function(){Object(r.u)(function(){n.scrollTop=e,t.isBusy=!1})})})})),[2]):[2]})})},n.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},n.prototype.render=function(){return Object(r.j)(r.a,{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled},onScroll:this.disabled?void 0:this.onScroll})},Object.defineProperty(n.prototype,"el",{get:function(){return Object(r.l)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(n,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),n}(),l=function(){function n(n){Object(r.r)(this,n),this.config=Object(r.h)(this,"config")}return n.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var n=Object(r.f)(this);this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.hostData=function(){var n,i=Object(r.f)(this);return{class:(n={},n[""+i]=!0,n["infinite-scroll-content-"+i]=!0,n)}},n.prototype.__stencil_render=function(){return Object(r.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(r.j)("div",{class:"infinite-loading-spinner"},Object(r.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(r.j)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)}))},n.prototype.render=function(){return Object(r.j)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),n}()},893:function(n,i,t){"use strict";t.d(i,"a",function(){return e});var e=function(n){try{if("string"!==typeof n||""===n)return n;var i=document.createDocumentFragment(),t=document.createElement("div");i.appendChild(t),t.innerHTML=n,l.forEach(function(n){for(var t=i.querySelectorAll(n),e=t.length-1;e>=0;e--){var s=t[e];s.parentNode?s.parentNode.removeChild(s):i.removeChild(s);for(var l=o(s),c=0;c<l.length;c++)r(l[c])}});for(var e=o(i),s=0;s<e.length;s++)r(e[s]);var c=document.createElement("div");c.appendChild(i);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(d){return console.error(d),""}},r=function n(i){if(!i.nodeType||1===i.nodeType){for(var t=i.attributes.length-1;t>=0;t--){var e=i.attributes[t],r=e.name;if(s.includes(r.toLowerCase())){var l=e.value;null!=l&&l.toLowerCase().includes("javascript:")&&i.removeAttribute(r)}else i.removeAttribute(r)}var c=o(i);for(t=0;t<c.length;t++)n(c[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},s=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=60.d738ccf4.chunk.js.map