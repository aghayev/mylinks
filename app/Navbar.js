'use client'
import Accordion from "./Accordion";
import React, { useState, useEffect } from "react";
import { getCookieByName } from './lib/utils'

const Navbar = () => {

  const bb = async function fetchCategories() {
    let res = await fetch('/api/navbar')
    let data = await res.json()
    return data
  }

  const [categories, setCategories] = useState(null)
  let x=['accordion'];
    
  useEffect(() => {
    setCategories(null)
  }, [])

  if (!categories) return <div>Loading...</div>

  const read = getCookieByName('auth')
  if (read) {
    const cc = fetchCategories()
    setCategories(cc)
  }

  console.info('read')
  console.info(read)

  return (
    <nav>
      <ul className={x.join(" ")}>
        {categories.map(({ title, content }) => (
          <Accordion title={title} content={content} key={title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
