import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Loading, PageBtnContainer, ProductCard, SearchBar } from '../../components'
import { getAllProducts } from '../../features/allProducts/allProductsSlice'

const ProductsPage = () => {
  const {
    products,
    isLoading,
    page,
    search,
    numOfPages,
    totalProducts
  } = useSelector((store) => store.allProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllProducts())
    }, 3000)
  }, [page, search])

  if (isLoading) {
    return <Loading />
  }

  if (products.length === 0) {
    return (
      <div>
        <h2>No Products to display...</h2>
      </div>
    )
  }

  return (
    <>
      <SearchBar/>
      <ProductsPageWrapper className=''>
        <h4 className='section-center'>
          {totalProducts} Product{products.length > 1 && 's'} available{' '}
        </h4>
        <div className='section-center products-container'>
          {products.map((product) => {
            const { id, category, name, brand} = product
            return <ProductCard category={category} name={name} brand={brand} key={id}/>
          })
          }
        </div>
        {numOfPages > 1 && <PageBtnContainer/>}
      </ProductsPageWrapper>
    </>
  )
}

const ProductsPageWrapper = styled.div`
  margin-top: 40px;
  padding: 0 72px;

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    margin-top: 20px;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default ProductsPage