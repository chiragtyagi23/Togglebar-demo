// import React, { useContext } from 'react'
// import HeroSection from './Components/HeroSection'
// import { AppContext } from './context/ProductContext';

// const About = () => {

//   const Newname = useContext(AppContext);

//   const data = {
//     name: "Shoppers Ecommersff"
//   }
//   return (
//     <>
//     {Newname}
//     <HeroSection myData = {data} />
//     </>
//   )
// }

// export default About


import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "tyagi's Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;

