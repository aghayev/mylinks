import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Outlet } from "react-router-dom";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
