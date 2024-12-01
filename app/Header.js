'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import styles from './layout.module.css';
import { useMy } from "./context/MyContext";

const Header = () => {
  const [scrolled,setScrolled]=React.useState(false);
  const { mymessage, setMymessage } = useMy();
  const router = useRouter();

  const handleScroll=() => {
    const offset=window.scrollY;
    if (offset > 200 ) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  const logout = () => {
    setMymessage('');
    router.push('/')
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  const ifScrolled = scrolled ? '' : styles.headerScrolled
  const classes = `${styles.header} ${ifScrolled}`

  return (
    <header className={classes}>
      {mymessage ? (<button onClick={logout}>Log out</button>) : (
      <Link href="/" className={styles.linkTitle}>
      My Links
    </Link>
      )}
    </header>
  );
};

export default Header;
