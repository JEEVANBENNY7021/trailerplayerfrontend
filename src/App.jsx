
import './App.css'
import { GiMusicalNotes } from "react-icons/gi";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import Home from './Page/Home';
import WatchingHistory from './Page/WatchingHistory';
import PageNotFound from './Page/PageNotFound';
function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchinghistory' element={<WatchingHistory/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
