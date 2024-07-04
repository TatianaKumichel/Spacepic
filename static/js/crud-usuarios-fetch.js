const BASEURL = 'http://127.0.0.1:5000';
/**
* Función para realizar una petición fetch con JSON.
* @param {string} url - La URL a la que se realizará la petición.
* @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
* @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
* @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
*/

/**
 * Función para validar si un string es un email válido
 * @param {string} email - El email a validar
 * @returns {boolean} - True si es un email válido, false en caso contrario
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
async function fetchData(url, method, data = null) { //para conectarse con cualquier ruta, metodo y datos que se envian al servidor
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null, // Si hay datos, los convierte a JSON y los incluye en el cuerpo
        };
try {
    const response = await fetch(url, options); // Realiza la petición fetch
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
return await response.json(); // Devuelve la respuesta en formato JSON
    } catch (error) {
    console.error('Fetch error:', error);
alert('An error occurred while fetching data. Please try again.');
}
}

/**
* Funcion que permite crear un elemento <tr> para la tabla de usuarios
* por medio del uso de template string de JS.
*/
async function mostrarUsuarios(){
    let usuarios = await fetchData(BASEURL+'/usuarios', 'GET');
    const tablaUsuarios = document.querySelector('#list-tabla-usuarios tbody');
        tablaUsuarios.innerHTML='';
    usuarios.forEach((usuario, index) => {
        let tr = `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>
                <button class="btn-user" onclick='updateUsuario(${usuario.nombre})'><i class="fa fa-pencil" ></button></i>
                <button class="btn-user" onclick='deleteUsuario(${usuario.id})'><i class="fa fa-trash" ></button></i>
            </td>
        </tr>`;
        tablaUsuarios.insertAdjacentHTML("beforeend",tr);
    });
}

    /**
* Función para comunicarse con el servidor para poder Crear o Actualizar
* un registro de usuario
* @returns
*/
async function saveUsuario(){
    const id= document.querySelector('#id').value;
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;

    //VALIDACION DE FORMULARIO
    if (!nombre || !email || !validarEmail(email)) {
    Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos y asegurate que el email sea valido.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
    return;
    }
    // Crea un objeto con los datos 
    const usuarioData = {
        nombre: nombre,
        email: email,
    
    };
    let result = null;
// Si hay un id, realiza una petición PUT para actualizar el usuario existente
if(id!==""){
    result = await fetchData(`${BASEURL}/usuarios/${id}`, 'PUT', usuarioData);
}else{
// Si no hay id, realiza una petición POST para crear una nuevo usuario
result = await fetchData(`${BASEURL}/usuarios`, 'POST', usuarioData);
}
const formUsuario = document.querySelector('#form-usuario');
formUsuario.reset();

Swal.fire({
title: 'Exito!',
text: result.message,
icon: 'success',
confirmButtonText: 'Cerrar'
})
mostrarUsuarios();
}

    /**
* Function que permite eliminar un usuario del array del localstorage
* de acuedo al indice del mismo
* @param {number} id posición del array que se va a eliminar
*/
function deleteUsuario(user_id){
    Swal.fire({
    title: "Esta seguro de eliminar el usuario?",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    }).then(async (result) => {
    if (result.isConfirmed) {
    let response = await fetchData(`${BASEURL}/usuarios/${user_id}`, 'DELETE');
    mostrarUsuarios();
    Swal.fire(response.message, "", "success");
    }
    });
    }

    /*
    * Function que permite cargar el formulario con los datos del usuario para su edición
    
    * @param {number} id Id de la pelicula que se quiere editar
   */
    @param {String}
     async function updateUsuario(nombre){
       //Buscamos en el servidor el usuario de acuerdo al nombre
       let response = await fetchData(`${BASEURL}/usuarios/${nombre}`, 'GET');
       const idUsuario = document.querySelector('#id-usuario');
       const nombre = document.querySelector('#nombre');
       const email = document.querySelector('#email');

       
       idUsuario.value = response.id_usuario;
       nombre.value = response.nombre;
       email.value = response.email;
   }



   
    // Escuchar el evento 'DOMContentLoaded' que se dispara cuando el
    // contenido del DOM ha sido completamente cargado y parseado.
   document.addEventListener('DOMContentLoaded',function(){
    const btnSaveUsuario = document.querySelector('#btn-save-usuario');
    //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
    btnSaveUsuario.addEventListener('click',saveUsuario);
    mostrarUsuarios();
    });