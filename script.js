// Seleccionamos el formulario
const form = document.querySelector('form');

// Función para verificar si todos los campos están completos
function verificarFormulario(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Selección de los campos
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

    // Verificación de campos
    if (nombre === '' || correo === '' || mensaje === '') {
        console.warn("Por favor, completa todos los campos del formulario.");
    } else {
        console.log("Todos los campos están completos.");
        // Aquí puedes agregar la lógica para enviar el formulario si es necesario
        form.submit(); // Si quieres enviar el formulario cuando esté completo
    }
}


// Agregar el evento al formulario
form.addEventListener('submit', verificarFormulario);




// Lista de productos
const productos = [
    { nombre: "Desarrollo Web", horas: 3 },
    { nombre: "JavaScript", horas: 5 },
    { nombre: "Java", horas: 4 },
    { nombre: "Python", horas: 4 },
    { nombre: "PHP", horas: 3 },
    { nombre: "Base de Datos", horas: 2 },
    { nombre: "TypeScript", horas: 2 },
    { nombre: "Angular", horas: 5 },
    { nombre: "Node JS", horas: 7 },
    { nombre: "Data Science", horas: 1 },
    { nombre: "Deep Learning", horas: 2 },
    { nombre: "React", horas: 1 },
    { nombre: "Machine Learning", horas: 1 },
    { nombre: "Git", horas: 2 },
    { nombre: "GitHub", horas: 1 },
    { nombre: "Desarrollo Móvil", horas: 1 },
    { nombre: "Flutter con Firebase", horas: 1 },
    { nombre: "Go", horas: 3 },
    { nombre: "Dart", horas: 1 },
    { nombre: "Flutter", horas: 1 },
    { nombre: "Juegos con Flutter", horas: 2 },
];

// Función para mostrar la lista de productos en la consola
function mostrarProductos(lista) {
    console.log("Lista de productos disponibles:");
    lista.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - ${producto.horas} HORAS`);
    });
}

// Llamar a la función para mostrar los productos
mostrarProductos(productos);





