import "./login.css";

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Header/sections/logo";
import { auth } from '../../firebaseConnections'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Password } from "@mui/icons-material";


export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const navigate = useNavigate()


   


    async function handleRegister() {
       await createUserWithEmailAndPassword(auth, email, senha)
       .then(()=>{
          console.log('Usuario cadastrado')
          setEmail('')
          setSenha('')
       })
       .catch((error)=>{
          console.log(`Erro as cadastrar: ${error}`)
       })
       //   if (CompleteCheck() && PasswordCheck()) {
       //       return "/";
       //   }
     };


   async function handleLogin(){
      await signInWithEmailAndPassword(auth, email, senha)
      .then(()=>{
         console.log('Usuário logado!')
         setEmail('')
         setSenha('')
         navigate('/')
      })
      .catch(()=>{
         console.log('Erro ao fazer login, verifique as informações')
      })
   }  


    function cancel() {
      setEmail('')
      setSenha('')

      navigate('/')
    }

   return (
      <div className="register-background">
         <main className="main-content">
            <section className="title-section">
                <Logo />
               <h1 className="title"> Login </h1>
            </section>

            <section className="input-section">

                <div className="input-component">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        autoComplete='none'
                        id="email"
                    />
                    <label htmlFor='email'>Email</label>
                </div>
                <div className="input-component">
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder=""
                        autoComplete='none'
                        id="password"
                    />
                    <label htmlFor='password'>Senha</label>
                </div>
            </section>

            <section className="button-section">
                <Link 
                    to='#' 
                    className={email && senha.length >= 6 ? 'button on' : 'button'} 
                    onClick={handleLogin}> Entrar
                </Link>

            </section>
                <div className="home-button" onClick={cancel}>Voltar</div>
               
         </main>
      </div>
   );
}

