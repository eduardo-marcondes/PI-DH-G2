import React from 'react';
import {Helmet} from "react-helmet";

function Login() {

    const [isInputValue, setInputValue] = React.useState('Login');

    const handleLoginChange = () => {
        setInputValue('Login');
    };

    const handleCadastroChange = () => {
        setInputValue('Cadastro');
    };


    return (
        <>
            <Helmet>
                <title>DB | {isInputValue}</title>
            </Helmet>

            <div id="login">
                <main>
                    <div className="titulo-bg">
                        <div className="titulo container">
                            <p className="font-2-l-b cor-5">Sua experiência começa aqui!</p>
                            <h1 className="font-1-xxl cor-0">acesse sua área exclusiva<span className="cor-p1">.</span>
                            </h1>
                        </div>
                    </div>

                    <form className="login container">
                        <div className="login-produto">
                            <h2 className="font-1-xs cor-5">Efetuar login</h2>

                            <input type="radio" name="tipo" id="entrar" value={isInputValue === 'Login'}
                                   onChange={handleLoginChange}/>
                            <label htmlFor="entrar" className="label-login">Login</label>

                            <input type="radio" name="tipo" id="cadastro"
                                   value={isInputValue === 'Cadastro'}
                                   onChange={handleCadastroChange}/>
                            <label htmlFor="cadastro" className="label-login">Cadastro</label>

                            <div className="login-conteudo" id="login-entrar">
                                <div className="login-dados form">
                                    <h2 className="font-1-xs cor-9 col-2">Conecte-se</h2>
                                    <div>
                                        <label htmlFor="user">Usuario</label>
                                        <input type="text" id="user" name="user"/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Senha</label>
                                        <input type="text" id="password" name="password"/>
                                    </div>
                                    <button className="botao col-2">Logar</button>
                                </div>
                            </div>

                            <div className="login-conteudo" id="login-cadastro">
                                <div className="login-dados form">
                                    <h2 className="font-1-xs cor-9 col-2">Cadastre-se</h2>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" name="nome"/>
                                    </div>
                                    <div>
                                        <label htmlFor="sobrenome">Sobrenome</label>
                                        <input type="text" id="sobrenome" name="sobrenome"/>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="cpf">CPF</label>
                                        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00"/>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email"/>
                                    </div>
                                    <h2 className="font-1-xs cor-9 col-2">Endereço</h2>
                                    <div>
                                        <label htmlFor="cep">CEP</label>
                                        <input type="text" id="cep" name="cep"/>
                                    </div>
                                    <div>
                                        <label htmlFor="numero">Número</label>
                                        <input type="text" id="numero" name="numero"/>
                                    </div>
                                    <div>
                                        <label htmlFor="logradouro">Logradouro</label>
                                        <input type="text" id="logradouro" name="logradouro"/>
                                    </div>
                                    <div>
                                        <label htmlFor="bairro">Bairro</label>
                                        <input type="text" id="bairro" name="bairro"/>
                                    </div>
                                    <div>
                                        <label htmlFor="cidade">Cidade</label>
                                        <input type="text" id="cidade" name="cidade"/>
                                    </div>
                                    <div>
                                        <label htmlFor="estado">Estado</label>
                                        <input type="text" id="estado" name="estado"/>
                                    </div>
                                    <button className="botao col-2">Cadastrar</button>
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