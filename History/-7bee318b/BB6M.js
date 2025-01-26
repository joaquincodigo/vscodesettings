import React, { useContext } from 'react';
import './App.css';

import ThemeContext from './Components/ThemeContext';
import LanguageContext from './Components/LanguageContext';

import ProfilePhoto from './Components/ProfilePhoto'
import PresentationText from './Components/PresentationText'
import Button from './Components/Button'


function App() {

  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext)

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
