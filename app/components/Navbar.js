'use client'
import Accordion from "./Accordion";
import React, { useState, useEffect } from "react";
import { getCookieByName } from '../lib/utils'
import "./Accordion.css";

const Navbar = () => {
  const read = getCookieByName('auth')
  const [categories, setCategories] = useState(null)
  let x=['accordion'];

  async function fetchCategories() {
    let res = await fetch('/api/navbar')
    let data = await res.json()
    setCategories(data)
  }
  
  useEffect(() => {
    read && fetchCategories()
  }, [read])

  if (!categories) return <div>Categories loading...</div>

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
