import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { getPublicPath } from './lib/routes'

const locales = ['cs', 'en'] as const
const defaultLocale = 'cs'

function getLocale(request: NextRequest): (typeof locales)[number] {
  // Check if there is any supported locale in the Accept-Language header
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  
  try {
    return match(languages, [...locales], defaultLocale) as (typeof locales)[number]
  } catch {
    return defaultLocale
  }
}

function isResearchHost(host: string): boolean {
  return host.startsWith('research.') || host.startsWith('research.localhost')
}

function buildResearchPath(pathname: string, locale: (typeof locales)[number]): string {
  const researchBase = getPublicPath(locale, 'research')
  const normalizedPath = pathname === '/' ? '' : pathname.replace(/\/+$/, '')

  if (!normalizedPath) {
    return researchBase
  }

  const localePrefix = `/${locale}`
  if (normalizedPath === localePrefix) {
    return researchBase
  }

  if (normalizedPath.startsWith(`${localePrefix}/`)) {
    const rest = normalizedPath.slice(localePrefix.length + 1)
    const localizedResearchBase = researchBase.slice(localePrefix.length + 1)

    if (rest === localizedResearchBase || rest.startsWith(`${localizedResearchBase}/`) || rest.startsWith('research/')) {
      return normalizedPath
    }

    return `${researchBase}/${rest}`
  }

  return `${researchBase}${normalizedPath}`
}

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const locale = getLocale(request)

  if (isResearchHost(host)) {
    const targetPath = buildResearchPath(request.nextUrl.pathname, locale)
    if (targetPath !== request.nextUrl.pathname) {
      const rewriteUrl = request.nextUrl.clone()
      rewriteUrl.pathname = targetPath
      return NextResponse.rewrite(rewriteUrl)
    }
  }

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /cs/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, images, favicon, etc)
    '/((?!_next|.*\\..*).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
