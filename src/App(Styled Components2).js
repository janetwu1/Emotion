import React from 'react';
import Css from './Css';
import { css } from '@emotion/react'
import styled from '@emotion/styled'

function Demo ({className}) {
  return <div className={className}>Demo</div>;
}

const Fancy = styled(Demo)`
color: red;
`
const Fancy2 = styled(Demo)({
  background: 'tomato',
  color: 'white'
})
function App() {
  return (
   <div>
     <Fancy />
     <Fancy2 />
    </div>
  );
}

export default App;
