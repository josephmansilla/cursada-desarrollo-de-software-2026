const CategoriaEnum = Object.freeze({
    ENTRADA: "entrada",
    PRINCIPAL: "principal",
    POSTRE: "postre",
    BEBIDA: "bebida"
});

const RolEnum = Object.freeze({
    ADMINISTADOR: "administrador",
    ENCARGADO: "encargado",
    MOZO: "mozo"
});

const EstadoComandaEnum = Object.freeze({
    INGRESADO: "ingresado",
    ENTRADAS_LISTAS: "entradas_listas",
    PRINCIPALES_LISTOS: "principales_listos",
    POSTRES_LISTOS: "postres_listos",
    ENTREGADO: "entregado",
    PAGADO: "pagado"
});