import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import logo from '../images/amazon_logo.png'
import '../css/Header.css'


function Header() {
  return (
    <nav className="header">
        <Link
          to="/"
        >
          <img 
              className='header__logo'
              src={logo}
              alt=''
          />
        </Link>
        <div 
          className='header__search'
        >
            <input
              type="text"
              className='header__searchInput'
            />
            <SearchIcon
              className="header__searchIcons"
            />
        </div>
        <div 
          className='header__nav'
        >
            <Link 
              to='/login'
              className='header__link'
            >
                <div className='header__option'>
                  <span className='header__optionOne'>Hello Mothe***er..</span>
                  <span className='header__optionTwo'>login</span>
                </div>
            </Link>
            <Link 
              to='/login'
              className='header__link'
            >
                <div className='header__option'>
                  <span className='header__optionOne'>Return</span>
                  <span className='header__optionTwo'>& orders</span>
                </div>
            </Link>
            <Link 
              to='/login'
              className='header__link'
            >
                <div className='header__option'>
                  <span className='header__optionOne'>your </span>
                  <span className='header__optionTwo'>prime</span>
                </div>
            </Link>
            <Link 
              to="/checkout" 
              className='header__link'
            >
              <div className='header__optionBasket'>
                <ShoppingCartIcon/>
                <span className='header__optionTwo header__basketCount'>0</span>
              </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header

// const Nav=styled.div`

// `