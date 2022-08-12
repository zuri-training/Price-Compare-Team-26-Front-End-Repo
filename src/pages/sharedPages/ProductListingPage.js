import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../../components'

const ProductListingPage = () => {
  
  return <main>
    <PageHero title='Products' />
    <Wrapper className='page'>
      <div className='section-center products'>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 3rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductListingPage
