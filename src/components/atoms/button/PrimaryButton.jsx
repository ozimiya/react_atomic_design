import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SBytton>{children}</SBytton>;
};

const SBytton = styled(BaseButton)`
  background-color: #40514e;
  color: #ffffff;
`;
