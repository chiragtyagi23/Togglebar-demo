// import React from 'react'
// import { FaMinus, FaPlus } from "react-icons/fa";
// import styled from 'styled-components';

// const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
//   return (
//     <Wrapper>
//     <div className='cart-button'>
//       <div className='amount-toggle'>
//         <button onClick={()=> setDecrease()} className='hii'> <FaMinus /></button>
//         <div className='amount-style'>{amount}</div>
//         <button onClick={()=> setIncrease()} className='hlo'><FaPlus /></button>
//       </div>
//     </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`

// .hlo{
//     margin-left:20px;
// }

// .hii{
//     margin-right:20px;
// }

// .cart-button{
//     position: absolute;
//     right: 400px;
//     top : 550px;
    
// }

// .amount-toggle {
//     margin-top: 3rem;
//     margin-bottom: 1rem;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     font-size: 1.4rem;


// }
// `

// export default CartAmountToggle



import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle amount-togglee">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
