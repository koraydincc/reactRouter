import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Company from "./components/Company";
import Team from "./components/Team";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/About"
          element={
            <React.Suspense>
              <LazyAboutUs></LazyAboutUs>
            </React.Suspense>
          }
        ></Route>
        <Route path="/mission" element={<Mission></Mission>}></Route>
        <Route path="*" element={<WrongPath></WrongPath>}></Route>
        <Route path="/history" element={<History></History>}>
          <Route path="company" element={<Company></Company>}></Route>
          <Route path="team" element={<Team></Team>}></Route>
        </Route>
        <Route path="/members" element={<Members></Members>}></Route>
        <Route
          path="/members/:memberId"
          element={<MemberDetail></MemberDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
