import './App.css';
import { HeaderContainer } from './app/common/containers/HeaderContainer';
import React from 'react';
import { HomePageContainer } from './app/pages/Homepage/HomepageContainer';

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <HeaderContainer ></HeaderContainer>

        </div>
        <HomePageContainer></HomePageContainer>
        <div className="footer">netflixroulete</div>

      </div>

    </>

  );
}

export default App;
