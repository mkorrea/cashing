import React, { useCallback, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./register.css";

function Register() {
   const [info, setInfo] = useState({
      name: "",
      familyname: "",
      email: "",
      password: "",
      passwordCheck: ""
   });
   const user = useMemo( () => info, [info])

   const [erro, setErro] = useState('')
   function Check() {
    if (info.name && info.familyname && info.email && info.password && info.passwordCheck) {
        return 'button active'
    } else {
        return 'button verify'
    }
   }

   function Erro() {
    if (info.name && info.familyname && info.email && info.password && info.passwordCheck) {
        return setErro('')
    } else {
        return setErro('check-error')
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
                        value={info.name}
                        onChange={(e) => setInfo({ ...info, name: e.target.value })}
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
                        value={info.familyname}
                        onChange={(e) => setInfo({ ...info, familyname: e.target.value })}
                        autoComplete="family-name"
                        placeholder=""
                        id="familyname"
                    />
                    <label htmlFor='familyname'>Sobrenome</label>
                </div>
                <div className="input-component">
                    <input
                        type="email"
                        value={info.email}
                        onChange={(e) => setInfo({ ...info, email: e.target.value })}
                        placeholder=""
                        autoComplete='none'
                        id="email"
                    />
                    <label htmlFor='email'>Email</label>
                </div>
                <div className="input-component">
                    <input
                        type="password"
                        value={info.password}
                        onChange={(e) => setInfo({ ...info, password: e.target.value })}
                        placeholder=""
                        autoComplete='none'
                        id="password"
                    />
                    <label htmlFor='password'>Senha</label>
                </div>
                <div className="input-component">
                    <input
                        type="password"
                        value={info.passwordCheck}
                        onChange={(e) => setInfo({ ...info, passwordCheck: e.target.value })}
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
                onClick={() => Erro() }> Cadastrar </Link>
                <div id={erro}></div>

            </section>
                <Link to='/' className="home-button"> Cancelar </Link>
               
         </main>
      </div>
   );
}

export default Register;
