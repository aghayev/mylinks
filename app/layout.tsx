import Header from "./Header";
import styles from './layout.module.css';
import './globals.css';
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext'

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
        <ThemeProvider>
      <div className={styles.leftPlacement}>
        <Navbar />
        </div>
        <div className={styles.rightPlacement}>
      <Header />
        {children}
        </div>
        <div className={styles.trailer}>All rights reserved. Release version: local_build</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
