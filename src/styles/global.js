import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*
{
  margin: 0px;
  padding: 0px;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root
{
  min-height: 100%;
}

body
{
  background: #7159c1;
  -webkit-font-smoothing: antialiased !important;
}

ul, li, ol {
  list-style: none;
}
a {
  text-decoration: none;
}

`;
