import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SVLogo from '../assets/svg/SVLogoBlackOrange.svg'
import { MdMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import { useProductsContext } from '../context/products_context';

const Navbar = () => {
  const { toggleSidebar } = useProductsContext()
  
  return (
    <NavContainer className='container'>
      <div>
        <MdMenu onClick={toggleSidebar} className='mobile_menu'/>  
        <Link to='/'>
          <img src={SVLogo} alt='scout vendor'/>
        </Link>
      </div>
      <div className='nav_text mobile'>
        <Link to='/'>Home</Link>
        <Link to='/'>About SV</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>FAQ</Link>
      </div>
      <div>
        <button type='button' className='btn btn_signup'>Sign Up</button>
        <button type='button' className='btn btn_login'>Login</button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 20px;

  .mobile_menu {
    display: none;
  }

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 100px;

    a {
      color: var(--clr-primaryOrange4);
      margin-right: 36px;
      font-size: var(--titleSmall);
      font-weight: 600;
    }
  }

  .btn_signup {
    padding: 14px 45px;
    margin-right: 32px;
  }

  .btn_login {
    padding: 14px 45px;
    background: var(--clr-secondaryOrange4);
    color: var(--clr-primaryOrange4);
  }

  .menu_logo {
    .toggle_btn {
      background: transparent;
      border-color: transparent;
      cursor: pointer;
      color: var(--clr-primaryOrange5);
      display: flex;
      align-items: center;      
      font-size: 44px;
      margin-right: 28px;
    }
    
  }

  
  @media (max-width: 428px) {
    padding: 22px 14px;

    .mobile_menu {
      color: var(--clr-primaryOrange5);
      display: inline-flex;
      margin-right: 15px;
      font-size: var(--titleSmall);
    }

    .mobile {
      display: none;
    }
    a {
      img {
        width: 120px;
      }
    }

    .btn_signup {
      margin-right: 16px;
    }

    .btn_signup, .btn_login {
      padding: 4px 10px;
      font-size: var(--bodyMedium);
      font-weight: 400;
    }

  }
  
`

export default Navbar