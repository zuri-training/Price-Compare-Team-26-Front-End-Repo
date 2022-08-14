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
    }, 4000)
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
      <ProductsPageWrapper>
        <h4>
          {totalProducts} Product{products.length > 1 && 's'} available{' '}
        </h4>
        <div>
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
`

export default ProductsPage