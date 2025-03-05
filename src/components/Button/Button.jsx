import React, { useState } from 'react';
import { Button } from 'antd';
import {
  BookOutlined,
  AlertOutlined,
  EnvironmentOutlined,
  RobotOutlined,
} from '@ant-design/icons';

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
        size="small"
        title="Clique para aprender"
        onClick={clickEstud}
      />
      <Button
        style={style}
        shape="circle"
        icon={<AlertOutlined />}
        size="small"
        title="Buscar Vagas"
        onClick={clickJob}
      />
      <Button
        style={style}
        shape="circle"
        icon={<EnvironmentOutlined />}
        size="small"
        title="RoadMap"
        onClick={clickRoadMap}
      />
      <Button
        style={style}
        shape="circle"
        icon={<RobotOutlined />}
        size="small"
        title="Test"
        onClick={clickTest}
      />
    </>
  );
};

export default Buttaplic;
