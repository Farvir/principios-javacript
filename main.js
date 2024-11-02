const titulo = document.createElement("h1");

titulo.textContent="hola soy spayderman";
document.body.appendChild(titulo);

const boton = document.createElement("button");
boton.innerText="click";
boton.style="background: cyan";
document.body.appendChild(boton);

boton.addEventListener("click",()=> {document.body.innerHTML=`<h1>Hola Tecnalia</h1>`;}
    
);
