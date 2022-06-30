import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnliy } from "./components/templates/HeaderOnliy";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";

export default function App() {
  return <Router />;
}
