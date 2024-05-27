import { Link } from 'react-router-dom';
import Logo from '../Header/sections/logo';
import './footer.css'

function Footer () {
    return(
        <footer>
            <div className='footer-container'>
               <div className='sobre'>
                  <div>Sobre:</div>
                  <p>Cashing é um site focado em gerenciar seus investimentos e de forma mais visual, possibilitar o usuário a ter uma vida mais feliz financeiramente! </p>
               </div>
               <div className='contato'><div>Conecte-se Conosco</div>
                  <p>Siga-nos nas redes sociais para mais dicas financeiras e novidades sobre o Cashing. </p>
               </div>
               <div className='social'>
                  Social:
                  <div>
                     <Link to='https://www.github.com/mkorrea' target='_blank'><img src={require('../../assets/icons/github.png')} alt='github'/> GitHub </Link>
                     <Link to='https://www.linkedin.com/in/mtcorrea/' target='_blank'><img src={require('../../assets/icons/linkedin.png')} alt='linkedin' /> LinkedIn </Link>
                  </div>
               </div>
            </div>
               <Logo/>
        </footer>
    )
}
export default Footer;