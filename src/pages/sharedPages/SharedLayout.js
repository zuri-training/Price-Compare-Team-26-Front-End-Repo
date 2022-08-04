import React from 'react'
import { Outlet } from 'react-router-dom'
import { BigSidebar, SmallSidebar,Navbar} from '../../components'
import styled from 'styled-components'


const SharedLayout = () => {
  return (
    <SharedContainer>
      <main className="shared_layout">
        <SmallSidebar />
        <BigSidebar />

        <div>
          <Navbar/>
          <div className='shared_pages'>
            <Outlet/>
          </div>
        </div>
      </main>
      
    </SharedContainer>
  )
}

const SharedContainer = styled.section`
  .shared_layout {
    display: grid;
    grid-template-columns: 1fr;
    
  }

  .shared_pages {
    margin: 0 auto;
    padding: 0 auto;
  }
  
  @media (min-width: 992px) {
    .shared_layout {
      grid-template-columns: auto 1fr;
    }
  }
`

export default SharedLayout