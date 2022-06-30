import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonnWrapper>
        <PrimaryButton children="検索" />
      </SButtonnWrapper>
    </SContainer>
  );
};

const SButtonnWrapper = styled.div`
  margin-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
