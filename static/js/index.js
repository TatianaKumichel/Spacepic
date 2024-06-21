
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

function gridBuilder(pictures){
    const gridContainer = document.querySelector(".grid-container");
        gridContainer.innerHTML = '';
    pictures.forEach(element => {
        // crea un elemento div y le agrega la clase
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('grid-image-container');

        // crea un elemento img y le agrega el source y el alt
        const img = document.createElement('img');
        img.src = `./static/img/${element}`;
        img.alt = element;

        // crea un elemento button y le agrega el texto y la clase
        const hoverButton = document.createElement('button');
        hoverButton.classList.add('grid-hover-button');
        hoverButton.textContent = 'Comprar';

        // agrega los elementos en los contenedores 
        imgContainer.appendChild(img);
        imgContainer.appendChild(hoverButton);
        gridItem.appendChild(imgContainer);
        gridContainer.appendChild(gridItem);
    });
}

// Esta funcion llama al constructor del grid evaluando la cantidad
// de imagenes que debe pasar dependiendo de los media querys
function callGridBuilder(){
    // Lista de imagenes para agregar al grid
    let images = [
        "spaimg1.jpeg", 
        "spaimg2.jpeg",
        "spaimg3.jpeg",
        "spaimg4.jpeg",
        "spaimg5.jpeg",
        "spaimg12.jpeg",
        "spaimg13.jpg",
        "spaimg14.jpg",
        "spaimg15.jpg",
        "spaimg17.jpg",
        "spaimg18.jpg",
        "spaimg19.jpg",
        "spaimg20.jpg",
        "spaimg21.jpeg",
        "spaimg22.jpg",
    ];

    // determina la cantidad de columnas del grid dependiendo del media query activo
    let gridColumns;
    if (window.matchMedia('(max-width: 576px)').matches) {
        gridColumns = 2;
    } else if (window.matchMedia('(max-width: 768px)').matches) {
        gridColumns = 3;
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
        gridColumns = 5; 
    } else {
        gridColumns = 5;
    }

    // Llama a la funcion para construir el grid pasando la cantidad de imagenes 
    // cuidando que no queden filas INCOMPLETAS
    let remainder = images.length % gridColumns
    if (remainder==0){ 
        gridBuilder(images);
    }else{
        gridBuilder(images.slice(0,-(remainder)));
    }
}


// Llama al constructor del grid al cargar la página
document.addEventListener('DOMContentLoaded', callGridBuilder());

    
// Agrega un listener para llamar al constructor del grid cuando la ventana cambia de tamaño
// Se asegura de limitar la frecuencia de ejecucion utilizando DEBOUNCE 

// DEBOUNCE
function debounce(func, delay) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func.apply(this, args);
        timerId = null;
      }, delay);
    };
  }

// Listener
window.addEventListener('resize', debounce(callGridBuilder,300)); //300 ms


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