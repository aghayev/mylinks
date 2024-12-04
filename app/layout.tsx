import Header from "./Header";
import styles from './layout.module.css';
import { MyProvider } from './context/MyContext'
import dynamic from 'next/dynamic'
import './globals.css';

export const metadata = {
  title: "Mobile App Mylinks",
  description: "Mobile App Mylinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const NavbarMobile = dynamic(() => import('./components/NavbarMobile'))
  const NavbarWeb = dynamic(() => import('./components/NavbarWeb'))

  return (
    <html lang="en">
      <head>
        <title>My Links by Imran Aghayev</title>
      </head>
      <body>
        <MyProvider>
        <Header />
        <div className={styles.leftPlacement}>
        {process.env.PLATFORM === 'mobile' ? <NavbarMobile /> : <NavbarWeb />}
        </div>
        <div className={styles.rightPlacement}>
        {children}
        </div>
        <div className={styles.trailer}>All rights reserved. Release version: local_build</div>
        </MyProvider>
      </body>
    </html>
  );
}
