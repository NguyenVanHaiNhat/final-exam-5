import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {List} from "./components/model/List";
import {Create} from "./components/model/Create";
import {Update} from "./components/model/Update";
import {Detail} from "./components/model/Detail";

function App() {
  return (
    <Routes>
      <Route path={"/product"} element={<List/>}></Route>
      <Route path={"/product/:id"} element={<Detail/>}></Route>
        <Route path={"/product/create"} element={<Create/>}></Route>
        <Route path={"/product/edit/:id"} element={<Update/>}></Route>
    </Routes>
  );
}

export default App;
