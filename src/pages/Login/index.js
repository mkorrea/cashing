import "./login.css";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Header/sections/logo";
import { auth } from '../../firebaseConnections'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Password } from "phosphor-react";


export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const navigate = useNavigate()


   async function handleLogin(event){
      event.preventDefault()
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


   function CompleteCheck() {
      return email && senha
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


            <form className="cadastro" onSubmit={handleLogin}>
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
            
                <div className="btn-cadastro">
                   <button
                       type="submit"
                       className={CompleteCheck() ? 'button on' : 'button'}>
                       Entrar
                   </button>
                </div>
           
            </form>
            <div className="cadastro-link">Não possui conta ?<Link to='/cadastro'> Cadastre-se</Link></div>
                <div className="btn-voltar" onClick={cancel}>Voltar</div>
               
         </main>
      </div>
   );
}

