class Comanda {
    constructor(estado, bebidasListas) {
        if (estado === undefined || bebidasListas === undefined) {
            throw new Error("No hay un/unos estado/s definido/s");
        }
        this.estado = estado; 
        this.bebidasListas = bebidasListas; 
        this.pedidos = []; // hay alguna forma de verificar tipos y que no explote? que asco js
    }
    cambiarEstado(estado) {
        this.estado = estado; // se debería verificar tipos?? no sé como es js
    }

    agregarPedidos(pedidos) {
        return this.pedidos.concat(pedidos);
    }

    removerPedidos(pedidos) { 
        return this.pedidos.filter(e => !pedidos.includes(e));
    }
    // NO ES NECESARIO HACER ESTAS FUNCIONES, PERO PARA NO REPETIR TANTA LÓGICA DE CÓDIGO LO AGREGO AL SER QUE LO PIDE EL DOMINIO
    totalPedido() {
        let TOTAL = 0;
        this.pedidos.forEach(e => e.precio + TOTAL);
        return TOTAL;
    }
}


class Resto {
    constructor(comandas) {
        this.comandas = comandas;
    }
    pedidosPendientes() {
        let  ESTADOS_VALIDOS = [
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