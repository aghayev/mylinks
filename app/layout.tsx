import Header from "./Header";
import Navbar from "./Navbar";
import './globals.css'
import styles from './layout.module.css';
import getConfig from 'next/config';
import "./Navbar.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { publicRuntimeConfig } = getConfig();

  return (
    <html lang="en">
      <head>
        <title>My Links by Imran Aghayev</title>
      </head>
      <body>
      <Header />
        <Navbar />
        <div className={styles.leftPlacement}></div>
        <div className={styles.rightPlacement}>
        {children}
        </div>
        <div className={styles.trailer}>All rights reserved. Release version: {publicRuntimeConfig?.version}</div>
      </body>
    </html>
  );
}
