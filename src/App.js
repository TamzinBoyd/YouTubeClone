import "./App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search/*"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <Videos />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
