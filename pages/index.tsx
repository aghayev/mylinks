import React from "react";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <main>
        <div className="content">
          <Outlet />
        </div>
    </main>
  );
}