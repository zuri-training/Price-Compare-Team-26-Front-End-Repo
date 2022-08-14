import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../features/allProducts/allProductsSlice'

const PageBtnContainer = () => {
    const { numOfPages, page } = useSelector((store) => store.allProducts)
    const dispatch = useDispatch()

    
    const pages = Array.from({ length: numOfPages}, (_, index) =>{
        return index + 1
    })

    const nextPage = () => {
        let newPage = page + 1
        if (newPage > numOfPages) {
            newPage = 1
        }
        dispatch(changePage(newPage))
    }

    const prevPage = () => {
        let newPage = page - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage))
    }
  return (
    <div>
        <button
            type='button'
            onClick={prevPage}
        >
            <HiChevronDoubleLeft/>
            Prev
        </button>
        <div>
            {pages.map((pageNumber) => {
                return (
                    <button
                        type='button'
                        key={pageNumber}
                        onClick={() => dispatch(changePage(pageNumber))}
                    >
                        {pageNumber}
                    </button>
                )
            })}
        </div>

        <button
            type='button'
            onClick={nextPage}
        >
            <HiChevronDoubleRight/>
            Next
        </button>

    </div>
  )
}

export default PageBtnContainer