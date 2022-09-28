import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Home from './Container/Home/Home';
import PortfolioContainer from './Container/PortfolioContainer';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ToastContainer />
      <PortfolioContainer />

    </div>
  );
}

export default App;
