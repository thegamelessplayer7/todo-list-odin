(()=>{"use strict";const t=document.getElementById("main-container"),e=document.createElement("div");t.appendChild(e);const n=document.createElement("div");t.appendChild(n);const o=document.getElementById("main-form"),i=document.getElementById("project-list-form");let d,c=[],l=[],r=[];document.getElementById("create-btn").addEventListener("click",(()=>{console.log("add project")})),o.addEventListener("submit",(t=>{t.preventDefault();const n=(({title:t,date:e,description:n,priority:o,ID:i})=>({title:t,date:e,description:n,priority:o,ID:i}))((t=>{const e=t.target.item.value,n=t.target.date.value,o=t.target.description.value,i=t.target.priority.value;return d=(new Date).toISOString(),{title:e,date:n,description:o,priority:i,ID:d}})(t));console.log(n),function(t){const n=document.createElement("div");e.appendChild(n),n.setAttribute("id",d);const o=document.createElement("h2");n.appendChild(o);const i=document.createElement("p");n.appendChild(i);const l=document.createElement("p");n.appendChild(l);const r=document.createElement("p");n.appendChild(r);const a=document.createElement("button");n.appendChild(a),a.setAttribute("id","deleteBtn"),o.textContent=t.title,i.textContent=t.date,l.textContent=t.description,r.textContent=t.priority,a.textContent="delete",a.addEventListener("click",(t=>{console.log(n.id),function(t){c=c.filter((e=>e.ID!==t))}(n.id),console.log(c),n.textContent=""}))}(n),function(t){c.push(t)}(n),console.log(c)})),i.addEventListener("submit",(t=>{t.preventDefault();const o=(({listName:t,ID:e})=>({listName:t,ID:e}))((t=>{const e=t.target.projectname.value;return d=(new Date).toISOString(),{listName:e,ID:d}})(t));var i;(function(t){const o=document.createElement("div");n.appendChild(o),o.setAttribute("id",d);const i=document.createElement("h2");o.appendChild(i);const a=document.createElement("button");o.appendChild(a),a.setAttribute("id","deleteBtn"),i.textContent=t.listName,a.textContent="delete",a.addEventListener("click",(t=>{!function(t){r=r.filter((e=>e.ID!==t))}(o.id),console.log(r),o.textContent=""})),i.addEventListener("click",(()=>{console.log(i.textContent),0!==c.length&&(l.push(c),c=[],e.textContent="",console.log(l))}))})(o),i=o,r.push(i),console.log(o),console.log(r)}))})();