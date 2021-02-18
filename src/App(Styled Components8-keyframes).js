import React from 'react';
import { css, keyframes } from '@emotion/react';

const move = keyframes`
0% {
  background: skyblue;
  left: 0;
  top: 0;
}
100% {
  background: tomato;
  left: 600px;
  top: 300px;
}
`;

const box =css`
width: 100px;
height: 100px;
position: absolute;
animation: ${move} 2s ease alternate;
`;
function App() {
  return (
   <div css={box}>
    </div>
  );
}

export default App;
