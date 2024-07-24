import { Inter } from 'next/font/google';
import React, { useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import styles from './styles/layout.module.css';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  }
}

export default function Home({ categories }) {
    let x=['accordion'];

    const [scrolled,setScrolled]=React.useState(false);

    useEffect(() => {
        setScrolled(false);
        {categories.map(category => {
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