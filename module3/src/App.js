import './App.css';
import { HeaderPage } from './app/Containers/header/header';
import React from 'react';
import { ListMoviePage } from './app/Containers/list-movie-page/list-movie-page';

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <HeaderPage ></HeaderPage>

        </div>
        <ListMoviePage></ListMoviePage>
        <div className="footer">netflixroulete</div>

      </div>

    </>

  );
}

export default App;
