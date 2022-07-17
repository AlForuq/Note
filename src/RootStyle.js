import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1160px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding: 15px 15px 25px 15px;
`;


export const MainWrapper = styled.div`
  /* min-height: 100vh; */ /* giving min-height is also possible here */
  background-color: ${({toggle})=> toggle && '#222'}
`