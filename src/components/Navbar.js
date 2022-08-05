import React from 'react'
import SVLogo from '../assets/images/SVLogo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import { useProductsContext } from '../context/products_context';

const Navbar = () => {
  const { toggleSidebar } = useProductsContext()
  
  return (
    <NavContainer className='nav_border'>

      <div className='menu_logo'>
        <button type='button' className='toggle_btn' onClick={toggleSidebar}>
            <MdMenu/>
        </button>
        
        <Link to='/'>
          <img src={SVLogo} alt='scout vendor' className='svlogo' />
        </Link>
      </div>

      <SearchBar/>

      <button type='button' className='btn btn_login'>Login</button>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  border-radius: var(--borderRadius);
  margin: 0;

  .menu_logo {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 22px;

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

  .btn_login {
    padding: 18px 21px;
    margin: 10px 20px 10px 0;
  }
  @media (max-width: 428px) {
    flex-direction: column;
    padding: 16px;

    .menu_logo {
      margin-top: 10px;
      justify-content: flex-start;

      .toggle_btn {
        font-size: 45px;
        margin-right: 14px;
      }

      .svlogo {
        width: 190px;
      }
    }
    .btn_login {
      display: none;
    }

  }
  // @media (min-width: 992px) {
  //   position: sticky;
  //   top: 0;
  // }
  
`

export default Navbar