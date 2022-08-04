import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
// import { GithubContext } from "../context/context";
const SearchBar = () => {
  const [productName, setProductName] = useState("");

//   const { requests, error, searchGithubUser, isLoading } = React.useContext(GithubContext)

  // get things from global context

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(searchItem) {
    //   searchGithubUser(searchItem)
    // }
  };

  return (
    <section className="">
      <Wrapper className="">
        <form onSubmit={handleSubmit}>
          <div className="search_field">
            <input type="text" placeholder="What product are you shopping for?"
            value={productName}
            onChange={(e) => setProductName(e.target.value)} />
            <button type="submit" className="search_btn"><MdSearch/></button>
          </div>
        </form>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
    .search_field {
        
        margin-top: 12px;
        
        input {
            width: 596px;
            height: 52px;
            border: 1.2px solid var(--clr-grey5);
            border-radius: var(--borderRadius);
            background: var(--clr-background);
            outline-color: var(--clr-grey5);
            letter-spacing: var(--letterSpacing);
            color: var(--clr-grey4);
        }
        input::placeholder {
            color: var(--clr-grey4);
            text-transform: capitalize;
            letter-spacing: var(--letterSpacing);
            padding: 14px 0 14px 16px;
            font-size: var(--bodyMedium);
        }

        button {
            background: var(--clr-background);
            border-color: transparent;
            svg{
                font-size: var(--titleLarge);
                color: var(--clr-grey4);
            }
            transition: var(--transition);
            cursor: pointer;
            &:hover {
                background: var(--clr-background);
                svg {
                    color: var(--clr-primaryOrange5);
                }
            }
        }

        @media (max-width: 428px) {
            input {
                width: 345px;
            }
        }
    }

`;

export default SearchBar;