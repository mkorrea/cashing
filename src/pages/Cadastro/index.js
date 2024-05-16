import "./cadastro.css";

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import Logo from "../../components/Header/sections/logo";
import { auth, db } from '../../firebaseConnections'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, collection, doc } from "firebase/firestore";


function Register() {
   //  const { user, updateUser } = useContext(UserContext);
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const navigate = useNavigate()


   


    async function handleRegister() {
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
          
       } catch (error) {
          console.log(`Erro as cadastrar: ${error}`)
       }

     };






    function CompleteCheck() {
   //      return user.name && user.email && user.password && user.confirmPassword;
    }

    function PasswordCheck() {
   //      return user.password === user.confirmPassword;
    }



    function cancel() {
   //    user.name = ''
   //    setEmail('')
   //    setSenha('')
   //    user.confirmPassword = ''
   //    updateUser('')
   //    navigate('/')
    }

   return (
      <div className="register-background">
         <main className="main-content">
            <section className="title-section">
                <Logo />
               <h1 className="title"> Cadastre-se </h1>
            </section>

            <section className="input-section">
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
                        // value={user.confirmPassword}
                        // onChange={(e) => updateUser({ ...user, confirmPassword: e.target.value })}
                        placeholder=""
                        
                        autoComplete='none'
                        id="confirmPassword"
                        // className={ !PasswordCheck()  ? 'missmatch-password' : '' }
                        />
                    <label htmlFor='confirmPassword'>Confirme a senha</label>
                </div>
            </section>

            <section className="button-section">
                <Link 
                    to='/' 
                    className={CompleteCheck() ? 'button on' : 'button'} 
                    onClick={handleRegister}> Cadastrar
                </Link>
                <div className={ CompleteCheck() && !PasswordCheck() ? "warning" : 'off-warning'}> As senhas não coincidem </div> 
            </section>
            
                {/* <Link to='/' className="home-button"> Cancelar </Link> */}
                <div className="home-button" onClick={cancel}>Cancelar</div>
               
         </main>
      </div>
   );
}

export default Register;
