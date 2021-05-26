import Head from 'next/head';

interface SEOProps {
    title: string;
}

export function SEO({ title }: SEOProps) {
    return (
        <Head>
            <title>wilfranca | {title}</title>

            <link rel="shortcut icon" href="/favicons/logo-short-pink.png" />
            <meta name="keywords" content="wilsonfsouza, software developer, portfolio" />
            <meta name="description" content="Wilson Franca de Souza - Software Developer and UI/UX enthusiast based in Redding, CA (US)." />

            <meta property="og:site_name" content="wilfranca" />
            <meta property="og:title" content="wilfranca" />
            <meta property="og:description" content="Wilson Franca de Souza - Software Developer and UI/UX enthusiast based in Redding, CA (US)." />
            <meta property="og:image" content="/thumb.svg" />
            <meta property="og:image:type" content="image/svg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:image" content="/thumb.svg" />
            <meta name="twiiter:image:alt" content="Thumbnail" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="wilfranca" />
            <meta name="twitter:description" content="Wilson Franca de Souza - Software Developer and UI/UX enthusiast based in Redding, CA (US)." />
            <meta name="twiiter:create" content="wilsonfsouza" />
        </Head>
    );
}
