import{i as g,S as p,a as y}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function u(s){g.show({close:!1,closeOnClick:!0,message:s,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"#EF4040",progressBar:!1})}let L=new p("#gallery a",{showCounter:!1,captionsData:"alt",captionDelay:200});const v=document.querySelector("#form"),f=document.querySelector("#gallery"),d=document.querySelector(".loader"),a=document.querySelector(".loader-button");let i=1;const h=40;let c;v.addEventListener("submit",S);a.addEventListener("click",w);async function w(){a.classList.add("hidden"),d.classList.remove("hidden"),await m(c)}function b(s){const r=Math.ceil(s/h);i>r?u("We are sorry, but you have reached the end of search results."):a.classList.remove("hidden")}async function S(s){s.preventDefault(),d.classList.remove("hidden"),f.innerHTML="",i=1,c=s.currentTarget.elements.inputToSearch.value.trim(),s.currentTarget.reset(),a.classList.add("hidden"),await m(c)}async function m(s){try{const r=new URLSearchParams({key:"41535570-7b1028e1c6f1b041bb0744cc1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:h}),t=(await y.get(`https://pixabay.com/api/?${r}`)).data;t.hits.length===0?(u("Sorry, there are no images matching your search query. Please try again!"),a.classList.add("hidden")):(k(t),b(t.totalHits),L.refresh())}catch{iziToastMess("Oop.. somethings. went wrong. Please try again.")}finally{d.classList.add("hidden")}}function k(s){i+=1;const r=s.hits.map(t=>`<li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="image-info">
          <div>Likes:<span>${t.likes}</span></div>
          <div>Views:<span>${t.views}</span></div>
          <div>Comments:<span>${t.comments}</span></div>
          <div>Downloads:<span>${t.downloads}</span></div>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",r);const n=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:n.height*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
