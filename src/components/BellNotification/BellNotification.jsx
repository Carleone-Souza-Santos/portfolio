import React, { useState, useEffect } from 'react';
import { NotificationBadge, NotificationIcon } from './style/BellStyle';

const BellNotification = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 5 ? prevCount + 1 : prevCount));
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (count === 0) return; // ❌

    if (Notification.permission === 'granted') {
      new Notification('🔔 Notificação', {
        body: 'Parabéns vc esta dando os primeiros passos na programação , fico Feliz!',
        icon: '/icone.png',
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('🔔 Notificação', { body: 'Parabéns!' });
        }
      });
    }

    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {count > 0 && <NotificationBadge count={count} />}
      <NotificationIcon
        onClick={handleClick}
        style={{
          cursor: count === 0 ? 'not-allowed' : 'pointer',
          opacity: count === 0 ? 0.5 : 1,
        }}
      />
    </div>
  );
};

export default BellNotification;
