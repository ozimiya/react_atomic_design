import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const user = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `bori ${val}`,
    img: "https://source.unsplash.com/NE0XGVKTmcA",
    mail: "12345.com",
    phone: "111-1111-1111",
    company: {
      name: "てすと株式会社"
    },
    website: "https://www.google.com/"
  };
});

export const Users = () => {
  return (
    <>
      <Outlet />
      <SContainer>
        <h2>ユーザー一覧</h2>
      </SContainer>
      <SearchInput />
      <SUserArea>
        {user.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
`;
const SUserArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding-top: 40px;
`;
