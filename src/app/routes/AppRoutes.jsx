import { Routes, Route } from "react-router-dom";
import { Promociones } from "../pages";
import { Productos } from "../pages";
import { Contacto } from "../pages";

export const AppRoutes = () => {
  

  const renderRoutes = () => (
    <>
      <Route path="/offers" element={<Promociones />} />
      <Route path="/products" element={<Productos />} />
      <Route path="/aboutus" element={<Contacto />} />
      <Route path="/*" element={<Promociones />} />
    </>
  );

  return (
    <Routes>
      {renderRoutes()}
    </Routes>
  );
};