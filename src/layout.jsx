import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import menuIcon from './assets/icon/menu.svg'
import { Button } from "./components/ui/Button";
import { Transparent } from "./components/ui/Container";

// Sidebar di memo agar tidak melakukan rerender saat pindah route
const MemoizedSidebar = React.memo(Sidebar);


export const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <main className="h-100 d-flex flex-row">

      <div className="d-none d-md-flex">
        <MemoizedSidebar />
      </div>

      <div className="drawer-content">
        <div className="d-flex d-md-none justify-content-end m-2">
          <Button
            className={'p-0'}
            onClick={() => setMenu(!menu)}
          >
            <img src={menuIcon} alt="Menu" />
          </Button>
        </div>

        {menu &&
          <div className="position-fixed d-flex d-md-none z-1 w-full h-100">
            <Transparent
              onClick={() => setMenu(false)}
            >
              <MemoizedSidebar />
            </Transparent>
          </div>
        }
        {children}
      </div>
    </main>
  )
}
