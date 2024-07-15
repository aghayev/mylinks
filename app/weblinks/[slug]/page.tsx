import React, { useEffect, useState } from "react";

interface User {
id: number;
name: string;
}

// This is called SSG - Static Site Generation. 
// The following video tutorial, https://www.youtube.com/watch?v=E1HzFvXgrCs says that SSG is recommended to do over SSR (SSR stands for Server Side Rendering)
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