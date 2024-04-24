import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function FeatureSection() {
    const [dados] = useState({
        nome: 'Cashing',
     });
    
    return (
        <section className="feature-section">
            <article className="feature-section-title">
                <h1>O que o {dados.nome} pode fazer ?</h1>
                <p>Gerenciando financeiro e realizando sonhos!</p>
            </article>

            <article className='buttons-wrapper'>
                <div className='feature-button'>
                    <Link to="/planilhas">
                    <img src={require("../../../assets/icons/finances.png")} alt='coin'/>
                    <h2> Planilhas </h2>
                    <p>Mantenha o controle dos seus rendimentos!</p>
                    </Link>
                </div>
                <div className='feature-button'>
                    <Link to="/planilhas">
                    <img src={require("../../../assets/icons/calculator.png")} alt='calculator'/>
                    <h2> Calculadora </h2>
                    <p>Calcule seus objetivos financeiros!</p>
                    </Link>
                </div>
                <div className='feature-button'>
                    <Link to="/finances">
                    <img src={require("../../../assets/icons/gear.png")} alt='settings'/>
                    <h2> Configurações </h2>
                    <p>Ajuste e personalize sua experiência!</p>
                    </Link>
                </div>
            </article>
        </section>

    )
}

export default FeatureSection;