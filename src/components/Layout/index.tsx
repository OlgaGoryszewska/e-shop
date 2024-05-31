import react from 'react'
import Nav from '../Nav'
import Body from '../Body'
import Footer from "../Footer"


const Layout = () => {
  return(
    <div className=" grid grid-cols-3 md:grid-cols-5 min-h-screen">
        
    <Nav/>
    <Body/>
    <Footer/>

    </div>


  )
}

export default Layout


