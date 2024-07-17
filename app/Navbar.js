import Accordion from "./Accordion";
import AppConfig from './lib/appconfg'

const Navbar = async () => {
  let x=['accordion'];

// This is called ISR - Incremental Static Regeneration
  const res = await fetch(AppConfig.publicUrl, { next: { revalidate: 10 } })
  const categories = await res.json()
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
