import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  padding: 8px 0;
  background-color: #11999e;
  text-align: center;
`;
const SLink = styled(Link)`
  margin: 0 8px;
  color: #ffffff;
  text-decoration: none;
`;
