import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdojokvr");
  if (state.succeeded) {
      return <h3>Thanks for Contacting Us!</h3>;
  }
  return (
      <form onSubmit={handleSubmit}>
        {
          !state.succeeded ? 
        <h3>Send us a Message</h3>
          : null
        }
        <div className='row'>
          <div className='mobile'>
            <label htmlFor="fname">
              First Name
            </label>
            <input
              id="fname"
              type="text" 
              name="fname"
              placeholder='Jane'
              required
            />
            <ValidationError 
              prefix="First Name" 
              field="fname"
              errors={state.errors}
            />
            {/* <div {...props}>
              {prefix} {message}
            </div> */}
          </div>
          <div className='mobile'>
            <label htmlFor="lname">
              Last Name
            </label>
            <input
              id="lname"
              type="text" 
              name="lname"
              placeholder='Dorothy'
              required
            />
            <ValidationError 
              prefix="Last Name" 
              field="lname"
              errors={state.errors}
            />
          </div>
          <div className='mobile'>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder='Jane@example.com'
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='mobile'>            
            <label htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text" 
              name="phoneNumber"
              placeholder='Your phone number'
              required
            />
            <ValidationError 
              prefix="Your Phone Number" 
              field="phoneNumber"
              errors={state.errors}
            />
          </div>
        </div>

        <div className='textarea'>        
          <label htmlFor="message">
            Message
          </label>
          <textarea
            type='text'
            id="message"
            name="message"
            placeholder='Write your message'
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

      <button type="submit" className='btn contact_btn' disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}

const ContactUsPage = () => {
  return (
    <ContactContainer>

      <div className='contact_text'>
        <h1>Contact Us</h1>
        <p>ScoutVendor wishes to offer our customers with the best experience while using our services.</p>
        <p> Do you have any questions or remarks? Simply fill out this form and send us a message.</p>
        <p>You will get a reply from us within the next 24 hours.</p>
        
      </div>

      <div className='contact_form'>
          <ContactForm/>
      </div>

    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  background: var(--clr-primaryOrange5);
  color: var(--clr-white);
  display: flex;
  justify-content: space-between;
  padding: 48px 82px;

  .contact_text {
    align-self: center;
    margin-right: 237px;

    h1 {
      line-height: 64px;
    }
    p {
      line-height: 32px;
    }
  }

  .contact_form {
    background: var(--clr-background);
    border-radius: 16px;
    color: var(--clr-text-black);
    padding: 24px;
    
    h3 {
      font-size: var(--headlineSmall);
      padding: 24px 52px 32px;
      text-align: center;
    }

    form {
      
      .row {
        display: grid;
        grid: auto / auto auto;
        grid-gap: 34px;
        width: min-content;
      }

      input, textarea {
        border: 1.2px solid var(--clr-grey4);
        border-radius: var(--borderRadius);
        background: var(--clr-background);
        font-family: var(--bodyFont);

      }

      input[type=text], input[type=email], textarea[type=text] {
        padding: 12px 20px;
      }

      input {
        margin-top: 5px;
        height: 52px;
      }

      .textarea {
        display: flex;
        flex-direction: column;
        margin-top: 32px;

        textarea {
          height: 68px;
          margin-top: 5px;
        }
      }

      .contact_btn {
        margin-top: 32px;
        width: 252px;
      }
    }

  }

  @media screen and (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding: 32px 10px 41px;

    .contact_text {
      align-self: center;
      margin: 32px 32px 80px;

      h1 {
        line-height: 32px;
        margin-bottom: 52px;
      }
      p {
        line-height: 32px;
      }
    }

    .contact_form {
      border-radius: 16px;
      padding: 52px 25px 64px;
      
      h3 {
        font-size: var(--headlineSmall);
        padding: 0;
        margin-bottom: 32px;
        text-align: center;
      }

      form {        
        .row {
          display: flex;
          flex-direction: column;
          grid-gap: 15px;
          width: 100%;

          .mobile {
            display: flex;
            flex-direction: column;
          }
        }

        input[type=text],input[type=emai], textarea[type=text] {
          padding: 5px 10px;
        }

        input {
          margin-top: 5px;
          height: 52px;
        }

        .textarea {
          display: flex;
          flex-direction: column;
          margin-top: 32px;

          textarea {
            height: 68px;
            margin-top: 5px;
          }
        }

        .contact_btn {
          margin-top: 25px;
          padding: 18px 41px;
          width: 225px;
        }
      }

    }
  }

`
export default ContactUsPage