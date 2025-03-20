import React, { useState, useEffect } from 'react';
import {
  Container,
  NotificationBadge,
  NotificationIcon,
} from './Style/BellStyle';
import { CardServic } from '../CardNotification/CardServic';

export const BellNotification = () => {
  const [notifications, setNotifications] = useState(1);
  const [showCard, setShowCard] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (notifications >= 3) return;

    const interval = setInterval(() => {
      setNotifications((prev) => Math.min(prev + 1, 5));
    }, 30000);

    return () => clearInterval(interval);
  }, [notifications]);

  const handleClick = () => {
    if (notifications === 0) return;

    setNotifications((prev) => Math.max(prev - 1, 0));
    setShowCard(true);
    setClickCount((prev) => prev + 1);

    setTimeout(() => setShowCard(false), 7000);
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

      {/* Passa o clickCount para o CardServic */}
      {showCard && <CardServic clickCount={clickCount} />}
    </Container>
  );
};
