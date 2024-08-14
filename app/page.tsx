'use client'
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    //router.push('/protected');
  })

  return (
    <main>
        <div className="content">
          <Outlet />
        </div>
    </main>
  );
}