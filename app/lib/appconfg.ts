
const env = process.env
const AppConfig = {
  publicUrl: env['NEXT_PUBLIC_API_URL'] ?? '/',
  publicUrlWithCategories: env['NEXT_PUBLIC_API_URL'] + '/subcategories' ?? '/',
}

export default AppConfig