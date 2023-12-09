import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import menuIcon from './assets/icon/menu.svg'
import { Button } from "./components/ui/Button";
import { Transparent } from "./components/ui/Container";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Sidebar di memo agar tidak melakukan rerender saat pindah route
const MemoizedSidebar = React.memo(Sidebar);

export const Layout = () => {
  const [menu, setMenu] = useState(false);

  return (
    <main className="h-100 d-flex flex-row main-layout">

      <div className="d-none d-md-flex">
        <MemoizedSidebar />
      </div>

      <div className="drawer-content">
          <div className="d-flex justify-content-between">
            <Navbar />
            <Button
              className={'p-0 d-flex d-md-none'}
              onClick={() => setMenu(!menu)}
            >
              <img src={menuIcon} alt="Menu" />
            </Button>
          </div>

        {menu &&
          <div className="position-fixed d-flex d-md-none z-3 w-full h-100">
            <Transparent
              onClick={() => setMenu(false)}
            >
              <MemoizedSidebar />
            </Transparent>
          </div>
        }
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          closeButton={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Outlet />
      </div>
    </main>
  )
}
