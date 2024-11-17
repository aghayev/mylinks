import Header from "./Header";
import styles from './layout.module.css';
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
  return (
    <html lang="en">
      <head>
        <title>My Links by Imran Aghayev</title>
      </head>
      <body>
      <Header />
        {children}
        <div className={styles.trailer}>All rights reserved. Release version: local_build</div>
      </body>
    </html>
  );
}
