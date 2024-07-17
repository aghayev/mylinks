import React, { useEffect, useState } from "react";
import { fetchData } from '../../services/weblinksData';
import AppConfig from '../../lib/appconfg';
import './page.css';

interface User {
id: number;
name: string;
}

// This is called SSG - Static Site Generation. 
// The following video tutorial, https://www.youtube.com/watch?v=E1HzFvXgrCs says that SSG is recommended to do over SSR (SSR stands for Server Side Rendering)
export async function generateStaticParams() {
  const res = await fetch(AppConfig.publicUrlWithCategories,{ next: { revalidate: 10 } })
  const categories = await res.json()
 
  return categories.map(({ slug }) => ({
    slug: slug,
  }))
}

const WeblinksPage = async ({ params }) => {
  const { slug } = params

  const weblinks = await fetchData(slug);

  return (
    <div id="weblinks">
      <h1>WeblinksPage: {slug}</h1>
      <ul>{weblinks.map(weblink => <li><a href={weblink.content}>{weblink.title} - updated: {weblink.date}</a></li>)}</ul>
    </div>
  )
}

export default WeblinksPage