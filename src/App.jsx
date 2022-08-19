import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/*=== Import the App SCSS ===*/
import './App.scss';


/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import Home from './views/Home';


const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <AppContextProvider> */}

          <Routes>
            {/*======================== Landing Page =======================*/}
            <Route path="/" element={ <Home /> } />
          </Routes>
        {/* </AppContextProvider> */}
      </Router>
    </div>
  );
}

export default App;
