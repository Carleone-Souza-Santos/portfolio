import React, { useState, useEffect } from 'react';
import {
  Container,
  NotificationBadge,
  NotificationIcon,
} from './style/BellStyle';

const BellNotification = () => {
  const [notifications, setNotifications] = useState(1);

  useEffect(() => {
    if (notifications >= 5) return;

    const interval = setInterval(() => {
      setNotifications((prev) => Math.min(prev + 1, 5));
    }, 240000);

    return () => clearInterval(interval);
  }, [notifications]);

  const handleClick = () => {
    if (!('Notification' in window) || notifications === 0) return;

    if (Notification.permission === 'granted') {
      new Notification('🔔 Notificação', {
        body: 'Você está dando os primeiros passos na programação, fico feliz!',
        icon: '/icone.png',
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('🔔 Notificação', { body: 'Parabéns!' });
        }
      });
    }

    setNotifications((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Container>
      <NotificationBadge count={notifications} offset={[5, 0]}>
        <NotificationIcon
          onClick={notifications > 0 ? handleClick : undefined}
          style={{
            cursor: notifications === 0 ? 'not-allowed' : 'pointer',
            opacity: notifications === 0 ? 0.3 : 1,
          }}
        />
      </NotificationBadge>
    </Container>
  );
};

export default BellNotification;
