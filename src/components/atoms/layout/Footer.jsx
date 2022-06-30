import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 bori inc.</SFooter>;
};

const SFooter = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 8px 0;
  background-color: #11999e;
  text-align: center;
  color: #ffffff;
`;
