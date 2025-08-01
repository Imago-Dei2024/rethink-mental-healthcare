
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/layout/Navbar' 
import './App.css' 

// Import all of my Pages 
import AboutPage from './pages/about/AboutPage'; 
import IntPsychPage from './pages/services/integrative-psychiatry/IntPsychPage'; 
import KetaminePage from './pages/services/ketamine/KetaminePage'; 
import AddictionPage from './pages/services/addiction/AddictionPage';
import QBTestingPage from './pages/services/qb-testing/QBTestingPage'; 
import FirstResponderPage from './pages/services/first-responder/FirstResponderPage'; 
import SpravatoPage from './pages/services/spravato/SpravatoPage'; 
import GeneticTestingPage from './pages/services/genetic-testing/GeneticTestingPage'; 
import NutritionPage from './pages/services/nutrition/NutritionPage'; 
import ThorneFullscriptPage from './pages/wellness/ThorneFullscriptPage'; 
import NadPage from './pages/wellness/NadPage'; 
import HomePage from './pages/HomePage'; 


function App() {

  return (
    <Router> 
      <div className='App'> 
        <Navbar />  
        {/* Other Components & Pages Go Here */} 

        <main> 
          <Routes> 
            <Route path="/" element = {<HomePage />} /> 

            <Route path="/AboutPage" element = {<AboutPage />} /> 
            <Route path="/IntPsychPage" element = {<IntPsychPage />} /> 
            <Route path="/KetaminePage" element = {<KetaminePage />} /> 
            <Route path="/AddictionPage" element = {<AddictionPage />} /> 
            <Route path="/QBTestingPage" element = {<QBTestingPage />} /> 
            <Route path="/FirstResponderPage" element = {<FirstResponderPage />} /> 
            <Route path="/SpravatoPage" element = {<SpravatoPage />} /> 
            <Route path="/GeneticTestingPage" element = {<GeneticTestingPage />} /> 
            <Route path="/NutritionPage" element = {<NutritionPage />} /> 
            <Route path="/ThorneFullScriptPage" element = {<ThorneFullscriptPage />} /> 
            <Route path="/NadPage" element = {<NadPage />} /> 
          </Routes>
        </main>
      </div> 
    </Router>
  )
}

export default App
