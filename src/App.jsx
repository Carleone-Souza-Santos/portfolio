// React
import React from 'react';
{
  /* rotas */
}
import { Root } from './routes/Root';
{
  /* whatssap */
}
import WhatsButton from './components/Whats/Whats';
{
  /* rodapé */
}
import Footer from './components/Footer/Footer';
{
  /* Contador d acess */
}
import { VisitorCounter } from './components/VisitCount/Visitcount';

function App() {
  return (
    <>
      <Root />
      <WhatsButton />
      <VisitorCounter />
      <Footer />
    </>
  );
}
export default App;
