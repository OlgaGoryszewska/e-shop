import react from 'react'
import sublogo_lotos from '../../assets/sublogo_lotos.svg'
import hamburger from '../../assets/hamburger.svg'
import basket from '../../assets/basket.svg'


const Nav = () => {
  return(
    <div className="lg:col-span-3 col-span-5 lg:col-start-2 bg-orange-400">
      <img className="w-36 " src={sublogo_lotos} alt="logo"/>
      <img className="lg:w-9" src={hamburger} alt="menu"/>
      <img className="lg:w-9" src={basket} alt="basket"/>

    </div>

  )
}

export default Nav


