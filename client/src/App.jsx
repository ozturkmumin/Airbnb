import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
    <Headers />
      <Routes>
        <Route index element={<IndexPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
