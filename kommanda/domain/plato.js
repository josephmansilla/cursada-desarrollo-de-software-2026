let menu = {
    platosDisponibles: []
}

class Plato {
    constructor(nombre, categoria, precio, descripcion, disponibilidad) {
        let valores = [nombre, categoria, precio. descripcion, disponibilidad]
        if (valores.some(e => e === undefined)) {
            throw new Error("No hay un/unos estado/s definido/s");
        }

        this.nombre = nombre,
        this.categoria = categoria,
        this.precio = precio,
        this.descripcion = descripcion,
        this.disponibilidad = disponibilidad
    }

    cambiarDisponibilidad(nueva_disponibilidad) {
        this.disponibilidad = nueva_disponibilidad
    }
}