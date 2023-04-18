import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';

import FireflyParticles from './components/FireflyParticles';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="mainClass">
    <ChakraProvider theme={theme}>
  
      <FireflyParticles />
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </div>
);
