import './style.css'
import RoutesApp from './routes';
import { UserProvider } from './pages/Register/UserContext';

function App() {
  return (
    <UserProvider>
      <div>
        <RoutesApp/>
      </div>
    </UserProvider>
  );
}

export default App;
