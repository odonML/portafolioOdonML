const content = document.getElementById("content");
const frag = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", function () {
    const itemActive= document.getElementById("home");
    itemActive.classList.add("active");
//   frag.appendChild(base);
//   content.appendChild(frag);
});

const items = document.querySelectorAll(".item");
items.forEach((item) => item.addEventListener("click", pressItem));

function pressItem(e) {
//   let child = content.children[0];
//   content.removeChild(child);



const noActive = document.querySelector(".active");
noActive.classList.remove("active");

const id = this.getAttribute("id"); //ID Items

this.classList.add("active");
console.log("item ", id)


  //   let h = document.createElement("h1");
  //   h.innerText = "hola papus";
  //   frag.appendChild(h);
  //   content.appendChild(frag);
}

{
  /*<div class="principal">
        <div class="secundario">
            <div class="caja contenido">
                <!-- titulo -->
                <h1 id="titulo" class="glitch" data-text="Home" >Home</h1>
            </div>
            <div class="caja contenido">
                <!-- parrafo -->
                <p id="parrafo1"></p>
            </div>
        </div>
        <div class="terciario contenido">
            <!-- parrafo -->
            <p id="parrafo2"></p>
        </div>
    </div> */
}

document.addEventListener("click", (e)=>{
    console.log("global ",e.target);
})