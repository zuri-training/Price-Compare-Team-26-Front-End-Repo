import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import data from '../data.json'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const CategoryCard = () => {
  return (
    <CategoryContainer>
    <div className='category_name'>
        <h2>Categories</h2>       
        <div>            
            <Link to='/product-categories' className='arrow_right'><span>All Categories</span> <BsArrowRightShort className='arrow_right'/></Link>
        </div>
    </div>

    <div className='cards'>
        {data.all_categories.map((item) => {
            const {id, categoryImg, categoryName} = item
            return (
            <Card key={id} categoryImg={categoryImg} categoryName={categoryName} bgColor={'#F6C598'}/>
            )
        })}
    </div>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`

    .category_name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        h2 {
            font-size: var(--headlineSmall);
        }

        div {
            display: flex;
            justify-content: space-between;

            .arrow_right {
                color: var(--clr-text-headline);
                font-size: var(--titleLarge);
                font-weight: 600;
            }
        }
    }
    
    @media (max-width: 428px) {
        margin-top: 140px;
        .category_name {

            h2 {
                font-size: var(--titleMedium);
            }

            div{
                .arrow_right {
                    font-size: var(--titleMedium);
                }
            }
        }
    }

`

export default CategoryCard