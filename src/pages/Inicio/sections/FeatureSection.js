import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function FeatureSection() {
    const [dados] = useState({
        nome: 'Cashing',
     });
    
    return (
        <section className="feature-section">
            <article className="feature-section-title">
                <h1>Funcionalidades Principais</h1>
                <p>Nossa plataforma oferece diversas ferramentas para facilitar seu controle financeiro. </p>
                <p>Aqui estão algumas das principais funcionalidades que você encontrará no <strong>Cashing</strong>:</p>
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
                    <Link to="/manutencao">
                    <img src={require("../../../assets/icons/calculator.png")} alt='calculator'/>
                    <h2> Calculadora </h2>
                    <p>Calcule seus objetivos financeiros!</p>
                    </Link>
                </div>
                <div className='feature-button'>
                    <Link to="/manutencao">
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