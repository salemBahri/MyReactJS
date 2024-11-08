import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <>
    <Router>
    <Header title="REACTjs"/>
    <Main />
    <Footer />
    </Router>
  
  </>
  );
}

export default App;
