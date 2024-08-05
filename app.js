// import './CRUD/activos.js';
// import './CRUD/marcas.js';
// import './CRUD/personas.js';
// import './CRUD/estado.js';
// import './CRUD/tipoPersona.js';
// import './CRUD/tipoMovAct.js';
// import './CRUD/tipoActivos.js';
// import './CRUD/crud.js';

document.getElementById('buscarTipoPersona').addEventListener('click', function() {
    fetch('http://localhost:8080/clientes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Suponiendo que la respuesta es JSON
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
});