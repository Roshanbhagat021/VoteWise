import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrendingPetitionsAndPolls from './components/TrendingPetitionsAndPolls'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  const showHeroAndTrending = location.pathname === "/";

  return (
   <>
     <Header/>
     <Outlet/>
     {showHeroAndTrending && (
       <>
         <HeroSection/>
         <TrendingPetitionsAndPolls/>
       </>
     )}
   </>
  )
}

export default App
