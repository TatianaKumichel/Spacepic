
// Esta función muestra el modal de registro en la página
function mostrarModal() {
    // Obtiene el elemento modal de registro por su ID
    var modal = document.getElementById('modalRegistro');
    // Verifica si el modal existe
    if (modal) {
        // Si el modal existe, cambia su estilo para mostrarlo (display: block)
        modal.style.display = 'block';
    }
}

// Esta función cierra el modal de registro
function cerrarModal() {
    // Obtiene el elemento modal de registro por su ID
    var modal = document.getElementById('modalRegistro');
    // Verifica si el modal existe
    if (modal) {
        // Si el modal existe, cambia su estilo para ocultarlo (display: none)
        modal.style.display = 'none';
    }
}


// Esta funcion agrega las imagenes al grid

function gridBuild(pictures){
    const gridContainer = document.querySelector(".grid-container-home");
    pictures.forEach(element => {
        const srcImg = `<img src="./static/img/${element}" alt="${element}" class="grid-item-home">`
        gridContainer.insertAdjacentHTML('beforeend',srcImg);
    });
}

// Llamada a la funcion gridBuild() pasando un array con los nombres de las imagenes como parametro

gridBuild([
    "Space image 1.jpeg", 
    "Space image 2.jpeg",
    "Space image 3.jpeg",
    "Space image 4.jpeg",
    "Space image 5.jpeg",
    "butterfly-nebula-dying-star-elements-260nw-1904626690.webp",
    "europe-night-viewed-space-city-260nw-1072726052.webp",
    "gas-giant-planet-system-planetary-260nw-2340264245.webp",
    "nebula-cluster-stars-deep-space-260nw-1795367731.webp",
    "ACD17-0168-009~large.jpg",
    "GSFC_20171208_Archive_e000963~orig.jpg",
    "GSFC_20171208_Archive_e001465~orig.jpg",
    "GSFC_20171208_Archive_e001518~medium.jpg",
    "PIA02973~large.jpg",
    "PIA09967~large.jpg",
]);


/*Cuando se hace click en el botón, muestra el submenu*/
function ShowHideMenu() {   
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("navStyleId").classList.toggle("showNav");
  }
  
  //Cierra el submenu si se clica fuera
  window.onclick = function(event){
    if(!event.target.matches('.imgClick')) {
      var dropdowns = document.getElementsByClassName("navStyle");
      console.log(dropdowns)
      var i;
      for (i = 0;  i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        console.log(openDropdown)
        if (openDropdown.classList.contains('showNav')){
            console.log(openDropdown)
            openDropdown.classList.remove('showNav');
        }
      }
    }
  }        