import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CustomGlobalStyle = createGlobalStyle`
  body {
    // @import url('http://localhost:8080/fonts.css');
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900');
  }
`;

export default () => (
  <div>
    <CustomGlobalStyle />
    Foo
  </div>
);
