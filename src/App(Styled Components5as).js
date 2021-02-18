import React from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
color:red;
`;

function App() {
  return (
   <div>
  <Button as="a" href="">button</Button>
    </div>
  );
}

export default App;
