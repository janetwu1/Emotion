import React from 'react';
import { css, Global } from '@emotion/react'
import Demo from './demo';

const styles = css`
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: red;
}
`;
function App() {
  return (
   <div>
     <Global styles={styles} />
   <a href="#">我的测试数据。。。。</a>
   <Demo />
    </div>
  );
}

export default App;
