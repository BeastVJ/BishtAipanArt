import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image, type = 'website' }) => {
    const location = useLocation();
    const siteName = 'BishtAipanArt';
    const defaultDescription = 'Premium handcrafted Kumaoni Aipan folk art from Uttarakhand. Traditional wall art, pooja chowkis, and cultural artwork.';
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://bishtaipanart.com';

    const pageTitle = title ? `${title} | ${siteName}` : `${siteName} - Traditional Kumaoni Aipan Art`;
    const pageDescription = description || defaultDescription;
    const pageUrl = `${siteUrl}${location.pathname}`;

    useEffect(() => {
        document.title = pageTitle;

        const setMeta = (name, content) => {
            let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                if (name.startsWith('og:')) {
                    el.setAttribute('property', name);
                } else {
                    el.setAttribute('name', name);
                }
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('description', pageDescription);
        setMeta('og:title', pageTitle);
        setMeta('og:description', pageDescription);
        setMeta('og:type', type);
        setMeta('og:url', pageUrl);
        if (image) setMeta('og:image', image);
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', pageTitle);
        setMeta('twitter:description', pageDescription);

        // Cleanup
        return () => {
            document.title = siteName;
        };
    }, [pageTitle, pageDescription, pageUrl, image, type]);

    return null;
};

export default SEO;
