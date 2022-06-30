import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnliy } from "./components/templates/HeaderOnliy";
import { DefaultLayout } from "./components/templates/DefaultLayout";

export default function App() {
  const user = {
    name: "bori",
    img: "https://source.unsplash.com/NE0XGVKTmcA",
    mail: "12345.com",
    phone: "111-1111-1111",
    company: {
      name: "てすと株式会社"
    },
    website: "https://www.google.com/"
  };
  return (
    <BrowserRouter>
      {/* <HeaderOnliy> */}
      <DefaultLayout>
        <PrimaryButton children="てすと" />
        <SecondaryButton children="てすと" />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
      {/* </HeaderOnliy> */}
    </BrowserRouter>
  );
}
