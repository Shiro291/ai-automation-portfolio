import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../config';
import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/700.css';
import '../globals.css';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    const t = await getTranslations({ locale, namespace: 'Hero' });

    return {
        title: `Fathan Faqih Ali | EdTech Visionary & Learning Architect`,
        description: t('subtitle'),
        icons: {
            icon: '/logo.png',
            shortcut: '/logo.png',
            apple: '/logo.png',
        },
        alternates: {
            languages: {
                en: '/en',
                id: '/id',
            },
        },
    };
}

export const viewport = {
    themeColor: '#0f172a',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';

    let messages;
    try {
        messages = await getMessages({ locale });
    } catch (e) {
        console.error("Failed to load messages for locale:", locale);
        notFound();
    }



    return (
        <html lang={locale} className={`font-body`} suppressHydrationWarning>
            <body className="antialiased min-h-screen" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
