import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { Link } from 'react-router-dom'



import './Header.css'



const Header = () => {
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

      <div classsName='header__nav'> 
        <Link to='/login'className='header_link'>
          <span>Hello Jack</span>
          <span>Sign In</span>
        </Link>

     <Link to='/'className='header_link'>
          <span>Return</span>
          <span>& Order</span>
      </Link>
         <Link to='/'className='header_link'>
          <span>Your </span>
          <span>Prime</span>
        </Link>
      </div>
          


    </nav>
  )
}

export default Header
