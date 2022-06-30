import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  padding: 16px;
  background-color: #ffffff;
  box-shadow: #ddd 0 0 4px 2px;
  border-radius: 8px;
`;
