import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    console.log("i18n.ts received locale:", locale);
    if (!locales.includes(locale as any)) {
        console.error("Invalid locale passed to i18n.ts:", locale);
        notFound();
    }

    let messages;
    try {
        if (locale === 'id') {
            messages = (await import('./locales/id.json')).default;
        } else {
            messages = (await import('./locales/en.json')).default;
        }
        console.log("Successfully loaded JSON for:", locale);
    } catch (err) {
        console.error("Path error for JSON import:", err);
    }

    return {
        locale: locale || 'en',
        messages
    };
});
