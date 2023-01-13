const express = require('express')
const { create } = require("express-handlebars");
const app = express()
const hbs = create({
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
// app.use(express.json()) // app.use es un middleware!!!
// app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
    console.log(req.body)

    res.send({status: "esto es un post!!"})
})
// app.use(express.static(`${__dirname}/public`))
app.listen(5000, () => console.log('Andando ando 🔥🔥🔥🔥'))