import { Inter } from 'next/font/google';
import React, { useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import styles from './styles/layout.module.css';

const inter = Inter({ subsets: ['latin'] })

async function fetchCategories() {
//  const res = await fetch('https://mylinks.aghayev.com/api',{ next: { revalidate: 10 } })
//  const categories = await res.json()
/*
  return (
    <nav>
      <ul className={x.join(" ")}>
        {categories.map(({ title, content }) => (
          <Accordion title={title} content={content} key={title} />
        ))}
      </ul>
    </nav>
  );

   return (
  <>
  <main>
      <head>
        <title>Mylinks Pages Router example</title>
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
    </main>
  </>
 )
            <li key={user.id}>{user.name}</li>

  */    
    const res = await fetch('https://mylinks.aghayev.com/api/?dfafadf');
    const categories = await res.json();
    return categories;
}

export default function Home() {
    let x=['accordion'];

    const [scrolled,setScrolled]=React.useState(false);

    useEffect(() => {
        setScrolled(false);
        {fetchCategories().then(category => {
            console.info(category)
    })}
      })
    
    return (
        <main>
            <div>hello world</div>
            <Header />
            <Navbar />
            {scrolled ? 'true': 'false'}
            <div>hello world3</div>

        </main>
    )
}