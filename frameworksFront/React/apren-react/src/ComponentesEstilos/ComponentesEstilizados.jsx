import React from 'react'
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components'

function ComponentesEstilizados() {

  let mainColor = '#db7093',
      mainAlphaColor80 = '#db709380';
  
  const setTransitionTime = (time) => `all ${time} ease-in-out`

  const fadein = keyframes`
  0% {
    opacity:0;
  }
  
  100% {
    opacity:1;
  }
  `;

  const MyH3 = styled.h3`
  padding:2rem;
  text-align:center;
  color:${(props) => props.color};
  color:${({color}) => color};
  color:${({color}) => color || '#067'};
  background-color:${mainColor};
  transition: ${setTransitionTime('1s')};
  animation:${fadein} 7s ease-out;

 /* ${({inButton}) => inButton && css`
  margin:auto;
  max-width: 50%;
  border-radius:0.25;
  cursor:pointer;
  `}*/

  &:hover{
    background-color:${mainAlphaColor80}
  }
  `;


  const light = {
    color:'#222',
    bgColor:'#DDD'
  }

  const dark = {
    color:'#DDD',
    bgColor:'#222'
  }

  const Box =styled.div`
  padding:1rem;
  margin:1rem;s
  color:${({theme}) => theme.color};
  background-color: ${({theme}) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
  border-radius:1rem;
  `

  const  GlobalStyle = createGlobalStyle`
  h2{
    padding:3rem;
    background-color:#fff;
    color:#61dafb;
    text-transform:uppercase;
  }
  `

  return (
    <div>
        <GlobalStyle/>
        <h2>Estyled Component</h2>
        <MyH3>Hola soy un h3 tres estilizado con styled-Component</MyH3>
        <MyH3 color='#61dafb'>Hola soy un h3 tres estilizado con styled-Component</MyH3>
        <MyH3 inButton>Soy un h3 tres estilizado como boton</MyH3>

        <ThemeProvider theme={light}>
          <Box>Soy una caja light</Box>
          <BoxRounded>Soy una caja redonda light</BoxRounded>
        </ThemeProvider>

        <ThemeProvider theme={dark}>
          <Box>Soy una caja dark</Box>
          <BoxRounded>Soy una caja redonda dark</BoxRounded>
        </ThemeProvider>
    </div>
  )
}

export default ComponentesEstilizados