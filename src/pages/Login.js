import React from 'react';
import {Helmet} from "react-helmet";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import Input from "./components/Input";
//import useLocalStorage from "./../hooks/useLocalStorage";
import useForm from "./../hooks/useForm";
import {NavLink} from "react-router-dom";

const Login = () => {

    const title = {span: "sua experiência começa aqui!", title: "acesse sua área exclusiva"}

    //localStorage:
    //const [userLogin, setUserLogin] = useLocalStorage('nome', '');

    //form:
    const email = useForm('email');
    const password = useForm('password');

    //validação
    function handleSubmit(event) {
        event.preventDefault();

        if (email.validate() && password.validate()) {
            console.log("Enviar")
        } else {
            console.log("Não enviar")
        }
    }

    return (
        <>
            <Helmet>
                <title>DB | Login </title>
            </Helmet>

            <div id="login">
                <main>
                    <TitleBgBlack {...title}/>
                    <form className="login container" onSubmit={handleSubmit}>
                        <div className="login-produto">

                            <div className="login-conteudo" id="login-entrar">
                                <div className="login-dados form">
                                    <h2 className="font-1-xs cor-9 col-2">Conecte-se</h2>
                                    <div>
                                        <Input label="Email" type="email" id="email"
                                               placeholder="exemplo@.com" {...email}/>
                                    </div>
                                    <div>
                                        <Input label="Password" type="password" id="password"
                                               {...password}/>
                                    </div>
                                    <button className="botao">Iniciar Sessão</button>
                                    <NavLink to="/cadastro" className="col-2">Cadastro</NavLink>
                                </div>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login;