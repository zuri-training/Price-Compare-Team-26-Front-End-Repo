import React from 'react'
import styled from 'styled-components'


const ProductCard = ({category, name, brand, url}) => {
  return (
    <ProductCardWrapper>
        <h3>{name}</h3>
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
        <button className='btn'>Detail</button>
        
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  color: var(--clr-text-black);
  line-height: var(--lineHeight);
  h3 {
    font-weight: 600;
    font-size: var(--titleMedium);
  }

  p {
    font-size: var(--bodyLarge);
  }

  @media screen and (max-width) {
    h3 {
      font-size: var(--bodyMedium);
    }
  }

`

export default ProductCard