import React from "react";
import "./Card.css";

function Card(){

  return (
    <>
    <div className="principal-usuario">
      <div className="card-container">

        <details>
            <summary id="title">Seus Dados</summary>
            <h1>CPF:</h1>
            <h1>Nome Completo:</h1>
            <h1>Fone:</h1>
            <h1>E-mail:</h1>
            <h1>CEP:</h1>
            <h1>Logradouro:</h1>
            <h1>Numero:</h1>
            <h1>Bairro:</h1>
            <h1>Cidade:</h1>
            <h1>Estado:</h1>
        </details>

        
      </div>
    </div>  
    </>
  );
}

export default Card;