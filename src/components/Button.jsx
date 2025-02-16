import React from 'react';
import { Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const Buttaplic = ({ isDark }) => {
  const style = {
    backgroundColor: isDark ? '#000000' : '#FFFFFF',
    color: isDark ? '#FFFFFF' : '#000000',
  };

  return (
    <Button
      style={style}
      shape="circle"
      icon={<BookOutlined />}
      size="large"
      title="Clique para aprender"
    />
  );
};

export default Buttaplic;
