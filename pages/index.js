import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CustomGlobalStyle = createGlobalStyle`
  body {
    @import url('http://localhost:8080/fonts.css');
  }
`;

export default () => (
  <div>
    <CustomGlobalStyle />
    Foo
  </div>
);
