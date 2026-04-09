class Usuario {
    constructor(rol) {
        if (rol === undefined) {
            throw new Error("No hay rol definido");
        }
        this.rol = rol; 
    }
    
    agregarPlatoMenu(platos) {
        
    }
    removerPlatoMenu(platos) {
        
    }

    agregarPlatos(platos, comanda) {
        return structuredClone(comanda.agregarPlatos(platos))
    }
    removerPlatos(platos, comanda) {
        return structuredClone(comanda.removerPlatos(platos))
    }

    editarPlato(plato) {
        
    }

    cambiarDisponibilidad(disponibilidad, plato) {
        plato.cambiarDisponibilidad(disponibilidad)
    }

    modificarPlatoDePedido(seleccionado, nuevo, comanda) {
        let COMANDA_NUEVO = comanda.removerPlatos([seleccionado]).agregarPlatos([nuevo])
        return structuredClone(COMANDA_NUEVO)
    }

    crearComanda(platos) {
        return new Comanda(INGRESADO, false).agregarPlatos(platos);
    }
    marcarEstado(estado, comanda) {
        return structuredClone(comanda.cambiarEstado(estado));
    }
}

class Comanda {
    constructor(estado, bebidasListas) {
        if (estado === undefined || bebidasListas === undefined) {
            throw new Error("No hay un/unos estado/s definido/s");
        }
        this.estado = estado; 
        this.bebidasListas = bebidasListas; 
        this.platos = []; // hay alguna forma de verificar tipos y que no explote? que asco js
    }
    cambiarEstado(estado) {
        this.estado = estado; // se debería verificar tipos?? no sé como es js
    }

    agregarPlatos(platos) {
        let PLATOS_NUEVOS = this.platos.concat(platos);
        return PLATOS_NUEVOS;
    }

    removerPlatos(platos) {
        let PLATOS_NUEVOS = this.platos.filter(e => !platos.includes(e));
        return PLATOS_NUEVOS;
    }
    // NO ES NECESARIO HACER ESTAS FUNCIONES, PERO PARA NO REPETIR TANTA LÓGICA DE CÓDIGO LO AGREGO AL SER QUE LO PIDE EL DOMINIO
    totalPedido() {
        let TOTAL = 0;
        this.platos.forEach(e => e.precio + TOTAL);
        return TOTAL;
    }

}

let menu = {
    platosDisponibles: []
}

class Plato {
    constructor(nombre, categoria, precio, descripcion, disponibilidad) {
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

class Resto {
    constructor(comandas) {
        this.comandas = comandas;
    }
    pedidosPendientes() {
        const ESTADOS_VALIDOS = [
            EstadoComandaEnum.INGRESADO,
            EstadoComandaEnum.ENTRADAS_LISTAS,
            EstadoComandaEnum.PRINCIPALES_LISTOS,
        ]
        return comandas.pedidosPendientes.filter(t =>
            ESTADOS_VALIDOS.includes(t.estado)
        );
    };
    bebidasPendientes() {
        return comandas.pedidosPendientes.filter(p => !p.bebidasListas)
    };
}