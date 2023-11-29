import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<IndexPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
