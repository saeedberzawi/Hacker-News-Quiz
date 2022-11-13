import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Hacker, Main, Pagination, Quize } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="quize" element={<Quize />} />
            <Route path="hacker" element={<Hacker />} />
            <Route path="pagination" element={<Pagination />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Quize /> */}
    </>
  );
}

export default App;
