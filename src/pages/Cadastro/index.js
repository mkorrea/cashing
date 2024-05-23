import "./cadastro.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Header/sections/logo";
import { auth, db } from '../../firebaseConnections'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from "firebase/firestore";


function Register() {
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ senhaCheck, setSenhaCheck ] = useState('')
    const navigate = useNavigate()


   


    async function handleRegister(event) {
      event.preventDefault()
       try {
          const userInfo = await createUserWithEmailAndPassword(auth, email, senha)
          const user = userInfo.user
          const uid = user.uid
          console.log('Usuario cadastrado')
          setEmail('')
          setSenha('')

          await setDoc(doc(db, 'user', uid ), {
            nome: nome,
          })
          
          navigate('/', {replace: true})
       } catch (error) {
          console.log(`Erro as cadastrar: ${error}`)
       }

     };






    function CompleteCheck() {
        return nome && email && senha;
    }

   function PasswordCheck() {
      if( senhaCheck.length >= senha.length ) {
         
         if( senha !== senhaCheck ) {
            return 'senhas diferentes'
         } else {
            return 'senhas ok'
         }
      }
   }



   function cancel() {
      setNome('');
      setEmail('');
      setSenha('');
      setSenhaCheck('');
    
      navigate('/')
    }

   return (
      <div className="register-background">
         <main className="main-content">
            <section className="title-section">
                <Logo />
               <h1 className="title"> Cadastre-se </h1>
            </section>

            
                <form className="cadastro" onSubmit={handleRegister}>
                   <div className="input-component">
                       <input
                           type="text"
                           value={nome}
                           onChange={(e) => setNome(e.target.value)}
                           autoComplete="firstName"
                           placeholder=""
                           autoFocus
                           id="nome"
                       />
                       <label htmlFor='nome'>Nome</label>
                   </div>
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
                   <div className="input-component">
                       <input
                           type="password"
                           value={senhaCheck}
                           onChange={(e) => setSenhaCheck(e.target.value)}
                           placeholder=""
                   
                           autoComplete='none'
                           id="confirmPassword"
                           className={ !PasswordCheck()  ? 'missmatch-password' : '' }
                           />
                       <label htmlFor='confirmPassword'>Confirme a senha</label>
                   </div>
                

            
                <div className="btn-cadastro">
                   <button
                       type="submit"
                       className={CompleteCheck() && PasswordCheck() === 'senhas ok' ? 'button on' : 'button'}>
                       Cadastrar
                   </button>
                  <div className={ CompleteCheck() && PasswordCheck() === 'senhas diferentes' ? "warning" : 'off-warning'}> As senhas não coincidem </div> 
                </div>
           
            </form>
                {/* <Link to='/' className="home-button"> Cancelar </Link> */}
                <div className="home-button" onClick={cancel}>Cancelar</div>
               
         </main>
      </div>
   );
}

export default Register;
