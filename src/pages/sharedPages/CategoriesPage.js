import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import data from '../../data2.json'
// import SearchBar from '../../components/SearchBar'

const CategoriesPage = () => {
  return (
    <CategoryPageContainer className='container'>
      {/* <SearchBar/> */}

      <div className=''>
      <h2>Categories</h2>

       <div className='cards cards_container'>
      {data.all_categories.map((item) => {
              const {id, categoryImg, categoryName, path} = item
              return (
              <Card key={id} categoryImg={categoryImg} categoryName={categoryName} 
              path={path} bgColor={'#ffffff'} textColor={'#131211'}/>
              )
          })}
          </div>
      </div>
    </CategoryPageContainer>
  )
}

const CategoryPageContainer = styled.div`
  padding-left: 64px; 
  
  h2 {
    margin: 40px 0 40px;
  }

  @media screen and (max-width: 992px) {
    .feature_tiles {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 428px) {
    padding-left: 8px;
    h2 {
      margin: 28px 0;
    }
  }

`

export default CategoriesPage