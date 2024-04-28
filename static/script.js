
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
        