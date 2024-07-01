import React, { useEffect, useState } from "react";

interface User {
id: number;
name: string;
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const res = await fetch('https://mylinks.aghayev.com/categories')
  const categories = await res.json()
 
  return categories.map(({ title }) => ({
    slug: title,
  }))
}

const UsersPage = async ({ params }) => {
  const { slug } = params
  console.info(slug)

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return (
    <>
      <h1>UsersPage</h1>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  )
}

export default UsersPage