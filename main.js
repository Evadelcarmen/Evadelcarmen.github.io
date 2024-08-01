//console.log("Hola mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Front-end Jr.- Programadora')
    .pauseFor(2500)
    .deleteAll()
    //si lo puedes imaginar, lo puedes programar
    .typeString('Estudiante de Tecnm Tuxtla Gtz')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('<strong>e Ingeniera</strong>')
    .pauseFor(2500)
    .start();