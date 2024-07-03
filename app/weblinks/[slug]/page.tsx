import React, { useEffect, useState } from "react";

interface User {
id: number;
name: string;
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const res = await fetch('https://mylinks.aghayev.com/api/subcategories')
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
      <ul>{weblinks.map(weblink => <li>{weblink.title} {weblink.content} {weblink.date}</li>)}</ul>
    </>
  )
}

export default WeblinksPage