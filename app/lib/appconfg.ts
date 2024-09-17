
const env = process.env
const AppConfig = {
  publicUrl: env['NEXT_PUBLIC_API_URL'] ?? '/',
  publicUrlWithCategories: env['NEXT_PUBLIC_API_URL'] + '/subcategories' ?? '/',
  publicUrlWithSlug: env['NEXT_PUBLIC_API_URL'] + '/weblinks' ?? '/'
}

export default AppConfig