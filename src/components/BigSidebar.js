import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks';
import { useProductsContext } from '../context/products_context';

const BigSidebar = () => {
  const { isSidebarOpen } = useProductsContext()
  return (
    <BigSidebarContainer>
      <div className={
          isSidebarOpen ? 'sidebar-container'
          : 'sidebar-container show-sidebar'
        }>
        <div className="content">           
            <NavLinks/>
        </div>
      </div>     
    </BigSidebarContainer>
  )
}

const BigSidebarContainer = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 225px;
      margin-left: -2250px;
      padding-top: 170px;
      padding-bottom: 150px;
      font-size: var(--titleSmall);
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--clr-text-black);     
      padding: 1rem 0;
      padding-left: 1.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      font-weight: 700;
    }
    .nav-link:hover {
      padding-left: 2rem;
      color: var(--clr-primaryOrange5);
    }
    
    .active {
      color: var(--clr-primaryOrange5);
    }
    
  }
`

export default BigSidebar