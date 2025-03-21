import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import { StyledButton } from './style/WhatsStyle';

export const WhatsButton = () => {
  return (
    <StyledButton
      type="button"
      aria-label="Fale conosco pelo WhatsApp"
      onClick={() => window.open('https://wa.me/55119305551212', '_blank')}
    >
      <WhatsAppOutlined style={{ color: 'white', fontSize: '24px' }} />
    </StyledButton>
  );
};
