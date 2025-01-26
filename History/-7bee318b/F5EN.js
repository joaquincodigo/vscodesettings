import React, { useContext } from 'react';
import './App.css';

import { LanguageProvider } from './Components/LanguageContext';
import { ThemeProvider } from './Components/ThemeContext';

import ProfilePhoto from './Components/ProfilePhoto'
import PresentationText from './Components/PresentationText'
import ButtonContact from './Components/ButtonContact';
import ButtonLanguage from './Components/ButtonLanguage';

function App() {

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App container-fluid">
          <ButtonLanguage />
          <ProfilePhoto />
          <PresentationText />
          <ButtonContact />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
