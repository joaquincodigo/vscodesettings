import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';

import './App.css';
import ProfilePhoto from './Components/ProfilePhoto'
import PresentationText from './Components/PresentationText'
import Button from './Components/Button'


function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App container-fluid">
          <ProfilePhoto />
          <PresentationText language={language} theme={theme} />
          <Button text={resumeButtonText} icon={resumeButtonIcon} />
          <Button text={contactInfo} icon={contactInfoIcon} />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
