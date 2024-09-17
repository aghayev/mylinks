import Header from "./Header";
import Navbar from "./Navbar";
import styles from './layout.module.css';
import './globals.css';
import "./Navbar.css";

export const metadata = {
  title: "Mobile App Mylinks",
  description: "Mobile App Mylinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className={styles.trailer}>All rights reserved. Release version: local_build</div>
      </body>
    </html>
  );
}
