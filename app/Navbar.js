import Accordion from "./Accordion";

const Navbar = async () => {
  let x=['accordion'];
  const res = await fetch('https://mylinks.aghayev.com/api')
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
