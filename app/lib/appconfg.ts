
const env = process.env
const AppConfig = {
  publicUrl: env['NEXT_PUBLIC_API_URL'] ?? '/',
  publicUrlSubCategories: env['NEXT_PUBLIC_API_URL'] + '/subcategories' ?? '/',
  publicUrlWeblinksPerSlug: env['NEXT_PUBLIC_API_URL'] + '/weblinks' ?? '/',
  authUrl: env['NEXT_PUBLIC_API_URL'] + '/auth'
}

export default AppConfig