'use client'
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Capacitor } from '@capacitor/core'
import { useRouter } from 'next/navigation'
import { getToken } from './lib/token'
export default function Home() {

  const isWeb = Capacitor.getPlatform() == 'web'
  if (isWeb) {
    const router = useRouter()
    const token = getToken().then((result) => {
      if (!result) {
        router.push('/protected')
      }
    })
  }

  return (
    <main>
        <div className="content">
          <Outlet />
        </div>
    </main>
  );
}