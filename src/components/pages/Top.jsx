import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Top = () => {
  return (
    <>
      <Outlet />
      <SContainer>
        <h2>HOME</h2>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
