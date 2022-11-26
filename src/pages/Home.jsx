import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Info from '../components/Info'

function Home() {
  return (
    <div className='home'>
        <div className="home__card">
            <Info />
            
            <About title="About" content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in fugiat hic."/>

            <About title="Interest" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque!"/>

            <Footer />
        </div>
    </div>
  )
}

export default Home
