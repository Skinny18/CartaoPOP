const express = require("express");
const app = express();
const mysql = ("mysql2");
const cors = require("cors");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"biel250303",
    database:"form_pop",
});

app.use(cors());
app.use(express.json());

app.post("/register" , (req, res)=>{
    const{cpf} = req.body;
    const{nome} = req.body;
    const{fone} = req.body;
    const{email} = req.body;
    const{cep} = req.body;
    const{logradouro} = req.body;
    const{numero} = req.body;
    const{bairro} = req.body;
    const{cidade} = req.body;

    let SQL = "INSERT INTO (cpf, nome, email, cep ,logradouro, numero, bairro, cidade) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(SQL, [cpf, nome, fone, email, cep, logradouro, numero, bairro, cidade], (err, result)=>{
        console.log(err)
    });
});

app.get("/perfil", (req, res)=>{
    let SQL = "SELECT * FROM form";
    db.query(SQL, (err, result)=>{
        if(err)console.log(err);
        else res.send(result);
    });
});

app.get("/getCards", (req, res) => {
    let mysql = "SELECT * FROM games";
    db.query(mysql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(3001, () => {
    console.log("rodando servidor");
});