
const baseUrl = process.env.NEXT_PUBLIC_API_URL
const AppConfig = {
  publicUrl: baseUrl ?? '/',
  authUrl: baseUrl + '/auth',
  publicUrlSubCategories: baseUrl ? baseUrl + '/subcategories' : '/',
  publicUrlWeblinksPerSlug: baseUrl ? baseUrl + '/weblinks' : '/'
}

export default AppConfig