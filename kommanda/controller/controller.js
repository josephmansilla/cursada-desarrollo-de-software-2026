

export const controller = {
    crearPlato(req, res) {
        try {
            const plato = menu.agregarPlato(new Plato(req.body));
            res.status(201).json(plato);
        } catch(error) {
            console.error(error)
            if(error instanceof PlatoInvalido) {
                res.status(400).json({
                    error: error.message,
                })
            }
        }
    },
    verPlatos(req,res) {
        try {
            res.status(200).json(menu.listar())
        } catch(error) {

        }
    },
    verPlato(req, res) {
        try {

        } catch(error) {

        }
    },
    modificarPlato(req,res) {
        try {

        } catch(error) {

        }
    },
    modificarDisponibilidad(req, res) {
        try {

        } catch(error) {

        }
    }
}