import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProtectedRoutes from './components/ProtectedRoutes'
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
     <Footer/>
     
   </>
  )
}

export default App
