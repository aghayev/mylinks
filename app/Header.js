'use client'
import React, { useEffect } from 'react';
import Link from "next/link";
import styles from './layout.module.css';

const Header = () => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  const ifScrolled = scrolled ? '' : styles.headerScrolled
  const classes = `${styles.header} ${ifScrolled}`

  return (
    <header className={classes}>
      <Link href="/protected" className={styles.linkTitle}>
        My Links
      </Link>
    </header>
  );
};

export default Header;
