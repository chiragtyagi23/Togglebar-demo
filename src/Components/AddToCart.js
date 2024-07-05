import React, { useState } from 'react'
import styled from 'styled-components';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import {Button} from '../style/Button'
import { useCartContext } from '../context/cart_context';

const AddToCart = ({product}) => {
  const {addToCart} = useCartContext();

  const {id,stock} = product;

  const [amount,setamount] = useState(1);

  const setDecrease = ()=>{
    amount > 1 ? setamount(amount-1) : setamount(1);
  };

  const setIncrease = ()=>{
    amount < stock ? setamount(amount+1) :setamount(stock);
  };


    
  return (
    <Wrapper>
        <CartAmountToggle 
        amount={amount} 
        setDecrease={setDecrease} 
        setIncrease={setIncrease} />

        <NavLink to="/cart" onClick={() => addToCart(id, amount, product)}>
          <Button className='btnn'>Add To Cart</Button>
        </NavLink>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    ${'' /* margin-top: 2rem;
    margin-bottom: 1rem; */}
    display: flex;
    ${'' /* justify-content: space-around; */}
    align-items: center;
    font-size: 1.4rem;
    position: relative;
    left:400px;
    gap: 60px;
    
    

    
  
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  .btnn{
      position: relative;
      top: 25px;
      left: 410px;
    }


    @media (max-width: ${({ theme }) => theme.media.mobile}) {

    .amount-togglee{
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }

      }
    }

`;

export default AddToCart
