import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPesquisa from "../Pages/PaginaPesquisa";
import { PaginaHistorico } from "../Pages/PaginaHistorico";

export const Router = () => {

  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<PaginaPesquisa />} />
        <Route path="historico" element={<PaginaHistorico />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
};
