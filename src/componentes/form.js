import React, {useState, useEffect, useRef} from "react";
import './form.css';
import Axios from "axios";
import Swal from 'sweetalert2';
import { Switch,  Route, Link, Routes, Router, BrowserRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function Form(){

   
        const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmailMessage', 'template_k1khrxt', form.current, 'gMtD2pLDjSzHo-AR-')
          .then((result) => {
              alert("Mensagem enviada com sucesso");
          }, (error) => {
              alert(error.message);
          });
          e.target.reset();
      };


    

    const handleRegisterGame = () => {
        alert("Cadastro efetuado com sucesso :)");
        Axios.post("http://localhost:3000/register", {
            cpf:values.cpf,
            nome:values.nome,
            fone:values.fone,
            email:values.email,
            cep:values.cep,
            cidade:values.cidade,
  
        }).then(()=>{
            Axios.post("https://localhos:3000/search",{
                cpf:values.cpf,
                nome:values.nome,
                fone:values.fone,
                email:values.email,
                cep:values.cep,
                cidade:values.cidade,
            }).then((response)=>{
                setListCard([
                    ...listCard,
                    {
                        id:response.data[0].id,
                        cpf:values.cpf,
                        nome:values.nome,
                        fone:values.fone,
                        email:values.email,
                        cep:values.cep,
                        cidade:values.cidade,                      
                    }
                ]);
            });
        });
    }

    const [listCard, setListCard] = useState([]);
    console.log(listCard);


    const [values, setValues] = useState ();
    console.log(values);
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,

        }));
    };

    const[listForm, setListForm] = useState()
    ;

    const handleClickbutton = () => {
        Axios.post("http://localhost:3000/register",
        {
            cpf:values.cpf,
            nome:values.nome,
            fone:values.fone,
            email:values.email,
            cep:values.cep,
            cidade:values.cidade,

        }).then((response)=>{
            console.log(response)
        });
    };

    useEffect(()=>{
        Axios.get("http://localhost:3000/perfil").then((response)=>{
            setListForm(response.data);

        });
    },[])


    return(
        <>
        <div className="principal">
            <div className="formulario">
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Formulario</h1>
                    <p><label for="cpf" >CPF:</label></p>
                    <input name="cpf" type="text" onChange={handleChangeValues}/>
                    <p><label for="nome">Nome Completo:</label></p>
                    <input name="nome" type="name" onChange={handleChangeValues}/>
                    <p><label>Fone:</label></p>
                    <input name="fone" type="tel" onChange={handleChangeValues}/>
                    <p><label>E-mail:</label></p>
                    <input name="email" type="text" onChange={handleChangeValues}/>
                    <p><label for="cep">Cep:</label></p>
                    <input name="cep" type="text" onChange={handleChangeValues} />
                    <p><label for="logradouro">Logradouro:</label></p>
                    <input name="logradouro" type="text" onChange={handleChangeValues}/>
                    <p><label for="numero">Numero:</label></p>
                    <input name="numero" type="text" onChange={handleChangeValues}/>
                    <p><label for="bairro">Bairro:</label></p>
                    <input name="bairro" type="text" onChange={handleChangeValues}/>
                    <p><label for="cidade">Cidade:</label></p>
                    <input name="cidade" type="text" onChange={handleChangeValues}/>
                    <p><label for="estado">Estado:</label></p>
                        <form>
                            <select>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </select>
                        </form>

                        <div className="button-form">
                        <Link to="/usuario"> 
                         <p><input  type="submit" value="Solicitar Adesao"  onClick={handleRegisterGame}  ></input></p>
                        </Link> 
            </div>    
                </form>
            </div>

           

        </div>
        </>
    );
}

export default Form;