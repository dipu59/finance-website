import './App.css'
import DebitCard from './Components/DebitCard'
import FAQ from './Components/FAQ'
import FindCard from './Components/FindCard'
import Footer from './Components/Footer'
import HeroArea from './Components/HeroArea'
import Navbars from './Components/Navbar'
import Review from './Components/Review'
import WhatDoWeOffer from './Components/WhatDoWeOffer'
import WinsVision from './Components/WinsVision'

const App = () => {
  return (
    <>
      <Navbars/>
      <div className='px-3 md:px-16 lg:px-24 w-full max-w-[1440px] space-y-10 md:space-y-40 overflow-x-hidden pb-40'>
        <HeroArea/>
        <WinsVision/>
        <WhatDoWeOffer/>
        <DebitCard/>
        <FindCard/>
        <Review/>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default App