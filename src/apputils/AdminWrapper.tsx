import { Outlet, useLocation } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import Footer from "./Footer";

function AdminWrapper() {
  const { pathname } = useLocation();
  console.log(pathname);

  function getPageTitle() {
    switch (pathname) {
      case "/admin/users":
        return "Manage Users";

      case "/admin/products":
        return "Manage Products";
    }
    return "";
  }

  function getPagedescription() {
    switch (pathname) {
      case "/admin/users":
        return "View, edit, delete, or disable user accounts.";

      case "/admin/products":
        return " Add, edit, or remove products from your store.";
    }
    return "";
  }

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <AdminNavBar />
        <div className="">
          <div className="mb-5 ml-4 mt-2">
            <h3 className="font-semibold text-lg">{getPageTitle()}</h3>
            <p className="text-foreground/60">{getPagedescription()}</p>
          </div>
          <div className=" min-h-[80vh] rounded">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminWrapper;
