import React from "react";
import { Sidebar } from "./components/Sidebar";
const MemoizedSidebar = React.memo(Sidebar);

export const Layout = ({ children }) => {
  return (
    <main className="h-100 d-flex flex-row">
      <MemoizedSidebar/>
      <div className="drawer-content">
        {children}
      </div>
    </main>
  )
}
