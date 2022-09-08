/**
 * @type {import('next').NextConfig}
 */
const NextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en-US", "de-DE"],
        defaultLocale: "en-US"
    }
};

module.exports = NextConfig;