import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import heroimg from '../assets/images/hero-img.png'
import { MdOutlineCheckCircle } from 'react-icons/md';
import circle from '../assets/images/plain header.png';


const HeroSection = () => {
  return (
    <HeroContainer className=''>
      <div className='hero'>
        <div className='hero_text'>
        <h1>All Product Prices in One Place</h1>
        <p><MdOutlineCheckCircle className='check_circle'/>Wide range prices</p>
        <p><MdOutlineCheckCircle className='check_circle'/>Coupon price sourcing</p>
        <p><MdOutlineCheckCircle className='check_circle'/>Quality description</p>
        <p><MdOutlineCheckCircle className='check_circle'/>Discount Deals</p>
        </div>

        <Link to='sign-up'>
        <button type='button' className='btn hero_btn'>Get Started</button>
        </Link>
      </div>

      <div>
          <img src={heroimg} alt="hero" className='hero_img' />
          <img src={circle} alt="circle" className='circle' />        
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
    border: 1px solid var(--clr-primaryOrange4);
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 68px 65px 0 66px;
    margin-top: 48px;
    margin-bottom: 48px; 
    
    .hero {
      margin-top: 105px;     

      .hero_text {
        background: var(--clr-secondaryOrange);
        padding: 30px 57px;
        margin-bottom: 23px;
        filter: drop-shadow(0 0 2rem var(--clr-secondaryOrange) );
        height: 431px;
        width: 400px;

        p {
          font-size: var(--body-Large);
          color: var(--clr-text-black);
          font-weight: 500;
        }

        .check_circle {
          color: var(--clr-primaryOrange5);
          margin-right: 17px;
        }
      }
    }
    .hero_img {
      width: 650px;
      height: 650px;
    }
    .hero_btn {
      width: 297px;
      height: 60px;
      padding: 18px 0;
      margin-left: 60px;
    }

    .circle{
      // position: relative;
      // left: 800px;
      margin: 30px 0;
      filter: drop-shadow(0 0 2rem var(--clr-secondaryOrange) );
    }

    @media (max-width: 428px) {
      flex-direction: row-reverse;
      border: none;
      padding: 0;
      margin: 0 0 100px 0;

      .hero {
        margin: 0;

        .hero_text {
          margin: 0;
          width: 200px;
          height: 271px;
          padding: 17px 0 0 15px;

          h1 {
            font-size: var(--titleSmall);
            line-height: 24px;
            width: 120px;
          }

          p {
            font-size: var(--bodySmall);
          }

          .check_circle {
            margin-right: 16px;
          }
        }
      }

      .hero_img {
        align-self: center;
        margin-top: 20px;
        width: 200px;
        height: 230px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        border-radius: var(--borderRadius);
      }

      .hero_btn {
        width: 297px;
        height: 60px;
        padding: 8px 4px 8px 4px;
        margin: 45px 0 0 0;
        position: absolute;
        left: 15px;
      }

      .circle {
        margin: 0;
        display: none;
      }
    }
`
export default HeroSection