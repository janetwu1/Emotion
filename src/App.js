import React from 'react';
import { css, useTheme } from '@emotion/react';
// import { useTheme } from 'emotion-theming'

const primaryColor = props => css`
  color: ${props.colors.primary}
`

function App() {
  return (
   console.log(useTheme()),
  <div css={primaryColor}>defe</div>
  );
}

export default App;
