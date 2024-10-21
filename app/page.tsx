'use client'
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Capacitor } from '@capacitor/core'
import { Preferences } from '@capacitor/preferences'

export default function Home() {

  const getToken = async () => {
    const { value } = await Preferences.get({ key: 'token' })
    
    return value
  };

  const platform = Capacitor.getPlatform()

  const token = getToken()
 //   const token = ''

  return (
    <main>
      <h2>Platform general: {platform}</h2>
      <h3>getToken: {typeof window !== "undefined" && token}</h3>
        <div className="content">
          <Outlet />
        </div>
    </main>
  );
}