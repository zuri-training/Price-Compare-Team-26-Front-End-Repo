import React from 'react'
import { MdOutlineOpenInNew } from 'react-icons/md'
import styled from 'styled-components'



const ProductCard = ({ image_url, product, category, brand, store, price, available, product_url }) => {
  return (
    <ProductCardWrapper>
      <div className='product'>
        <img src={image_url} alt={product} />
        <section className='product_details'>
          <h3>{product}</h3>
          <p className='info'>Category: {category}</p>
          <p className='info'>Brand: {brand}</p>
          <p className='info'>Store: {store}</p>
          <p className='price'>&#8358; {`${price}`}</p>
          {available ? <p>In stock</p> : <p>Out of stock</p>}
          <a href={product_url} target="_blank" rel="noopener noreferrer">
          <button className='btn store_btn'>
              Visit Store
              <MdOutlineOpenInNew/>              
          </button>
          </a>
        </section>
      </div>
        
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  align-self: flex-end;

  .product {
    display: grid;
    gap: 2rem;
    align-content: flex-end;

    img {
      width: 232px;
      height: 232px;
      border-radius: var(--borderRadius);
      object-fit: cover;
    }

    .product_details {
      color: var(--clr-text-black);
      line-height: var(--lineHeight);

      h3 {
        font-weight: 600;
        font-size: var(--titleMedium);
      }

      .info {
        font-size: var(--titleSmall)
      }
  
      p {
        font-size: var(--bodyLarge);
      }

      .store_btn {
        display: flex;
        font-size: var(--titleMedium);
        svg {
          margin-left: 10px;
          font-size: var(--titleLarge);
        }

      }
    }
    
  }

  
  

  @media screen and (max-width: 428px) {
    .product {

      .product_details {
        h3 {
          font-size: var(--bodyMedium);
        }
      }
    }
    
    
  }

`

export default ProductCard