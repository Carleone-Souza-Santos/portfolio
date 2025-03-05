// estilização Sino alert

import styled from 'styled-components';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

export const NotificationBadge = styled(Badge)`
  .ant-badge-count {
    background-color: #ee280d;
  }
`;

export const NotificationIcon = styled(BellOutlined)`
  font-size: 23px;
  cursor: pointer;
  color: white;
`;
