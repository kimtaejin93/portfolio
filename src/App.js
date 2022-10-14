import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import SelfIntroduce from './components/SelfIntroduce';
import Skill from './components/Skill';
import Project from './components/Project';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      
      <Navigation/>
      <Intro/>
      <SelfIntroduce/>
      <Skill/>
      <Project/>
      <Footer/>

    </div>
  );
}

export default App;
