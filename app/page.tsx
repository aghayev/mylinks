'use client'
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Home() {

  return (
    <main>
        <div className="content">
          <Outlet />
        </div>
    </main>
  );
}