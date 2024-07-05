import React from 'react'
import styled from 'styled-components'
 import { NavLink } from 'react-router-dom'
 import Nav from './Nav'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to= "/">
            <img className='logo' src="https://s.yimg.com/fz/api/res/1.2/pczEhVxNkSq8jNAd2CwokA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/c63e2c94-b172-30ef-9044-2262748f0889/t_500x300" alt="" />
        </NavLink>
        <Nav />
    </MainHeader>
  )

}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    width:175px;
    height:30px
  }
`;

export default Header
