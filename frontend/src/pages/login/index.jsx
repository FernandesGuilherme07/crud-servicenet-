import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Api from '../../api'

import { AreaLogin } from './styled'

import { BtnDefaultIcons, BtnDefault } from '../../components/styled'

import GTranslateSharpIcon from '@material-ui/icons/GTranslateSharp'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googlelogar();

        if(result){
            onReceiveGoogle(result.user)
        }else{
            alert('Error')
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/registrar">

                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/">
                                <ArrowBackIosSharpIcon/>
                            </Link>
                            Crie sua conta
                            </h1>
                        <p>Crie sua conta é grátis!</p>

                        <form action="">
               
                             <div className="form--input">
                                 <label>Nome</label>
                                 <input type="text" />
                            </div>
                            
                            <div className="form--input">
                                 <label>E-mail</label>
                                 <input type="email" />
                            </div>

                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Comece agora!</BtnDefault>

                            <div className="footerLogin">
                                Já tem uma conta?
                                <Link to="/">Faça login</Link>    
                    `
                            </div>

                        </form>

                    </AreaLogin>

                </Route>
                <Route exact path="*">

                    <AreaLogin>
                     <h1>Faça login em sua conta</h1>

                        <BtnDefaultIcons onClick={actionLoginGoogle}>
                            <GTranslateSharpIcon/> 
                                <div className="center">Faça login com o Google</div>  
                        </BtnDefaultIcons>

                        <p>OU</p>

                        <form action="">
               
                            <div className="form--input">
                                 <label>E-mail</label>
                                 <input type="email" />
                            </div>

                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Entrar</BtnDefault>

                            <div className="footerLogin">
                                Não tem conta?
                                <Link to="/registrar">Registre-se</Link>    
                    `
                            </div>

                        </form>
                    </AreaLogin>
                </Route>
            </Switch>

        
        </BrowserRouter>
    )
}