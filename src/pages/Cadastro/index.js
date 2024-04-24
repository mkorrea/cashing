import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import Logo from "../../components/Header/sections/logo";

import "./cadastro.css";

function Register(input) {
    const { user, updateUser } = useContext(UserContext);
    const navigate = useNavigate()

    function CompleteCheck() {
        return user.firstName && user.lastName && user.email && user.password && user.confirmPassword;
    }

    function PasswordCheck() {
        return user.password === user.confirmPassword;
    }

    const handleRegisterClick = () => {
        if (CompleteCheck() && PasswordCheck()) {
            return "/";
        }
    };


    function cancel() {
      user.firstName = ''
      user.lastName = ''
      user.email = ''
      user.password = ''
      user.confirmPassword = ''
      updateUser('')
      navigate('/')
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
                        value={user.firstName}
                        onChange={(e) => updateUser({ ...user, firstName: e.target.value })}
                        autoComplete="firstName"
                        placeholder=""
                        autoFocus
                        id="nome"
                    />
                    <label htmlFor='nome'>Nome</label>
                </div>
                <div className="input-component">
                    <input
                        type="text"
                        value={user.lastName}
                        onChange={(e) => updateUser({ ...user, lastName: e.target.value })}
                        autoComplete="family-name"
                        placeholder=""
                        id="lastName"
                    />
                    <label htmlFor='lastName'>Sobrenome</label>
                </div>
                <div className="input-component">
                    <input
                        type="email"
                        value={input.length > 1 ? updateUser(input) : user.email}
                        onChange={(e) => updateUser({ ...user, email: e.target.value })}
                        placeholder=""
                        autoComplete='none'
                        id="email"
                    />
                    <label htmlFor='email'>Email</label>
                </div>
                <div className="input-component">
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => updateUser({ ...user, password: e.target.value })}
                        placeholder=""
                        autoComplete='none'
                        id="password"
                    />
                    <label htmlFor='password'>Senha</label>
                </div>
                <div className="input-component">
                    <input
                        type="password"
                        value={user.confirmPassword}
                        onChange={(e) => updateUser({ ...user, confirmPassword: e.target.value })}
                        placeholder=""
                        
                        autoComplete='none'
                        id="confirmPassword"
                        className={ !PasswordCheck()  ? 'missmatch-password' : '' }/>
                    <label htmlFor='confirmPassword'>Confirme a senha</label>
                </div>
            </section>

            <section className="button-section">
                <Link 
                    to={handleRegisterClick()} 
                    className={CompleteCheck() ? 'button on' : 'button'} 
                    onClick={handleRegisterClick}> Cadastrar
                </Link>
                {/* <div className={ !CompleteCheck() ? "warning" : 'off-warning' }> Por favor, preencha todos os campos </div> */}
                <div className={ CompleteCheck() && !PasswordCheck() ? "warning" : 'off-warning'}> As senhas não coincidem </div> 
            </section>
            
                {/* <Link to='/' className="home-button"> Cancelar </Link> */}
                <div className="home-button" onClick={cancel}>Cancelar</div>
               
         </main>
      </div>
   );
}

export default Register;