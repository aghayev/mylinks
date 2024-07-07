import React, { useEffect, useState } from "react";

interface User {
id: number;
name: string;
}

// SSG - Static Site Generation, page paths depends on external data
export async function generateStaticParams() {
  const res = await fetch('https://mylinks.aghayev.com/api/subcategories',{ next: { revalidate: 10 } })
  const categories = await res.json()
 
  return categories.map(({ slug }) => ({
    slug: slug,
  }))
}

const WeblinksPage = async ({ params }) => {
  const { slug } = params

const res = await fetch(`https://mylinks.aghayev.com/api/weblinks/${slug}`, {method: 'GET'})
const weblinks = await res.json()

  return (
    <>
      <h1>WeblinksPage</h1>
      <ul>{weblinks.map(weblink => <li><a href={weblink.content}>{weblink.title} - updated: {weblink.date}</a></li>)}</ul>
    </>
  )
}

export default WeblinksPage