import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: 'en',

    // Optional: Always prepend the locale to the URL
    localePrefix: 'always'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|id)/:path*']
};
