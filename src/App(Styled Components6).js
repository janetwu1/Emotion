import React from 'react';
import { css } from '@emotion/react'

const base =css`
background: tomato;
color: white;
`;
const danger =css`
background: red;
color: black;
`;
function App() {
  return (
   <div css={[base, danger]}>
   我的测试数据。。。。
    </div>
  );
}

export default App;
