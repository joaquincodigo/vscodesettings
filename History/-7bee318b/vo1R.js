import React from 'react';
import './App.css';
import { LanguageProvider } from './Components/LanguageContext';
import ProfilePhoto from './Components/ProfilePhoto';
import PresentationText from './Components/PresentationText';
import ButtonContact from './Components/ButtonContact';
import ButtonLanguage from './Components/ButtonLanguage';

function App() {
  return (
    <LanguageProvider>
      <div className="App container-fluid">
        <ButtonLanguage />
        <ProfilePhoto />
        <PresentationText />
        <ButtonContact />
      </div>
    </LanguageProvider>
  );
}

export default App;
