import Accordion from "./Accordion";
import React from "react";
import "./Accordion.css";

const Navbar = async () => {
  let x=['accordion'];

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, { next: { revalidate: 10 } })
  const categories = await res.json()

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
