import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'



const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
            <Link to="/">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header__logo"
                    alt="Logo" />
      </Link>
      <div className='header__search'>
      <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon'/>
  
      </div>

      <div className='header__nav'>

        <Link to='/login' className='header__link'>
          <div className='header__option'>
          <span className='header__optionLineOne'>Hello Jack</span>
            <span className='header__optionLineTwo'>Sign In</span>
            </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
          <span className='header__optionLineOne'>Return</span>
            <span className='header__optionLineTwo'>& Order</span>
            </div>
      </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
          <span className='header__optionLineOne'>Your </span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__basketCount header__optionLineTwo'>{basket.length}</span>
            
        </div>
        </Link>


      </div>
          
          


    </nav>
  )
}

export default Header
