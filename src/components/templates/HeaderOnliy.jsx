import { Header } from "../atoms/layout/Header";

export const HeaderOnliy = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
