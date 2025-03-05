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

function App() {
  return (
    <>
      <Root />
      <WhatsButton />
      <Footer />
    </>
  );
}
export default App;
