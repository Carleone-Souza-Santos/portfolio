import React, { useEffect, useState } from 'react';
import { Wrapper, Text, Notice, Number } from './styles/VisitStyled';

export const VisitorCounter = () => {
  const initialCount = 356;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    let storedCount = localStorage.getItem('visitorCount');
    storedCount = storedCount ? parseInt(storedCount, 10) : initialCount;

    storedCount += 1;
    localStorage.setItem('visitorCount', storedCount);
    setCount(storedCount);
  }, []);

  return (
    <Wrapper>
      <Text>
        <Notice>Visitantes</Notice>
        <Number>{count.toLocaleString('pt-BR')}</Number>
      </Text>
    </Wrapper>
  );
};
