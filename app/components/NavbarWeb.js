'use client'
import Accordion from "./Accordion";
import React, { useState, useEffect } from "react";
import { isMobile } from "../lib/utils";
import { useMy } from "../context/MyContext";

import "./Accordion.css";

const Navbar = () => {
  const [categories, setCategories] = useState(null)
  const { mymessage } = useMy();
  let x=['accordion'];

  async function fetchCategories() {
    let res = await fetch('/api/navbar')
    let data = await res.json()
    setCategories(data)
  }

  useEffect(() => {
    const doAuth = !!(mymessage || isMobile())
    doAuth ? fetchCategories() : setCategories([])
  }, [mymessage])

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
