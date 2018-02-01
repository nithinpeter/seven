import React from 'react';
import styled from 'styled-components';
import tile from './tile.jpg';
import logo from './logo.png';

const App = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${tile});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Seven = styled.div`
  height: 33%;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  img {
    padding: 0 3vmin;
    max-height: 25vmin;
  }
  h1 {
    font-size: 10vmin;
    margin: 0;
    color: #ffffff;
  }
`;

export default () => (
  <App>
    <Seven>
      <img src={logo} alt="seven logo" />
      <h1>Home and Away</h1>
    </Seven>
  </App>
);
