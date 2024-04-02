import HomePage from "./Pages/HomePage/HomePage";
import ListPage from "./Pages/ListPage/ListPage";
import "./Pages/Layout/Layout.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
