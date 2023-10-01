function h(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var y={},T={get exports(){return y},set exports(e){y=e}};(function(e,o){(function(a){e.exports=a()})(function(){return function a(i,u,b){function m(n,s){if(!u[n]){if(!i[n]){var p=typeof h=="function"&&h;if(!s&&p)return p(n,!0);if(g)return g(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var t=u[n]={exports:{}};i[n][0].call(t.exports,function(c){return m(i[n][1][c]||c)},t,t.exports,a,i,u,b)}return u[n].exports}for(var g=typeof h=="function"&&h,r=0;r<b.length;r++)m(b[r]);return m}({1:[function(a,i,u){Object.defineProperty(u,"__esModule",{value:!0}),u.create=u.visible=void 0;var b=function(r){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=document.createElement("div");return s.innerHTML=r.trim(),n===!0?s.children:s.firstChild},m=function(r,n){var s=r.children;return s.length===1&&s[0].tagName===n},g=function(r){return(r=r||document.querySelector(".basicLightbox"))!=null&&r.ownerDocument.body.contains(r)===!0};u.visible=g,u.create=function(r,n){var s=function(t,c){var l=b(`
		<div class="basicLightbox `.concat(c.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),v=l.querySelector(".basicLightbox__placeholder");t.forEach(function(_){return v.appendChild(_)});var k=m(v,"IMG"),I=m(v,"VIDEO"),N=m(v,"IFRAME");return k===!0&&l.classList.add("basicLightbox--img"),I===!0&&l.classList.add("basicLightbox--video"),N===!0&&l.classList.add("basicLightbox--iframe"),l}(r=function(t){var c=typeof t=="string",l=t instanceof HTMLElement==1;if(c===!1&&l===!1)throw new Error("Content must be a DOM element/node or string");return c===!0?Array.from(b(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(r),n=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(n)),p=function(t){return n.onClose(d)!==!1&&function(c,l){return c.classList.remove("basicLightbox--visible"),setTimeout(function(){return g(c)===!1||c.parentElement.removeChild(c),l()},410),!0}(s,function(){if(typeof t=="function")return t(d)})};n.closable===!0&&s.addEventListener("click",function(t){t.target===s&&p()});var d={element:function(){return s},visible:function(){return g(s)},show:function(t){return n.onShow(d)!==!1&&function(c,l){return document.body.appendChild(c),setTimeout(function(){requestAnimationFrame(function(){return c.classList.add("basicLightbox--visible"),l()})},10),!0}(s,function(){if(typeof t=="function")return t(d)})},close:p};return d}},{}]},{},[1])(1)})})(T);const E=document.querySelector(".favorite-ingredients-list"),L=document.querySelector(".sorry-ingredients"),f=JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS"))??[];L.classList.add("hidden");x(f,E);f.length||L.classList.remove("hidden");E.addEventListener("click",C);function x(e,o){const a=e.map(i=>`<li class="in-card" data-id=${i._id}>
        <h3 class="in-card-title">${i.title}</h3>
        <p class="in-card-alco">${i.alcohol}</p>
        <p class="in-card-descr">${i.description}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="./img/sprite.svg#trash"></use>
                    </svg></button></div>
</li>`).join("");o.innerHTML=a}function C(e){if(e.target.classList.contains("btn-learn-more")){const o=S(e.target);y.create(`<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="../img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${o._id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${o.title}</h2>
          <p class="kind-in">${o.type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${o.description||"No data"}</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${o.type}</li>
            <li class="ingredients-description">Country of origin: ${o.country}</li>
            <li class="ingredients-description">Alcohol by volume: ${o.abv}</li>
            <li class="ingredients-description">Flavour: ${o.flavour}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,{onShow:i=>{i.element().querySelector(".close-cocktail-modal-back").onclick=i.close,i.element().querySelector(".close-cocktail-modal-x").onclick=i.close,i.element().querySelector(".btn-in").onclick=w(e)}}).show()}(e.target.closest(".btn-remove")||e.target.closest(".btn-in"))&&(w(e),f.length||L.classList.remove("hidden"))}function S(e){const o=e.closest(".in-card").dataset.id;return f.find(({_id:a})=>a===o)}function w(e){const o=S(e.target),a=f.findIndex(({_id:i})=>i===o._id);f.splice(a,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(f)),x(f,E)}export{y as b};
