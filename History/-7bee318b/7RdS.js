import "./App.css";

import { LanguageProvider } from "./Components/LanguageContext";
import { ThemeProvider } from "./Components/ThemeContext";

import MainContainer from "./Components/MainContainer";
import ProfilePhoto from "./Components/ProfilePhoto";
import PresentationText from "./Components/PresentationText";
import ButtonContact from "./Components/ButtonContact";
import ButtonLanguage from "./Components/ButtonLanguage";
import ButtonTheme from "./Components/ButtonTheme";
import ButtonResume from "./Components/ButtonResume";
import ProjectJap from "./Components/ProjectJap";
import ProjectPokemon from "./Components/ProjectPokemon";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ThemeProvider>
          <MainContainer>
            <TopBar>
              <div className="bar-buttons-container">
                <ButtonLanguage />
                <ButtonTheme />
              </div>
            </TopBar>
            <ProfilePhoto />
            <PresentationText />
            <ButtonContact />
            <ButtonResume />
            <ProjectJap />
            <ProjectPokemon />
          </MainContainer>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
