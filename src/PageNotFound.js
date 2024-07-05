import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from './style/Button'

const PageNotFound = () => {
  return (
    <Wrapper>
    <div className='container'>
      <h1 className='head'>404</h1>
      <h3 className='second_heading'>Uh you are lost....</h3>
      <p className='para'>
        The page you are looking for is not here. how you come here is a mistery so click on home button to go home
      </p>
      

      <NavLink to="/" >
        <Button >HOME</Button>
      </NavLink>

</div>
    </Wrapper>
   
  )
}

const Wrapper = styled.section`

.head{
  font-size:50px;
  
  margin: 20px;

}

.second_heading{
  font-size:30px;
 
  margin: 15px;
}

.para{
  font-size:15px;
 
  margin: 15px;
}



.container{
  text-align: center;
}
`

export default PageNotFound
