import"./hoisted.BcY2K5JV.js";import"./index.DImtQWSj.js";const d=window.matchMedia("(prefers-reduced-motion: reduce)");d.matches&&document.getElementById("postcard").removeAttribute("data-astro-transition-scope");document.addEventListener("astro:after-swap",()=>{const t=document.getElementById("postcard"),o=document.getElementById("hoof"),a=document.getElementById("hoof2"),n=document.getElementById("hoof3"),s=document.getElementById("hoof4"),c=document.querySelectorAll(".animate");[{el:t,animation:[20,0],className:"shake"},{el:o,animation:[20,0],className:"reach"},{el:a,animation:[20,5],className:"reach-2"},{el:n,animation:[20,10],className:"reach-3"},{el:s,animation:[20,15],className:"reach-4"}].forEach(e=>{e.el&&(e.el.style.animationDuration="0s",e.el.style.animationDelay="0s",e.el.classList.add(e.className),e.el.style.animationDuration=`${e.animation[0]}s`,e.el.style.animationDelay=`${e.animation[1]}s`)}),c&&c.forEach(e=>{e.style.animationDuration="0s",e.style.animationDelay="0s"})});document.addEventListener("astro:page-load",()=>{setTimeout(()=>{const t=document.getElementById("postcard"),o=document.getElementById("hoof"),a=document.getElementById("hoof2"),n=document.getElementById("hoof3"),s=document.getElementById("hoof4");t&&t.classList.add("shake"),o&&(o.classList.add("reach"),a.classList.add("reach-2"),n.classList.add("reach-3"),s.classList.add("reach-4"))},4e3)});