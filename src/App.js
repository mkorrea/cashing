import './global.css'
import RoutesApp from './routes';
import { ThemeProvider } from './contexts/ThemeContexts';

function App() {
  return (
      <ThemeProvider>
         <div>
           <RoutesApp/>
         </div>
      </ThemeProvider>
  );
}

export default App;
