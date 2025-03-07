import React, { useState } from 'react';
import { Button } from 'antd';
import {
  EnvironmentOutlined,
  RobotOutlined,
  Html5Outlined,
  HourglassOutlined,
} from '@ant-design/icons';

const Buttaplic = ({ isDark }) => {
  const style = {
    backgroundColor: isDark ? '#000000' : '#FFFFFF',
    color: isDark ? '#FFFFFF' : '#000000',
  };

  // Conheça +
  const clickExp = () => {
    window.open('https://htmlrev.com/', '_blank');
  };

  // expiração
  const clickExpiration = () => {
    window.open('https://calltoinspiration.com/', '_blank');
  };

  // caminhos para desenvolvimento
  const clickRoadMap = () => {
    window.open('https://roadmap.sh/', '_blank');
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
        icon={<Html5Outlined />}
        size="small"
        title="Html Exp"
        onClick={clickExp}
      />
      <Button
        style={style}
        shape="circle"
        icon={<HourglassOutlined />}
        size="small"
        title="Expiração"
        onClick={clickExpiration}
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
