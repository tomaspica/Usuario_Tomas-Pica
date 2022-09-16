class Usuario {
    constructor(nombre, apellido, libros, mascotas ) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        const bookNames = [];
        this.libros.forEach((libro) => bookNames.push(libro.nombre))
        return bookNames
    }
}


const usuario = new Usuario(
    "Tomas", 
    "Pica", 
    [{nombre: "Harry Potter", autor: " J. K. Rowling"}], 
    ["perro", "gato"]
);

console.log(usuario)
console.log(usuario.getFullName());
usuario.addMascota("perro");
console.log(usuario.countMascotas());
usuario.addBook("El principito", "Antoine de Saint-Exupéry");
console.log(usuario.getBookNames());