(()=>{"use strict";const t=document.getElementById("main-container"),e=document.getElementById("main-form");let n,i=[];e.addEventListener("submit",(e=>{e.preventDefault();const o=(({title:t,date:e,description:n,priority:i,ID:o})=>({title:t,date:e,description:n,priority:i,ID:o}))((t=>({title:t.target.item.value,date:t.target.date.value,description:t.target.description.value,priority:t.target.priority.value,ID:(new Date).toISOString()}))(e));!function(t){i.push(t)}(o),console.log(i),function(e){const o=document.createElement("div");t.appendChild(o),o.setAttribute("id",(new Date).toISOString());const d=document.createElement("h2");o.appendChild(d);const c=document.createElement("p");o.appendChild(c);const r=document.createElement("p");o.appendChild(r);const l=document.createElement("p");o.appendChild(l),n=document.createElement("button"),o.appendChild(n),n.setAttribute("id","deleteBtn"),d.textContent=e.title,console.log(o.id),c.textContent=e.date,r.textContent=e.description,l.textContent=e.priority,n.textContent="delete",n.addEventListener("click",(t=>{i.splice(i.indexOf((void 0).id),1),console.log(i),o.textContent=""}))}(o)}))})();