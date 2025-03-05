import React, { useState } from 'react';
import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { IconStyle } from './style/LinkStyl';

export const IconsLinks = () => {
  return (
    <Space size="small">
      <IconWrapper
        link="https://www.linkedin.com/in/carleone-santos/"
        IconComponent={<LinkedinOutlined />}
        label="LinkedIn"
      />
      <IconWrapper
        link="https://www.instagram.com/carleone_fullstack/"
        IconComponent={<InstagramOutlined />}
        label="Instagram"
      />
      <IconWrapper
        link="https://github.com/Carleone-Souza-Santos"
        IconComponent={<GithubOutlined />}
        label="GitHub"
      />
    </Space>
  );
};

const IconWrapper = ({ link, IconComponent, label }) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
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
