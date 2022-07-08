import ReactDOM from "react-dom/client";
import Page from "./components/Page";
import './index.css';
import Home from "./components/Home";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <App />
);


function App() {

  const location = window.location.pathname

  return (
    < div >

      <nav className="navbar navbar-expand-lg navbar-light text-uppercase bg-light">
        <div className="container">
          <a class="navbar-brand" href="/">Perfonmance Tester App</a>
          {/*  ئەم بەشە ناڤ باڕ و تووڵەکەی سەرەوەی تیایە دەس بنێی
                     بە هەر کامێکیانا لە کۆتاییا ئەو بەشەت بۆ ئەکرێتەوە */}
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Toggle button */}
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav ms-auto">
              <li className={location === "/" ? "nav-item active" : "nav-item"} >
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className={location === "/asp" ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="asp">ASP</a>
              </li>
              <li className={location === "/python" ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="python">PYTHON</a>
              </li>
              <li className={location === "/php" ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="php">PHP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/asp" element={<Page programmingLanguageName="ASP.NET CORE" mySqlUrl="http://localhost:35220/api/image" sqlServerUrl="http://localhost:35220/api/SqlServer" msAccessUrl="http://localhost:35220/api/msAccess" />} />
          <Route exact path="/python" element={<Page programmingLanguageName="PYTHON" mySqlUrl="http://127.0.0.1:5000/mysql" sqlServerUrl="http://127.0.0.1:5000/sqlserver" msAccessUrl="http://127.0.0.1:5000/access" />} />
          <Route exact path="/php" element={<Page programmingLanguageName="PHP" mySqlUrl="https://" sqlServerUrl="https://" msAccessUrl="https://" />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}


