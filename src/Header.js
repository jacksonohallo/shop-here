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
          


    </nav>
  )
}

export default Header
