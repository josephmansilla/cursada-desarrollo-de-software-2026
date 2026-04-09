class Usuario {
    constructor(rol) {
        if (rol === undefined) {
            throw new Error("No hay rol definido");
        }
        this.rol = rol; 
    }
    
    agregarPlatoMenu(plato) {
        menu.platosDisponibles.push(plato);
    }
    removerPlatoMenu(plato) {
        menu.platosDisponibles.filter(e => !e === plato);
    }

    agregarPlatos(platos, comanda) {
        return structuredClone(comanda.agregarPlatos(platos));
    }
    removerPlatos(platos, comanda) {
        return structuredClone(comanda.removerPlatos(platos));
    }

    editarPlato(plato) {
        this.removerPlatoMenu(menu.platosDisponibles.find(e => e.nombre == plato.nombre));
        this.agregarPlatoMenu(plato);
    }

    cambiarDisponibilidad(disponibilidad, plato) {
        plato.cambiarDisponibilidad(disponibilidad);
    }

    modificarPlatoDePedido(seleccionado, nuevo, comanda) {
        let COMANDA_NUEVO = comanda.removerPlatos([seleccionado]).agregarPlatos([nuevo]);
        return structuredClone(COMANDA_NUEVO);
    }

    crearComanda(platos) {
        return new Comanda(INGRESADO, false).agregarPlatos(platos);
    }
    marcarEstado(estado, comanda) {
        return structuredClone(comanda.cambiarEstado(estado));
    }
}
