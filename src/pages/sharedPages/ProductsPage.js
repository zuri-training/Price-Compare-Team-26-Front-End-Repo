import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../../components'
import PageBtnContainer from '../../components/PageBtnContainer'
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
    dispatch(getAllProducts())
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
    <div>
      <h5>
        {totalProducts} Product{products.length > 1 && 's'} available{' '}
      </h5>
      <h2>Products</h2>
      {numOfPages > 1 && <PageBtnContainer/>}
    </div>
  )
}

export default ProductsPage