import React, { useState } from 'react';
import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { IconStyle } from '../styles/LinkStyl';

const SmallRoundedIcons = () => {
  return (
    <Space size="small">
      <IconWrapper
        link="https://www.linkedin.com/in/carleone-santos/"
        IconComponent={<LinkedinOutlined />}
      />
      <IconWrapper
        link="https://www.instagram.com/carleone_fullstack/"
        IconComponent={<InstagramOutlined />}
      />
      <IconWrapper
        link="https://github.com/Carleone-Souza-Santos"
        IconComponent={<GithubOutlined />}
      />
    </Space>
  );
};

const IconWrapper = ({ link, IconComponent }) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconStyle
        hover={hover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {IconComponent}
      </IconStyle>
    </a>
  );
};

export default SmallRoundedIcons;
