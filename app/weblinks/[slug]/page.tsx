import React, { useEffect, useState } from "react"
import { fetchData } from '../../services/weblinksData'
import AppConfig from '../../lib/appconfg'
import './page.css'

interface User {
id: number;
name: string;
}

/** 
 * Used generateStaticParams, SSG - Static Site Generation
 * Source: https://www.youtube.com/watch?v=E1HzFvXgrCs 
 */
export async function generateStaticParams() {
  const res = await fetch(AppConfig.publicUrlSubCategories,{ next: { revalidate: 10 } })
  const categories = await res.json()
 
  return categories.map(({ slug }) => ({
    slug: slug,
  }))
}

const WeblinksPage = async ({ params }) => {
  const { slug } = params

  const weblinks = await fetchData(slug)

  return (
    <div id="weblinks">
      <h1>WeblinksPage: {slug}</h1>
      <ul>{weblinks.map(weblink => <li><a href={weblink.content}>{weblink.title} - updated: {weblink.date}</a></li>)}</ul>
    </div>
  )
}

export default WeblinksPage