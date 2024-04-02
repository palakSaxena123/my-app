import HomePage from "./Pages/HomePage/HomePage";
import ListPage from "./Pages/ListPage/ListPage";
import "./Pages/Layout/Layout.scss";
import {HashRouter, Routes , Route} from "react-router-dom";
import SinglePage from "./Pages/SinglePage/SinglePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="layout">
      <HashRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path="/list" element = {<ListPage/>}/>
          <Route path="/:id" element= {<SinglePage/>}/>
          <Route path="/profile" element= {<ProfilePage/>}/>
           
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
