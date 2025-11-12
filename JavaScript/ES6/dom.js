const div=document.createElement("div");
const h1=document.createElement("hi");
h1.innerHTML="Hi js DOM";
div.appendChild(h1);

const id=document.getElementById('root');
id.appendChild(div);