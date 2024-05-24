import { Link } from 'react-router-dom';
import Logo from '../Header/sections/logo';
import './footer.css'

function Footer () {
    return(
        <footer>
            <div className='footer-container'>
               <div>Sobre:</div>
               <div>Contato:</div>
               <div className='social'>
                  Social:
                  <Link to='https://www.github.com/mkorrea' target='_blank'><img src={require('../../assets/icons/github.png')} alt='github'/> GitHub </Link>
                  <Link to='https://www.linkedin.com/in/mtcorrea/' target='_blank'><img src={require('../../assets/icons/linkedin.png')} alt='linkedin' /> LinkedIn </Link>
               </div>
            </div>
               <Logo/>
        </footer>
    )
}
export default Footer;