console.log("pagina cargada");

const principal = document.createElement("div");
const secundario = document.createElement("div");
const terciario = document.createElement("div");

// HOME----
const img = document.createElement("img");
img.src = "./img/face.jpeg";
img.classList.add("imagen");
img.alt = "fotografia de Odon ML";

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
title.classList.add("glitch");

const content = document.getElementById("content");
const frag = document.createDocumentFragment();

const sectionsContent = {
  home: {
    titulo: "Odon ML",
    parrafo1: `<h3 class="sub-titulo">Hola, Soy</h3>`,
    parrafo2: `<h3 class="sub-titulo c-azul"></h3>
        <p class="parrafo">
        <span class="c-amarillo">Mexicano</span>,
        Tec. en programacíon,
        <span class="c-azul">Ing. en sistemas</span>,
        <span class="c-rosa">Full-Stack Javascript Developer en  <a class="link axity" href="https://axity.com/" target="_blank">Axity</a> </span> <br> 
        e Ilustrador aficionado.
        </p>`,
  },
  education: {
    titulo: "EDUCACIÓN",
    parrafo1: `<h3 class="sub-titulo c-azul">Full-Stack Developer</h3>
        <p class="parrafo">(2021 - 2022) <br>
        <span class="c-rosa">Escuela:</span> <a class="link" href="https://kodemia.mx/" target="_blank">Kodemia</a>. <br>
         <span class="c-amarillo">Certificado:</span> Scrum Fundamentals, IBM Koder Bootcamp Mexico <br> y Full-Stack Jr Web Developer JavaScript.
        </p>`,
    parrafo2: `<h3 class="sub-titulo c-azul">Ing. en sistemas</h3>
        <p class="parrafo">
        <span class="c-rosa">Escuela:</span> Instituto Tecnológico
        Superior de Zongolica. <br>
        <span class="c-amarillo">Certificado:</span> Título.
        </p>
        <br>
        <h3 class="sub-titulo c-azul">Tec. En Programación</h3>
        <p class="parrafo">
        <span class="c-rosa">Escuela:</span> Bachillerato CBTis #142. <br>
        <span class="c-amarillo">Certificado:</span> Diploma.
        </p>`,
  },
  portfolio: {
    titulo: "PORTAFOLIO",
    parrafo1: `<h3 class="sub-titulo c-azul">Axity</h3>
        <p class="parrafo">(Actual) <br>
        <span class="c-amarillo">Puesto:</span> Full-Stack Developer. <br>
        <span class="c-rosa">Actividades:</span><br>
        Desarrollo de proyectos en distintas tecnologías del frontend y backend, como <span class="c-angular">Angular</span> y Nodejs.
        </p>`,
    parrafo2: `<h3 class="sub-titulo c-azul">Broncemex</h3>
        <p class="parrafo">(2020) <br>
        <span class="c-amarillo">Puesto:</span> Frontend Developer. <br>
        <span class="c-rosa">Actividades:</span><br>
        Desarrollo de página web
        a la medida, con HTML, CSS,
        JS y Bootstrap.
        </p>
        <br>
        <h3 class="sub-titulo c-azul">Kubeet</h3>
        <p class="parrafo">(2018 - 2019) <br>
        <span class="c-amarillo">Puesto:</span> Frontend Developer. <br>
        <span class="c-rosa">Actividades:</span> <br>
        Desarrollar proyectos con
        HTML, CSS, SASS, JS,
        TypeScript, Bootstrap,
        <span class="c-angular">Angular</span>, Angular Material,
        Firebase y Rest APIs.
        </p>`,
  },
  design: {
    titulo: "DISEÑOS",
    parrafo1: `<h3 class="sub-titulo c-azul">Tengo</h3>
        <p class="parrafo">experiencia haciendo
        <span class="c-amarillo">diseños</span> de logotipos, para proyectos
        musicales y de
            emprendimiento, visita mi
            portafolio en  <a class="link" href="https://www.behance.net/odonml" target="_blank"><span class="c-rosa">Behance</span></a>.
            </p>`,
    parrafo2: `<div class="icon">
    <a href="https://www.behance.net/odonml" target="_blank">
            <svg class="behance" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613a3.11 3.11 0 0 1-.974 1.114 4.315 4.315 0 0 1-1.399.64 6.287 6.287 0 0 1-1.609.206H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 0 0-.417-.428 1.683 1.683 0 0 0-.597-.215 3.609 3.609 0 0 0-.697-.061H4.71v2.875h2.742zm.151 5.239c.267 0 .521-.023.76-.077.241-.052.455-.136.637-.261.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H4.71v3.39h2.893zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.79h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.337a4.033 4.033 0 0 1-1.439-.958 4.37 4.37 0 0 1-.905-1.485 5.433 5.433 0 0 1-.32-1.899c0-.666.111-1.289.329-1.864a4.376 4.376 0 0 1 .934-1.493c.405-.42.885-.751 1.444-.994a4.634 4.634 0 0 1 1.858-.362c.754 0 1.413.146 1.979.44a3.967 3.967 0 0 1 1.39 1.182c.363.493.622 1.058.783 1.691.161.632.217 1.292.171 1.983h-6.431c.001.704.238 1.371.606 1.729zm2.812-4.681c-.291-.322-.783-.496-1.385-.496-.391 0-.714.065-.974.199a1.97 1.97 0 0 0-.62.491 1.772 1.772 0 0 0-.328.628 2.82 2.82 0 0 0-.111.587h3.982c-.058-.624-.272-1.085-.564-1.409zm-3.918-4.663h4.989v1.215h-4.989z"></path></svg>
            </a>
            </div>`,
  },
  skills: {
    titulo: "SKILLS",
    parrafo1: `<h3 class="sub-titulo c-azul">Conocimientos</h3>
        <div class="row">

        <div class="icon">
        <svg class="skills-icons c-html" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path></svg>
        <p>HTML</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-css" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path></svg>
        <p>CSS</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-js" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
        <p>JavaScript</p>
        </div>

        </div>
        <div class="row">

        <div class="icon">
        
         <svg class="skills-icons c-sass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2zm-1.987 13.332c.146.537.13 1.039-.021 1.493l-.054.15a2.803 2.803 0 0 1-.527.821c-.582.633-1.394.872-1.742.671-.375-.219-.188-1.112.487-1.825.726-.765 1.766-1.258 1.766-1.258v-.002l.091-.05zm8.258-9.051c-.452-1.777-3.397-2.362-6.185-1.371-1.656.589-3.453 1.515-4.743 2.723-1.536 1.434-1.78 2.684-1.68 3.206.355 1.843 2.881 3.048 3.92 3.942v.005c-.307.149-2.548 1.274-3.072 2.438-.563 1.225.088 2.101.513 2.212 1.313.363 2.662-.3 3.388-1.374.699-1.051.638-2.4.337-3.063.413-.112.899-.162 1.524-.086 1.751.199 2.101 1.3 2.024 1.75-.074.449-.436.711-.561.786-.126.076-.163.101-.151.151.013.074.076.074.175.063.138-.025.914-.375.951-1.227.037-1.074-.988-2.273-2.813-2.25-.75.014-1.226.076-1.563.214a.295.295 0 0 0-.088-.088c-1.125-1.213-3.213-2.063-3.125-3.675.025-.588.237-2.137 4-4.012 3.088-1.538 5.551-1.112 5.977-.175.61 1.336-1.314 3.825-4.526 4.187-1.225.138-1.862-.337-2.026-.513-.174-.188-.198-.2-.261-.161-.101.05-.038.212 0 .313.1.249.487.688 1.163.912.587.188 2.024.299 3.75-.375 1.937-.749 3.449-2.838 3.012-4.588l.06.056z"></path></svg>
        <p>Sass</p>
        </div>

        <div class="icon">
       <svg class="skills-icons c-boot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M18.002 2.997H5.999A3.011 3.011 0 0 0 2.997 6v12.002a3.012 3.012 0 0 0 3.002 3.001h12.003a3.012 3.012 0 0 0 3.001-3.001V6a3.012 3.012 0 0 0-3.001-3.003zm-1.64 12.647c-.152.36-.389.68-.693.927a3.594 3.594 0 0 1-1.206.614c-.49.151-1.074.229-1.75.229H7.888V6.909h5.103c.943 0 1.7.213 2.267.646.569.436.854 1.082.854 1.958 0 .528-.13.983-.389 1.357-.259.373-.63.664-1.111.868v.034c.642.135 1.137.438 1.464.912.327.473.493 1.069.493 1.789 0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589c-.309-.282-.739-.419-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435.308-.289.464-.701.464-1.229-.005-.518-.156-.919-.464-1.193h-.014.004zm-.451-2.119c.299-.251.444-.613.444-1.084 0-.526-.131-.902-.397-1.116-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372z"></path></svg>
        <p>Bootstrap</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-git" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path></svg>
        <p>Git</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
        <p>Github</p>
        </div>

        </div>
        <div class="row">

        <div class="icon">
        <svg class="skills-icons c-fire"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.239 15.063 7.21 2.381a.453.453 0 0 1 .847-.145l2.12 3.979-4.938 8.848zM19.24 18.14 17.363 6.469a.454.454 0 0 0-.766-.246L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.691zM13.917 7.955 12.4 5.052a.452.452 0 0 0-.8 0L4.939 16.989l8.978-9.034z"></path></svg>
        <p>Firebase</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-angu"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.483 12.482h3.034L12 8.831z"></path><path d="M12 3.074 3.689 6.038l1.268 10.987 7.043 3.9 7.043-3.9 1.268-10.987L12 3.074zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047l5.187 11.648z"></path></svg>
        <p>Angular</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-fig"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z"></path><circle cx="15.332" cy="12" r="3.332"></circle></svg>
        <p>Figma</p>
        </div>

        </div>
         <div class="row">

        <div class="icon">
        <svg class="skills-icons c-node" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path></svg>
        <p>Node.js</p>
        </div>

        <div class="icon">
        <svg class="skills-icons c-react" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path></svg>
        <p>React.js</p>
        </div>

        </div>
        `,
    parrafo2: `
        <h3 class="sub-titulo c-azul">Aprendiendo</h3>
        <div class="row">
<div class="icon">
         <svg
                xmlns="http://www.w3.org/2000/svg"
                class="skills-icons c-atomico"
                width="35"
                height="34.893"
                viewBox="0 0 35 34.893"
              >
                <g transform="translate(-15.196 107.918)">
                  <g transform="translate(15.196 -107.918)">
                    <path
                      d="M79.2-43.173a6.91,6.91,0,0,1-.705.615l-6.317,0c.4-.265.8-.553,1.181-.856h6.068C79.36-43.329,79.281-43.251,79.2-43.173Zm.84-1.019H74.273c.153-.142.308-.29.458-.44s.271-.275.4-.416h5.4a6.869,6.869,0,0,1-.491.856Zm-2.859,2.418a6.8,6.8,0,0,1-2.825.608,6.8,6.8,0,0,1-2.826-.608h5.651Zm3.668-4.056h-5.04c.227-.276.447-.563.654-.856l4.614,0a6.824,6.824,0,0,1-.227.856Zm.336-1.636h-4.2c.175-.278.343-.566.5-.856H81.2c.005.1.006.2.007.3,0,.184-.008.37-.022.552ZM81.127-49.1l-3.238,0c.132-.279.259-.567.376-.856h2.669a6.839,6.839,0,0,1,.193.857Zm-.476-1.637H78.557c.1-.281.187-.568.269-.856H80.2a6.86,6.86,0,0,1,.446.855Zm-1-1.639h-.622c.041-.18.081-.364.116-.548a6.918,6.918,0,0,1,.5.548Z"
                      transform="translate(-48.142 75.758)"
                    />
                    <path
                      d="M41.2-71.247a15.352,15.352,0,0,1-2.393,1.952,15.25,15.25,0,0,1-16.759,0A15.388,15.388,0,0,1,17.7-73.641a15.253,15.253,0,0,1,0-16.757,15.367,15.367,0,0,1,4.844-4.661,15.185,15.185,0,0,1,6.68-2.145,15.338,15.338,0,0,1,3.492.126,9.639,9.639,0,0,0,1.934,10.832,9.639,9.639,0,0,0,10.832,1.934A15.218,15.218,0,0,1,41.2-71.247Z"
                      transform="translate(-15.196 101.68)"
                    />
                    <path
                      d="M69.243-91.312l5-5A8.606,8.606,0,0,1,69.243-91.312Zm-1.852.468a8.633,8.633,0,0,1-1.586.07l8.979-8.979a8.633,8.633,0,0,1-.07,1.586Zm-2.819-.078a8.572,8.572,0,0,1-1.192-.324l10.933-10.933a8.565,8.565,0,0,1,.324,1.192Zm-2.167-.731a8.5,8.5,0,0,1-.96-.555l11.9-11.9a8.519,8.519,0,0,1,.555.96Zm-1.744-1.154q-.261-.222-.508-.469-.136-.136-.264-.275l12.118-12.118q.139.128.275.263.247.247.469.508Zm-1.393-1.505a8.527,8.527,0,0,1-.586-.929l11.636-11.635a8.529,8.529,0,0,1,.929.586Zm-1.027-1.871a8.553,8.553,0,0,1-.364-1.151l10.346-10.346a8.542,8.542,0,0,1,1.152.363Zm-.561-2.337a8.626,8.626,0,0,1-.012-1.5l7.87-7.87a8.651,8.651,0,0,1,1.5.012Zm.293-3.191a8.6,8.6,0,0,1,5.874-5.874Z"
                      transform="translate(-40.017 107.918)"
                    />
                  </g>
                </g>
              </svg> 
               <p>Atomico.js</p>
        </div>
        </div>
        `,
  },
  interested: {
    titulo: "INTERESES",
    parrafo1: `<h3 class="sub-titulo c-azul">Mi Objetivo</h3>
        <p class="parrafo">
        es aprender más sobre <span class="c-rosa">JavaScript</span>
        para poder especializarme en este lenguaje.
            </p>`,
    parrafo2: `<h3 class="sub-titulo c-azul">También</h3>
    <p class="parrafo">
    sstoy interesado en aprender más sobre el <span class="c-rosa">Diseño Gráfico</span>.
        </p>`,
  },
  contact: {
    titulo: "CONTACTO",
    parrafo1: `<h3 class="sub-titulo c-azul">Contáctame</h3>
        <p class="parrafo"> 
        en <a class="link" href="https://www.linkedin.com/in/odon-mizrrain-lozada-carrasco-a51852149/"><span class="c-rosa">Linkedin</span></a> o <a class="link" href="https://twitter.com/odonML"><span class="c-rosa">Twitter</span></a>
        y con gusto te haré llegar mi CV.
            </p>`,
    parrafo2: `<h3 class="sub-titulo c-azul">También</h3>
    <p class="parrafo"> 
    puedes visitar mis repositorios de <a class="link" href="https://github.com/odonML"><span class="c-rosa">GitHub</span></a>
        </p>`,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const itemActive = document.getElementById("home");
  itemActive.classList.add("active");
  printSection("home");
});

const items = document.querySelectorAll(".item");
items.forEach((item) => item.addEventListener("click", pressItem));

function pressItem() {
  const noActive = document.querySelector(".active");
  noActive.classList.remove("active");
  const id = this.getAttribute("id"); //ID Items
  this.classList.add("active");
  printSection(id);
}

function printSection(section) {
  let sec = findContent(section);
  title.setAttribute("data-text", sec.titulo);
  title.innerText = sec.titulo;
  caja2.innerHTML = sec.parrafo1;
  caja3.innerHTML = sec.parrafo2;

  secundario.classList.remove("no-secundario");
  caja2.classList.remove("iconos");
  caja3.classList.remove("iconos");
  if (section === "design") {
    caja3.classList.add("iconos");
  } else if (section === "skills") {
    caja2.classList.add("iconos");
    caja3.classList.add("iconos");
  } else if (section === "home") {
    secundario.classList.add("no-secundario");
  }

  if (section !== "home") {
    img.remove();
  } else {
    caja1.appendChild(img);
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
  return sectionsContent[section];
};
