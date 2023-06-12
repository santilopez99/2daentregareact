import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
// import Counter from "./components/Counter/Counter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={<div><h1>Esta página no existe</h1></div>} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
