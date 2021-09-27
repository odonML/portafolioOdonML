document.addEventListener("DOMContentLoaded", function () {
    const itemActive= document.getElementById("home");
    itemActive.classList.add("active");
    printSection("education");
});

const principal = document.createElement("div");
const secundario = document.createElement("div");
const terciario = document.createElement("div");

const caja1 = document.createElement("div");
const caja2 = document.createElement("div");
const caja3 = document.createElement("div");
const title = document.createElement("h2");

principal.classList.add("principal");
secundario.classList.add("secundario");
terciario.classList.add("terciario");
caja1.classList.add("caja");
caja2.classList.add("caja", "contenido");
caja3.classList.add("caja", "contenido");
title.classList.add("glitch")


const content = document.getElementById("content");
const frag = document.createDocumentFragment();

const sectionsContent =[
    {
        id: "education",
        titulo: "EDUCACIÓN",
        parrafo1: `<h3 class="sub-titulo c-azul">Ing. En Sistemas</h3>
        <p class="parrafo">(2015 - 2020) <br>
        Escualea: Instituto Tecnológico 
        Superior de Zongolica. <br>
        Titulo <span class="c-rosa">(En Proceso)</span>.
        </p>`,
        parrafo2: `<h3 class="sub-titulo c-azul">Tec. En Programación</h3>
        <p class="parrafo">(2013 - 2015) <br>
        Escuela: CBTis #142. <br>
        Diploma.
        </p>`,
    },
    {
        id: "portfolio",
        titulo: "PORTAFOLIO",
        parrafo1: `<h3 class="sub-titulo c-azul">Broncemex</h3>
        <p class="parrafo">(2020) <br>
        <span class="c-amarillo">Puesto:</span> Frontend Developer. <br>
        <span class="c-rosa">Acitvidades:</span> <br>
        Desarrollo de pagina web <br>
        a la medida, con HTML, CSS,  <br>
        JS y Bootstrap.  <br>
        </p>`,
        parrafo2: `<h3 class="sub-titulo c-azul">Kubeet</h3>
        <p class="parrafo">(2018 - 2019) <br>
        <span class="c-amarillo">Puesto:</span> Frontend Developer. <br>
        <span class="c-rosa">Acitvidades:</span> <br>
        Desarrollar proyectos con <br>
        HTML, CSS, SASS, JS, <br>
        TypeScript, Bootstrap, <br>
        <span class="c-angular">Angular</span>, Angular Material, <br>
        Firebase y Rest APIs.<br>
        </p>`,
    },
    {
        id: "design",
        titulo: "DISEÑOS",
        parrafo1: `<h3 class="sub-titulo c-azul">También</h3>
        <p class="parrafo"> Tengo experiencia haciendo 
            <span class="c-amarillo">diseños</span> para proyectos,
            musicales y de 
            emprendimiento, visita mi 
            portafolio en <span class="c-rosa">Behance</span>. 
        </p>`,
        parrafo2: `<a href="https://www.behance.net/odonml" target="_blank">
        <svg class="behance" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613a3.11 3.11 0 0 1-.974 1.114 4.315 4.315 0 0 1-1.399.64 6.287 6.287 0 0 1-1.609.206H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 0 0-.417-.428 1.683 1.683 0 0 0-.597-.215 3.609 3.609 0 0 0-.697-.061H4.71v2.875h2.742zm.151 5.239c.267 0 .521-.023.76-.077.241-.052.455-.136.637-.261.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H4.71v3.39h2.893zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.79h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.337a4.033 4.033 0 0 1-1.439-.958 4.37 4.37 0 0 1-.905-1.485 5.433 5.433 0 0 1-.32-1.899c0-.666.111-1.289.329-1.864a4.376 4.376 0 0 1 .934-1.493c.405-.42.885-.751 1.444-.994a4.634 4.634 0 0 1 1.858-.362c.754 0 1.413.146 1.979.44a3.967 3.967 0 0 1 1.39 1.182c.363.493.622 1.058.783 1.691.161.632.217 1.292.171 1.983h-6.431c.001.704.238 1.371.606 1.729zm2.812-4.681c-.291-.322-.783-.496-1.385-.496-.391 0-.714.065-.974.199a1.97 1.97 0 0 0-.62.491 1.772 1.772 0 0 0-.328.628 2.82 2.82 0 0 0-.111.587h3.982c-.058-.624-.272-1.085-.564-1.409zm-3.918-4.663h4.989v1.215h-4.989z"></path></svg>
      </a>`,
    }
]




function printSection(section){
    let sec = findContent(section);
    title.setAttribute("data-text", sec.titulo);
    title.innerText = sec.titulo;
    caja2.innerHTML = sec.parrafo1;
    caja3.innerHTML = sec.parrafo2;
    console.log(section);
    if(section === "design" || section === "skills"){
        caja3.classList.add("iconos");
    }else{
        caja3.classList.remove("iconos");
    }

    caja1.appendChild(title);
    secundario.appendChild(caja1);
    secundario.appendChild(caja2);
    principal.appendChild(secundario);
    terciario.appendChild(caja3);
    principal.appendChild(terciario);
    frag.appendChild(principal);
    content.appendChild(frag);
}
const findContent = (section) => {
    return sectionsContent.find(e => e.id === section);
}

const items = document.querySelectorAll(".item");
items.forEach((item) => item.addEventListener("click", pressItem));

function pressItem(e) {
const noActive = document.querySelector(".active");
noActive.classList.remove("active");

const id = this.getAttribute("id"); //ID Items
this.classList.add("active");

printSection(id);
}