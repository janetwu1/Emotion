import React from 'react';
import styled from '@emotion/styled'

// const Child = styled.div`
//   color: red;
// `;

// const Parent = styled.div`
// ${Child} {
//   color: green
// }`;

const Child = styled.div({
  color: 'red'
})

const Parent = styled.div({
  [Child]: {
    color: 'pink'
  }
})

function App() {
  return (
   <div>
    <Child>Child</Child>
    <Parent><Child>child parent</Child></Parent>
    </div>
  );
}

export default App;
