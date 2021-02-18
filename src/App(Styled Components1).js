import React from 'react';
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Button = styled.button`
width: 100px;
height: 30px;
background: ${props => props.bgColor || 'pink'};
`;

// const Container = styled.div(props=>({
//   width: props.w || 1000,
//   background: 'pink',
//   margin: '0 auto'
// }));

const Container = styled.div({
  width:800,
  background: 'pink'
},props=>({
  width: props.w,
  background: props.bgColor
}))

function App() {
  return (
   <div>
     <Container w={1600} bgColor="tomato">
     <Button bgColor="blue">button</Button>
     </Container> </div>
  );
}

export default App;
