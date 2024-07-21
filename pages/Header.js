import React, { useEffect } from 'react';
import Link from "next/link";

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

  let x=['header'];
  if(scrolled){
    x.push('header-scrolled');
  }
  return (
    <header className={x.join(" ")}>
      <Link href="/" className="title">
        My Links
      </Link>
    </header>
  );
};

export default Header;
