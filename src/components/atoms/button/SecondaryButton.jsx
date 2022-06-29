import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SBytton>{children}</SBytton>;
};

const SBytton = styled(BaseButton)`
  background-color: #11999e;
  color: #ffffff;
`;
