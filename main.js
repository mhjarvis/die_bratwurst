(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("div"),o=document.createElement("div");t.id="header",e.appendChild(t),n.id="title",n.title="Die Bratwurst",n.innerText="Die Bratwurst",e.appendChild(n),d.id="red-block",e.appendChild(d),o.id="yellow-block",e.appendChild(o),console.log("Header Function")})(),(()=>{const e=["Home","Menu","Contact"],t=document.getElementById("header"),n=document.createElement("ul");n.id="nav",t.appendChild(n);for(let t=0;t<e.length;t++){const n=document.getElementById("nav"),d=document.createElement("li"),o=document.createElement("a");let c=e[t];d.id=c.toLowerCase(),d.className="list-class",n.appendChild(d);const i=document.getElementById(d.id);o.href="./home",o.innerHTML=e[t],i.appendChild(o)}})(),(()=>{const e=document.createElement("div"),t=document.getElementById("content"),n=document.createElement("p"),d=document.createElement("img");e.id="footer",t.appendChild(e),n.id="copyright",n.innerHTML="Copyright &copy; 2021 mhjarvis";const o=document.getElementById("footer");o.appendChild(n),d.id="github-image",d.src="images/github.png",d.onclick=()=>{window.location.href="https://github.com/mhjarvis"},o.appendChild(d)})(),(()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("p"),d=document.getElementById("yellow-block");document.getElementById("footer"),e.id="container",d.parentNode.insertBefore(e,d.nextSibling),t.id="container-box",document.getElementById("container").appendChild(t);const o=document.getElementById("container-box");n.id="paragraph-header",n.innerText="The best Bratwurst on this side of the Planet!",o.appendChild(n);const c=document.createElement("img");c.id="hello-image",c.src="images/brat-cartoon.jpg",o.appendChild(c)})()})();