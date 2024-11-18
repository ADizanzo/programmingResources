// Verificación del formulario
const form = document.querySelector('form');

function verificarFormulario(e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

    if (nombre === '' || correo === '' || mensaje === '') {
        console.warn("Por favor, completa todos los campos del formulario.");
    } else {
        console.log("Todos los campos están completos.");
    }
}

form.addEventListener('submit', verificarFormulario);

// Mostrar productos en consola
const productos = [
    { id: 1, nombre: "Desarrollo Web", horas: 3, descripcion: "Curso introductorio sobre desarrollo web." },
    { id: 2, nombre: "JavaScript", horas: 5, descripcion: "Aprende los fundamentos de JavaScript, desde lo básico hasta aspectos más avanzados." },
    { id: 3, nombre: "Java", horas: 4, descripcion: "Curso sobre los conceptos básicos y avanzados de Java, incluyendo orientación a objetos." },
    { id: 4, nombre: "Python", horas: 4, descripcion: "Curso completo de Python para principiantes, cubriendo sintaxis, estructuras de datos y programación orientada a objetos." },
    { id: 5, nombre: "HTML y CSS", horas: 3, descripcion: "Curso para aprender a crear páginas web estáticas con HTML y CSS." },
    { id: 6, nombre: "React", horas: 5, descripcion: "Curso de React para crear aplicaciones web interactivas con componentes reutilizables." },
    { id: 7, nombre: "Node.js", horas: 5, descripcion: "Curso sobre Node.js, el entorno de ejecución de JavaScript en el backend." },
    { id: 8, nombre: "Bases de Datos SQL", horas: 4, descripcion: "Curso sobre el manejo de bases de datos relacionales utilizando SQL." },
    { id: 9, nombre: "Angular", horas: 5, descripcion: "Curso avanzado sobre Angular para desarrollar aplicaciones dinámicas del lado del cliente." },
    { id: 10, nombre: "C++", horas: 4, descripcion: "Curso que cubre los conceptos fundamentales y avanzados del lenguaje de programación C++." },
    { id: 11, nombre: "PHP", horas: 4, descripcion: "Curso de PHP para desarrollar aplicaciones web del lado del servidor." },
    { id: 12, nombre: "Git y GitHub", horas: 3, descripcion: "Curso sobre control de versiones con Git y colaboración en proyectos con GitHub." },
    { id: 13, nombre: "Machine Learning", horas: 6, descripcion: "Curso introductorio al Machine Learning, cubriendo algoritmos y su implementación en Python." },
    { id: 14, nombre: "Django", horas: 4, descripcion: "Curso de Django para desarrollar aplicaciones web con Python." },
    { id: 15, nombre: "Flutter", horas: 5, descripcion: "Curso para crear aplicaciones móviles multiplataforma con Flutter y Dart." },
    { id: 16, nombre: "Ruby on Rails", horas: 4, descripcion: "Curso sobre Ruby on Rails para desarrollar aplicaciones web con Ruby." },
    { id: 17, nombre: "Swift", horas: 4, descripcion: "Curso para aprender Swift y desarrollar aplicaciones para iOS." },
    { id: 18, nombre: "Kotlin", horas: 4, descripcion: "Curso de Kotlin para el desarrollo de aplicaciones Android." },
    { id: 19, nombre: "Android Studio", horas: 5, descripcion: "Curso sobre cómo usar Android Studio para desarrollar aplicaciones Android." },
    { id: 20, nombre: "UI/UX Design", horas: 5, descripcion: "Curso sobre el diseño de interfaces de usuario y experiencia de usuario." }
];

function mostrarProductos(lista) {
    console.log("Lista de productos disponibles:");
    lista.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - ${producto.horas} HORAS`);
    });
}

mostrarProductos(productos);



// Selecciona todas las imágenes de los cursos
const productImages = document.querySelectorAll('.product-image');

// Función para alternar la visibilidad de la descripción
productImages.forEach((image) => {
    image.addEventListener('click', (event) => {
        const productContainer = event.target.closest('.product-1');
        const descripcion = productContainer.querySelector('.descripcion');
        
        // Alterna la clase visible
        if (descripcion) {
            descripcion.classList.toggle('visible');
        }
    });
});