
function IntroSection() {
   
   return (
      <section className="intro-section">
         <article className="login-container">
            <div className="welcome-text">
               <h1>Sistema para controle financeiro</h1>
               <p>
                  Gerenciar suas finanças pode ser desafiador, mas estamos aqui
                  para tornar isso mais simples e eficiente para você.
               </p>
            </div>
         </article> 

         <article className="welcome-container">
            <img className="pc-img" src={require('../../../assets/images/pc.png')} alt="pc"/>
         </article>

         <div className="intro-background-container">
            <div className="intro-background"></div>
            {/* imagem */}
         </div>
      </section>
   );
}

export default IntroSection;
