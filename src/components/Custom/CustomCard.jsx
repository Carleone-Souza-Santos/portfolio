import React from 'react';
import { Avatar, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { StyledCard } from './style/CustomCardstyle';

const { Meta } = Card;

const Action = (path) => {
  window.open(path, '_blank');
};

const Github = (link) => {
  window.open(link, '_blank');
};

export const CustomCard = ({ image, avatar, description, path, link }) => {
  return (
    <StyledCard
      hoverable
      actions={[
        <GithubOutlined
          key="github"
          style={{ color: 'black' }}
          onClick={() => Github(link)}
        />,
      ]}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src={image}
          alt="Project"
          style={{ height: 80, objectFit: 'contain' }}
        />
        <span
          style={{ fontWeight: 'bold', color: 'Black', cursor: 'pointer' }}
          onClick={() => Action(path)}
        >
          Click
        </span>
      </div>
      <Meta avatar={<Avatar src={avatar} />} description={description} />
    </StyledCard>
  );
};
