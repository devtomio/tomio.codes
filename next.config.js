const bundleAnalyzer = require('@next/bundle-analyzer');
const runtimeCaching = require('next-pwa/cache');
const pwa = require('next-pwa');

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    pwa({
        reactStrictMode: true,
        pwa: {
            dest: 'public',
            runtimeCaching,
        },
        webpack: (config) => config,
        redirects: () => [
            {
                source: '/discord',
                destination: 'https://discord.gg/zGvtAnGhdP',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/1chiSensei',
                permanent: false,
            },
            {
                source: '/rest',
                destination: 'https://api.tomio.codes',
                permanent: false,
            },
            {
                source: '/twitter',
                destination: 'https://twitter.com/devtomio',
                permanent: false,
            },
        ],
        eslint: {
            ignoreDuringBuilds: true,
        },
        experimental: {
            outputStandalone: true,
        }, 
    }),
);
