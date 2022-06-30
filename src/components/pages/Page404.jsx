import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <div>
        <p>ページが見つかりません</p>
      </div>
      <Link to="/">HOME</Link>
    </>
  );
};
