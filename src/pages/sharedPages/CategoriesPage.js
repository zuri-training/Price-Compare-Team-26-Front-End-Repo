import React from 'react'
import styled from 'styled-components'
import { CategoryTile } from '../../components'
import Card from '../../components/Card'
import data from '../../data2.json'

const CategoriesPage = () => {
  return (
    <CategoryPageContainer className='container'>
      <div className='feature_tiles'>
        <CategoryTile title={'How to compare'}/>
        <CategoryTile title={'Discount Deals'}/>
        <CategoryTile title={'Get Coupons'}/>
        <CategoryTile title={'Trending Deals'}/>
        <CategoryTile title={'Logistics Services'}/>
      </div>

      <div className='cards'>
      {data.all_categories.map((item) => {
              const {id, categoryImg, categoryName} = item
              return (
              <Card key={id} categoryImg={categoryImg} categoryName={categoryName} bgColor={'#ffffff'} textColor={'#131211'}/>
              )
          })}
      </div>
    </CategoryPageContainer>
  )
}

const CategoryPageContainer = styled.div`
  .feature_tiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 25px;
    justify-items: center;
    margin-bottom: 90px;
  }

  @media (max-width: 992px) {
    .feature_tiles {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

`

export default CategoriesPage