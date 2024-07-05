import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../style/Button';

const HeroSection = ({myData}) => {
 
    const { name } = myData;

  return (
    <Wrapper>
 <div className="container">
         <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data"> Welcome to</p>
                <h1>{name}</h1>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolorem eaque, laudantium harum eius aliquid aut itaque neque vero doloremque fugiat dolor atque at nemo ipsa consequatur rem ad, voluptatem a delectus quod. Eos perferendis cum voluptatibus delectus, consequuntur non esse fugiat animi rerum, atque dolore minus in id qui!
                </p>
                <NavLink>
                    <Button>Show now</Button>
                </NavLink>
            </div>
            {/* image */}
            <div className="hero-section-image">
               <figure>
               <img src="https://github.com/thapatechnical/thapareactecom/blob/main/public/images/hero.jpg?raw=true" alt="img" className="image-style"/>
               </figure> 
            </div>
         </div>
     </div>

    </Wrapper>
      
 )
}

const Wrapper = styled.section `

padding: 12rem 0;

img {
  min-width: 20rem;
  height: 20rem;
}

.hero-section-data {
  p {
    margin: 5px;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}



.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;



export default HeroSection
