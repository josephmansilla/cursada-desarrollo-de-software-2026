const menu = {
    platosDisponibles: [],
    listar(){
        return this.platosDisponibles;
    },
    agregarPlato(plato) {
        this.platosDisponibles.push(plato);
    },
    removerPlato(plato) {
        this.platosDisponibles.filter(e => !e === plato);
        return null;
    },
    buscarPlato(id) {
        return 
    }
};

let PlatoInvalido = Object.create(Error);
PlatoInvalido.message = "Atributos no validos"

class Plato {
    constructor(nombre, categoria, precio, descripcion, disponibilidad) {
        let valores = [nombre, categoria, precio. descripcion, disponibilidad]
        if (valores.some(e => e === undefined)) {
            throw new PlatoInvalido;
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

class Pedido {
    constructor(plato, estaListo, cantidad, notas) {
        this.plato = plato;
        this.notas = notas;
        this.estaListo = estaListo;
        this.cantidad = cantidad;
    }
}