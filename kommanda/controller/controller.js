

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
            if(error instanceof PlatoInvalido) {
                res.status(400).json({error: error.message}); 
            }
        }
    },
    verPlato(req, res) {
        try {
            const platoId = parseInt(req.params.id)
            menu.buscarPlato(platoId);
        } catch(error) {
            if(error instanceof PlatoInvalido) {
                res.status(420).json({error: error.message}); 
            }
        }
        },
    modificarPlato(req,res) {
        try {
        const platoId = parseInt(req.params.id);
            menu.modificarPlato();
            return res.status(400);
        } catch(error) {
            if (error instanceof PlatoInvalido) {
                res.status(420).json({error: error.message}); 
            }
        }
    }
    }
