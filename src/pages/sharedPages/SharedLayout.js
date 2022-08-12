import React from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSidebar } from '../../components'
import styled from 'styled-components'


const SharedLayout = () => {
  return (
    <SharedContainer>
      <main className="">
        <SmallSidebar />
        <div>
          <div className=''>
            <Outlet/>
          </div>
        </div>
      </main>
      
    </SharedContainer>
  )
}

const SharedContainer = styled.section`
  
`

export default SharedLayout