import React from 'react'
import styled from 'styled-components'
import Error from '../../assets/images/Error404.png'


const ErrorPage = () => {
  return (
    <ErrorContainer>
      <div className='error'>
        <div>
          <h1>Ooops...</h1>
          <h2>Page Not Found.</h2>
          <p>The page you are looking for doesn't exist or an error occured, 
            go back to home page.</p>
        </div>      
        <img src={Error} className='error_img' alt="error 404" />
      </div>

      <button className='btn btn_error'>Go Back</button>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  background: var(--clr-background2);
  padding: 100px 28px 100px 50px;
  margin: 20px;
  .error {
    display: flex;

    div {
      h1 {
        font-size: var(--headlineLarge);
        font-weight: 700;
      }
      h2 {
        color: var(--clr-error);
        font-size: var(--headlineMedium);
        margin: 20px 0;
      }
      p {
        font-size: var(--titleMedium);
      }
    }
  }
  .btn_error {
    background: var(--clr-background);
    color: var(--clr-primaryOrange5);
    font-weight: 600;
    font-size: var(--titleSmall);
    margin-top: 35px;
    padding: 18px 140px;

    &:hover {
      background: var(--clr-primaryOrange5);
      color: var(--clr-background);
    }
  }

  .error_img {
    margin: 0 20px 0 100px;
  }

  @media screen and (max-width: 428px) {
    padding: 100px 20px 100px 20px;
    margin: 10px;

    .error {
      flex-direction: column;

      div {
        h1 {
          font-size: var(--headlineLarge);
        }
        h2 {          
          font-size: var(--headlineSmall);
          
        }
        p {
          font-size: var(--titleSmall);
        }
      }
    }
    .error_img {
      margin: 0;
      width: 348px;
    }

    .btn_error {
      margin-top: 32px;
      width: -webkit-fill-available;
    }
  }
`
export default ErrorPage