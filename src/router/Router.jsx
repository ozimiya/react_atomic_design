import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/atoms/layout/Footer";
import { Header } from "../components/atoms/layout/Header";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnliy } from "../components/templates/HeaderOnliy";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />}>
          <Route path="/" element={<DefaultLayout />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path="/users" element={<HeaderOnliy />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
