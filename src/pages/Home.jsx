import React from 'react';
import { Box } from '../styles/StyleHome';
import Img from '../assets/Astronaut.png';
import { Card } from 'antd';

const Home = () => {
  return (
    <>
      <h1>Bem-vindo ao meu portfólio!</h1>
      <Box>
        <Card
          style={{
            width: 300,
            margin: 1,
          }}
        >
          <p>
            <img src="" alt="" />
          </p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Box>

      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          padding: '20px',
        }}
      >
        <img
          style={{
            height: '400px',
          }}
          src={Img}
          alt="Astronaut"
        />
      </div>
    </>
  );
};

export default Home;
