import './App.css'
import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import Subjects from './components/subjects/Subjects';
import Tutors from './components/Tutors/Tutors';
import Different from './components/Different/Different';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Espanish from './components/Products/Spanish/Spanish';
import English from './components/Products/English/English';
import Mathematics from './components/Products/Mathematics/Mathematics';
import Chemistry from './components/Products/Chemistry/Chemistry';
import ConfirmBuy from './components/ConfirmBuy/ConfirmBuy';
import Context from './Context/Context';



function App() {
  return (

      <Context>
      <Router>
        <Switch>

        <Route path='/español'>
        <Header/>
         <Espanish/>
        <Footer/>
        </Route>

        <Route path='/ingles'>
        <Header/>
         <English/>
        <Footer/>
        </Route>
       
        <Route path='/matematicas'>
        <Header/>
         <Mathematics/>
        <Footer/>
        </Route>
       
        <Route path='/quimica'>
        <Header/>
        <Chemistry/>
        <Footer/>
        </Route>

        <Route path='/shoppingC'>
        <Header/>
         <ConfirmBuy/>
        <Footer/>
        </Route>

        <Route path='/'>
          <Header/>
          <Principal/>
          <Subjects/>
          <Tutors/>
          <Different/>
          <Footer/>
        </Route>
        </Switch>
      </Router>
      </Context>
  );
}

export default App;
