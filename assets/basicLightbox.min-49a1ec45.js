(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function m(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=m(e);fetch(e.href,r)}})();const C=document.querySelector(".js-header-link"),T=document.querySelector(".js-header-link-icon"),L=document.querySelector(".js-favorite-list");let p=0;C.addEventListener("click",M);function M(){let n=L.style.display;p+=180,T.style.transform=`rotate(${p}deg)`,n==="none"||n===""?n="flex":n="none",L.style.display=n}window.addEventListener("load",j);function j(){const n=document.body,d=localStorage.getItem("user-theme");let m;window.matchMedia&&(m=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{d||c()});const s=document.querySelector(".themetoggle"),e=document.querySelector(".themetoggle_reset");s&&s.addEventListener("click",function(a){e.classList.add("active"),c(!0)}),e&&e.addEventListener("click",function(a){e.classList.remove("active"),localStorage.setItem("user-theme","")});function r(){d?(n.classList.add(d),e.classList.add("active")):n.classList.add(m)}r();function c(a=!1){let i=n.classList.contains("light")?"light":"dark",o;i==="light"?o="dark":i==="dark"&&(o="light"),n.classList.remove(i),n.classList.add(o),a&&localStorage.setItem("user-theme",o)}}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".js-header-menu-burger"),d=document.querySelector(".js-header-backdrop"),m=document.querySelector(".js-header-menu-close");function s(){d.style.transform="translateX(0)",m.addEventListener("click",e),n.removeEventListener("click",s)}function e(){const r=document.querySelector(".js-header-backdrop");r.style.transform="translateX(100%)",n.addEventListener("click",s)}n.addEventListener("click",s)});const N=document.querySelector(".js-header-menu-link"),B=document.querySelector(".js-header-menu-link-icon"),b=document.querySelector(".js-favorite-menu-list");let w=0;N.addEventListener("click",I);function I(){let n=b.style.display;w+=180,B.style.transform=`rotate(${w}deg)`,n==="none"||n===""?n="flex":n="none",b.style.display=n}window.addEventListener("load",O);function O(){const n=document.body,d=localStorage.getItem("user-theme");let m;window.matchMedia&&(m=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{d||c()});const s=document.querySelector(".themetoggle2"),e=document.querySelector(".themetoggle_reset2");s&&s.addEventListener("click",function(a){e.classList.add("active"),c(!0)}),e&&e.addEventListener("click",function(a){e.classList.remove("active"),localStorage.setItem("user-theme","")});function r(){d?(n.classList.add(d),e.classList.add("active")):n.classList.add(m)}r();function c(a=!1){let i=n.classList.contains("light")?"light":"dark",o;i==="light"?o="dark":i==="dark"&&(o="light"),n.classList.remove(i),n.classList.add(o),a&&localStorage.setItem("user-theme",o)}}function y(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var k={},_={get exports(){return k},set exports(n){k=n}};(function(n,d){(function(m){n.exports=m()})(function(){return function m(s,e,r){function c(o,l){if(!e[o]){if(!s[o]){var g=typeof y=="function"&&y;if(!l&&g)return g(o,!0);if(a)return a(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var t=e[o]={exports:{}};s[o][0].call(t.exports,function(u){return c(s[o][1][u]||u)},t,t.exports,m,s,e,r)}return e[o].exports}for(var a=typeof y=="function"&&y,i=0;i<r.length;i++)c(r[i]);return c}({1:[function(m,s,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var r=function(i){var o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l=document.createElement("div");return l.innerHTML=i.trim(),o===!0?l.children:l.firstChild},c=function(i,o){var l=i.children;return l.length===1&&l[0].tagName===o},a=function(i){return(i=i||document.querySelector(".basicLightbox"))!=null&&i.ownerDocument.body.contains(i)===!0};e.visible=a,e.create=function(i,o){var l=function(t,u){var f=r(`
		<div class="basicLightbox `.concat(u.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),v=f.querySelector(".basicLightbox__placeholder");t.forEach(function(x){return v.appendChild(x)});var E=c(v,"IMG"),S=c(v,"VIDEO"),q=c(v,"IFRAME");return E===!0&&f.classList.add("basicLightbox--img"),S===!0&&f.classList.add("basicLightbox--video"),q===!0&&f.classList.add("basicLightbox--iframe"),f}(i=function(t){var u=typeof t=="string",f=t instanceof HTMLElement==1;if(u===!1&&f===!1)throw new Error("Content must be a DOM element/node or string");return u===!0?Array.from(r(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(i),o=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(o)),g=function(t){return o.onClose(h)!==!1&&function(u,f){return u.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(u)===!1||u.parentElement.removeChild(u),f()},410),!0}(l,function(){if(typeof t=="function")return t(h)})};o.closable===!0&&l.addEventListener("click",function(t){t.target===l&&g()});var h={element:function(){return l},visible:function(){return a(l)},show:function(t){return o.onShow(h)!==!1&&function(u,f){return document.body.appendChild(u),setTimeout(function(){requestAnimationFrame(function(){return u.classList.add("basicLightbox--visible"),f()})},10),!0}(l,function(){if(typeof t=="function")return t(h)})},close:g};return h}},{}]},{},[1])(1)})})(_);export{k as b};
