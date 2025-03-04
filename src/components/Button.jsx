import React from 'react';
import { Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { AlertOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';
import { RobotOutlined } from '@ant-design/icons';

// efect button
const Buttaplic = ({ isDark }) => {
  const style = {
    backgroundColor: isDark ? '#000000' : '#FFFFFF',
    color: isDark ? '#FFFFFF' : '#000000',
  };
  // estudos
  const clickEstud = () => {
    window.open('https://www.w3schools.com/js/default.asp', '_blank');
  };

  // caminhos para desenvolvimento
  const clickRoadMap = () => {
    window.open('https://roadmap.sh/', '_blank');
  };

  // buscar vagas
  const clickJob = () => {
    window.open('https://github.com/frontendbr/vagas/issues', '_blank');
  };

  // teste conhecimentos
  const clickTest = () => {
    window.open(
      'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
      '_blank',
    );
  };

  return (
    <>
      <Button
        style={style}
        shape="circle"
        icon={<BookOutlined />}
        size="large"
        title="Clique para aprender"
        onClick={clickEstud}
        font-sizer={1}
      />
      <Button
        style={style}
        shape="circle"
        icon={<AlertOutlined />}
        size="large"
        title="Buscar Vagas"
        onClick={clickJob}
      />

      <Button
        style={style}
        shape="circle"
        icon={<EnvironmentOutlined />}
        size="large"
        title="RoadMap"
        onClick={clickRoadMap}
      />
      <Button
        style={style}
        shape="circle"
        icon={<RobotOutlined />}
        size="large"
        title="Test"
        onClick={clickTest}
      />
    </>
  );
};

export default Buttaplic;
