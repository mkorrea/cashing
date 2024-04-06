import React, { useCallback, useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import Header from "../../components/Header";
import "./register.css";

function Register(input) {
    const { user, updateUser } = useContext(UserContext);
        
    function Check() {
        if (user.name && user.familyname && user.email && user.password && user.passwordCheck) {
            return 'button active'
        } else {
            return 'button'
        }
    }
    
    const [verify, setVerify] = useState('')
    
    function handleRegister() {
        if (Check() === 'button active') {
            updateUser(user)
            return setVerify('')
        } else {
            return setVerify('verify')
        }
    }

   return (
      <div>
         <Header />
         <main className="main-content">
            <section className="title-section">
               <h1 className="title"> Cadastre-se </h1>
            </section>

            <section className="input-section">
                <div className="input-component">
                    <input
                        type="text"
                        value={user.name}
                        onChange={(e) => updateUser({ ...user, name: e.target.value })}
                        autoComplete="name"
                        placeholder=""
                        autoFocus
                        id="nome"
                    />
                    <label htmlFor='nome'>Nome</label>
                </div>
                <div className="input-component">
                    <input
                        type="text"
                        value={user.familyname}
                        onChange={(e) => updateUser({ ...user, familyname: e.target.value })}
                        autoComplete="family-name"
                        placeholder=""
                        id="familyname"
                    />
                    <label htmlFor='familyname'>Sobrenome</label>
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
                        value={user.passwordCheck}
                        onChange={(e) => updateUser({ ...user, passwordCheck: e.target.value })}
                        placeholder=""
                        autoComplete='none'
                        id="passwordCheck"
                    />
                    <label htmlFor='passwordCheck'>Confirme a senha</label>
                </div>
            </section>

            <section className="button-section">
                <Link to={Check() === 'button active' ? '/' : ''} 
                className={Check()} 
                onClick={() => handleRegister() }> Cadastrar </Link>
                <div id={verify}></div>
            </section>
                <Link to='/' className="home-button"> Cancelar </Link>
               
         </main>
      </div>
   );
}

export default Register;
