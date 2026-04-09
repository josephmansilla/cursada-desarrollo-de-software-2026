class Usuario {
    constructor(rol) {
        if (rol === undefined) {
            throw new Error("No hay rol definido");
        }
        this.rol = rol; 
    }
}

class Comanda {
    constructor(estado, bebidasListas, platos) {
        if (estado === undefined || bebidasListas === undefined) {
            throw new Error("No hay un/unos estado/s definido/s");
        }
        this.estado = estado; 
        this.bebidasListas = bebidasListas; 
        this.platos = platos;
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
        )
    };
    bebidasPendientes() {
        return comandas.pedidosPendientes.filter(p => !p.bebidasListas)
    };
}