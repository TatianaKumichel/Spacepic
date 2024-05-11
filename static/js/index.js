
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
    var modal = document.getElementById('modalRegistro');
    
    if (modal) {
        modal.style.display = 'none';
    }
}



// Esta funcion agrega las imagenes al grid

function gridBuild(pictures){
    const gridContainer = document.querySelector(".grid-container");
    pictures.forEach(element => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const imgCont = document.createElement('div');
        imgCont.classList.add('grid-image-container');

        const imgSrc = document.createElement('img');
        imgSrc.src = `./static/img/${element}`;
        imgSrc.alt = element;

        const hoverButton = document.createElement('button');
        hoverButton.classList.add('grid-hover-button');
        hoverButton.textContent = 'Comprar';

        gridItem.appendChild(imgCont);
        imgCont.appendChild(imgSrc);
        imgCont.appendChild(hoverButton);
        gridContainer.appendChild(gridItem);
    });
}

// Llamada a la funcion gridBuild() pasando un array con los nombres de las imagenes como parametro

gridBuild([
    "spaimg1.jpeg", 
    "spaimg2.jpeg",
    "spaimg3.jpeg",
    "spaimg4.jpeg",
    "spaimg5.jpeg",
    "spaimg20.jpg",
    "spaimg13.jpg",
    "spaimg14.jpg",
    "spaimg21.jpeg",
    "spaimg17.jpg",
    "spaimg18.jpg",
    "spaimg12.jpeg",
    "spaimg22.jpg",
    "spaimg14.jpg",
    "spaimg15.jpg",
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

/* AutoScroll con botones*/

var button = document.getElementById('slide');
    button.onclick = function () {
        var container = document.getElementById('slider');
        sideScroll(container,'right',25,200,20);
    };

var back = document.getElementById('slideBack');
    back.onclick = function () {
        var container = document.getElementById('slider');
        sideScroll(container,'left',25,200,20);
    };

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var motivo = document.getElementById('motivo').value;
    var imagen = document.getElementById('imagen').value;

    var nombreError = document.getElementById('nombreError');
    var emailError = document.getElementById('emailError');
    var mensajeError = document.getElementById('mensajeError');
    var motivoError = document.getElementById('motivoError');
    var imagenError = document.getElementById('imagenError');

    nombreError.textContent = '';
    emailError.textContent = '';
    mensajeError.textContent = '';
    motivoError.textContent = '';
    imagenError.textContent = '';

    var validado = true;

    if (nombre === '') {
        nombreError.textContent = 'Por favor, ingresa tu nombre';
        validado = false;
    }

    if (email === '') {
        emailError.textContent = 'Por favor, ingresa tu email';
        validado = false;
    }

    // Agregar más validaciones según sea necesario...

    if (motivo === '') {
        motivoError.textContent = 'Por favor, selecciona un motivo';
        validado = false;
    }

    if (imagen === '') {
        imagenError.textContent = 'Por favor, adjunta una imagen';
        validado = false;
    }

    return validado;
}