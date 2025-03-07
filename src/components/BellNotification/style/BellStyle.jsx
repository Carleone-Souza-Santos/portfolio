// bell alert
import styled from 'styled-components';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
`;
export const NotificationBadge = styled(Badge)`
  .ant-badge-count {
    background-color: #ee280d;
  }
`;
export const NotificationIcon = styled(BellOutlined)`
  font-size: 20px;
  cursor: pointer;
  color: white;
`;
