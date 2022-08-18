import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { changePage } from '../features/allProducts/allProductsSlice'
import styled from 'styled-components'

const PageBtnCtn = () => {
    const { numOfPages, page } = useSelector((store) => store.allProducts)
    const dispatch  =  useDispatch()

    const handlePageClick = (data) => {
        let pageNumber = data.selected + 1
        // console.log(data.selected)
        dispatch(changePage(pageNumber))
    }

    const handlePageChange = (e) => {
        let pageNumber = e.nextSelectedPage + 1
        // console.log(pageNumber)
        dispatch(changePage(pageNumber))
    }

  return (
    <PageBtnWrapper>
        <ReactPaginate
            previousLabel={'<< Prev'}
            nextLabel={'Next >>'}
            breakLabel={'...'}
            pageCount={numOfPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            initalPage={page}
            // onPageChange={handlePageClick}
            onClick={handlePageChange}

            containerClassName={'pgctn_container'}
            pageClassName={'pageBtn'}
            activeClassName={'active'}
            previousClassName={'_btn'}
            nextClassName={'_btn'}
            breakClassName={'pageBtn'}

        />
    </PageBtnWrapper>
  )
}

const PageBtnWrapper = styled.section`
        
    .pgctn_container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 2rem 0;
    }

    .pageBtn {
        background: var(--clr-secondaryOrange);
        font-weight: 700;
        font-size: 1.25rem;
        color: var(--clr-text-black);
        border-radius: var(--borderRadius);
        transition: var(--transition);
        cursor: pointer;
        padding: 10px 18px;
    }

    .active {
        background: var(--clr-primaryOrange5);
        color: var(--clr-white);
    }

    ._btn {
        background: var(--clr-white);
        border-color: transparent;
        border-radius: var(--borderRadius);
        color: var(--clr-text-black);
        letter-spacing: var(--letterSpacing);
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 10px 18px;
    }

    ._btn:hover {
        background: var(--clr-primaryOrange5);
        color: var(--clr-white);
    }


`

export default PageBtnCtn