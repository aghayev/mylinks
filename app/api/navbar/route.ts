import AppConfig from "../../lib/appconfig";

// export const revalidate = 60

export async function GET() {
/** 
 * Used fetch - revalidate, ISR - Incremental Static Regeneration
 * Source: https://www.youtube.com/watch?v=E1HzFvXgrCs 
 */
  const res = await fetch(AppConfig.publicUrl, { next: { revalidate: 10 } })
  const categories = await res.json()

  return  Response.json(categories)
}
