import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      header carousel
      <Outlet />
    </div>
  );
};

export default Layout;
