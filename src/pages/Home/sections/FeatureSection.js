import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function FeatureSection() {
    const [dados] = useState({
        nome: 'Cashing',
     });
    
    return (
        <section className="feature-section">
            <article className="feature-section-title">
                <h2>O que o {dados.nome} pode fazer ?</h2>
                <p>Gerenciando financeiro e realizando sonhos!</p>
            </article>

            <article className='buttons-wrapper'>
                <div className='feature-button'>
                    <Link to="/finances">
                    <img src={require("../../../images/finances.png")} alt='coin'/>
                    <h2>Finances</h2>
                    <p>Mantenha o controle dos seus rendimentos!</p>
                    </Link>
                </div>
                <div className='feature-button'>
                    <Link to="/finances">
                    <img src={require("../../../images/calculator.png")} alt='calculator'/>
                    <h2>Calculator</h2>
                    <p>Calcule seus objetivos financeiros!</p>
                    </Link>
                </div>
                <div className='feature-button'>
                    <Link to="/finances">
                    <img src={require("../../../images/gear.png")} alt='settings'/>
                    <h2>Settings</h2>
                    <p>Ajuste e personalize sua experiência!</p>
                    </Link>
                </div>
            </article>
        </section>

    )
}

export default FeatureSection;