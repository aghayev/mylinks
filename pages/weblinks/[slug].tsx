import { useRouter } from 'next/router'
 
export async function getStaticPaths() { 

    const res = await fetch('https://mylinks.aghayev.com/api/subcategories');
    const categories = await res.json();

    const paths = categories.map((row) => ({
		params: { slug: row.slug.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { slug } = params;

   const res = await fetch(`https://mylinks.aghayev.com/api/weblinks/${slug}`);
    const weblinks = await res.json();
  

    if (!weblinks) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        slug: slug,
        weblinks: weblinks
      }
//      revalidate: 10, // Re-generate the page every 10 seconds
    };
  }

export default function Page({slug, weblinks}) {
  const router = useRouter();

  if (!router.isFallback) {
    return (
      <>
      <h1>WeblinksPage</h1>
      <ul>{weblinks.map(weblink => <li><a href={weblink.content}>{weblink.title} - updated: {weblink.date}</a></li>)}</ul>

      <ul>{slug}</ul>
    </>
    );
  } else {
    return <div>Loading...</div>;
  }
}