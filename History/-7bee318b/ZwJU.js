import React from 'react';
import './App.css';
import { LanguageProvider } from './LanguageContext';
import ProfilePhoto from './ProfilePhoto';
import PresentationText from './PresentationText';
import ButtonContact from './ButtonContact';
import ButtonLanguage from './ButtonLanguage';

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
