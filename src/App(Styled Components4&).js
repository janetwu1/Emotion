import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
width: 200px;
height: 200px;
background: skyblue;
color: pink;
&:hover {
  background: pink;
}
& > span {
  color: yellow;
}
`;


function App() {
  return (
   <div>
   <Container>
   Container
   <span>span</span>
   </Container>
    </div>
  );
}

export default App;
