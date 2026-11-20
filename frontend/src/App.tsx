import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import ThemeManager from "./components/theme/ThemeManager"
import LandingPage from "./pages/LandingPage"

const App=()=>{
  return(
    <>
    <ThemeManager/>

    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
    </>
  )
}

export default App