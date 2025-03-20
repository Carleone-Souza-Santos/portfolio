import React, { useMemo } from 'react';
import {
  AlertWrapper,
  MessageWrapper,
  Avatar,
} from './Styles/CardServicstyles';

const images = [
  '../../src/assets/people/ana.jpg',
  '../../src/assets/people/Anton.png',
  '../../src/assets/people/Barb.png',
  '../../src/assets/people/Igo.png',
  '../../src/assets/people/Rit.png',
  '../../src/assets/people/Sand.png',
  '../../src/assets/people/Sab.png',
];

const welcome = [
  'Olá!',
  'Oi!',
  'Seja bem-vindo(a)!',
  'Como vai?',
  'Tudo bem ?',
];

const chatPhrases = [
  'Vc está bem?',
  'Os projetos e só clicar e colaborar...',
  'Caminhos a seguir?',
  'Vamos cuidar da Natureza!',
  'O que vc está fazendo?',
  'Melhorias para o projeto?',
  'Eterno aprendiz...',
  '18 de abril feriado Nacional ...',
];

export const CardServic = ({ clickCount }) => {
  const { randomPhrase, randomImage } = useMemo(() => {
    const phrases = clickCount <= 2 ? welcome : chatPhrases;
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return { randomPhrase, randomImage };
  }, [clickCount]);

  return (
    <AlertWrapper>
      <MessageWrapper>
        <Avatar src={randomImage} alt="Imagens de Linguagem de Programação" />
        {randomPhrase}
      </MessageWrapper>
    </AlertWrapper>
  );
};
