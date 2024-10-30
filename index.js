// import pc from "picocolors";

// console.log(pc.green(`How are ${pc.italic(`you`)} doing?`));

// import { styleText } from "node:util";
// console.log(styleText("blue", "VAmos a  tomar un cafe ya"));

//importar la de express

import express from "express";
//cargar archivo .env
const app = express();
process.loadEnvFile();

const PORT = process.env.PORT;
console.log(PORT);

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/node", function (req, res) {
    res.send("Node js");
});

app.get("/alumno", function (req, res) {
    res.json({
        name: "Estiben",
        edad: 25,
    });
});

app.use((req, res) => {
    res.status(404).send(
        "<img src='https://htmlburger.com/blog/wp-content/uploads/2022/06/404-Page-Examples-Santa-Teresa-Error-Page-Meme.gif' alt='Girl in a jacket' width='100%' height='100%'>"
    );
});
app.listen(PORT, () => {
    console.log(`Conexion en el Puerto ${PORT}`);
});
