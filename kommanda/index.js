

app.post("/plato", (req, res) => {
    controller.crearPlato(req,res);
})
/*
Def body: {atributos de un plato}
Response: 201
Response body: { return object }
*/
app.get("/platos/id",  (req, res) => {
    controller.verPlato(req,res);
}) 
/*
Def body: vacio (casi nunca se manda algo en los get)
Response: 200
Response body: {plato} 
Response: 400
Response body: {alguna burrada} 
*/ 
app.get("/platos",  (req, res) => {
    controller.verPlatos(req,res);
})
/*
Def body: null
Response: 200
Response body: [{plato1,plato2,plato3...}]
*/

app.put("/plato/id",  (req, res) => {
    controller.modificarPlato(req,res);
})
/*
out -> sobreescribir (modificacion total)
patch -> parchar algo (modificacion parcial)
def body:  {plato, ...}
Response: 200 / 400 / 404
Response body: {plato, ...} / 
*/

app.patch("platos/id", (req, res) => {
    controller.modificarDisponibilidad(req, res);
})
/* 
Def body: disponibilidadPlato 
response: 200
response body: vacio
*/