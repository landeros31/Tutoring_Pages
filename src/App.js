import './App.css';
import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import Subjects from './components/subjects/Subjects';
import Tutors from './components/Tutors/Tutors';

function App() {
  return (
    <div className="App">
      <Header/>
      <Principal/>
      <Subjects/>
      <Tutors/>
    </div>
  );
}

export default App;
